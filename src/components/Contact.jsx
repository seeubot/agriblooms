import { useState } from "react";
import { brand, services } from "../data/content";
import "./Contact.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  // No backend is wired up yet — PRD §3.5 calls for delivery to email/CRM.
  // Hook this handler up to your form provider (Formspree, Zapier, etc.)
  // or a serverless function once you have one. For now it just confirms
  // locally so the flow can be demoed end to end.
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="section-inner contact-inner">
        <div className="contact-details">
          <p className="eyebrow">Contact Us</p>
          <h2>Let's walk your land together.</h2>
          <p className="contact-lede">
            Reach out for a free consultation — by phone, WhatsApp, or the
            form. We'll get back to you within a day.
          </p>

          <ul className="contact-list">
            <li>
              <span className="contact-label">Address</span>
              <span>{brand.address}</span>
            </li>
            <li>
              <span className="contact-label">Phone</span>
              <a href={`tel:${brand.phone1}`}>{brand.phone1}</a>
            </li>
            <li>
              <span className="contact-label">Email</span>
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
            </li>
          </ul>

          <div className="contact-quick-actions">
            <a href={`tel:${brand.phone1}`} className="btn btn-primary">
              Call Now
            </a>
            <a
              href={`https://wa.me/91${brand.phone1}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              Message on WhatsApp
            </a>
          </div>

          <div className="contact-map" role="img" aria-label="Map placeholder for AgriBlooms office location">
            <span>Map — embed your Google Maps location here</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted ? (
            <div className="contact-success">
              <h3>Thanks — we've got it.</h3>
              <p>Your message is in. Our team will reach out within a day.</p>
            </div>
          ) : (
            <>
              <h3>Request a free consultation</h3>
              <label>
                Name
                <input type="text" name="name" required placeholder="Your full name" />
              </label>
              <label>
                Phone
                <input type="tel" name="phone" required placeholder="10-digit mobile number" />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="you@example.com" />
              </label>
              <label>
                Service interest
                <select name="service" defaultValue="">
                  <option value="" disabled>
                    Choose a service
                  </option>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Message
                <textarea name="message" rows={4} placeholder="Tell us a bit about your space" />
              </label>
              <button type="submit" className="btn btn-primary contact-submit">
                Send Message
              </button>
            </>
          )}
        </form>
      </div>

      {/* Sticky mobile call/WhatsApp bar — PRD §3.5 */}
      <div className="mobile-cta-bar">
        <a href={`tel:${brand.phone1}`} className="mobile-cta-btn">
          Call
        </a>
        <a
          href={`https://wa.me/91${brand.phone1}`}
          target="_blank"
          rel="noreferrer"
          className="mobile-cta-btn mobile-cta-whatsapp"
        >
          WhatsApp
        </a>
      </div>
    </section>
  );
}
