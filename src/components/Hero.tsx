import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-copy">
        <p className="eyebrow">Personal Travel Planning • Worldwide + Costa Rica</p>
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
