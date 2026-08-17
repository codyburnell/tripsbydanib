import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="container" style={{ padding: "20px 0", display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center" }}>
      <Link to="/" style={{ textDecoration: "none", fontWeight: 800 }}>Trips by DaniB</Link>
      <nav style={{ display: "flex", gap: 16, alignItems: "center" }} aria-label="Primary navigation">
        <a href="/#services">Services</a>
        <Link className="btn btn-primary" to="/plan-my-trip">Plan My Trip</Link>
      </nav>
    </header>
  );
}
