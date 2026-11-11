import { Icoon } from "@/app/types/IcoonSVG";       
import { LeafIcon, ShieldIcon, HomeIcon, ClockIcon } from "../../_components/IcoonFunctie";
import IcoonbalkKaart from "./IcoonbalkKaart";

export default function Icoonbalk() {
    const Iconen:Icoon[] = [
        {
            titel: "Milieuvriendelijk",
            icon: LeafIcon,
            omschrijving: "Veilige en doeltreffende producten",

        },
        {
            titel: "Veilig en gezond",
            icon: ShieldIcon,
            omschrijving: "Verwijdert allergenen, bacteriën en geuren",

        },
        {
            titel:"Aan huis service",
            icon: HomeIcon,
            omschrijving: "In Wervik en ruime omgeving",

        },
        {
            titel: "Flexibele afspraken",
            icon: ClockIcon,
            omschrijving: "Ook 's avonds en weekend mogelijk",

        },
    ];
  return (
    <div className="mx-auto grid max-w-7xl divide-y divide-white/20 px-5 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
      {Iconen.map((icoon) => (
        <div key={icoon.titel} className="flex flex-col items-center">
          <IcoonbalkKaart icoon={icoon}          />
        </div>
      ))}
    </div>
  );
}