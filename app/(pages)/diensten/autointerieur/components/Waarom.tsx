import {
  SparklesIcon,
  DiamondIcon,
  LeafIcon,
  SmellIcon,
} from "@/app/(pages)/_components/IcoonFunctie";
import { Icoon } from "@/app/types/IcoonSVG";

const stappen: Icoon[] = [
  {
    icon: DiamondIcon,
    titel: "Diepgaande reiniging",
    omschrijving: "We verwijderen zelfs het hardnekkigste vuil van de bekleding, tapijten en vloermatten",
  },
  {
    icon: LeafIcon,
    titel: "Gezond binnenklimaat",
    omschrijving: "Vermindert allergieën, stof en bacteriën en zorgt voor schonere en gezondere omgeving",
  },
  {
    icon: SparklesIcon,
    titel: "Oog voor detail",
    omschrijving:
      "Van dashboard tot deurpaneel, elke centimeter wordt grondig nagekeken",
  },
  {
    icon: SmellIcon,
    titel: "Frisse en schone geur",
    omschrijving: "Geniet van een frisse geur die elke rit aangenaam maakt",
  },
];
const Waarom = () => {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
        <h2 className="inline-block border-b-4 border-[#0868ed] pb-2 text-xl font-bold">
          Waarom kiezen voor onze interieurreiniging?
        </h2>

        <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stappen.map((stap, index) => (
            <li
              key={index}
              className="relative flex flex-col items-center text-center"
            >
              <span className="flex h-18 w-18 items-center justify-center rounded-full border-2 border-white/80">
                <stap.icon className="h-12 w-12" />
              </span>
              <h3 className="mt-3 font-bold">{stap.titel}</h3>
              <p className="mt-1 max-w-[16rem] text-sm text-white/75">{stap.omschrijving}</p>
             
            </li>
          ))}
        </ol>
      </section>
    </>
  );
};

export default Waarom;
