import Image from "next/image";
import AanpakHout from "../Afbeeldingen/0-aanpak-hout.png"
import AanpakPlastic from "../Afbeeldingen/1-aanpak-plastic.png"
import AanpakBuitentextiel from "../Afbeeldingen/2-aanpak-buitentextiel.png"
const stappen = [
  {
    nummer: "1",
    titel: "Houten tuinmeubelen",
    afbeelding: AanpakHout,
    alt: "Houten tuinmeubelen",
    tekst:
      "Hout is een levend materiaal. We reinigen houten meubels, afsluitingen en poorten met enzymatische producten die het hout reinigen en niet beschadigen",
  },
  {
    nummer: "2",
    titel: "Plastic & Composiet",
    afbeelding: AanpakPlastic,
    alt: "Plastic tuinmeubelen",
    tekst:
      "We verwijderen vuil, groene aanslag en hardnekkige vlekken van kunststof en composiete tuinmeubelen, zodat ze er weer fris en als nieuw uitzien",
  },
  {
    nummer: "3",
    titel: "Buitentextiel",
    afbeelding: AanpakBuitentextiel,
    alt: "Buitentextiel",
    tekst:
      "Buitentextiel reinigen we diepgaand met een injectie-extractie machine, stoomreiniging of handreiniging. Als optie kunnen we het textiel ook nabehandelen met een beschermende coating",
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

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}