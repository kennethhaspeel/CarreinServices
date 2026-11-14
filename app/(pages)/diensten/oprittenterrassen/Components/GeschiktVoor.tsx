import Image from "next/image";
import HoutenTerras from "../Afbeeldingen/0-houten-terras-uitsnede.png";
import StenenTerras from "../Afbeeldingen/1-stenen-terras-uitsnede.png";
import BetonnenTerras from "../Afbeeldingen/2-betonnen-terras-uitsnede.png";
import KlinkerTerras from "../Afbeeldingen/3-klinkerterras-uitsnede.png";
import Oprit from "../Afbeeldingen/4-oprit-uitsnede.png";
const oppervlakken = [
  { naam: "Houten terrassen", afbeelding: HoutenTerras },
  { naam: "Stenen terrassen", afbeelding: StenenTerras },
  { naam: "Betonnen terrassen", afbeelding: BetonnenTerras },
  { naam: "Klinkerterrassen", afbeelding: KlinkerTerras },
  { naam: "Opritten", afbeelding: Oprit },
];

const GeschiktVoor = () => {
  return (
      <section className=" px-4 py-8 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-xl font-extrabold uppercase text-blue-500 sm:text-2xl">
          Geschikt voor elk type oppervlak
        </h2>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {oppervlakken.map((oppervlak) => (
            <article
              key={oppervlak.naam}
              className="overflow-hidden rounded-lg border border-slate-400"
            >
              <div className="relative aspect-[2.4/1]">
                <Image
                  src={oppervlak.afbeelding}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <h3 className="bg-[#03111d] px-4 py-3 text-sm font-medium">
                {oppervlak.naam}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GeschiktVoor