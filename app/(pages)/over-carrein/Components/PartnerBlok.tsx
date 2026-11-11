import React from 'react'
const eyebrow = "text-xs font-bold uppercase tracking-[0.25em] text-[#087cff]";
const partners = ["Delmi Decor", "Meubelen Defossez", "Extremis", "Jori", "Louis Vuitton"];

const PartnerBlok = () => {
  return (
    <>
          <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className={eyebrow}>Onze partners &amp; vertrouwen in onze service</p>
            <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">In goed gezelschap</h2>
            <p className="mt-3 max-w-md text-white/80">
              We zijn trots dat gerenommeerde bedrijven en merken vertrouwen op onze expertise, ervaring en professionaliteit.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-6 text-center sm:grid-cols-3">
            {/* Vervang de tekst door <Image> met het logo van de partner */}
            {partners.map((name) => (
              <li key={name} className="flex h-16 items-center justify-center rounded-md border border-white/10 px-3 font-semibold text-white/90">
                {name}
              </li>
            ))}
            <li className="flex h-16 items-center justify-center text-sm text-white/70">En nog vele andere particulieren en bedrijven…</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default PartnerBlok