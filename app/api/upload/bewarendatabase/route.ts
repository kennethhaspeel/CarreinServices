import { NextResponse } from "next/server";
import { z } from "zod";
import { zoekContactMetUploadToken } from "@/app/api/upload/functions";

const aanvraagSchema = z.object({
  token: z.string().regex(/^[A-Za-z0-9_-]{43}$/),
  fileId: z.string().min(1).max(100).regex(/^[a-zA-Z0-9_-]+$/),
});

const imageKitSchema = z.object({
  fileId: z.string(),
  url: z.url(),
});

const d1Schema = z.object({
  success: z.boolean(),
  result: z.array(z.object({ success: z.boolean().optional() })),
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
    const { token, fileId } = aanvraag.data;
    const contactId = await zoekContactMetUploadToken(token);

    if (contactId === null) {
      return NextResponse.json({ error: "Ongeldige link." }, { status: 400 });
    }

    const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
    const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
    const databaseId = process.env.CLOUDFLARE_D1_DATABASE_ID;
    const apiToken = process.env.CLOUDFLARE_API_TOKEN;

    if (!privateKey || !accountId || !databaseId || !apiToken) {
      throw new Error("ImageKit- of D1-configuratie ontbreekt");
    }

    // Haal de URL zelf op bij ImageKit, in plaats van de browser te vertrouwen.
    const imageKitResponse = await fetch(
      `https://api.imagekit.io/v1/files/${encodeURIComponent(fileId)}/details`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(`${privateKey}:`).toString("base64")}`,
        },
        cache: "no-store",
      },
    );

    if (!imageKitResponse.ok) {
      throw new Error(`ImageKit-controle mislukt: ${imageKitResponse.status}`);
    }

    const foto = imageKitSchema.parse(await imageKitResponse.json());

    if (foto.fileId !== fileId) {
      throw new Error("ImageKit-bestands-ID komt niet overeen");
    }

    const d1Response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/d1/database/${databaseId}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sql: `
            INSERT INTO fotos (contact_id, imagekit_file_id, imagekit_url)
            VALUES (?, ?, ?)
          `,
          params: [contactId, foto.fileId, foto.url],
        }),
        cache: "no-store",
      },
    );

    if (!d1Response.ok) {
      throw new Error(`D1-aanvraag mislukt: ${d1Response.status}`);
    }

    const resultaat = d1Schema.parse(await d1Response.json());

    if (
      !resultaat.success ||
      resultaat.result.length === 0 ||
      resultaat.result.some((query) => query.success === false)
    ) {
      throw new Error("D1-query mislukt");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Foto registreren mislukt:", error);
    return NextResponse.json(
      { error: "Foto registreren mislukt." },
      { status: 500 },
    );
  }
}