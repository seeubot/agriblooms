import HeroIllustration from "./HeroIllustration";
import { brand } from "../data/content";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-blob hero-blob-a" aria-hidden="true" />
      <div className="hero-blob hero-blob-b" aria-hidden="true" />

      <div className="hero-inner section-inner">
        <div className="hero-copy">
          <p className="eyebrow">{brand.categories}</p>
          <h1>
            Every plot has a story.
            <br />
            Let's tell yours.
          </h1>
          <p className="script-accent">{brand.tagline}</p>
          <p className="hero-sub">
            AgriBlooms designs and builds thriving green spaces — gardens, farmhouses,
            and organic plots — guided by people who actually understand land, not
            just landscaping.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Book a Free Consultation
            </a>
            <a href="#services" className="btn btn-secondary">
              Explore Our Services
            </a>
          </div>
        </div>

        <div className="hero-art">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
