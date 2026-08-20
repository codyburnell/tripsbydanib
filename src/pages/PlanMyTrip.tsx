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
        {/* Decorative SVG accents */}
        <svg className="survey-deco survey-deco-sun" viewBox="0 0 40 40" aria-hidden="true">
          <circle cx="20" cy="20" r="5" fill="none" stroke="#D8B56A" strokeWidth="1" opacity="0.4" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
            <line
              key={a}
              x1="20" y1="20" x2={20 + 12 * Math.cos(a * Math.PI / 180)} y2={20 + 12 * Math.sin(a * Math.PI / 180)}
              stroke="#D8B56A" strokeWidth="0.7" opacity="0.3"
              strokeLinecap="round"
            />
          ))}
        </svg>
        <svg className="survey-deco survey-deco-leaf" viewBox="0 0 60 80" aria-hidden="true">
          <path d="M30 75 C30 75 10 50 12 30 C14 10 30 5 30 5 C30 5 46 10 48 30 C50 50 30 75 30 75Z" fill="none" stroke="#6F7C67" strokeWidth="1" opacity="0.12" />
          <path d="M30 75 L30 5" fill="none" stroke="#6F7C67" strokeWidth="0.6" opacity="0.1" />
        </svg>

        <div className="survey-page-intro">
          <p className="eyebrow">Your Trip Starts Here</p>
          <h1 className="survey-headline">
            Tell Detail Dani<br />about your trip.
          </h1>
          <p className="survey-page-accent">
            "Give me the vibe.<br />I'll help with the rest."
          </p>
          <p className="survey-page-lead">
            You don't need to have everything figured out. That's the point.
            Tell me where you're dreaming about going, who's coming, how you
            like to travel, where you want to stay, whether you're more street
            food or room service, and all the little details that make a trip
            feel like <em>your</em> trip. The more I know, the better I can plan.
          </p>
        </div>

        <div className="survey-page-body">
          <div className="survey-layout">
            <div className="survey-embed-wrap">
              <div className="survey-card-meta">
                <span className="survey-card-label">Your trip, your way</span>
                <span className="survey-card-time">☀ About 5–7 minutes</span>
              </div>
              <p className="survey-card-sub">A few details so Dani can start obsessing over the right things.</p>
              <p className="survey-microcopy">No perfect answers required. Dreamy answers encouraged. ✦</p>
              <iframe
                src="https://api.leadconnectorhq.com/widget/survey/be5seUbfqQtYIUoEaBwC"
                style={{ border: "none", width: "100%" }}
                scrolling="no"
                id="be5seUbfqQtYIUoEaBwC"
                title="Trips by DaniB Trip Planning Survey"
              />
            </div>

            <aside className="survey-margin-note" aria-label="Detail Dani Note">
              <span className="survey-margin-note-label">Detail Dani Note</span>
              <p>"You don't need every answer.<br />Give me the vibe — I'll help<br />with the rest."</p>
              <svg className="survey-margin-arrow" viewBox="0 0 30 40" aria-hidden="true">
                <path d="M25 5 C20 15 10 20 5 35" fill="none" stroke="#B86F52" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
                <path d="M3 30 L5 35 L9 32" fill="none" stroke="#B86F52" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
              </svg>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
