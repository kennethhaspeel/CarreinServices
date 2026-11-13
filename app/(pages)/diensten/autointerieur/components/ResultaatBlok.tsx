import { Icoon } from "@/app/types/IcoonSVG";
import {
  LeafIcon,
  HeartIcon,
  ShieldIcon,
   CarIcon,
} from "@/app/(pages)/_components/IcoonFunctie";

const usps: Icoon[] = [
  {
    icon: HeartIcon,
    titel: "Meer rijcomfort",
    omschrijving: "Een nette en frisse wagen",
  },
  {
    icon: LeafIcon,
    titel: "Gezonder rijden",
    omschrijving: "Minder stof en allergenen",
  },
  {
    icon: ShieldIcon,
    titel: "Behouden van waarde",
    omschrijving: "Een goed onderhouden interieur gaat langer mee",
  },
  {
    icon: CarIcon,
    titel: "Geschikt voor alle voertuigen",
    omschrijving: "Personenwagens, berdrijfswagen en fleet",
  },
];
const UspBlok = () => {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
        <h2 className="text-xl font-extrabold uppercase text-blue-500 sm:text-2xl">
          Waarom kiezen voor onze autointerieurreiniging?
        </h2>

        <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((stap, index) => (
            <li
              key={index}
              className="relative flex flex-col items-center text-center"
            >
              <span className="flex h-18 w-18 items-center justify-center rounded-full border-2 border-white/80">
                <stap.icon className="h-10 w-12" />
              </span>
              <h3 className="mt-3 font-bold">{stap.titel}</h3>
              <p className="mt-1 max-w-[16rem] text-sm text-white/75">
                {stap.omschrijving}
              </p>
              
            </li>
          ))}

        </ol>
      </section>
    </>
  );
};

export default UspBlok