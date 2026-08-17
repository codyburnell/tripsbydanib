import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="section" style={{ paddingTop: 160 }}>
        <div className="container">
          <h1>Privacy</h1>
          <p>
            Trips by DaniB collects only the information needed to respond to
            trip-planning inquiries and provide requested services. Final
            privacy, email-consent, and SMS-consent language should be reviewed
            and updated to match the exact GoHighLevel forms, workflows, and
            jurisdictions used before public launch.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
