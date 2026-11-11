import BannerAfbeelding from "../Afbeeldingen/banner_afbeelding.png";
import Image from "next/image";
import {  LeafIcon, LeatherIcon } from "@/app/(pages)/_components/IcoonFunctie";

const extras = [
  "Langere levensduur",
  "Soepel en zacht",
  "Voorkomt uitdroging, barstjes, ...",
  "Altijd een mooie uitstraling"
];

const ExtraBanner = () => {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="relative isolate overflow-hidden rounded-xl border border-white/10 bg-background">
          {/* Foto met overgang naar de achtergrond */}
          <div className="absolute left-0 top-0 -z-10 h-48 w-full lg:h-full lg:w-[45%]">
            <Image
              src={BannerAfbeelding}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-left"
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-background lg:bg-linear-to-r lg:from-transparent lg:via-background/50 lg:to-background" />
          </div>

          <div className="grid pt-40 lg:translate-x-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(22rem,1fr)] lg:pt-0">
            <div className="flex items-start gap-4 p-6 lg:py-8 lg:pl-[36%]">
              <LeatherIcon className="h-12 w-12 shrink-0" />
              <div>
                <h2 className="text-xl font-bold">
                  <span className="text-[#087cff]">Leder</span> verzorgen is leder <span className="text-[#087cff]">behouden</span>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  Hou je lederen zetel mooi en in topconditie
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 border-t border-white/20 p-6 lg:my-6 lg:border-l lg:border-t-0 lg:py-2">
              <LeafIcon className="h-9 w-9 shrink-0" />
              <div>
                <h3 className="font-bold">Het resultaat:</h3>
                <ul className="mt-2 space-y-1.5 text-sm text-white/85">
                  {extras.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#087cff]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExtraBanner;
