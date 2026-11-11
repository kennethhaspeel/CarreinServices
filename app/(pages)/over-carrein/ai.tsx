import Image from "next/image";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import {
  StarIcon, LeafIcon, HeartIcon, UsersIcon, GearIcon, ShieldIcon,
  TrophyIcon, HandshakeIcon, PinIcon, WhatsAppIcon,
} from "../_components/IcoonFunctie";
import HeroImage from "./over-hero.jpg";
import QuoteImage from "./over-quote.jpg";
import { Icoon } from "@/app/types/IcoonSVG";



const eyebrow = "text-xs font-bold uppercase tracking-[0.25em] text-[#087cff]";



const stats: Icoon[] = [
  { icon: TrophyIcon, titel: "15+", omschrijving: "jaar ervaring" },
  { icon: UsersIcon, titel: "1000+", omschrijving: "tevreden klanten" },
  { icon: HandshakeIcon, titel: "Samenwerking", omschrijving: "met sterke partners" },
  { icon: PinIcon, titel: "Actief in België", omschrijving: "" },
];

const partners = ["Delmi Decor", "Meubelen Defossez", "Extremis", "Jori", "Louis Vuitton"];

export default function OverOnsPage() {
  return (
    <main className="bg-[#020d13] text-white">



      {/* Quote */}
      <section className="relative isolate overflow-hidden">
        <Image src={QuoteImage} alt="" fill sizes="100vw" className="-z-20 object-cover object-right" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#020d13]/90 to-[#020d13]/60 md:bg-gradient-to-r md:from-[#020d13] md:via-[#020d13]/80 md:to-transparent" />
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
          <figure className="max-w-xl">
            <span aria-hidden="true" className="block font-serif text-7xl leading-none text-[#087cff]">“</span>
            <blockquote className="-mt-4 leading-relaxed text-white/90">
              Onze missie is om meubels en interieurs opnieuw fris, verzorgd en aangenaam te maken.
              Met kennis, passie en de juiste technieken zorgen we voor een resultaat waarop onze
              klanten kunnen vertrouwen. Zo helpen we materialen langer mee te gaan.
            </blockquote>
            <figcaption className="mt-5 text-sm font-semibold">— Carrein Services</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}