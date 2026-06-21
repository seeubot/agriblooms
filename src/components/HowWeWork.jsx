import { processSteps } from "../data/content";
import "./HowWeWork.css";

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="section how-section">
      <div className="section-inner">
        <div className="section-head">
          <p className="eyebrow">Our Process</p>
          <h2>From first conversation to long-term care.</h2>
          <p>
            Five steps, always in this order — because a plan built without
            seeing the site first is just a guess.
          </p>
        </div>

        <ol className="steps">
          {processSteps.map((step, i) => (
            <li className="step" key={step.label}>
              <div className="step-marker">
                <span>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="step-body">
                <h3>{step.label}</h3>
                <p>{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <a href="#contact" className="btn btn-primary how-cta">
          Start Step One: Book a Consultation
        </a>
      </div>
    </section>
  );
}
