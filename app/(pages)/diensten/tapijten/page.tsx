import Banner from "./Components/Banner";
import HeroSection from "./Components/HeroSection";
import UspBlok from "./Components/UspBlok";
import Waarom from "./Components/Waarom";
import Werkwijze from "./Components/Werkwijze";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Tapijten reinigen',
  description: 'Laat je tapijten professioneel reinigen door Carrein Services.',
  alternates: {
    canonical: '/diensten/tapijten',
  },
}
const Tapijten = () => {
  return (
    <>
      <HeroSection />
      <hr className="border-white/20 my-6" />
      <UspBlok />
      <hr className="border-white/20 my-6" />
      <Waarom/>
      <hr className="border-white/20 my-6" />
      <Werkwijze />
      <hr className="border-white/20 my-6" />
      <Banner />

    </>
  );
};

export default Tapijten;
