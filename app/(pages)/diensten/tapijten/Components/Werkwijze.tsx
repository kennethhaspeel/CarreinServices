import {
  SteamIcon,
  SprayBottleIcon,
} from "@/app/(pages)/_components/IcoonFunctie";
import { Icoon } from "@/app/types/IcoonSVG";
import TapîjtVoor from "../Afbeeldingen/tapijt_geel_voor.jpg";
import TapîjtNa from "../Afbeeldingen/tapijt_geel_na.jpg";
import Image from "next/image";

const stappen: Icoon[] = [
  {
    icon: SteamIcon,
    titel: "1. Dieptereiniging",
    omschrijving:
      "We reinigen uw tapijt met onze speciaal ontwikkelde machine die diep in de vezels reinigt en hardnekkig vuil verwijdert",
  },
  {
    icon: SprayBottleIcon,
    titel: "2. Reiniging",
    omschrijving:
      "We verwijderen vlekken, huisdierharen, huisstofmijt en onaangename geurtjes",
  },
];
const Werkwijze = () => {
  return (
    <>
      <section className="px-4 py-10 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.7fr_1fr]">
          <div>
           <p className="font-bold uppercase tracking-wide text-blue-500">
              onze aanpak
            </p>
            <h2 className="text-3xl font-extrabold uppercase">
              zorgvuldige reiniging en verzorging
            </h2>
            <div className="mt-8 lg:mt-16">
              <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {stappen.map((stap, index) => (
                  <li
                    key={index}
                    className="relative flex flex-col items-center text-center"
                  >
                    <span className="flex h-18 w-18 items-center justify-center rounded-full border-2 border-white/80">
                      <stap.icon className="h-12 w-12" />
                    </span>
                    <h3 className="mt-3 font-bold">{stap.titel}</h3>
                    <p className="mt-1 max-w-[16rem] text-sm text-white/75">
                      {stap.omschrijving}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
                    <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-2/3 overflow-hidden rounded-lg">
              <Image
                src={TapîjtVoor}
                alt="Tapijt voor reiniging"
                fill
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="object-cover"
              />
              <span className="absolute bottom-2 left-2 rounded bg-slate-950 px-4 py-2 font-bold">
                VOOR
              </span>
            </div>

            <div className="relative aspect-2/3 overflow-hidden rounded-lg">
              <Image
                src={TapîjtNa}
                alt="Tapijt na reiniging"
                fill
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="object-cover"
              />
              <span className="absolute bottom-2 left-2 rounded bg-blue-600 px-4 py-2 font-bold">
                NA
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
        <h2 className="inline-block border-b-4 border-[#0868ed] pb-2 text-xl font-bold">
          Onze aanpak
        </h2>

        <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stappen.map((stap, index) => (
            <li
              key={stap.titel}
              className="relative flex flex-col items-center text-center"
            >
              <span className="flex h-18 w-18 items-center justify-center rounded-full border-2 border-white/80">
                <stap.icon className="h-10 w-12" />
              </span>
              <h3 className="mt-3 font-bold">{stap.titel}</h3>
              <p className="mt-1 max-w-[16rem] text-sm text-white/75">
                {stap.omschrijving}
              </p>
              {index < stappen.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-4 top-5 hidden text-xl text-white/60 lg:block"
                >
                  ›
                </span>
              )}
            </li>
          ))}
          <li>
            <Image
              src={TapîjtVoor}
              alt="Tapijt voor reiniging"
              className="h-48 w-48 object-cover"
            />
          </li>
          <li>
            <Image
              src={TapîjtNa}
              alt="Tapijt na reiniging"
              className="h-48 w-48 object-cover"
            />
          </li>
        </ol>
      </section> */}
    </>
  );
};

export default Werkwijze;
