import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">Trips by DaniB</div>
            <p className="footer-tagline">Personal travel planning · Worldwide + Costa Rica</p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="footer-links">
              <li><a href="/#services">Services</a></li>
              <li><a href="/#how-it-works">How It Works</a></li>
              <li><Link to="/plan-my-trip">Plan My Trip</Link></li>
              <li><Link to="/privacy">Privacy</Link></li>
            </ul>
          </nav>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Trips by DaniB. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
