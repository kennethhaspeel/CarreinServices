import React from 'react'
import Image from "next/image";
import QuoteImage from "../Afbeeldingen/zetelachtergrond.png";

const QuoteBlok = () => {
  return (
    <>
          <section className="relative isolate overflow-hidden">
        <Image src={QuoteImage} alt="" fill sizes="100vw" className="-z-20 object-cover object-right" />
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-background/90 to-background/60 md:bg-linear-to-r md:from-background md:via-background/80 md:to-transparent" />
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
          <figure className="max-w-xl">
            <span aria-hidden="true" className="block font-serif text-7xl leading-none text-[#087cff]">“</span>
            <blockquote className="-mt-4 leading-relaxed text-white/90">
              Onze missie is om meubels en interieurs opnieuw fris, verzorgd en aangenaam te maken.
              Met kennis, passie en de juiste technieken zorgen we voor een resultaat waarop onze
              klanten kunnen vertrouwen. Zo helpen we materialen langer mee te gaan.
            </blockquote>
            <figcaption className="mt-5 text-sm font-semibold">— Carrein Services</figcaption>
          </figure>
        </div>
      </section></>
  )
}

export default QuoteBlok