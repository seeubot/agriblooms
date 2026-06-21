import { modernAgPoints, animalHusbandryPoints } from "../data/content";
import "./ModernAgriculture.css";

export default function ModernAgriculture() {
  return (
    <section id="modern-agriculture" className="section modern-ag-section">
      <div className="section-inner">
        <div className="section-head modern-ag-head">
          <p className="eyebrow modern-ag-eyebrow">Modern Agriculture</p>
          <h2 className="modern-ag-title">
            What the world already knows about farming — now within reach.
          </h2>
          <p className="modern-ag-intro">
            Farming has changed faster in the last decade than in the previous
            century. Sensors, drones, and data have turned guesswork into
            something closer to forecasting — and that knowledge doesn't have
            to stay overseas. Part of AgriBlooms' work is bringing it home,
            translated for Indian land and Indian farmers.
          </p>
        </div>

        <div className="modern-ag-grid">
          {modernAgPoints.map((p) => (
            <div className="modern-ag-card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.detail}</p>
            </div>
          ))}
        </div>

        <p className="modern-ag-quote">
          "Awareness is the first crop we plant — everything else grows from
          it."
        </p>

        <div className="animal-husbandry">
          <h3>Animal Husbandry</h3>
          <p className="animal-husbandry-intro">
            Crops and livestock were never meant to be managed separately. Our
            guidance extends to the animal side of a working farm, too:
          </p>
          <ul className="animal-husbandry-list">
            {animalHusbandryPoints.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </div>

        <a href="#contact" className="btn btn-light modern-ag-cta">
          Talk to Our Agri Consultant
        </a>
      </div>
    </section>
  );
}
