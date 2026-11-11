import CijferBlok from "./Components/CijferBlok";
import HeroSection from "./Components/HeroSection";
import VerhaalBlok from "./Components/VerhaalBlok";
import PartnerBlok from "./Components/PartnerBlok";
import QuoteBlok from "./Components/QuoteBlok";

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