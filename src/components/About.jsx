import { founders } from "../data/content";
import { LeafDivider } from "./LeafMark";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-inner">
        <div className="section-head">
          <p className="eyebrow">About Us</p>
          <h2>Built by people who understand land, not just landscaping.</h2>
          <p>
            AgriBlooms started with a simple idea: that landscaping and farming
            shouldn't be treated as separate worlds. One founder brings the
            agricultural know-how, the other brings the modern tools and
            process — together they built a company that bridges both.
          </p>
        </div>

        <div className="founders-grid">
          {founders.map((f) => (
            <div className="founder-card" key={f.name}>
              <div className="founder-photo" aria-hidden="true">
                <span>{f.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}</span>
              </div>
              <h3>{f.name}</h3>
              <p className="founder-role">{f.role}</p>
              <p className="founder-bio">{f.bio}</p>
            </div>
          ))}
        </div>

        <div className="mission-vision-grid">
          <div className="mv-card">
            <p className="eyebrow">Mission</p>
            <p>
              Transform spaces into thriving green environments while spreading
              awareness about sustainable agriculture and organic farming —
              serving with passion, earning trust through excellence, and
              empowering farmers with modern agricultural knowledge.
            </p>
          </div>
          <div className="mv-card mv-card-dark">
            <p className="eyebrow" style={{ color: "var(--sage-light)" }}>
              Vision
            </p>
            <p>
              A nationwide presence as a leading landscaping and gardening
              service provider, expanding into organic farming and agricultural
              consultancy — bridging global agri-technology with Indian
              farmers.
            </p>
          </div>
        </div>

        <LeafDivider />
        <div className="quote-closer">
          <p>"Tend the land well, and it tends to everything else."</p>
        </div>
      </div>
    </section>
  );
}
