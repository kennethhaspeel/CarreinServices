import React from 'react'
import { StarIcon, LeafIcon, HeartIcon, UsersIcon, GearIcon, ShieldIcon } from '../../_components/IcoonFunctie';
import { Icoon } from '@/app/types/IcoonSVG';
const waardes: Icoon[] = [
  { icon: StarIcon, titel: "15+ jaar ervaring", omschrijving: "Vakmanschap en kennis waarop u kunt vertrouwen." },
  { icon: LeafIcon, titel: "Duurzamere keuze", omschrijving: "Geef uw meubels een tweede leven en bespaar kosten." },
  { icon: HeartIcon, titel: "Gezondere leefomgeving", omschrijving: "Verwijdert vuil, allergenen en bacteriën voor een frisser huis." },
  { icon: UsersIcon, titel: "Tevreden klanten", omschrijving: "Particulieren en bedrijven vertrouwen op onze service." },
  { icon: GearIcon, titel: "Professionele technieken", omschrijving: "Met de beste machines en milieuvriendelijke producten." },
  { icon: ShieldIcon, titel: "Betrouwbaar en servicegericht", omschrijving: "Kwaliteit, eerlijk advies en een persoonlijke aanpak." },
];
const eyebrow = "text-xs font-bold uppercase tracking-[0.25em] text-[#087cff]";
const VerhaalBlok = () => {
  return (
    <>
          <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className={eyebrow}>Mijn verhaal</p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight sm:text-4xl">
              Van meubelplaatser<br />tot specialist in reiniging
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-white/85 sm:text-base">
              <p>Met meer dan 15 jaar ervaring in het plaatsen van meubels kwam ik bij talloze gezinnen en bedrijven over de vloer. Ik zag hoe zetels vaak werden vervangen, terwijl ze eigenlijk nog perfect bruikbaar waren. Ze waren vooral toe aan een grondige reiniging.</p>
              <p>Toen onze zoon ooit iets morste op onze eigen zetel, ging ik op zoek naar een goede oplossing. Die zoektocht groeide uit tot een passie en uiteindelijk tot de oprichting van Carrein Services.</p>
              <p>Vandaag help ik particulieren en bedrijven om hun meubels, tapijten en interieurs opnieuw fris en verzorgd te maken.</p>
            </div>
            <div className="mt-6 flex flex-wrap items-end gap-x-6 gap-y-2">
              <p className="border-b-4 border-[#0868ed] pb-1 font-serif text-xl italic">Omdat elk meubel een verhaal verdient.</p>
              <span className="text-sm text-white/70">— Carrein Services</span>
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-px sm:grid-cols-3">
            {waardes.map((waarde) => (
              <li key={waarde.titel} className="flex flex-col items-center border border-white/10 px-4 py-6 text-center">
                <waarde.icon className="h-12 w-12 text-[#087cff]" />
                <h3 className="mt-3 font-bold leading-tight">{waarde.titel}</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/75">{waarde.omschrijving}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default VerhaalBlok