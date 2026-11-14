import Image from "next/image";
import TerrasVoor from "../Afbeeldingen/terras_voor.png"
const stappen = [
  {
    nummer: "1",
    titel: "Inspectie & analyse",
    afbeelding: TerrasVoor,
    alt: "Inspectie van de bestrating",
    tekst:
      "We bekijken het type oppervlak en de mate van vervuiling om de meest geschikte methode te bepalen.",
  },
  {
    nummer: "2",
    titel: "Professionele reiniging",
    afbeelding: TerrasVoor,
    alt: "Bestrating wordt professioneel gereinigd",
    methodes: [
      {
        titel: "Hogedrukreiniging",
        uitleg: "voor hardnekkig vuil.",
      },
      {
        titel: "Enzymatische reiniging",
        uitleg: "voor een natuurlijke aanpak.",
      },
      {
        titel: "Stoomreiniging",
        uitleg: "voor delicate of fragiele oppervlakken.",
      },
    ],
  },
  {
    nummer: "3",
    titel: "Voegen en nabehandeling",
    afbeelding: TerrasVoor,
    alt: "Voegen van de bestrating worden nagewerkt",
    tekst:
      "Na de reiniging verwijderen we het losse zand uit de voegen en vullen we ze opnieuw, zodat ze optimaal beschermd zijn tegen toekomstige vervuiling.",
  },
];

export default function Werkwijze() {
  return (
    <section className=" px-4 py-10 text-white sm:px-6">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-wide text-blue-500">
          Onze aanpak
        </p>

        <h2 className="mt-1 text-2xl font-extrabold uppercase sm:text-3xl">
          De juiste techniek voor het beste resultaat
        </h2>

        <div className="mt-5 grid gap-3 lg:grid-cols-3">
          {stappen.map((stap) => (
            <article
              key={stap.nummer}
              className="relative min-h-64 overflow-hidden rounded-lg border border-slate-400"
            >
              <div
                className="absolute inset-y-0 right-0 w-2/5"
                style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)" }}
              >
                <Image
                  src={stap.afbeelding}
                  alt={stap.alt}
                  fill
                  sizes="(min-width: 1024px) 15vw, 40vw"
                  className="object-cover"
                />
              </div>

              <div className="relative z-10 w-[70%] p-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl font-bold">
                    {stap.nummer}
                  </span>
                  <h3 className="text-sm font-bold uppercase leading-tight">
                    {stap.titel}
                  </h3>
                </div>

                {stap.tekst && (
                  <p className="mt-4 text-sm leading-relaxed text-slate-200">
                    {stap.tekst}
                  </p>
                )}

                {stap.methodes && (
                  <ul className="mt-4 space-y-3">
                    {stap.methodes.map((methode) => (
                      <li key={methode.titel} className="flex gap-3 text-sm">
                        <span
                          aria-hidden="true"
                          className="flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-600"
                        >
                          ✓
                        </span>
                        <span>
                          <strong className="block">{methode.titel}</strong>
                          <span className="text-slate-200">
                            {methode.uitleg}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}