import { Icoon } from "@/app/types/IcoonSVG";
import {
  LeafIcon,
  ShieldIcon,
  HomeIcon,
  CalendarIcon,
} from "@/app/(pages)/_components/IcoonFunctie";

const usps: Icoon[] = [
  {
    icon: LeafIcon,
    titel: "Milieuvriendelijk",
    omschrijving: "Veilige en doeltreffende producten",
  },
  {
    icon: ShieldIcon,
    titel: "Veilig en gezond",
    omschrijving: "Vrij van allergenen en bacteriën",
  },
  {
    icon: HomeIcon,
    titel: "Aan huis service",
    omschrijving: "In heel België.",
  },
  {
    icon: CalendarIcon,
    titel: "Flexibele afspraken",
    omschrijving: "Ook 's avonds en weekend mogelijk",
  },
];
const UspBlok = () => {
  return (
    <>
            <div>
          <ul className="mt-8 grid divide-y divide-white/20 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {usps.map((usp) => (
              <li
                key={usp.titel}
                className="flex items-start gap-3 px-4 py-3 lg:first:pl-0"
              >
                <usp.icon className="h-9 w-9 shrink-0" />
                <div>
                  <h2 className="text-sm font-semibold">{usp.titel}</h2>
                  <p className="text-xs text-white/75">{usp.omschrijving}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
    </>
  )
}

export default UspBlok