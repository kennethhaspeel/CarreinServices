"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Afbeeldingen/logo.png";
const services = [
  { label: "Stoffen Zetel", href: "/diensten/stoffenzetel" },
   { label: "Lederen Zetel", href: "/diensten/lederenzetel" },
   { label: "Stoelen", href: "/diensten/stoelen" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020d13] text-white">
      <div className="mx-auto flex min-h-19 max-w-360 items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <div className="flex shrink-0 items-center gap-3">
          <Link href="/" aria-label="Carrein home" className="leading-none">
            <Image src={Logo} alt="Carrein Services" className="h-auto w-64" />
          </Link>
        </div>

        <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
          <div className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
              className="flex items-center gap-1 py-2 hover:text-[#66adff]"
            >
              DIENSTEN
              <svg
                aria-hidden="true"
                viewBox="0 0 12 12"
                className={`h-3 w-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
              >
                <path
                  d="m2 4 4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full mt-2 w-56 rounded-md border border-white/10 bg-[#07151d] py-2 shadow-xl">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2.5 hover:bg-white/5 hover:text-[#66adff]"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/voor-na" className="py-2 hover:text-[#66adff]">
            VOOR &amp; NA
          </Link>
          <Link href="/over-carrein" className="py-2 hover:text-[#66adff]">
            OVER CARREIN
          </Link>
          <Link href="/contact" className="py-2 hover:text-[#66adff]">
            CONTACT
          </Link>
        </nav>

        <Link
          href="/offerte-aanvragen"
          className="hidden shrink-0 items-center gap-3 rounded-md AchtergrondBlauw px-5 py-3 text-sm font-bold shadow-[0_0_0_1px_#1684ff] transition hover:bg-[#087cff] sm:inline-flex"
        >
          OFFERTE AANVRAGEN
          <span aria-hidden="true" className="text-xl leading-none">
            →
          </span>
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded p-2 hover:bg-white/10 lg:hidden"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
          >
            {menuOpen ? (
              <path
                d="m6 6 12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="2"
              />
            ) : (
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 bg-[#020d13] px-5 py-4 lg:hidden">
          <div className="mx-auto flex max-w-360 flex-col gap-1 text-sm font-semibold">
            <Link href="/" onClick={() => setMenuOpen(false)} className="py-2">
              HOME
            </Link>
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
              className="flex items-center justify-between py-2 text-left"
            >
              DIENSTEN{" "}
              <span aria-hidden="true">{servicesOpen ? "−" : "+"}</span>
            </button>
            {servicesOpen && (
              <div className="flex flex-col border-l border-white/20 pl-4">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setMenuOpen(false)}
                    className="py-2 text-white/80 hover:text-[#66adff]"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
            <Link
              href="/voor-na"
              onClick={() => setMenuOpen(false)}
              className="py-2"
            >
              VOOR &amp; NA
            </Link>
            <Link
              href="/over-carrein"
              onClick={() => setMenuOpen(false)}
              className="py-2"
            >
              OVER CARREIN
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="py-2"
            >
              CONTACT
            </Link>
            <Link
              href="/offerte-aanvragen"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex w-fit items-center gap-3 rounded-md bg-[#0868ed] px-5 py-3 font-bold hover:bg-[#0758cb]"
            >
              OFFERTE AANVRAGEN{" "}
              <span aria-hidden="true" className="text-xl">
                →
              </span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
