import { useEffect, useState } from "react";
import LeafMark from "./LeafMark";
import { brand } from "../data/content";
import "./Navbar.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#how-we-work", label: "How We Work" },
  { href: "#modern-agriculture", label: "Modern Agriculture" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">
        <a href="#top" className="navbar-brand">
          <LeafMark size={34} />
          <span>
            <strong>Agri</strong>Blooms
          </span>
        </a>

        <nav className="navbar-links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href={`tel:${brand.phone1}`} className="btn btn-primary navbar-cta">
          Book a Consultation
        </a>

        <button
          className="navbar-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="navbar-mobile" aria-label="Mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={`tel:${brand.phone1}`} className="btn btn-primary">
            Book a Consultation
          </a>
        </nav>
      )}
    </header>
  );
}
