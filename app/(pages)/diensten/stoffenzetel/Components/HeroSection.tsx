import Image from "next/image";
import HeroImage from "../Afbeeldingen/hero.png"; // Adjust the path as needed

const HeroSection = () => {
  return (
    <>
<section className="relative isolate overflow-hidden bg-background">
  <div className="absolute inset-y-0 right-0 -z-20 w-full md:w-3/4">
    <Image
      src={HeroImage}
      alt=""
      fill
      priority
      sizes="(max-width: 768px) 100vw, 75vw"
      className="object-cover object-right"
    />


    <div className="absolute inset-0 bg-background/75 md:bg-transparent md:bg-linear-to-r md:from-background md:via-background/70 md:to-background/20" />
  </div>

  <div className="mx-auto max-w-7xl px-5 pb-8 pt-12 sm:px-8">
    <h1 className="max-w-3xl text-3xl font-black uppercase leading-tight sm:text-5xl">
      Stoffen zetels professioneel{" "}
      <span className="text-[#087cff]">reinigen</span>
    </h1>

    <p className="mt-4 max-w-xl text-lg text-white/90">
      Dieptereiniging van stoffen zetels voor een frisse, hygiënische en
      verzorgde woonomgeving.
    </p>

  </div>
</section>
    </>
  );
};

export default HeroSection;
