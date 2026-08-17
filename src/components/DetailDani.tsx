export default function DetailDani() {
  return (
    <section className="section" id="about-dani">
      <div className="container">
        <div className="split-section" style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", background: "var(--mist)" }}>
          <img
            className="split-section-img"
            src="/images/travel-detail.webp"
            alt="Travel planning flatlay with maps, camera, and vintage travel accessories"
            width="590"
            height="500"
            loading="lazy"
          />
          <div className="split-section-content">
            <p className="eyebrow">Meet "Detail Dani"</p>
            <h2>My friends started this before I did.</h2>
            <p>
              For years, friends have asked, "How did you find that place?" and
              "Tell me about your trip—we want to go there."
            </p>
            <p>
              I'm the person who reads the reviews, compares the neighborhoods,
              checks the route, looks at the photos people actually posted, and
              keeps researching until the trip feels right. My friends call me
              Detail Dani for a reason.
            </p>
            <p>
              Now that I live in Costa Rica, I'm adding lived local experience to
              the same research-first approach I use for trips around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
