"use client";

import { useRef, useState } from "react";
import { FotoPreview } from "./FotoPreview";
import { Controller, useForm, useWatch } from "react-hook-form";
import { getUploadToken } from "@/app/api/upload/functions";

type UploadForm = {
  fotos: File[];
};

const MAX_FOTOS = 5;
const MAX_GROOTTE = 10 * 1024 * 1024;
const TOEGESTANE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
];

export default function UploadPagina({
  contactId,
  token,
}: {
  contactId: number;
  token: string;
}) {
  const [melding, setMelding] = useState("");
  const [aantalOpgeladen, setAantalOpgeladen] = useState(0);
  const [totaalOpgeladen, setTotaalOpgeladen] = useState(0);
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<UploadForm>({
    defaultValues: { fotos: [] },
  });

  const geselecteerdeFotos = useWatch({ control, name: "fotos" });
  const inputRef = useRef<HTMLInputElement>(null);
  const aantalFotos = geselecteerdeFotos?.length ?? 0;
  async function onSubmit(data: UploadForm) {
    setMelding("");
    setAantalOpgeladen(0);
    try {
      for (const foto of data.fotos) {
        // Controleer bestandstype op extensie
        const extensie = foto.name.match(/\.(jpe?g|png|webp|heic|heif)$/i)?.[0];

        if (!extensie) {
          throw new Error("Bestandstype niet herkend");
        }
        // opvragen van upload token
        const authResponse = await getUploadToken({ token });
        if (!authResponse.ok) {
          throw new Error("Uploadtoestemming mislukt");
        }

        const auth = await authResponse.json();

        // opladen van foto
        const formData = new FormData();
        formData.append("file", foto);
        formData.append("fileName", `${crypto.randomUUID()}${extensie}`);
        formData.append("publicKey", auth.publicKey);
        formData.append("signature", auth.signature);
        formData.append("expire", String(auth.expire));
        formData.append("token", auth.token);
        const uploadResponse = await fetch(
          "https://upload.imagekit.io/api/v1/files/upload",
          { method: "POST", body: formData },
        );

        if (!uploadResponse.ok) {
          throw new Error("ImageKit-upload mislukt");
        }

        const responseData = await uploadResponse.json();
        // Bewaar de foto in de database via de API
        const registratie = await fetch("/api/upload/bewarendatabase", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token, // Het persoonlijke token uit de uploadlink
            fileId: responseData.fileId,
          }),
        });

        if (!registratie.ok) {
          throw new Error("Foto kon niet in D1 worden geregistreerd");
        }
        setAantalOpgeladen((prev) => prev + 1);
        setTotaalOpgeladen((prev) => prev + 1);
      }

      reset();
      setMelding("Je foto's zijn opgeladen. Bedankt!");
    } catch (error) {
      console.error(error);
      setMelding(
        "Niet alle foto's konden worden opgeladen. Neem contact met ons op.",
      );
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 md:py-20">
      <h1 className="mb-4 text-3xl font-bold md:text-4xl">
        Foto&apos;s <span className="text-[#087cff]">opladen</span>
      </h1>

      <p className="mb-6 text-white/80">
        Voeg foto&apos;s toe van wat je wilt laten reinigen. Zo kunnen we je
        aanvraag beter beoordelen.
      </p>

      <hr className="my-6 border-white/20" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <label
          htmlFor="fotos"
          className="mb-3 block text-base font-medium text-white"
        >
          Kies je foto&apos;s
        </label>

        <Controller
          name="fotos"
          control={control}
          rules={{
            validate: (fotos) => {
              if (fotos.length === 0) return "Selecteer minstens één foto.";
              if (fotos.length > MAX_FOTOS) {
                return `Je kunt maximaal ${MAX_FOTOS} foto's toevoegen.`;
              }
              if (fotos.some((foto) => !TOEGESTANE_TYPES.includes(foto.type))) {
                return "Dit bestandstype wordt niet ondersteund.";
              }
              if (fotos.some((foto) => foto.size > MAX_GROOTTE)) {
                return "Elke foto mag maximaal 10 MB groot zijn.";
              }
              return true;
            },
          }}
          render={({ field }) => (
            <>
              <input
                id="fotos"
                type="file"
                accept="image/jpeg,image/png,image/webp,image/heic,image/heif,.heic,.heif"
                multiple
                hidden
                disabled={isSubmitting || aantalFotos >= MAX_FOTOS}
                ref={(element) => {
                  field.ref(element);
                  inputRef.current = element;
                }}
                name={field.name}
                onBlur={field.onBlur}
                onChange={(event) => {
                  const nieuweFotos = Array.from(event.target.files ?? []);
                  field.onChange([...field.value, ...nieuweFotos]);
                  event.target.value = "";
                }}
              />

              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                disabled={isSubmitting || aantalFotos >= MAX_FOTOS || totaalOpgeladen >= MAX_FOTOS}
                className="rounded-md border border-white/60 px-6 py-3 font-semibold text-white hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Foto selecteren ({aantalFotos}/{MAX_FOTOS})
              </button>
            </>
          )}
        />

        <p id="fotos-hulp" className="mt-2 text-sm text-white/70">
          Maximaal 5 foto&apos;s van 10 MB. JPG, PNG, WebP, HEIC of HEIF.
        </p>

        {errors.fotos && (
          <p role="alert" className="mt-2 text-sm text-red-400">
            {errors.fotos.message}
          </p>
        )}

        {geselecteerdeFotos?.length > 0 && (
          <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {geselecteerdeFotos.map((foto, index) => (
              <FotoPreview
                key={`${foto.name}-${index}`}
                foto={foto}
                disabled={isSubmitting}
                onRemove={() =>
                  setValue(
                    "fotos",
                    geselecteerdeFotos.filter((_, i) => i !== index),
                    { shouldValidate: true, shouldDirty: true },
                  )
                }
              />
            ))}
          </ul>
        )}

        <button
          type="submit"
          disabled={isSubmitting || aantalFotos === 0}
          className="mt-6 rounded-md bg-[#087cff] px-8 py-3 text-base font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Foto&apos;s opladen
        </button>
        {isSubmitting && (
          <span
            role="status"
            className="ml-4 inline-flex items-center gap-2 text-sm text-white/80"
          >
            <span
              aria-hidden="true"
              className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
            />
            {aantalOpgeladen} van {aantalFotos} foto&apos;s opgeladen
          </span>
        )}
        {melding && (
          <p role="status" className="mt-4 text-sm text-white">
            {melding}
          </p>
        )}
      </form>
    </main>
  );
}
