import terras_voor from "../Afbeeldingen/terras_voor.png"
import terras_na from "../Afbeeldingen/terras_na.png"
import { SliderComponent } from "@/app/(pages)/voor-na/SliderComponent";

const Vergelijkingen = [
  {
    title: "Automatten",
    before: terras_voor,
    after: terras_na,
  },
  {
    title: "Achterbank",
    before: terras_voor,
    after: terras_na,
  },
  {
    title: "Lederen stoel",
    before: terras_voor,
    after: terras_na,
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