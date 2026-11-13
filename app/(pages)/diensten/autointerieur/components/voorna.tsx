import voor_01 from "../afbeeldingen/01_voor.jpg"
import na_01 from "../afbeeldingen/01_na.jpg"
import { SliderComponent } from "@/app/(pages)/voor-na/SliderComponent";

const Vergelijkingen = [
  {
    title: "Automatten",
    before: voor_01,
    after: na_01,
  },
  {
    title: "Achterbank",
    before: voor_01,
    after: na_01,
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
    <section className="px-4 py-8 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase text-blue-500">
          Voor en na resultaat
        </p>
        <h2 className="mb-5 text-2xl font-extrabold uppercase">
          Het verschil spreekt voor zich
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {Vergelijkingen.map((item) => (
            <div
              key={item.title}
              className="aspect-4/3 overflow-hidden rounded-lg border border-slate-600 sm:aspect-[2.1/1]"
              aria-label={`Voor- en na-resultaat: ${item.title}`}
            >
              <SliderComponent foto_voor={item.before} foto_na={item.after} />
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default VoorNa