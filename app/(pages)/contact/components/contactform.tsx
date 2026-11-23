"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

import {
  contactSchema,
  type ContactSchemaType,
} from "../../../types/contactSchema";
import { WhatsAppIcon } from "../../_components/IcoonFunctie";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  const TurnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY;
  const turnstileRef = useRef<TurnstileInstance>(null);
  const [token, setToken] = useState<string | null>(null);
  const [melding, setMelding] = useState("");
  const onSubmit = async (data: ContactSchemaType) => {
    if (!token) {
      setMelding("Voltooi eerst de beveiligingscontrole.");
      return;
    }
    setMelding("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, token }),
      });

      if (!response.ok) {
        throw new Error("Versturen mislukt");
      }

      reset();
      setMelding("Je bericht is verstuurd.");
    } catch (error) {
      console.error(error);
      setMelding("Er ging iets mis. Probeer het opnieuw.");
    } finally {
      if (turnstileRef.current) {
        turnstileRef.current.reset();
        setToken(null);
      }
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <p className="mt-4">
          De gemakkelijkste manier om contact op te nemen is WhatsApp. Op deze
          manier kunt u gemakkelijk foto&lsquo;s toevoegen en uw vraag stellen
          <span className="mx-4"></span>
        </p>
        <div className="mt-4">
          <a
            href="https://wa.me/32471875540"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-md border-2 border-white/80 px-6 py-3 font-bold uppercase transition hover:bg-white/10"
          >
            <WhatsAppIcon className="h-6 w-6" /> Contact via WhatsApp
          </a>
        </div>
      </div>
      <hr className="my-6 border-white/20" />
      <p className="mb-6">
        Of vul het onderstaande formulier in en wij nemen zo snel mogelijk
        contact met u op.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label
            htmlFor="naam"
            className="mb-3 block text-base font-medium text-white"
          >
            Naam
          </label>
          <input
            id="naam"
            type="text"
            aria-invalid={!!errors.naam}
            className={`w-full rounded-md border text-gray-700 bg-white py-3 px-6 ... ${errors.naam ? "border-red-500" : "border-gray-300"}`}
            {...register("naam")}
            value="Kenneth"
          />
          {errors.naam && (
            <p role="alert" className="mt-2 text-sm text-red-400">
              {errors.naam.message}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-white"
          >
            E-mailadres
          </label>
          <input
            type="email"
            aria-invalid={!!errors.email}
            className={`w-full rounded-md border text-gray-700 bg-white py-3 px-6 ... ${errors.email ? "border-red-500" : "border-gray-300"}`}
            {...register("email", { required: true })}
            value="kenneth@haspeel.be"
          />
          {errors.email && (
            <p role="alert" className="mt-2 text-sm text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="telefoonnummer"
            className="mb-3 block text-base font-medium text-white"
          >
            Telefoonnummer
          </label>
          <input
            id="telefoonnummer"
            type="text"
            aria-invalid={!!errors.telefoonnummer}
            className={`w-full rounded-md border text-gray-700 bg-white py-3 px-6 ... ${errors.telefoonnummer ? "border-red-500" : "border-gray-300"}`}
            {...register("telefoonnummer")}
            value="0470123456"
          />
          {errors.telefoonnummer && (
            <p role="alert" className="mt-2 text-sm text-red-400">
              {errors.telefoonnummer.message}
            </p>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="bericht"
            className="mb-3 block text-base font-medium text-white"
          >
            Bericht
          </label>
          <textarea
            rows={4}
            aria-invalid={!!errors.bericht}
            className={`w-full resize-none rounded-md border text-gray-700 bg-white py-3 px-6 ... ${errors.bericht ? "border-red-500" : "border-gray-300"}`}
            {...register("bericht", { required: true })}
            value="Dit is een testbericht"
          ></textarea>
          {errors.bericht && (
            <p role="alert" className="mt-2 text-sm text-red-400">
              {errors.bericht.message}
            </p>
          )}
        </div>
        <div className="mb-5">
          <Turnstile
            ref={turnstileRef}
            siteKey={TurnstileSiteKey!}
            onSuccess={setToken}
            onExpire={() => setToken(null)}
            onError={(code) => {
              console.error("Turnstile error code:", code);
              setToken(null);
              setMelding("De beveiligingscontrole kon niet worden geladen.");
            }}
          />
        </div>
        <div>
          <button
            disabled={isSubmitting}
            className="hover:shadow-form rounded-md bg-[#087cff] py-3 px-8 text-base font-semibold text-white outline-none"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
                />
                Versturen...
              </span>
            ) : (
              "Versturen"
            )}
          </button>
        </div>
      </form>
      {melding && <p className="mt-4 text-sm text-white">{melding}</p>}
    </>
  );
};

export default ContactForm;
