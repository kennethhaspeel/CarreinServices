import Image from "next/image";
import image_voor2 from "../Afbeeldingen/matras_voor2.png";
import image_na2 from "../Afbeeldingen/matras_na2.png";
import image_resultaat from "../Afbeeldingen/resultaat.png";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const ResultaatBlok = () => {
  return (
    <>
      <section className="px-4 py-8 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-extrabold uppercase text-blue-500 sm:text-2xl">
              Het verschil spreekt voor zich
            </h2>
            <p className="mb-3 text-sm text-slate-200 sm:text-base">
              Voor en na resultaat
            </p>
            <div className="mt-auto w-full pt-4">
              <div className="aspect-2/1 overflow-hidden rounded-lg md:aspect-[2.8/1]">
                <ReactCompareSlider
                  className="h-full w-full"
                  style={{ height: "100%", width: "100%" }}
                  itemOne={
                    <div className="relative h-full w-full">
                      <ReactCompareSliderImage
                        src={image_voor2.src}
                        alt="Matras voor de reiniging"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  }
                  itemTwo={
                    <div className="relative h-full w-full">
                      <ReactCompareSliderImage
                        src={image_na2.src}
                        alt="Matras na de reiniging"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex h-full flex-col">
            <h2 className="text-xl font-extrabold uppercase text-blue-500 sm:text-2xl">
              Dit halen we uit uw matras
            </h2>
            <p className="mb-3 text-sm text-slate-200 sm:text-base">
              Deze allergenen en viezigheid halen we uit uw matras met onze
              anti-allergene reiniging.
            </p>

            <div className="relative mt-auto aspect-2/1 w-full overflow-hidden rounded-lg md:aspect-[2.8/1]">
              <Image
                src={image_resultaat.src}
                alt="Stof en allergenen uit een matras"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResultaatBlok;
