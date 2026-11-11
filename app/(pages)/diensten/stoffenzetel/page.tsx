
import HeroSection from './Components/HeroSection'
import UspBlok from './Components/UspBlok'
import VoorNaBlok from './Components/VoorNaBlok'
import Werkwijze from './Components/Werkwijze'
import ExtraBescherming from './Components/ExtraBescherming'
const StoffenZetel = () => {
  return (
    <>
      <HeroSection />
       <hr className="border-white/20 my-6" />
      <UspBlok />
       <hr className="border-white/20 my-6" />
      <VoorNaBlok />
       <hr className="border-white/20 my-6" />
      <Werkwijze />
       <hr className="border-white/20 my-6" />
      <ExtraBescherming />

    </>
  )
}

export default StoffenZetel