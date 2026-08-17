import { Link } from "react-router-dom";

export default function CostaRica() {
  return (
    <section className="section" id="costa-rica">
      <div className="container">
        <div className="split-section" style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", background: "var(--shell)" }}>
          <div className="split-section-content">
            <p className="eyebrow">Costa Rica — More Than a Pin on the Map</p>
            <h2>There's the Costa Rica you find online—and the Costa Rica you learn by living here.</h2>
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
          <img
            className="split-section-img"
            src="/images/costa-rica-waterfall.webp"
            alt="Costa Rica waterfall surrounded by tropical rainforest"
            width="590"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
