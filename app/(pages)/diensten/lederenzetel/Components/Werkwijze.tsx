import {
  SparklesIcon,
  SteamIcon,
  SprayBottleIcon,
  CleaningToolIcon,
} from "@/app/(pages)/_components/IcoonFunctie";
import { Icoon } from "@/app/types/IcoonSVG";

const stappen: Icoon[] = [
  {
    icon: SteamIcon,
    titel: "1. Stoombehandeling",
    omschrijving: "Wanneer het ledertype het toelaat, gebruiken we gecontroleerde stoom om hardnekkig vuil los te maken",
  },
  {
    icon: SprayBottleIcon,
    titel: "2. Reiniging",
    omschrijving: "We verzorgen het leer met een, door ons gekozen en goedgekeurde, lederreiniger.",
  },
  {
    icon: CleaningToolIcon,
    titel: "3. Verzorging",
    omschrijving:
      "We voegen een voedende conditioner toe om het leer soepel en zacht te houden.",
  },
  {
    icon: SparklesIcon,
    titel: "4. Bescherming",
    omschrijving: "Het leer is nu beschermd tegen vuil, vlekken, kraken, uitdroging,...",
  },
];
const Werkwijze = () => {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
        <h2 className="inline-block border-b-4 border-[#0868ed] pb-2 text-xl font-bold">
          Zo reinigen wij jouw zetel
        </h2>

        <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stappen.map((stap, index) => (
            <li
              key={stap.titel}
              className="relative flex flex-col items-center text-center"
            >
              <span className="flex h-18 w-18 items-center justify-center rounded-full border-2 border-white/80">
                <stap.icon className="h-10 w-12" />
              </span>
              <h3 className="mt-3 font-bold">{stap.titel}</h3>
              <p className="mt-1 max-w-[16rem] text-sm text-white/75">{stap.omschrijving}</p>
              {index < stappen.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-4 top-5 hidden text-xl text-white/60 lg:block"
                >
                  ›
                </span>
              )}
            </li>
          ))}
        </ol>
      </section>
    </>
  );
};

export default Werkwijze;
