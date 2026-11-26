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

    const links = fotos
      .map((foto, index) => `Foto ${index + 1}: ${foto.imagekit_url}`)
      .join("\n");

    const idempotencyKey = createHash("sha256")
      .update(JSON.stringify([contactId, fileIds]))
      .digest("hex");

    const resend = new Resend(resendKey);
    const { error } = await resend.emails.send(
      {
        from: `Carrein Services Website <${from}>`,
        to: [to],
        subject: "Nieuwe foto's bij een aanvraag",
        text: `Er zijn foto's opgeladen bij een aanvraag.

Naam: ${fotos[0].naam}
Contact-ID: ${contactId}

${links}`,
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
