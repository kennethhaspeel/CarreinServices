import HeroSection from "./components/HeroSection";
import UspBlok from "./components/UspBlok";
import Waarom from "./components/Waarom";
import Aanbod from "./components/aanbod";
import VoorNa from "./components/voorna";
import ResultaatBlok from "./components/ResultaatBlok";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Auto-interieur reinigen',
  description: 'Laat je auto-interieur professioneel reinigen door Carrein Services.',
  alternates: {
    canonical: '/diensten/autointerieur',
  },
}
const AutoInterieur = () => {
  return (
    <>
      <HeroSection />
      <hr className="border-white/20 my-6" />
      <UspBlok />
      <hr className="border-white/20 my-6" />
      <Waarom />
      <hr className="border-white/20 my-6" />
      <Aanbod />
      <hr className="border-white/20 my-6" />
      <VoorNa />
      <hr className="border-white/20 my-6" />
      <ResultaatBlok />
    </>
  );
};

export default AutoInterieur;
