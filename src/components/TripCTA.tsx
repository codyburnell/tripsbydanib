import { Link } from "react-router-dom";

export default function TripCTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-banner">
          <div className="cta-banner-bg">
            <img
              src="/images/sunset-ocean.webp"
              alt="Golden sunset over calm ocean waters"
              width="1180"
              height="400"
              loading="lazy"
            />
          </div>
          <div className="cta-banner-content">
            <p className="eyebrow">Ready When You Are</p>
            <h2>Ready to stop researching and start looking forward to the trip?</h2>
            <Link className="btn btn-light" to="/plan-my-trip">
              Tell Dani About Your Trip
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
