export default function FAQ() {
  const faqs = [
    ["Is Dani a travel agent?", "Trips by DaniB is a travel-planning concierge focused on research, recommendations, itineraries, and organization—not a traditional travel agency."],
    ["Can you plan Costa Rica?", "Yes. Costa Rica is a specialty because Dani now lives there, while worldwide travel remains part of the service."],
    ["Do I book my own reservations?", "Dani provides curated recommendations and booking links. You make final purchases and reservations so you stay in full control."],
    ["Can I get trip reminders?", "Done For You clients can receive trip reminders and confirmations when confirmed dates and messaging permissions are available."]
  ];

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 780 }}>
        <p className="eyebrow" style={{ textAlign: "center" }}>FAQ</p>
        <h2 style={{ textAlign: "center", marginBottom: 40 }}>A few things to know.</h2>
        <div className="stack">
          {faqs.map(([q, a]) => (
            <details className="faq-item" key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
