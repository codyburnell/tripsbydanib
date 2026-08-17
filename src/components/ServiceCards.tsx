import { Link } from "react-router-dom";
import { site } from "../config/site";

const serviceImages = [
  { src: "/images/boutique-stay.webp", alt: "Boutique tropical hotel surrounded by greenery" },
  { src: "/images/travel-plane.webp", alt: "Airplane wing above the clouds at sunset" },
];

export default function ServiceCards() {
  return (
    <section className="section" id="services">
      <div className="container">
        <p className="eyebrow">Choose Your Level of Help</p>
        <h2>How much planning do you want Dani to take off your plate?</h2>
        <div className="grid-2">
          {site.services.map((service, i) => (
            <article className="service-card" key={service.name}>
              <img
                className="service-card-img"
                src={serviceImages[i].src}
                alt={serviceImages[i].alt}
                width="580"
                height="240"
                loading="lazy"
              />
              <div className="service-card-body">
                <h3>{service.name}</h3>
                <span className="service-card-price">{service.price}</span>
                <p>{service.description}</p>
                <Link to="/plan-my-trip">Start My Trip →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
