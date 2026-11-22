import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { contactWithTokenSchema } from "../../types/contactSchema";
import { bewaarContact } from "../../../functions/database";

export async function POST(request: Request) {
  const from = process.env.RESEND_FROM;
  const to = process.env.RESEND_TO;
  const apiKey = process.env.RESEND_API_KEY;
  const secret = process.env.TURNSTILE_SECRET;
  if (!from || !to || !apiKey) {
    console.error("E-mailconfiguratie ontbreekt");
    return NextResponse.json({ error: "Versturen mislukt." }, { status: 500 });
  }
  if (!secret) {
    console.error("Turnstile secret key ontbreekt");
    return NextResponse.json({ error: "Configuratiefout." }, { status: 500 });
  }
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ongeldige aanvraag." }, { status: 400 });
  }

  const result = contactWithTokenSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ error: "Ongeldige gegevens." }, { status: 400 });
  }

  const { naam, email, telefoonnummer, bericht } = result.data;

  try {
    const verification = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret,
          response: result.data.token,
        }),
      },
    );

    if (!verification.ok) {
      throw new Error("Cloudflare-verificatie mislukt");
    }

    const verificationData: unknown = await verification.json();
    const verificationResult = z
      .object({ success: z.boolean() })
      .safeParse(verificationData);

    if (!verificationResult.success || !verificationResult.data.success) {
      return NextResponse.json(
        { error: "Beveiligingscontrole mislukt." },
        { status: 400 },
      );
    }

    // Save contact to database
    try {
      await bewaarContact({ naam, email, telefoonnummer, bericht });
    } catch (error) {
      console.error("Opslaan in database mislukt:", error);
      return NextResponse.json({ error: "Versturen mislukt." }, { status: 500 });
    };
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: `Carrein Services Website <${from}>`,
      to: [to],
      replyTo: email,
      subject: `Contactformulier: ${naam}`,
      text: `Naam: ${naam}\nE-mail: ${email}\nTelefoonnummer: ${telefoonnummer}\n\nBericht:\n${bericht}`,
    });

    if (error) {
      console.error("E-mail versturen mislukt:", error.message);
      return NextResponse.json(
        { error: "Versturen mislukt." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("E-mail versturen mislukt:", error);
    return NextResponse.json({ error: "Versturen mislukt." }, { status: 500 });
  }
}
