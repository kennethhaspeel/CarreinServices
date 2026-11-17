import {
  SteamIcon,
  SprayBottleIcon,
  ShieldIcon,
} from "@/app/(pages)/_components/IcoonFunctie";
import { Icoon } from "@/app/types/IcoonSVG";
import "./stijl.css";

const stappen: Icoon[] = [
  {
    icon: SteamIcon,
    titel: "1. Stoomreiniging",
    omschrijving:
      "We reinigen met een professionele injectie-extractie machine met stoom die diep in de stof doordringt",
  },
  {
    icon: SprayBottleIcon,
    titel: "2. Reiniging",
    omschrijving:
      "We verwijderen hardnekkig vuil en vlekken en brengen de bekleding weer tot leven",
  },
  {
    icon: ShieldIcon,
    titel: "3. Bescherming (optioneel)",
    omschrijving:
      "Voor stoffen stoelen bieden we een beschermende coating die extra bescherming geeft tegen vuil, vlekken en slijtage.",
  },
];
const Werkwijze = () => {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
        <h1 className="max-w-3xl text-3xl font-black uppercase leading-tight sm:text-5xl">
            Onze{" "}
            <span className="text-[#087cff]">aanpak</span>
          </h1>

        <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stappen.map((stap, index) => (
            <li
              key={stap.titel}
              className="relative flex flex-col items-center text-center"
            >
              <span className="flex h-18 w-18 items-center justify-center rounded-full border-2 border-white/80">
                <stap.icon className="h-10 w-12" />
              </span>
              <h3 className="mt-3 font-bold">{stap.titel}</h3>
              <p className="mt-1 max-w-[16rem] text-sm text-white/75">
                {stap.omschrijving}
              </p>
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
