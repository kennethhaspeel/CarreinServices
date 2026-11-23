import type { Metadata } from "next";
import { connection } from "next/server";
import UploadPagina from "./uploadPagina";
import { zoekContactMetUploadToken } from "@/app/api/upload/functions";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Foto's opladen",
  robots: { index: false, follow: false },
};

type Props = {
  params: Promise<{ token: string }>;
};

export default async function UploadPage({ params }: Props) {
  return (
    <Suspense fallback={<p className="p-6">Uploadlink controleren...</p>}>
      <ControleerToken params={params} />
    </Suspense>
  );
}

async function ControleerToken({ params }: Props) {
  await connection;
  const { token } = await params;

  const geldigFormaat = /^[A-Za-z0-9_-]{43}$/.test(token);
  const contactId = geldigFormaat
    ? await zoekContactMetUploadToken(token)
    : null;

  if (contactId === null) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="mb-4 text-3xl font-bold">Ongeldige link</h1>
        <p>Deze uploadlink is niet geldig. Neem contact met ons op voor hulp.</p>
      </main>
    );
  }

  return <UploadPagina contactId={contactId} token={token} />;
}