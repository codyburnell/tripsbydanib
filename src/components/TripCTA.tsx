import { Link } from "react-router-dom";

export default function TripCTA() {
  return (
    <section className="section">
      <div className="container card">
        <p className="eyebrow">Ready When You Are</p>
        <h2>Ready to stop researching and start looking forward to the trip?</h2>
        <Link className="btn btn-primary" to="/plan-my-trip">
          Tell Dani About Your Trip
        </Link>
      </div>
    </section>
  );
}
