import Image from "next/image";
import Link from "next/link";
import HeroImage from "../Afbeeldingen/heroafbeelding.png";

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
          className="object-cover object-center md:object-contain md:object-right"
        />

        <div className="absolute inset-0 bg-linear-to-b from-transparent to-background md:bg-linear-to-r md:from-background md:via-background/60 md:to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-12 pt-6 sm:px-8 md:flex md:min-h-120 md:items-center md:py-16">
        <div className="md:w-[60%] md:pr-10">
          {/* <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/80">
            Professionele zetelreiniging aan huis
          </p> */}

          <h1 className="mt-3 text-4xl font-black uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
            Een nette buitenruimte het 
            <br />
            <span className="text-[#087cff]">hele jaar</span> door
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
           Uw terras of oprit is het ganse jaar blootgesteld aan weersomstandigheden, wat zorgt voor vuil,
           groene aanslag, vlekken en vervuilde voegen. Door regelmatig te laten reinigen, behoudt u de exthetische
           waarde en verlengt u de levensduur
          </p>
        </div>
      </div>
    </section>
  );
}
