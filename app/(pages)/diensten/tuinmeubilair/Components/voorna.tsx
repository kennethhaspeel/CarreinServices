import voor_01 from "../Afbeeldingen/01_voor.jpg";
import na_01 from "../Afbeeldingen/01_na.jpg";
import voor_02 from "../Afbeeldingen/02_voor.jpg";
import na_02 from "../Afbeeldingen/02_na.jpg";
import { SliderComponent } from "@/app/(pages)/voor-na/SliderComponent";
import Image from "next/image";

const resultaten = [
  {
    title: "Automatten",
    before: voor_01,
    after: na_01,
  },
  {
    title: "Achterbank",
    before: voor_02,
    after: na_02,
  },
  {
    title: "Lederen stoel",
    before: voor_01,
    after: na_01,
  },
];
const VoorNa = () => {
  return (
    <>
      <section className="px-4 py-2 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase text-blue-500">
            Voor en na resultaat
          </p>
          <h2 className="mb-5 text-2xl font-extrabold uppercase">
            Het verschil spreekt voor zich
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {resultaten.map((resultaat) => (
              <div key={resultaat.title} className="grid grid-cols-2 gap-2">

                  <div
                    key={resultaat.title + "-voor"}
                    className="relative aspect-square overflow-hidden rounded-lg border border-slate-500"
                  >
                    <Image
                      src={resultaat.before}
                      alt={`${resultaat.title} voor reiniging`}
                      fill
                      sizes="(min-width: 768px) 16vw, 50vw"
                      className="object-cover"
                    />
                    <span
                      className="absolute bottom-2 left-2 rounded px-4 py-2 text-sm font-bold text-white bg-slate-950"
                    >
                      VOOR
                    </span>
                  </div>
                  <div
                    key={resultaat.title + "-na"}
                    className="relative aspect-square overflow-hidden rounded-lg border border-slate-500"
                  >
                    <Image
                      src={resultaat.after}
                      alt={`${resultaat.title} na reiniging`}
                      fill
                      sizes="(min-width: 768px) 16vw, 50vw"
                      className="object-cover"
                    />
                    <span
                      className="absolute bottom-2 left-2 rounded px-4 py-2 text-sm font-bold text-white bg-blue-600"
                    >
                      NA
                    </span>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default VoorNa;
