"use client"
import HeroSection from "./(pages)/_components/Home/HeroSection";
import IcoonBalk from "./(pages)/_components/Home/IcoonBalk";

export default function Home() {
  return (
    <div className="AchtergrondDonker">
      <HeroSection/>
      <hr className="border-white/20 my-6" />
      <IcoonBalk/>
       <hr className="border-white/20 my-6" />
       
    </div>
  );
}
