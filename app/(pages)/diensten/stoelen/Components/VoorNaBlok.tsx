import { CheckBox } from '@/app/(pages)/_components/IcoonFunctie'
import Image from 'next/image'
import VoorImage from '../Afbeeldingen/stoel_voor.png'
import NaImage from '../Afbeeldingen/stoel_na.png'


const voordelen = [
  "Grondige reiniging",
  "Behoud van kwaliteit",
  "Geschikt voor alle stoelen",
  "Frisse en verzorgde look",
];

const VoorNaBlok = () => {
  return (
       <section className="mx-auto grid max-w-7xl gap-8 border-t border-white/10 px-5 py-10 sm:px-8 lg:grid-cols-[2.2fr_1fr]">
        <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-xl">
          {[
            { src: VoorImage, label: "Voor", badge: "bg-black/80" },
            { src: NaImage, label: "Na", badge: "bg-[#0868ed]" },
          ].map(({ src, label, badge }) => (
            <div key={label} className="relative aspect-3/4 sm:aspect-square">
              <Image src={src} alt={`Zetel ${label.toLowerCase()} de reiniging`} fill sizes="(max-width: 1024px) 50vw, 30vw" className="object-cover" />
              <span className={`hidden md:block absolute bottom-3 left-3 rounded px-4 py-1 text-sm font-bold uppercase ${badge}`}>
                {label}
              </span>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-black leading-tight text-[#087cff]">
            Waarom reiniging van <span className="text-white">stoelen</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/85">
            Iedereen zit graag op een schone en verzorgde stoel.
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            {voordelen.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckBox />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
  )
}

export default VoorNaBlok