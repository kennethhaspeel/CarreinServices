import "./test.css";
import Image from "next/image";
import voorna from "./afbeeldingen/voorna.png";
const services = [
  "Verwijdert hardnekkige vlekken",
  "Neutraliseert geurtjes",
  "Hygiënisch en allergievriendelijk",
  "Geschikt voor alle types stoffen zetels",
  "Snelle droogtijd",
];

const steps = [
  {
    icon: "search",
    title: "1. Analyse",
    text: "We bekijken de stof, vlekken en vervuiling.",
  },
  {
    icon: "clean",
    title: "2. Dieptereiniging",
    text: "Grondige reiniging met onze injectie-extractie machine.",
  },
  {
    icon: "steam",
    title: "3. Stoomb behandeling".replace(" ", ""),
    text: "Antibacteriële stoom tot 120°C voor een extra hygiënisch resultaat.",
  },
  {
    icon: "sparkle",
    title: "4. Fris en verzorgd",
    text: "Een zichtbaar schonere, frisse en aangename zetel.",
  },
];

function Icon({ name, className = "" }:{name: string, className?: string}) {
  return (
    <svg className={className} aria-hidden="true">
      <use href={`#icon-${name}`} />
    </svg>
  );
}

function IconDefinitions() {
  return (
    <svg className="icon-definitions" aria-hidden="true">
      <symbol id="icon-leaf" viewBox="0 0 24 24">
        <path d="M20 4C11 4 5 7 5 14a6 6 0 0 0 6 6c7 0 9-7 9-16Z" />
        <path d="M3 21c4-5 8-8 13-11" />
      </symbol>
      <symbol id="icon-shield" viewBox="0 0 24 24">
        <path d="M12 3 21 7v5c0 5-4 8-9 10-5-2-9-5-9-10V7l9-4Z" />
        <path d="m9 12 2 2 4-4" />
      </symbol>
      <symbol id="icon-home" viewBox="0 0 24 24">
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v11h14V10M9 21v-7h6v7" />
      </symbol>
      <symbol id="icon-calendar" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M7 3v4m10-4v4M3 10h18" />
      </symbol>
      <symbol id="icon-search" viewBox="0 0 24 24">
        <circle cx="10.5" cy="10.5" r="7.5" />
        <path d="m16 16 5 5m-10.5-14v7m-3.5-3.5h7" />
      </symbol>
      <symbol id="icon-clean" viewBox="0 0 24 24">
        <path d="M4 20 20 4M7 4l13 13M4 9l4-4m8 14 4-4" />
        <path d="M12 3c-2 2-3 3.5-3 5a3 3 0 0 0 6 0c0-1.5-1-3-3-5Zm0 13c-2 2-3 3.5-3 5a3 3 0 0 0 6 0c0-1.5-1-3-3-5Z" />
      </symbol>
      <symbol id="icon-steam" viewBox="0 0 24 24">
        <path d="M6 3c-3 3 3 4 0 7m6-7c-3 3 3 4 0 7m6-7c-3 3 3 4 0 7M4 14h16m-14 4h12" />
      </symbol>
      <symbol id="icon-sparkle" viewBox="0 0 24 24">
        <path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z" />
        <path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15ZM5 3l.7 1.8L7.5 5.5l-1.8.7L5 8l-.7-1.8L2.5 5.5l1.8-.7L5 3Z" />
      </symbol>
    </svg>
  );
}

export default function SofaCleaningPage() {
  return (
    <main className="sofa-page">
      <IconDefinitions />

      <header className="hero">
       
        <div className="hero-image-placeholder" />
        <div className="hero-content">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            Home <span>›</span> Diensten <span>›</span> Stoffen zetels
          </nav>
          <h1>
            STOFFEN ZETELS
            <br />
            PROFESSIONEEL <span>REINIGEN</span>
          </h1>
          <p>
            Dieptereiniging van stoffen zetels voor een frisse,
            <br className="desktop-break" /> hygiënische en verzorgde woonomgeving.
          </p>
        </div>

        <div className="feature-strip">
          <div className="top-feature">
            <Icon name="leaf" />
            <p><strong>Diepe en grondige reiniging</strong><br />Tot in de vezels.</p>
          </div>
          <div className="top-feature">
            <Icon name="shield" />
            <p><strong>Hygiënisch</strong><br />Verwijdert bacteriën, allergenen en huisstofmijt.</p>
          </div>
          <div className="top-feature">
            <Icon name="home" />
            <p><strong>Aan huis service</strong><br />In heel België.</p>
          </div>
          <div className="top-feature">
            <Icon name="calendar" />
            <p><strong>Snelle service</strong><br />Vlotte planning op een moment dat past.</p>
          </div>
        </div>
      </header>

      <section className="intro">
        <div className="before-after">
          {/* <div className="photo-placeholder photo-before">
            <span className="photo-caption">VOOR</span>
          </div>
          <div className="photo-placeholder photo-after">
            <span className="photo-caption photo-caption-blue">NA</span>
          </div> */}
           <Image src={voorna} alt="Voor en na" />
        </div>

        <div className="intro-copy">
          <h2><span>Dieptereiniging van</span> stoffen zetels</h2>
          <p>
            Wij reinigen je stoffen zetel professioneel met een krachtige
            injectie-extractie machine. Vuil, vlekken, geurtjes en allergenen
            worden diep uit de vezels verwijderd, waardoor je zetel weer fris,
            schoon en veilig is.
          </p>
          <ul>
            {services.map((service) => (
              <li key={service}><span className="check">✓</span>{service}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="process">
        <h2>Zo reinigen wij jouw zetel</h2>
        <div className="steps">
          {steps.map((step) => (
            <article className="step" key={step.title}>
              <div className="step-icon"><Icon name={step.icon} /></div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="extras">
        <div className="extra-photo-placeholder" />
        <div className="extra-protection">
          <Icon name="shield" />
          <div>
            <h2>Extra bescherming</h2>
            <p>
              Laat je zetel na de reiniging behandelen met een water- en
              vlekafstotende impregnatie. Zo blijft je zetel langer schoon
              en is hij beter beschermd tegen dagelijkse vervuiling.
            </p>
          </div>
        </div>
        <div className="also-possible">
          <Icon name="leaf" />
          <div>
            <h2>Ook mogelijk</h2>
            <ul>
              <li>Antibacteriële stoombehandeling</li>
              <li>Osmosebehandeling tegen dierengeuren</li>
              <li>Zetelparfum voor een frisse geur</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}