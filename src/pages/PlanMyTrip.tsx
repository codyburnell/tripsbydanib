import Header from "../components/Header";
import Footer from "../components/Footer";
import { site } from "../config/site";

export default function PlanMyTrip() {
  const isConfigured = site.ghlSurveyUrl !== "#";

  return (
    <>
      <Header />
      <main className="section" style={{ paddingTop: 160 }}>
        <div className="container">
          <p className="eyebrow">Your Trip Starts Here</p>
          <h1>Tell Dani about your trip.</h1>
          <p>
            You don’t need to have everything figured out. That’s the point.
            Share what you know, what you love, and what you want help with.
          </p>

          {isConfigured ? (
            <a className="btn btn-primary" href={site.ghlSurveyUrl}>
              Start the Trip Questionnaire
            </a>
          ) : (
            <div className="card">
              <strong>GoHighLevel survey not configured yet.</strong>
              <p>Add your public GHL survey URL to <code>.env</code> as <code>VITE_GHL_SURVEY_URL</code>.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
