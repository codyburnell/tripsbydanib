import { Link } from "react-router-dom";
import { site } from "../config/site";

export default function ServiceCards() {
  return (
    <section className="section" id="services">
      <div className="container">
        <p className="eyebrow">Choose Your Level of Help</p>
        <h2>How much planning do you want Dani to take off your plate?</h2>
        <div className="grid-2">
          {site.services.map((service) => (
            <article className="card" key={service.name}>
              <h3>{service.name}</h3>
              <strong>{service.price}</strong>
              <p>{service.description}</p>
              <Link to="/plan-my-trip">Start My Trip →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
