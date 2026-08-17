import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlanMyTrip from "./pages/PlanMyTrip";
import ThankYou from "./pages/ThankYou";
import Privacy from "./pages/Privacy";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plan-my-trip" element={<PlanMyTrip />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
}
