import LeafMark from "./LeafMark";
import { brand } from "../data/content";
import "./Footer.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#how-we-work", label: "How We Work" },
  { href: "#modern-agriculture", label: "Modern Agriculture" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-inner footer-inner">
        <div className="footer-top">
          <a href="#top" className="footer-brand">
            <LeafMark size={32} />
            <span>
              <strong>Agri</strong>Blooms
            </span>
          </a>

          <nav className="footer-links" aria-label="Footer">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="footer-social">
            {brand.social.map((s) => (
              <a key={s.handle} href={s.url} target="_blank" rel="noreferrer">
                {s.handle}
              </a>
            ))}
          </div>
        </div>

        <p className="footer-quote script-accent">{brand.tagline}</p>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </span>
          <span>{brand.categories}</span>
        </div>
      </div>
    </footer>
  );
}
