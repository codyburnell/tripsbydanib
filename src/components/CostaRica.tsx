import { Link } from "react-router-dom";

export default function CostaRica() {
  return (
    <section className="section">
      <div className="container card">
        <p className="eyebrow">Costa Rica, With a Little More Inside Knowledge</p>
        <h2>There’s the Costa Rica you find online—and the Costa Rica you learn by living here.</h2>
        <p>
          Dani plans worldwide travel, with special insight into Costa Rica:
          where to base yourself, how long drives really take, beach versus
          mountain tradeoffs, rental-car decisions, and the local spots that
          make a trip memorable.
        </p>
        <Link className="btn btn-primary" to="/plan-my-trip">
          Plan a Costa Rica Trip
        </Link>
      </div>
    </section>
  );
}
