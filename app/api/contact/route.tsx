import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { contactWithTokenSchema } from "../../types/contactSchema";
import { bewaarContact } from "../../../functions/database";

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
  const from = process.env.RESEND_FROM;
  const to = process.env.RESEND_TO;
  const apiKey = process.env.RESEND_API_KEY;
  const secret = process.env.TURNSTILE_SECRET;
  const baseurl = process.env.APP_URL || "http://localhost:3000";
  let contactToken: string | null = null;
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
      contactToken = await bewaarContact({
        naam,
        email,
        telefoonnummer,
        bericht,
      });
    } catch (error) {
      console.error("Opslaan in database mislukt:", error);
      return NextResponse.json(
        { error: "Versturen mislukt." },
        { status: 500 },
      );
    }

    // versturen email naar Kenneth
    const resend = new Resend(apiKey);

const { error } = await resend.emails.send({
  to: [to],
  replyTo: email,
  template: {
    id: "contactformulier-ingediend",
    variables: {
      NAAM: escapeHtml(naam),
      KLANT_EMAIL: escapeHtml(email),
      TELEFOON: escapeHtml(telefoonnummer),
      BERICHT: escapeHtml(bericht).replace(/\r?\n/g, "<br>"),
    },
  },
});

    if (error) {
      console.error("E-mail versturen mislukt:", error.message);
      return NextResponse.json(
        { error: "Versturen mislukt." },
        { status: 500 },
      );
    }

    // versturen van email naar de gebruiker (bevestiging)
    const { error: userError } = await resend.emails.send({
      to: [email],
      template: {
        id: "klant-bevestiging",
        variables: { UPLOAD_URL: `${baseurl}/upload/${contactToken}` },
      },
    });

    if (userError) {
      console.error("Bevestigingsmail versturen mislukt:", userError.message);
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
