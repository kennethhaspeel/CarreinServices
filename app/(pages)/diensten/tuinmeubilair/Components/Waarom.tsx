import {
  ShieldIcon,
  MoneyIcon,
  LeafIcon,
  DiamondIcon,
  SparklesIcon
} from "@/app/(pages)/_components/IcoonFunctie";
import { Icoon } from "@/app/types/IcoonSVG";

const stappen: Icoon[] = [
  {
    icon: DiamondIcon,
titel:"",
    omschrijving: "Verhoogt de uitstraling van uw",
  },
  {
    icon: LeafIcon,
    titel: "",
    omschrijving: "Voorkomt groene aanslag en hardnekkig vuil",
  },
  {
    icon: ShieldIcon,
    titel: "",
    omschrijving:
      "Verlengt de levensduur van uw tuinmeubilair",
  },
  {
    icon: MoneyIcon,
    titel: "",
    omschrijving:
      "Waardebehoud van uw eigendom",
  },
    {
    icon: SparklesIcon,
    titel: "",
    omschrijving:
      "Veilige en professionele reiniging",
  },
];
const Waarom = () => {
  return (
    <>
<section className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
        <h2 className="mb-5 text-2xl font-extrabold uppercase">
          Waarom kiezen voor deze reinigingsdienst?
        </h2>

        <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {stappen.map((stap, index) => (
            <li
              key={index}
              className="relative flex flex-col items-center text-center"
            >
              <span className="flex h-18 w-18 items-center justify-center rounded-full border-2 border-white/80">
                <stap.icon className="h-12 w-12" />
              </span>
              {/* <h3 className="mt-3 font-bold">{stap.titel}</h3> */}
              <p className="mt-1 max-w-[16rem] text-sm text-white/75">{stap.omschrijving}</p>
             
            </li>
          ))}
        </ol>
      </section>
    </>
  );
};

export default Waarom;


