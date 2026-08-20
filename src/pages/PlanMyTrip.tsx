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
      <main className="survey-page">
        <div className="survey-page-intro">
          <div className="container" style={{ maxWidth: 720 }}>
            <p className="eyebrow">Your Trip Starts Here</p>
            <h1>Tell Detail Dani About Your Trip.</h1>
            <p className="survey-page-lead">
              You don't need to have everything figured out. That's the point.
              Tell me where you're dreaming about going, who's coming, how you
              like to travel, where you want to stay, whether you're more street
              food or room service, and all the little details that make a trip
              feel like <em>your</em> trip. The more I know, the better I can plan.
            </p>
            <p className="survey-page-playful">
              "Street food, room service, waterfalls, five-star sheets… I want to know all of it."
            </p>
          </div>
        </div>

        <div className="survey-page-body">
          <div className="survey-layout">
            <div className="survey-card">
              <div className="survey-card-meta">
                <span className="survey-card-label">Your trip profile</span>
                <span className="survey-card-time">About 5–7 minutes</span>
              </div>
              <div className="survey-card-divider" />
              <iframe
                src="https://api.leadconnectorhq.com/widget/survey/be5seUbfqQtYIUoEaBwC"
                style={{ border: "none", width: "100%" }}
                scrolling="no"
                id="be5seUbfqQtYIUoEaBwC"
                title="Trips by DaniB Trip Planning Survey"
              />
            </div>

            <aside className="survey-side-note">
              <div className="survey-side-note-inner">
                <span className="survey-side-note-badge">Detail Dani Tip</span>
                <p>You don't need to know every answer. Give me the vibe and I'll help with the rest.</p>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
