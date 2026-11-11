import Image from "next/image";
import Link from "next/link";
import { WhatsAppIcon } from "../../_components/IcoonFunctie";
import HeroImage from "../Afbeeldingen/over-hero.png";
const eyebrow = "text-xs font-bold uppercase tracking-[0.25em] text-[#087cff]"; 
const HeroSection = () => {
  return (
      <section className="relative isolate overflow-hidden">
        <div className="relative aspect-[16/9] w-full md:absolute md:inset-y-0 md:right-0 md:aspect-auto md:h-full md:w-[60%]">
          <Image src={HeroImage} alt="" fill priority sizes="(max-width: 768px) 100vw, 60vw" className="object-cover object-right" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020d13] md:bg-gradient-to-r md:from-[#020d13] md:via-[#020d13]/60 md:to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-12 pt-6 sm:px-8 md:flex md:min-h-[480px] md:items-center md:py-16">
          <div className="md:w-1/2 md:pr-10">
            <p className={eyebrow}>Over Carrein Services</p>
            <h1 className="mt-3 text-4xl font-black uppercase leading-[1] sm:text-5xl">
              Meer dan reiniging.
              <br />
              Een <span className="text-[#087cff]">passie.</span>
            </h1>
            <p className="mt-4 text-lg text-white/90">Voor een schonere, gezondere en mooiere leefomgeving.</p>
            <p className="mt-4 max-w-xl leading-relaxed text-white/80">
              Bij Carrein Services draait het om meer dan reinigen. Het gaat om vakmanschap,
              ervaring en passie voor het reinigen, onderhouden en beschermen van meubels en interieurs.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/offerte-aanvragen" className="inline-flex items-center justify-center gap-3 rounded-md bg-[#0868ed] px-6 py-3 font-bold uppercase transition hover:bg-[#0758cb]">
                Offerte aanvragen <span aria-hidden="true" className="text-xl">→</span>
              </Link>
              <a href="https://wa.me/32471875540" className="inline-flex items-center justify-center gap-3 rounded-md border-2 border-white/80 px-6 py-3 font-bold uppercase transition hover:bg-white/10">
                <WhatsAppIcon className="h-6 w-6" /> Contact via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeroSection