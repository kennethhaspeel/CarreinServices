import Image from "next/image";
import Houten from "../Afbeeldingen/0-tuinmeubelen-hout-uitsnede.png";
import Plastic from "../Afbeeldingen/1-tuinmeubelen-plastic-uitsnede.png";
import Composiet from "../Afbeeldingen/2-tuinmeubelen-composiet-uitsnede.png";
import Buitentextiel from "../Afbeeldingen/3-tuinmeubelen-buitentextiel-uitsnede.png";
const oppervlakken = [
  { naam: "Houten tuimeubelen", afbeelding: Houten,uitleg:"Tafels, stoelen, banken, loungemeubelen, afsluitingen en houten poorten" },
  { naam: "Plastic tuinmeubelen", afbeelding: Plastic,uitleg:"Tuinstoelen, tafels, ligbedden en andere kunststoffen meubelen" },
  { naam: "Composiet tuinmeubelen", afbeelding: Composiet,uitleg:"Poly rattan, wicker, aluminium, metaal en andere composietmaterialen" },
  { naam: "Buitentextiel", afbeelding: Buitentextiel,uitleg:"Kussens, loungesets, parasoldoeken, zonnetenten en andere outdoor stoffen" },

];

const GeschiktVoor = () => {
  return (
      <section className=" px-4 py-8 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="font-extrabold text-2xl sm:text-3xl uppercase tracking-wide">
         <span className="text-blue-500">wij reinigen</span> verschillende soorten tuinmeubelen
        </p>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
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

              <h3 className="px-4 py-3 text-sm font-medium">
                {oppervlak.naam}
              </h3>
              <p className="px-4 py-3 text-sm">
                {oppervlak.uitleg}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GeschiktVoor