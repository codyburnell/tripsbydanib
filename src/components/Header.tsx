import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" className="site-logo" onClick={() => setOpen(false)}>
          Trips by DaniB
        </Link>

        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        <nav className={`site-nav${open ? " open" : ""}`} aria-label="Primary navigation">
          <a href="/#services" onClick={() => setOpen(false)}>Services</a>
          <a href="/#how-it-works" onClick={() => setOpen(false)}>How It Works</a>
          <a href="/#costa-rica" onClick={() => setOpen(false)}>Costa Rica</a>
          <a href="/#about-dani" onClick={() => setOpen(false)}>About Dani</a>
          <Link className="btn btn-primary" to="/plan-my-trip" onClick={() => setOpen(false)}>
            Plan My Trip
          </Link>
        </nav>
      </div>
    </header>
  );
}
