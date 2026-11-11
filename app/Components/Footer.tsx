// Footer.tsx
import Link from "next/link";
import Image from "next/image";
import Logo from "./Afbeeldingen/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Diensten", href: "/diensten" },
  { label: "Voor & na", href: "/voor-na" },
  { label: "Over Carrein", href: "/over-carrein" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Zetels & salons", href: "/diensten/zetels" },
  { label: "Tapijten", href: "/diensten/tapijten" },
  { label: "Matrassen", href: "/diensten/matrassen" },
  { label: "Auto-interieur", href: "/diensten/auto-interieur" },
  { label: "Tuinmeubelen", href: "/diensten/tuinmeubelen" },
  { label: "Opritten & terrassen", href: "/diensten/opritten-terrassen" },
];

const legalLinks = [
  { label: "Privacybeleid", href: "/privacy" },
  { label: "Algemene voorwaarden", href: "/voorwaarden" },
  { label: "Cookies", href: "/cookies" },
];

const headingClass =
  "text-xs font-bold uppercase tracking-[0.25em] text-[#087cff]";
const linkClass = "text-white/80 transition hover:text-[#66adff]";

export default async function Footer() {
	async function getJaartal() {
  'use cache'
  return new Date().getFullYear()
}
const Jaartal = await getJaartal();
  return (
    <footer className="border-t border-white/10 bg-background text-white mt-5">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <Link href="/" aria-label="Carrein Services home">
              <Image src={Logo} alt="Carrein Services" className="h-auto w-48" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/80">
              Professionele dieptereiniging aan huis in Wervik en heel
              West-Vlaanderen. Voor een frisser, hygiënischer en gezonder leven.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="https://www.facebook.com/Carreinservices"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-[#087cff] hover:text-[#66adff]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 21v-7.5H16l.5-3h-3V8.6c0-.9.3-1.5 1.6-1.5H16.6V4.4C16.3 4.4 15.4 4.3 14.4 4.3c-2.2 0-3.7 1.3-3.7 3.8v2.4H8.2v3h2.5V21h2.8Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/carreinservices.be/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-[#087cff] hover:text-[#66adff]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="4" y="4" width="16" height="16" rx="5" />
                  <circle cx="12" cy="12" r="3.5" />
                  <circle cx="17" cy="7" r=".8" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          <nav aria-label="Navigatie">
            <h3 className={headingClass}>Navigatie</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Diensten">
            <h3 className={headingClass}>Diensten</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className={headingClass}>Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>Wervik en omgeving</li>
              <li>
                <a href="tel:+32471875540" className={linkClass}>
                  +32 471 87 55 40
                </a>
              </li>
              <li>
                <a href="mailto:info@carrein.be" className={linkClass}>
                  info@carreinservices.be
                </a>
              </li>
              <li>BE0893075436</li>
            </ul>

            <Link
              href="/offerte-aanvragen"
              className="mt-5 inline-flex items-center gap-3 rounded-md bg-[#0868ed] px-5 py-3 text-sm font-bold uppercase transition hover:bg-[#0758cb]"
            >
              Offerte aanvragen
              <span aria-hidden="true" className="text-lg">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {Jaartal} Carrein Services. Alle rechten voorbehouden.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-[#66adff]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}