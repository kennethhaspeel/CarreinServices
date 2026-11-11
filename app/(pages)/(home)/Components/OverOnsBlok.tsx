// OverOns.tsx
import Image from "next/image";
import Link from "next/link";
import Portrait from "../afbeeldingen/zelfportret.png";

export default function OverOnsBlok() {
  return (
    <section className="bg-[#020d13] text-white">
      <div className="mx-auto grid max-w-7xl md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <div className="relative aspect-[4/3] w-full md:aspect-auto md:min-h-[320px]">
          <Image
            src={Portrait}
            alt="Kenneth, zaakvoerder van Carrein Services"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover object-center"
          />
        </div>

        <div className="flex flex-col justify-center px-5 py-10 sm:px-8 md:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#087cff]">
            Wie zijn wij?
          </p>

          <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
            Carrein <span className="text-[#087cff]">Services</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Ik ben Kenneth, zaakvoerder van Carrein Services. Met passie voor
            grondige reiniging zorg ik ervoor dat jouw interieur en exterieur
            opnieuw fris, proper en verzorgd is. Elke opdracht krijgt de juiste
            aanpak, met professionele apparatuur en oog voor detail.
          </p>

          <Link
            href="/over-carrein"
            className="mt-7 inline-flex w-fit items-center gap-3 rounded-md bg-[#0868ed] px-6 py-3 font-bold uppercase transition hover:bg-[#0758cb]"
          >
            Meer over Carrein
            <span aria-hidden="true" className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}