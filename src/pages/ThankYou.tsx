import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ThankYou() {
  return (
    <>
      <Header />
      <main className="section" style={{ paddingTop: 160 }}>
        <div className="container">
          <p className="eyebrow">You’re In</p>
          <h1>Dani has your trip details.</h1>
          <p>
            Keep an eye on the email and phone number you provided for the next
            step. If you opted into text messages, trip-planning updates may
            also arrive by SMS.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
