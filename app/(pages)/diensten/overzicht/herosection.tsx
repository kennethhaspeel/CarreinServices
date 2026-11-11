import "./herosection.css";
import HeroZetelAfstotend from "./Afbeeldingen/HeroZetelAfstotend.png";
import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="services-hero">
      <div className="hero-image">
        <Image
          src={HeroZetelAfstotend}
          alt="Waterafstotende zetel"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover object-[100%_center]"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>
            ONZE <span>DIENSTEN</span>
          </h1>

          <p>
            Professionele reiniging en bescherming voor een fris, hygiënisch en
            duurzaam resultaat.
          </p>
        </div>

        <div className="usp-bar">
          <div className="usp-item">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M20 3C12 3 5 7 5 15c0 4 3 6 7 6 8 0 12-7 12-18z" />
              <path d="M8 16c2-4 6-8 12-12" />
            </svg>

            <div>
              <h3>Milieuvriendelijk</h3>
              <p>Veilige en doeltreffende producten.</p>
            </div>
          </div>

          <div className="usp-item">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 2l8 3v6c0 6-3.5 9.5-8 11-4.5-1.5-8-5-8-11V5l8-3z" />
            </svg>

            <div>
              <h3>Veilig en gezond</h3>
              <p>Vrij van allergenen en bacteriën.</p>
            </div>
          </div>

          <div className="usp-item">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M3 10.5L12 3l9 7.5" />
              <path d="M5 9v11h14V9" />
              <path d="M9 20v-6h6v6" />
            </svg>

            <div>
              <h3>Aan huis service</h3>
              <p>In heel België.</p>
            </div>
          </div>

          <div className="usp-item">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l4 2" />
            </svg>

            <div>
              <h3>Flexibele afspraken</h3>
              <p>Ook &apos;s avonds en weekend mogelijk.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="usp-mobile">
        <div className="usp-mobile-item">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M20 3C12 3 5 7 5 15c0 4 3 6 7 6 8 0 12-7 12-18z" />
            <path d="M8 16c2-4 6-8 12-12" />
          </svg>
          <h3>Milieuvriendelijk</h3>
          <p>Veilige en doeltreffende producten.</p>
        </div>

        <div className="usp-mobile-item">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M12 2l8 3v6c0 6-3.5 9.5-8 11-4.5-1.5-8-5-8-11V5l8-3z" />
          </svg>
          <h3>Veilig en gezond</h3>
          <p>Vrij van allergenen en bacteriën.</p>
        </div>

        <div className="usp-mobile-item">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M3 10.5L12 3l9 7.5" />
            <path d="M5 9v11h14V9" />
            <path d="M9 20v-6h6v6" />
          </svg>
          <h3>Aan huis service</h3>
          <p>In heel België.</p>
        </div>

        <div className="usp-mobile-item">
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l4 2" />
          </svg>
          <h3>Flexibele afspraken</h3>
          <p>Ook &apos;s avonds en weekend mogelijk.</p>
        </div>
      </div>
    </section>
  );
}
