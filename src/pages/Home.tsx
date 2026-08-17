import Header from "../components/Header";
import Hero from "../components/Hero";
import ServiceCards from "../components/ServiceCards";
import DetailDani from "../components/DetailDani";
import CostaRica from "../components/CostaRica";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";
import TripCTA from "../components/TripCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServiceCards />
        <DetailDani />
        <CostaRica />
        <HowItWorks />
        <FAQ />
        <TripCTA />
      </main>
      <Footer />
    </>
  );
}
