import HeroSection from "./Components/HeroSection";
import VoorNaBlok from "./Components/VoorNaBlok";
import Werkwijze from "./Components/Werkwijze";
import ExtraBanner from "./Components/ExtraBanner";
import UspBlok from "./Components/UspBlok";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Stoelen reinigen',
  description: 'Laat je stoelen professioneel reinigen door Carrein Services.',
  alternates: {
    canonical: '/diensten/stoelen',
  },
}
export default function Stoelen() {
  return (
    <>
      <HeroSection />
       <hr className="border-white/20 my-6" />
      <UspBlok/>
       <hr className="border-white/20 my-6" />
       <VoorNaBlok />
        <hr className="border-white/20 my-6" />
      <Werkwijze />
       <hr className="border-white/20 my-6" />
      <ExtraBanner />

    </>
  );
}