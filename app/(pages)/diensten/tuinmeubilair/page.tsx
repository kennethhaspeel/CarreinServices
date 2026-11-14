import GeschiktVoor from "./Components/GeschiktVoor"
import HeroSection from "./Components/HeroSection"
import UspBlok from "./Components/UspBlok"
import Werkwijze from "./Components/Werkwijze"
import VoorNa from "./Components/voorna"
import Waarom from "./Components/Waarom"




const Tuinmeubilair = () => {
  return (
    <>
    <HeroSection />
     <hr className="border-white/20 my-6" />
     <UspBlok/>
     <hr className="border-white/20 my-6" />
     <GeschiktVoor/>
     <hr className="border-white/20 my-6" />
     <Werkwijze/>
     <hr className="border-white/20 my-6" />
     <VoorNa/>
     <hr className="border-white/20 my-6" />
     <Waarom/>
    </>
  )
}

export default Tuinmeubilair