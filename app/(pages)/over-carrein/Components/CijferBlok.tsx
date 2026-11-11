import { Icoon } from "@/app/types/IcoonSVG";
import {
  UsersIcon,
  TrophyIcon, HandshakeIcon, PinIcon
} from "../../_components/IcoonFunctie";

const cijfers: Icoon[] = [
  { icon: TrophyIcon, titel: "15+", omschrijving: "jaar ervaring" },
  { icon: UsersIcon, titel: "1000+", omschrijving: "tevreden klanten" },
  { icon: HandshakeIcon, titel: "Samenwerking", omschrijving: "met sterke partners" },
  { icon: PinIcon, titel: "Actief in België", omschrijving: "" },
];
const CijferBlok = () => {
  return (
    <>
    <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <ul className="grid divide-y divide-white/10 rounded-xl border border-white/10 bg-white/3 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {cijfers.map((cijfer) => (
            <li key={cijfer.titel} className="flex items-center gap-4 px-6 py-5">
              <cijfer.icon className="h-12 w-12 shrink-0" />
              <div>
                <p className="font-bold">{cijfer.titel}</p>
                {cijfer.omschrijving && <p className="text-sm text-white/70">{cijfer.omschrijving}</p>}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default CijferBlok