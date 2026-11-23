import { createHmac, randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { zoekContactMetUploadToken } from "@/app/api/upload/functions";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ongeldige aanvraag." }, { status: 400 });
  }

  const uploadToken =
    typeof body === "object" && body !== null && "token" in body
      ? body.token
      : null;

  if (
    typeof uploadToken !== "string" ||
    !/^[A-Za-z0-9_-]{43}$/.test(uploadToken)
  ) {
    return NextResponse.json({ error: "Ongeldige link." }, { status: 400 });
  }

  try {
    const contactId = await zoekContactMetUploadToken(uploadToken);

    if (contactId === null) {
      return NextResponse.json({ error: "Ongeldige link." }, { status: 400 });
    }

    const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
    const publicKey = process.env.IMAGEKIT_PUBLIC_KEY;

    if (!privateKey || !publicKey) {
      throw new Error("ImageKit-configuratie ontbreekt");
    }

    const token = randomUUID();
    const expire = Math.floor(Date.now() / 1000) + 60;
    const signature = createHmac("sha1", privateKey)
      .update(token + expire)
      .digest("hex");

    return NextResponse.json(
      { token, expire, signature, publicKey },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error("Uploadtoestemming mislukt:", error);
    return NextResponse.json({ error: "Upload mislukt." }, { status: 500 });
  }
}