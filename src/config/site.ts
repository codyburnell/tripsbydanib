export const site = {
  name: "Trips by DaniB",
  tagline: "You dream about the trip. DaniB obsesses over the details.",
  ghlSurveyUrl: import.meta.env.VITE_GHL_SURVEY_URL || "#",
  ghlCalendarUrl: import.meta.env.VITE_GHL_CALENDAR_URL || "#",
  services: [
    {
      name: "Done With You",
      price: "Starting at $500",
      description:
        "You know where you want to go. Dani helps you decide where to stay, what is worth doing, and how to make the trip better."
    },
    {
      name: "Done For You",
      price: "Starting at $1,000",
      description:
        "Dani researches the details—from flight options and stays to transportation and a day-by-day itinerary—then helps keep the trip organized."
    }
  ]
};
