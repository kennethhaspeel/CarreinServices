"use client"

import HeroSection from "./Components/HeroSection";
import DienstenBalk from "./Components/DienstenBalk";
import Icoonbalk from "./Components/Icoonbalk";
import ImpregneerBlok from "./Components/ImpregneerBlok";
import OverOnsBlok from "./Components/OverOnsBlok";

export default function Home() {
  return (
    <div className="AchtergrondDonker">
      <HeroSection/>
       <hr className="border-white/20 my-6" />
      <DienstenBalk/>
      <hr className="border-white/20 my-6" />
      <Icoonbalk/>
      <hr className="border-white/20 my-6" />
      <ImpregneerBlok/>
       <hr className="border-white/20 my-6" />
       <OverOnsBlok/>
    </div>
  );
}
