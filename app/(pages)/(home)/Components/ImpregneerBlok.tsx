// ImpregnerenBanner.tsx
import Image from "next/image";
import Link from "next/link";
import BackgroundImage from "../afbeeldingen/impregneer.png";
import { ShieldIcon } from "./IcoonBalkIconen";


export default function ImpregneerBlok() {
  return (
    <section className="relative isolate overflow-hidden bg-[#020d13] text-white">
      <Image
        src={BackgroundImage}
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />

      {/* Donkere overgang van links naar rechts, onder de tekst */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#020d13]/90 via-[#020d13]/70 to-transparent md:bg-gradient-to-r md:from-[#020d13] md:via-[#020d13]/75 md:to-transparent" />

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 sm:px-8 md:min-h-[400px] md:flex-row md:items-center md:justify-between md:py-16">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#087cff]">
            Extra bescherming
          </p>

          <h2 className="mt-3 text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">
            Impregneren &amp;
            <br />
            <span className="text-[#087cff]">beschermen.</span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-white/90">
            Bescherm je zetel, stoelen of tuinmeubelen na een grondige
            reiniging. Onze impregneercoating biedt een onzichtbare bescherming
            tegen vlekken, vocht en vuil. Zo geniet je langer van een fris en
            hygiënisch resultaat.
          </p>

          <Link
            href="/diensten/impregneren"
            className="mt-7 inline-flex items-center gap-3 rounded-md bg-[#0868ed] px-6 py-3 font-bold uppercase transition hover:bg-[#0758cb]"
          >
            Meer over impregneren
            <span aria-hidden="true" className="text-xl">→</span>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-10">
          <div className="flex h-40 w-40 flex-col items-center justify-center gap-2 rounded-full border-4 border-[#8fa8ff]/70 bg-[#020d13]/90 text-center shadow-xl">
            <ShieldIcon className="h-10 w-10" />
            <span className="text-sm font-bold uppercase leading-tight">
              Langere
              <br />
              levensduur
            </span>
          </div>

          <div className="-rotate-6">
            <p className="font-serif text-2xl italic leading-snug sm:text-3xl">
              Minder vlekken.
              <br />
              Langer genieten.
            </p>
            <div className="mt-2 h-1 w-full rounded bg-[#0868ed]" />
          </div>
        </div>
      </div>
    </section>
  );
}