import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PlanMyTrip() {
  useEffect(() => {
    const scriptId = "ghl-form-embed-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.id = scriptId;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <Header />
      <main className="section" style={{ paddingTop: 160 }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <p className="eyebrow">Your Trip Starts Here</p>
          <h1>Tell Detail Dani About Your Trip.</h1>
          <p style={{ maxWidth: 680, lineHeight: 1.8, marginBottom: 48 }}>
            You don't need to have everything figured out. That's the point.
            Tell me where you're dreaming about going, who's coming, how you
            like to travel, where you want to stay, whether you're more street
            food or room service, and all the little details that make a trip
            feel like <em>your</em> trip. The more I know, the better I can plan.
          </p>

          <div
            style={{
              background: "var(--shell)",
              borderRadius: "var(--radius-md)",
              padding: "32px 24px",
              boxShadow: "var(--shadow)",
            }}
          >
            <iframe
              src="https://api.leadconnectorhq.com/widget/survey/be5seUbfqQtYIUoEaBwC"
              style={{ border: "none", width: "100%" }}
              scrolling="no"
              id="be5seUbfqQtYIUoEaBwC"
              title="Trips by DaniB Trip Planning Survey"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
