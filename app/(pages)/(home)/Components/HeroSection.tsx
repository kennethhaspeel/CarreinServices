import Image from "next/image";
import Link from "next/link";
import HeroImage from "../afbeeldingen/heroafbeelding.png";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-background text-white">
      <div className="relative aspect-video w-full md:absolute md:inset-y-0 md:right-0 md:aspect-auto md:h-full md:w-[60%]">
        <Image
          src={HeroImage}
          alt="Professionele meubelreiniging aan huis"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover object-[100%_center]"
        />

        <div className="absolute inset-0 bg-linear-to-b from-transparent to-background md:bg-linear-to-r md:from-background md:via-background/60 md:to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-12 pt-6 sm:px-8 md:flex md:min-h-140 md:items-center md:py-16">
        <div className="md:w-1/2 md:pr-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/80">
            Professionele zetelreiniging aan huis
          </p>

          <h1 className="mt-3 text-4xl font-black uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
            Van vervuild
            <br />
            <span className="text-[#087cff]">naar verzorgd.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Carrein Services is gespecialiseerd in dieptereiniging van stoffen
            en lederen zetels, tapijten, matrassen, auto&apos;s, stoelen,
            tuinmeubelen, opritten en terrassen. Voor een frisser, hygiënischer
            en gezonder leven.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/offerte-aanvragen"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-[#0868ed] px-6 py-3 font-bold transition hover:bg-[#0758cb]"
            >
              <span aria-hidden="true">▣</span>
              VRAAG JE OFFERTE AAN
              <span aria-hidden="true" className="text-xl">
                →
              </span>
            </Link>

            <a
              href="tel:+32000000000"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md border-2 border-white/80 px-6 py-3 font-bold transition hover:bg-white/10"
            >
              <span aria-hidden="true">☎</span>
              BEL NU
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
