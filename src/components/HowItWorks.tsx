export default function HowItWorks() {
  const steps = [
    ["1", "Tell Dani about the trip", "Share what you know—destinations, dates, travel style, budget, must-haves."],
    ["2", "Choose your level of help", "Done With You for focused recommendations or Done For You for the full research lift."],
    ["3", "Dani gets into the details", "Research, reviews, routes, stays, transportation, and experiences—curated around you."],
    ["4", "Go enjoy the trip", "You get an organized trip plan. All that's left is looking forward to it."]
  ];

  return (
    <section className="section soft" id="how-it-works">
      <div className="container">
        <p className="eyebrow" style={{ textAlign: "center" }}>How It Works</p>
        <h2 style={{ textAlign: "center" }}>Tell me what kind of trip you want. I'll take it from there.</h2>
        <div className="steps-grid">
          {steps.map(([n, title, text]) => (
            <article className="step-card" key={n}>
              <div className="step-number">{n}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
