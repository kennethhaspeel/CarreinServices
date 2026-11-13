import HeroSection from "./Components/HeroSection";
import UspBlok from "./Components/UspBlok";
import Werkwijze from "./Components/Werkwijze";
import ResultaatBlok from "./Components/ResultaatBlok";
import WerkwijzeIcoonBalk from "./Components/WerkwijzeIcoonBalk";
import Banner from "./Components/Banner";
export default function Matrassen() {
  return (
    <>
      <HeroSection />
      <hr className="border-white/20 my-6" />
      <UspBlok />
      <hr className="border-white/20 my-6" />
      <Werkwijze />
      <hr className="border-white/20 my-6" />
      <ResultaatBlok />
      <hr className="border-white/20 my-6" />
      <WerkwijzeIcoonBalk />
      <hr className="border-white/20 my-6" />
      <Banner />
    </>
  );
}
