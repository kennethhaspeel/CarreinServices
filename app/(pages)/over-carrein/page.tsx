import CijferBlok from "./Components/CijferBlok";
import HeroSection from "./Components/HeroSection";
import VerhaalBlok from "./Components/VerhaalBlok";
import PartnerBlok from "./Components/PartnerBlok";
import QuoteBlok from "./Components/QuoteBlok";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Over Carrein Services',
  description: 'Leer meer over Carrein Services en onze professionele reinigingsdiensten.',
  alternates: {
    canonical: '/over-carrein',
  },
}
export default function OverOnsPage() {
  return (
    <>
      <HeroSection />
      <VerhaalBlok />
      <CijferBlok/>
     
      <PartnerBlok />
       <QuoteBlok />
    </>
  )
}