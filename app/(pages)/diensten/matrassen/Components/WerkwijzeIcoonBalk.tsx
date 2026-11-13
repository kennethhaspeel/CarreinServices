import {
  SparklesIcon,
  ShieldIcon,
  HeartIcon,
  LeafIcon,
  ClockIcon,
} from "@/app/(pages)/_components/IcoonFunctie";
import { Icoon } from "@/app/types/IcoonSVG";


const stappen: Icoon[] = [
  {
    icon: SparklesIcon,
    titel: "Grondige Reiniging",
    omschrijving:
      "Verwijdert vuil, vlekken, huisstofmijt en allergenen",
  },
  {
    icon: HeartIcon,
    titel: "Beter Slaapcomfort",
    omschrijving:
      "een frisse, hygiënische slaapomgeving",
  },
  {
    icon: LeafIcon,
    titel: "Gezonder leven",
    omschrijving:
      "Minder allergieklachten en huidirritaties",
  },
    {
    icon: ShieldIcon,
    titel: "Geschikt voor alle matrassen",
    omschrijving:
      "Alle soorten en maten matrassen",
  },
    {
    icon: ClockIcon,
    titel: "Makkelijk in te plannen",
    omschrijving:
      "Snel, professioneel en aan huis",
  },
];
const WerkwijzeIcoonBalk = () => {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
        <h2 className="text-xl font-extrabold uppercase text-blue-500 sm:text-2xl">
          Waarom kiezen voor onze matrasreiniging?
        </h2>

        <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {stappen.map((stap, index) => (
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

export default WerkwijzeIcoonBalk;
