import { z } from "zod";
import { createHash } from "crypto";

export async function zoekContactMetUploadToken(
  token: string,
): Promise<number | null> {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const databaseId = process.env.CLOUDFLARE_D1_DATABASE_ID;
  const apiToken = process.env.CLOUDFLARE_API_TOKEN;

  if (!accountId || !databaseId || !apiToken) {
    throw new Error("Cloudflare D1-configuratie ontbreekt");
  }

  const tokenHash = createHash("sha256").update(token).digest("hex");

  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/d1/database/${databaseId}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sql: "SELECT id FROM contacts WHERE bijlage_id = ? LIMIT 1",
        params: [tokenHash],
      }),
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error(`D1-aanvraag mislukt: HTTP ${response.status}`);
  }

  const schema = z.object({
    success: z.boolean(),
    result: z.array(
      z.object({
        success: z.boolean().optional(),
        results: z.array(z.object({ id: z.number() })),
      }),
    ),
  });

  const data = schema.parse(await response.json());

  if (!data.success || data.result.length !== 1 || data.result[0].success === false) {
    throw new Error("D1-query mislukt");
  }

  return data.result[0].results[0]?.id ?? null;
}

export async function zoekContactMetId({id}:{id: number}): Promise<number | null> {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const databaseId = process.env.CLOUDFLARE_D1_DATABASE_ID;
  const apiToken = process.env.CLOUDFLARE_API_TOKEN;

  if (!accountId || !databaseId || !apiToken) {
    throw new Error("Cloudflare D1-configuratie ontbreekt");
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
        sql: "SELECT id FROM contacts WHERE id = ? LIMIT 1",
        params: [id],
      }),
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error(`D1-aanvraag mislukt: HTTP ${response.status}`);
  }

  const schema = z.object({
    success: z.boolean(),
    result: z.array(
      z.object({
        success: z.boolean().optional(),
        results: z.array(z.object({ id: z.number() })),
      }),
    ),
  });

  const data = schema.parse(await response.json());

  if (!data.success || data.result.length !== 1 || data.result[0].success === false) {
    throw new Error("D1-query mislukt");
  }

  return data.result[0].results[0]?.id ?? null;
}

export async function getUploadToken({token}:{token: string}) {
const authResponse = await fetch("/api/upload/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
  return authResponse;
}