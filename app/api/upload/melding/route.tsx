import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { zoekContactMetUploadToken } from "@/app/api/upload/functions";

const aanvraagSchema = z.object({
  token: z.string().regex(/^[A-Za-z0-9_-]{43}$/),
  fileIds: z
    .array(
      z
        .string()
        .min(1)
        .max(100)
        .regex(/^[a-zA-Z0-9_-]+$/),
    )
    .min(1)
    .max(5),
});

const d1Schema = z.object({
  success: z.boolean(),
  result: z.array(
    z.object({
      success: z.boolean().optional(),
      results: z.array(
        z.object({
          naam: z.string(),
          imagekit_file_id: z.string(),
          imagekit_url: z.url(),
        }),
      ),
    }),
  ),
});

function escapeHtml(waarde: string): string {
  return waarde.replace(/[&<>"']/g, (teken) => {
    const tekens: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return tekens[teken];
  });
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ongeldige aanvraag." }, { status: 400 });
  }

  const aanvraag = aanvraagSchema.safeParse(body);

  if (!aanvraag.success) {
    return NextResponse.json({ error: "Ongeldige gegevens." }, { status: 400 });
  }

  try {
    const { token } = aanvraag.data;
    const fileIds = [...new Set(aanvraag.data.fileIds)].sort();
    const contactId = await zoekContactMetUploadToken(token);

    if (contactId === null) {
      return NextResponse.json({ error: "Ongeldige link." }, { status: 400 });
    }

    const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
    const databaseId = process.env.CLOUDFLARE_D1_DATABASE_ID;
    const apiToken = process.env.CLOUDFLARE_API_TOKEN;
    const resendKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM;
    const to = process.env.RESEND_TO;

    if (!accountId || !databaseId || !apiToken || !resendKey || !from || !to) {
      throw new Error("D1- of e-mailconfiguratie ontbreekt");
    }

    const placeholders = fileIds.map(() => "?").join(", ");

    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/d1/database/${databaseId}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sql: `
            SELECT contacts.naam, fotos.imagekit_file_id, fotos.imagekit_url
            FROM fotos
            JOIN contacts ON contacts.id = fotos.contact_id
            WHERE fotos.contact_id = ?
              AND fotos.imagekit_file_id IN (${placeholders})
            ORDER BY fotos.imagekit_file_id
          `,
          params: [contactId, ...fileIds],
        }),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      throw new Error(`D1-aanvraag mislukt: HTTP ${response.status}`);
    }

    const data = d1Schema.parse(await response.json());

    if (
      !data.success ||
      data.result.length !== 1 ||
      data.result[0].success === false
    ) {
      throw new Error("D1-query mislukt");
    }

    const fotos = data.result[0].results;

    if (fotos.length !== fileIds.length) {
      return NextResponse.json(
        { error: "Niet alle foto's zijn geregistreerd." },
        { status: 400 },
      );
    }

const fotoLinks = fotos
  .map((foto, index) => {
    const url = new URL(foto.imagekit_url);

    if (url.protocol !== "https:") {
      throw new Error("Ongeldige foto-URL");
    }

    return `<p style="margin:0 0 12px;">
      <a href="${escapeHtml(url.toString())}" style="color:#66adff;">
        Foto ${index + 1} bekijken
      </a>
    </p>`;
  })
  .join("");

    const idempotencyKey = createHash("sha256")
      .update(JSON.stringify([contactId, fileIds]))
      .digest("hex");

    const resend = new Resend(resendKey);
const { error } = await resend.emails.send(
  {
    to: [to],
    template: {
      id: "photo-upload-notification",
      variables: {
        NAAM: escapeHtml(fotos[0].naam),
        CONTACT_ID: String(contactId),
        FOTO_LINKS: fotoLinks,
      },
    },
  },
  { idempotencyKey: `fotos/${idempotencyKey}` },
);

if (error) {
  throw new Error(`E-mail versturen mislukt: ${error.message}`);
}
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Fotomelding mislukt:", error);
    return NextResponse.json(
      { error: "Melding versturen mislukt." },
      { status: 500 },
    );
  }
}
