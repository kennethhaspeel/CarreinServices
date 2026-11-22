import { z } from "zod";

export const contactSchema = z.object({
  naam: z.string().trim().min(1, "Vul je naam in.").max(100),
  email: z.email("Dit is geen geldig e-mailadres"),
  telefoonnummer: z.string().trim().min(1, "Vul je telefoonnummer in.").max(15),
  bericht: z.string().trim().min(5, "Vul je bericht in.").max(5000),
});
export type ContactSchemaType = z.infer<typeof contactSchema>;

export const contactWithTokenSchema = contactSchema.extend({
  token: z.string().min(1).max(2048),
});

export type ContactSchemaTokenType = z.infer<typeof contactWithTokenSchema>;