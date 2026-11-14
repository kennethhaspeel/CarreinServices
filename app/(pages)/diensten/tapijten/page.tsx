import Banner from "./Components/Banner";
import HeroSection from "./Components/HeroSection";
import UspBlok from "./Components/UspBlok";
import Waarom from "./Components/Waarom";
import Werkwijze from "./Components/Werkwijze";
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
