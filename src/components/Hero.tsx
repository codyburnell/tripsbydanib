import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero" style={{ paddingTop: 80 }}>
      <div className="hero-bg">
        <img
          src="/images/hero-beach.webp"
          alt="Tropical beach with calm turquoise water and white sand"
          width="1600"
          height="900"
        />
      </div>
      <div className="container hero-copy">
        <p className="eyebrow">Personal Travel Planning · Worldwide + Costa Rica</p>
        <h1>You dream about the trip. DaniB obsesses over the details.</h1>
        <p>
          Thoughtful travel planning for people who want an incredible trip
          without spending nights comparing reviews, routes, rentals, stays,
          and 47 open browser tabs.
        </p>
        <Link className="btn btn-primary" to="/plan-my-trip">
          Tell Me About Your Trip
        </Link>
      </div>
    </section>
  );
}
