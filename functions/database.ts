import { z } from "zod";
import type { ContactSchemaType } from "../app/types/contactSchema";
import { createHash, randomBytes } from "node:crypto";

const token = randomBytes(32).toString("base64url");
const tokenHash = createHash("sha256").update(token).digest("hex");

const responseSchema = z.object({
  success: z.boolean(),
  errors: z.array(z.object({ message: z.string() })),
  result: z.array(z.object({ success: z.boolean().optional() })),
});



export async function bewaarContact(contact: ContactSchemaType): Promise<void> {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const databaseId = process.env.CLOUDFLARE_D1_DATABASE_ID;
  const apiToken = process.env.CLOUDFLARE_API_TOKEN;

  if (!accountId || !databaseId || !apiToken) {
    throw new Error("Cloudflare D1 configuration is missing");
  }

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
          INSERT INTO contacts (naam, email, telefoonnummer, bericht,bijlage_id)
          VALUES (?, ?, ?, ?, ?)
        `,
        params: [
          contact.naam,
          contact.email,
          contact.telefoonnummer,
          contact.bericht,
          tokenHash,
        ],
      }),
      cache: "no-store",
    },
  );

if (!response.ok) {
  const details = await response.text();
  console.error("D1-foutdetails:", details);
  throw new Error(`D1 request failed: HTTP ${response.status}`);
}

  const data = responseSchema.parse(await response.json());

  if (!data.success || data.result.length === 0 || data.result.some((r) => r.success === false)) {
    throw new Error(
      `D1 query failed: ${data.errors.map((error) => error.message).join(", ")}`,
    );
  }
}