import Image from "next/image";
import interieur from "../afbeeldingen/interieurreiniging.png"
import stoel from "../afbeeldingen/lederenstoel.png"
import stof from "../afbeeldingen/stoffenstoel.png"
import ramen from "../afbeeldingen/ramenreinigen.png"
const diensten = [
  {
    title: "Stoffen autostoelen reinigen",
    description:
      "Met onze professionele injectie-extractiemethode verwijderen we vuil, vlekken en geurtjes diep uit de stof.",
    image: stof,
    alt: "Stoffen autostoel wordt gereinigd",
  },
  {
    title: "Lederen autostoelen reinigen en voeden",
    description:
      "Grondige reiniging met een professionele lederreiniger, gevolgd door een voedende behandeling voor soepele en verzorgde lederen bekleding.",
    image: stoel,
    alt: "Lederen autostoel",
  },
  {
    title: "Grondige interieurreiniging",
    description:
      "Wij verwijderen modder, haar, zand, stof en ander vuil uit het volledige interieur.",
    image: interieur,
    alt: "Schoon automatten en auto-interieur",
  },
  {
    title: "Ramen reinigen",
    description:
      "Een helder zicht is cruciaal voor vele plezierige ritten. Wij zorgen ervoor dat alle autoruiten weer glanzend en streeploos zijn.",
    image: ramen,
    alt: "Autoruit wordt schoongemaakt",
  },
];

export default function WaaromComponent() {
  return (
    <section className=" px-4 py-10 text-white sm:px-6">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-wide text-blue-500">
          Ons aanbod
        </p>

        <h2 className="mb-5 text-2xl font-extrabold uppercase leading-tight sm:text-3xl">
          Professionele reiniging voor elk type interieur
        </h2>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {diensten.map((dienst) => (
            <article
              key={dienst.title}
              className="overflow-hidden rounded-lg bg-white text-slate-900"
            >
              <div className="relative aspect-[2/1]">
                <Image
                  src={dienst.image}
                  alt={dienst.alt}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold leading-snug">
                  {dienst.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {dienst.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}