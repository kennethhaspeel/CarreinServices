import { Icoon } from "@/app/types/IcoonSVG";
import {
  LeafIcon,
  ShieldIcon,
  HomeIcon,
  CalendarIcon,
} from "../../_components/IcoonFunctie";
import IcoonbalkKaart from "./IcoonbalkKaart";

export default function Icoonbalk() {
  const Iconen: Icoon[] = [
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
      icon: HomeIcon,
      titel: "Aan huis service",
      omschrijving: "In heel België.",
    },
    {
      titel: "Flexibele afspraken",
      icon: CalendarIcon,
      omschrijving: "Wij passen ons aan uw planning aan",
    },
  ];
  return (
    <div className="mx-auto grid max-w-7xl divide-y divide-white/20 px-5 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
      {Iconen.map((icoon) => (
        <div key={icoon.titel} className="flex flex-col items-center">
          <IcoonbalkKaart icoon={icoon} />
        </div>
      ))}
    </div>
  );
}
