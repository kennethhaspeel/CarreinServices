import {
  DiamondIcon,
  ShieldIcon,
  HeartIcon,
  CarpetIcon,
} from "@/app/(pages)/_components/IcoonFunctie";
import { Icoon } from "@/app/types/IcoonSVG";
import Image from "next/image";
import Tapijt_Voor from "../Afbeeldingen/tapijt_voor.png";
import Tapijt_Na from "../Afbeeldingen/tapijt_na.png";

const stappen: Icoon[] = [
  {
    icon: DiamondIcon,
    titel: "Dieptereiniging",
    omschrijving: "Verwijdert diepgeworteld vuil en vlekken",
  },
  {
    icon: HeartIcon,
    titel: "Frisser en gezonder",
    omschrijving: "Zorgt voor een hygiënische en aangename leefomgeving",
  },
  {
    icon: ShieldIcon,
    titel: "Langer mooi",
    omschrijving:
      "Behoudt de uitstraling en verlengt de levensduur van uw tapijt",
  },
  {
    icon: CarpetIcon,
    titel: "Geschikt voor elk tapijt",
    omschrijving:
      "Voor alle soorten en maten tapijten, van hoogpolig tot laagpolig",
  },
];
const Waarom = () => {
  return (
    <>
      <section className="px-4 py-10 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.7fr_1fr]">
          <div>
            <p className="font-bold uppercase tracking-wide text-blue-500">
              Waarom kiezen voor onze
            </p>
            <h2 className="text-3xl font-extrabold uppercase">
              Reiniging van tapijten?
            </h2>

            <div className="mt-8 lg:mt-16">
              <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stappen.map((stap, index) => (
                  <li
                    key={index}
                    className="relative flex flex-col items-center text-center"
                  >
                    <span className="flex h-18 w-18 items-center justify-center rounded-full border-2 border-white/80">
                      <stap.icon className="h-12 w-12" />
                    </span>
                    {/* <h3 className="mt-3 font-bold">{stap.titel}</h3> */}
                    <p className="mt-1 max-w-[16rem] text-sm text-white/75">
                      {stap.omschrijving}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-2/3 overflow-hidden rounded-lg">
              <Image
                src={Tapijt_Voor}
                alt="Tapijt voor reiniging"
                fill
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="object-cover"
              />
              <span className="absolute bottom-2 left-2 rounded bg-slate-950 px-4 py-2 font-bold">
                VOOR
              </span>
            </div>

            <div className="relative aspect-2/3 overflow-hidden rounded-lg">
              <Image
                src={Tapijt_Na}
                alt="Tapijt na reiniging"
                fill
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="object-cover"
              />
              <span className="absolute bottom-2 left-2 rounded bg-blue-600 px-4 py-2 font-bold">
                NA
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Waarom;

// {stappen.map((stap, index) => (
//   <li
//     key={index}
//     className="relative flex flex-col items-center text-center"
//   >
//     <span className="flex h-18 w-18 items-center justify-center rounded-full border-2 border-white/80">
//       <stap.icon className="h-12 w-12" />
//     </span>
//     {/* <h3 className="mt-3 font-bold">{stap.titel}</h3> */}
//     <p className="mt-1 max-w-[16rem] text-sm text-white/75">{stap.omschrijving}</p>

//   </li>
// ))}
