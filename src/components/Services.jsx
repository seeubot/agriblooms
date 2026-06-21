import { services } from "../data/content";
import "./Services.css";

// Small monoline icon set, one per service — kept intentionally simple so the
// leaf motif (used elsewhere) stays the one decorative signature on the page.
const icons = {
  landscaping: (
    <path d="M12 3c-3 3-4 7-2 11M12 3c3 3 4 7 2 11M6 21c1-4 3-6 6-6s5 2 6 6" />
  ),
  "lawn-garden-maintenance": (
    <path d="M4 20h16M7 20c0-5 1-9 5-9s5 4 5 9M9 11c-1-3 0-6 3-7M15 11c1-3 0-6-3-7" />
  ),
  "farmhouse-consultation": (
    <path d="M4 11l8-6 8 6M6 10v9h12v-9M10 19v-5h4v5" />
  ),
  "organic-farming": (
    <path d="M12 20V9M12 9c0-3-2-5-5-5 0 3 2 5 5 5zM12 9c0-3 2-5 5-5 0 3-2 5-5 5z" />
  ),
  "vertical-gardening": (
    <path d="M4 4v16M9 4v16M14 4v16M19 4v16M4 8h5M14 8h5M4 14h5M14 14h5" />
  ),
  hydroponics: (
    <path d="M12 3c2.5 3 4 5.5 4 8a4 4 0 0 1-8 0c0-2.5 1.5-5 4-8zM5 20h14" />
  ),
};

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="section-inner">
        <div className="section-head">
          <p className="eyebrow">What We Do</p>
          <h2>Landscaping, organic farming, and green solutions — one team.</h2>
          <p>
            Six services, one philosophy: work with the land you actually have,
            not the one in a catalog.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <article className="service-card" key={s.id}>
              <svg
                className="service-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--forest)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {icons[s.id]}
              </svg>
              <h3>{s.name}</h3>
              <p className="service-short">{s.short}</p>
              <p className="service-long">{s.long}</p>
              <a href="#contact" className="service-cta">
                Enquire about {s.name} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
