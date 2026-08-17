export default function HowItWorks() {
  const steps = [
    ["1", "Tell Dani about the trip", "Complete the trip questionnaire so Dani knows what matters to you."],
    ["2", "Choose your planning style", "Done With You for focused recommendations or Done For You for the full research lift."],
    ["3", "Dani gets detailed", "Research, reviews, routes, stays, transportation and experiences are curated around you."],
    ["4", "Travel organized", "Done For You clients can receive approved trip reminders and confirmations through the GHL workflow."]
  ];

  return (
    <section className="section">
      <div className="container">
        <h2>Tell me what kind of trip you want. I’ll take it from there.</h2>
        <div className="stack">
          {steps.map(([n, title, text]) => (
            <article className="card" key={n}>
              <strong>{n}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
