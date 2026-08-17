import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <strong>Trips by DaniB</strong>
        <p>Personal travel planning • Worldwide + Costa Rica</p>
        <p><Link to="/privacy">Privacy</Link></p>
      </div>
    </footer>
  );
}
