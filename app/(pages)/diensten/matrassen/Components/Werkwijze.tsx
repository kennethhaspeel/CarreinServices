import matrasreiniging from "../Afbeeldingen/matrasreinigingsmachine.png";
import mondstuk from "../Afbeeldingen/mondstuk_matras.png";
import Image from "next/image";

const voordelen = [
  "Verwijdert de hardnekkigste vlekken",
  "Reinigt zeer diep in de vezels",
  "Verwijdert onder andere geurtjes en bacteriën",
  "Fris, hygiënisch en uiterst proper resultaat",
];
const voordelen2 = [
  "Doodt bacteriën, virussen en huisstofmijt",
  "Vermindert allergieën en klachten",
  "Droge reiniging - direct gebruiksklaar",
  "Fris, schoon en gezond slaapcomfort",
];
const Werkwijze = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 p-4">
          <h1 className="max-w-3xl text-3xl font-black uppercase leading-tight sm:text-5xl">
            Twee mogelijkheden in onze{" "}
            <span className="text-[#087cff]">matrasreiniging</span>
          </h1>
        </div>
        <div className="m-4 grid grid-cols-1 items-stretch gap-4 md:grid-cols-2">
          <section className="h-full overflow-hidden rounded-xl bg-sky-50 shadow-sm">
            <div className="grid h-full md:grid-cols-[1.2fr_0.8fr]">
              <div className="flex flex-col p-6 pl-20">
                <h2 className="font-bold leading-tight text-slate-900">
                  DIEPTEREINIGING
                  <span className="block text-sm font-semibold">
                    (INJECTIE, EXTRACTIE EN STOOM)
                  </span>
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  Voor hardnekkige vlekken, diepgeworteld vuil en een grondige
                  reiniging. Met onze professionele injectie-extractiemachine en
                  stoom reinigen we de matras diep in de vezels. Ideaal voor
                  vlekken, geurtjes en een intensieve reiniging.
                </p>

                <ul className="mt-auto space-y-2 pt-4">
                  {voordelen.map((voordeel) => (
                    <li
                      key={voordeel}
                      className="flex items-center gap-3 text-sm text-slate-800"
                    >
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 20 20"
                          fill="none"
                          className="size-4"
                        >
                          <path
                            d="m5 10 3 3 7-7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {voordeel}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative min-h-64 md:min-h-88">
                <Image
                  src={mondstuk}
                  alt="Matras wordt professioneel gereinigd"
                  fill
                  sizes="(min-width: 768px) 20vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          <section className="h-full overflow-hidden rounded-xl bg-sky-50 shadow-sm">
            <div className="grid h-full md:grid-cols-[1.2fr_0.8fr]">
              <div className="flex flex-col p-6 pl-20">
                <h2 className="font-bold leading-tight text-slate-900">
                  ANTI-ALLERGENE REINIGING
                  <span className="block text-sm font-semibold">
                    (UV-LICHT, WARMTE EN ZUIGING)
                  </span>
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  Een droge, snelle en effectieve reiniging met geavanceerde
                  technologie. UV-licht doodt bacteriën, virussen en
                  huisstofmijt. Warmte verwijdert mijten en allergenen, terwijl
                  krachtige zuiging stof en huidschilfers opneemt.
                </p>

                <ul className="mt-auto space-y-2 pt-4">
                  {voordelen2.map((voordeel) => (
                    <li
                      key={voordeel}
                      className="flex items-center gap-3 text-sm text-slate-800"
                    >
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 20 20"
                          fill="none"
                          className="size-4"
                        >
                          <path
                            d="m5 10 3 3 7-7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {voordeel}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative min-h-64 md:min-h-88">
                <Image
                  src={matrasreiniging}
                  alt="Matras wordt professioneel gereinigd"
                  fill
                  sizes="(min-width: 768px) 20vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Werkwijze;
