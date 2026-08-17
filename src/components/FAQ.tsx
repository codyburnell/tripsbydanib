export default function FAQ() {
  const faqs = [
    ["Is Dani a travel agent?", "Trips by DaniB is positioned as a travel-planning concierge focused on research, recommendations, itineraries, and organization."],
    ["Can you plan Costa Rica?", "Yes. Costa Rica is a specialty because Dani now lives there, while worldwide travel remains part of the service."],
    ["Do I book my own reservations?", "Yes for the MVP. Dani provides curated recommendations and booking links; customers make final purchases and reservations."],
    ["Can I get reminders?", "Done For You clients can receive approved GHL-powered trip reminders when confirmed dates and messaging permissions are available."]
  ];

  return (
    <section className="section soft">
      <div className="container">
        <p className="eyebrow">FAQ</p>
        <h2>A few things to know.</h2>
        <div className="stack">
          {faqs.map(([q, a]) => (
            <details className="card" key={q}>
              <summary><strong>{q}</strong></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
