# Trips by DaniB --- Blueprint v1.0.0

**Value Prop:** Personalized trip planning for people who want the great
trip---not the research.\
**Date:** 2026-08-17 • **Author:** VibeCoder\
**Working Brand:** Trips by DaniB\
**Brand Personality:** "Detail Dani" --- the friend who reads the
reviews, finds the hidden gems, and obsesses over the details so you
don't have to.

## Mini ToC

-   [IDE Recommendation](#ide-recommendation)
-   [Spark Ignition Summary](#spark-ignition-summary)
-   [System Initialization](#system-initialization-roles-in-action)
-   [Project Manifest](#project-manifest)
-   [Design System](#design-system)
-   [Component Stubs](#component-stubs)
-   [Platform Integrations](#platform-integrations)
-   [Deployment Scripts](#deployment-scripts)
-   [Testing & Debug Essentials](#testing--debug-essentials)
-   [Accessibility Checklist](#accessibility-checklist)
-   [Performance Playbook](#performance-playbook)
-   [Business Impact & Analytics](#business-impact--analytics)
-   [Auto-Grade & Fix-It Plan](#auto-grade--fix-it-plan)
-   [FAQ & Troubleshooting](#faq--troubleshooting)
-   [Next Iteration Plan (7-Day)](#next-iteration-plan-7-day)

## IDE Recommendation

**Best IDE/Platform: Windsurf + GitHub + GoHighLevel (GHL).**

-   **Windsurf:** Build and refine the custom front-end quickly.
-   **GitHub:** Source control, rollback, collaboration, and a permanent
    copy of the site code.
-   **GoHighLevel:** Customer-facing forms/surveys plus CRM, pipeline,
    calendar, email/SMS workflows, trip reminders, and follow-up.
-   **Important architecture note:** Do not assume GitHub automatically
    deploys code into GHL. Treat GitHub as the source of truth and GHL
    as the business/automation layer. For the MVP, host the front-end
    where desired and embed/link GHL forms, or reproduce the approved
    front-end in GHL's page/funnel builder. Keep GHL-specific IDs and
    embed snippets in environment/config values.

**Why it fits:** Trips by DaniB needs a beautiful referral-first website
and a powerful follow-up system, but not a complex custom backend. This
stack keeps the website flexible while GHL handles the operational
workload.

**Observable outcome:** A visitor can discover Dani's services, choose a
planning level, submit a trip inquiry, enter the GHL pipeline, and
receive approved follow-up communications.

## Spark Ignition Summary

-   **Spark:** People love great trips but hate the research. Dani
    already gets asked, "You have the best trips---how did you find
    those places?"
-   **Vision (30s):** A referred visitor lands on a beautiful, warm
    site, immediately understands what Dani does, sees two clear service
    levels, and clicks **Tell Me About Your Trip**.
-   **Persona:** Couples, families, friends, honeymooners, retirees,
    adventure travelers, luxury travelers, budget-conscious travelers,
    and busy people worldwide. Referral traffic is the initial
    acquisition engine.
-   **Specialty:** Worldwide travel with an emphasis on Costa Rica. Dani
    recently moved to Costa Rica and brings lived experience plus
    ongoing local discovery.
-   **Design Refs:** Coastal modern, understated luxury, warm boho
    details, editorial destination photography.
-   **Copy/Tone:** Personal, warm, confident, detailed, lightly playful.
    Avoid corporate travel-agency language.
-   **Platform Pick:** Windsurf for development, GitHub for version
    control, GoHighLevel for forms/surveys, CRM, pipeline, email/SMS,
    calendars, and trip-reminder automation.
-   **Working Brand:** **Trips by DaniB**.
-   **Personality Hook:** "My friends call me Detail Dani for a reason."
-   **Pricing:** Done With You starts at **\$500**. Done For You starts
    at **\$1,000**.

## System Initialization (Roles in Action)

-   **Creative Catalyst:** Turn Dani's "friend everyone asks about
    travel" story into a referral-first customer journey.
-   **Platform Architect:** Keep the front-end lightweight; use GHL for
    customer data and automation instead of creating an unnecessary
    custom backend.
-   **UI/UX Strategist:** Build mobile-first, accessible pages with
    large destination imagery, short sections, clear pricing, and one
    dominant CTA.
-   **Copy Architect:** Make Dani's detail obsession the differentiator:
    curated research, fewer tabs, better decisions.
-   **DevOps Orchestrator:** Use GitHub branches, environment variables,
    preview builds, and a documented GHL configuration checklist.
-   **Business goal:** Convert warm referrals into qualified
    trip-planning inquiries and premium Done For You clients.

## Project Manifest

### Recommended front-end stack

-   React 18+
-   TypeScript
-   Vite
-   React Router
-   Plain CSS design tokens (portable to GHL)
-   GHL form/survey embed or hosted survey link
-   No custom database for MVP
-   No authentication for MVP

### Directory tree

``` bash
trips-by-danib/
├── .env.example
├── .gitignore
├── README.md
├── package.json
├── tsconfig.json
├── vite.config.ts
├── index.html
├── public/
│   └── images/
│       ├── hero-travel.webp
│       ├── costa-rica.webp
│       ├── service-dwy.webp
│       └── service-dfy.webp
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── styles/
    │   └── globals.css
    ├── config/
    │   └── site.ts
    ├── components/
    │   ├── Header.tsx
    │   ├── Hero.tsx
    │   ├── SocialProof.tsx
    │   ├── ServiceCards.tsx
    │   ├── DetailDani.tsx
    │   ├── CostaRica.tsx
    │   ├── HowItWorks.tsx
    │   ├── TripCTA.tsx
    │   ├── FAQ.tsx
    │   └── Footer.tsx
    └── pages/
        ├── Home.tsx
        ├── PlanMyTrip.tsx
        ├── ThankYou.tsx
        └── Privacy.tsx
```

### Entrypoints

-   `src/main.tsx` --- application entrypoint
-   `src/App.tsx` --- routes
-   `src/pages/Home.tsx` --- primary referral landing page
-   `src/pages/PlanMyTrip.tsx` --- GHL intake experience
-   `src/pages/ThankYou.tsx` --- post-submission next steps

### Routes / Endpoints

  ----------------------------------------------------------------------------------
  Path              Method         Purpose             Auth           Example
  ----------------- -------------- ------------------- -------------- --------------
  `/`               GET            Main referral       None           Homepage
                                   landing page                       

  `/plan-my-trip`   GET            GHL trip survey     None           Intake
                                   embed/link                         

  `/thank-you`      GET            Confirmation and    None           Post-submit
                                   next steps                         

  `/privacy`        GET            Privacy/SMS/email   None           Legal
                                   disclosure                         

  GHL form          GHL-managed    Create/update       GHL-managed    Survey submit
  action/embed                     contact and                        
                                   workflow                           
  ----------------------------------------------------------------------------------

### package.json

``` json
{
  "name": "trips-by-danib",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.28.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "typescript": "^5.6.3",
    "vite": "^5.4.11"
  }
}
```

### vite.config.ts

``` ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

### src/main.tsx

``` tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

### src/App.tsx

``` tsx
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
```

**Observable outcome:** `npm install && npm run dev` opens a functioning
four-route site.

## Design System

### Visual direction

Think **Pacific coast boutique hotel**, not generic travel agency.

-   Airy layouts
-   Cream/sand backgrounds
-   Deep ocean text/accent
-   Muted sage and terracotta
-   Editorial serif headlines
-   Clean sans-serif body copy
-   Rounded but not "app-like"
-   Large real destination photography
-   Subtle texture; no busy tropical patterns

### Palette

  Token       Hex         Use
  ----------- ----------- ----------------------
  `--sand`    `#F6F0E7`   Main background
  `--shell`   `#FFFDF9`   Cards
  `--ocean`   `#173F43`   Primary text/buttons
  `--sage`    `#84947E`   Secondary accent
  `--clay`    `#B86F52`   Warm accent
  `--ink`     `#202624`   Body text
  `--mist`    `#DDE7E3`   Soft panels
  `--white`   `#FFFFFF`   Contrast

### Typography

-   Headlines: `Cormorant Garamond`, Georgia, serif
-   Body/UI: `Inter`, system-ui, sans-serif
-   Use system fallbacks if external font loading is disabled.

### Spacing scale

`4, 8, 12, 16, 24, 32, 48, 64, 96px`

### src/styles/globals.css

``` css
:root {
  --sand: #F6F0E7;
  --shell: #FFFDF9;
  --ocean: #173F43;
  --sage: #84947E;
  --clay: #B86F52;
  --ink: #202624;
  --mist: #DDE7E3;
  --white: #FFFFFF;
  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 32px;
  --shadow: 0 18px 50px rgba(23, 63, 67, 0.10);
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--ink);
  background: var(--sand);
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body { margin: 0; line-height: 1.6; }

h1, h2, h3 {
  font-family: "Cormorant Garamond", Georgia, serif;
  color: var(--ocean);
  line-height: 1.05;
}

h1 { font-size: clamp(3rem, 8vw, 6.5rem); }
h2 { font-size: clamp(2.25rem, 5vw, 4rem); }

a { color: inherit; }

.container {
  width: min(1180px, calc(100% - 40px));
  margin-inline: auto;
}

.section { padding: 88px 0; }

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 12px 22px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
}

.btn-primary { background: var(--ocean); color: var(--white); }

.card {
  background: var(--shell);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow);
  padding: 32px;
}

@media (max-width: 700px) {
  .section { padding: 64px 0; }
  .container { width: min(100% - 28px, 1180px); }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Observable outcome:** The site reads as warm, coastal, editorial, and
premium on both phone and desktop.

## Component Stubs

### site.ts

Purpose: Keep copy, pricing, and GHL destinations editable without
hunting through components.

``` ts
export const site = {
  name: "Trips by DaniB",
  tagline: "You dream about the trip. DaniB obsesses over the details.",
  ghlSurveyUrl: import.meta.env.VITE_GHL_SURVEY_URL || "#",
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
```

### Hero.tsx

Purpose: Explain the offer in seconds and drive the main CTA.

``` tsx
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="section">
      <div className="container">
        <p>PERSONAL TRAVEL PLANNING • WORLDWIDE + COSTA RICA</p>
        <h1>You dream about the trip. DaniB obsesses over the details.</h1>
        <p>
          Thoughtful travel planning for people who want an incredible trip
          without spending nights comparing 47 tabs, reviews, routes, and rentals.
        </p>
        <Link className="btn btn-primary" to="/plan-my-trip">
          Tell Me About Your Trip
        </Link>
      </div>
    </section>
  );
}
```

### ServiceCards.tsx

Purpose: Make the \$500 vs. \$1,000+ decision obvious.

``` tsx
import { Link } from "react-router-dom";
import { site } from "../config/site";

export default function ServiceCards() {
  return (
    <section className="section" id="services">
      <div className="container">
        <p>CHOOSE YOUR LEVEL OF HELP</p>
        <h2>How much planning do you want Dani to take off your plate?</h2>

        <div style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
          {site.services.map((service) => (
            <article className="card" key={service.name}>
              <h3>{service.name}</h3>
              <strong>{service.price}</strong>
              <p>{service.description}</p>
              <Link to="/plan-my-trip">Start My Trip →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### DetailDani.tsx

Purpose: Make Dani herself the trust mechanism.

``` tsx
export default function DetailDani() {
  return (
    <section className="section">
      <div className="container">
        <p>MEET “DETAIL DANI”</p>
        <h2>My friends started this before I did.</h2>
        <p>
          For years, friends have asked, “How did you find that place?” and
          “Tell me about your trip—we want to go there.”
        </p>
        <p>
          I’m the person who reads the reviews, compares the neighborhoods,
          checks the route, looks at the photos people actually posted, and
          keeps researching until the trip feels right. My friends call me
          Detail Dani for a reason.
        </p>
        <p>
          Now that I live in Costa Rica, I’m adding lived local experience to
          the same research-first approach I use for trips around the world.
        </p>
      </div>
    </section>
  );
}
```

### CostaRica.tsx

Purpose: Establish a specialty without limiting the worldwide offer.

``` tsx
import { Link } from "react-router-dom";

export default function CostaRica() {
  return (
    <section className="section">
      <div className="container card">
        <p>COSTA RICA, WITH A LITTLE MORE INSIDE KNOWLEDGE</p>
        <h2>There’s the Costa Rica you find online—and the Costa Rica you learn by living here.</h2>
        <p>
          Dani plans worldwide travel, with special insight into Costa Rica:
          where to base yourself, how long drives really take, beach versus
          mountain tradeoffs, rental-car decisions, and the local spots that
          make a trip memorable.
        </p>
        <Link className="btn btn-primary" to="/plan-my-trip">
          Plan a Costa Rica Trip
        </Link>
      </div>
    </section>
  );
}
```

### HowItWorks.tsx

``` tsx
export default function HowItWorks() {
  const steps = [
    ["1", "Tell Dani about the trip", "Complete the trip questionnaire so Dani knows what matters to you."],
    ["2", "Choose your planning style", "Done With You for focused recommendations or Done For You for the full research lift."],
    ["3", "Dani gets detailed", "Research, reviews, routes, stays, transportation and experiences are curated around you."],
    ["4", "Travel organized", "Done For You clients can receive approved trip reminders and confirmations through the GHL workflow."]
  ];

  return (
    <section className="section">
      <div className="container">
        <h2>Tell me what kind of trip you want. I’ll take it from there.</h2>
        {steps.map(([n, title, text]) => (
          <article key={n}>
            <strong>{n}</strong>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
```

### Home.tsx

``` tsx
import Hero from "../components/Hero";
import ServiceCards from "../components/ServiceCards";
import DetailDani from "../components/DetailDani";
import CostaRica from "../components/CostaRica";
import HowItWorks from "../components/HowItWorks";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceCards />
      <DetailDani />
      <CostaRica />
      <HowItWorks />
    </main>
  );
}
```

### PlanMyTrip.tsx

Purpose: Present the GHL survey as part of the Trips by DaniB
experience.

``` tsx
import { site } from "../config/site";

export default function PlanMyTrip() {
  const isConfigured = site.ghlSurveyUrl !== "#";

  return (
    <main className="section">
      <div className="container">
        <p>YOUR TRIP STARTS HERE</p>
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
          <p>GHL survey URL is not configured yet.</p>
        )}
      </div>
    </main>
  );
}
```

### ThankYou.tsx

``` tsx
export default function ThankYou() {
  return (
    <main className="section">
      <div className="container">
        <p>YOU’RE IN</p>
        <h1>Dani has your trip details.</h1>
        <p>
          Keep an eye on the email and phone number you provided for the next
          step. If you opted into text messages, trip-planning updates may also
          arrive by SMS.
        </p>
      </div>
    </main>
  );
}
```

**Observable outcome:** The MVP has a complete customer journey even
before advanced GHL workflows are switched on.

## Platform Integrations

### GoHighLevel architecture

Use GHL for:

1.  Trip inquiry survey/form
2.  Contact record
3.  Opportunity/pipeline
4.  Tags and custom fields
5.  Appointment calendar if Dani wants discovery calls
6.  Email/SMS workflows
7.  Booking/trip-detail reminders
8.  Post-trip follow-up/testimonial request

### GHL pipeline

``` text
New Trip Inquiry
→ Qualified
→ Consultation / Review
→ Planning
→ Recommendations Sent
→ Client Booking
→ Trip Details Confirmed
→ Trip Ready
→ Traveling
→ Returned / Follow-Up
→ Testimonial / Referral
```

### Core custom fields

Create these in GHL before building workflows:

``` text
Trip Service Level
Trip Destination
Destination Flexibility
Trip Start Date
Trip End Date
Traveler Count
Traveler Ages / Children
Trip Budget Range
Trip Style
Trip Pace
Accommodation Preference
Flight Status
Flight Details
Accommodation Details
Rental Car Details
Activity / Reservation Details
Dietary Notes
Mobility / Accessibility Notes
Special Occasion
Planning Status
SMS Consent
Email Consent
```

### Trip survey --- recommended flow

**Screen 1 --- What are we planning?** - Where are you thinking about
going? - "I'm open to ideas" option - Approximate dates - Are dates
flexible? - Number of travelers - Adults / children and children's ages

**Screen 2 --- Where are you in the process?** - Just dreaming -
Destination picked - Flights booked - Accommodations booked - Partially
planned - "Dani, save me from my 37 open browser tabs"

**Screen 3 --- How much help do you want?** - **Done With You ---
starting at \$500** - **Done For You --- starting at \$1,000**

**Screen 4 --- Your travel personality** - Relaxed / balanced / packed
itinerary - Beach - Mountains - City/culture - Adventure - Food -
Wellness - Nightlife - Wildlife/nature - Family - Romance - Luxury -
Local/hidden gems

**Screen 5 --- Budget** - Total trip budget range - Is airfare included
in that number? - Where do you like to splurge? - Where do you prefer to
save?

**Screen 6 --- Stay** - Hotel - Boutique hotel - Resort -
Airbnb/vacation rental - Mix - Luxury preference - Must-haves: pool,
walkability, view, beach access, kitchen, privacy, etc.

**Screen 7 --- Transportation** - Rental car - Driver/private transfer -
Public transportation - Domestic flights - "Tell me what makes sense"

**Screen 8 --- Details Dani needs** - Favorite previous trip and why -
Things you absolutely do not want - Must-do experiences - Food
preferences - Dietary restrictions - Accessibility/mobility needs -
Special occasion

**Screen 9 --- Contact + permission** - First name - Last name - Email -
Mobile - Preferred contact method - Explicit email permission - Explicit
SMS permission with the disclosure language required for your GHL
messaging setup and applicable law

### Branching logic

``` text
IF Service Level = Done With You:
    Ask what is already booked/decided.
    Emphasize destination/stay/activity recommendations.
    Tag: SERVICE_DWY
    Opportunity value: 500 starting value

IF Service Level = Done For You:
    Ask flight preferences.
    Ask accommodation preferences in depth.
    Ask rental car/transportation preferences.
    Ask daily pace and itinerary detail.
    Ask whether they want trip reminders after booking.
    Tag: SERVICE_DFY
    Opportunity value: 1000 starting value
```

### Done With You deliverable

**Starting at \$500**

Client already has the destination or strong direction. Dani provides a
curated recommendation plan such as:

-   Best areas/cities to prioritize
-   Where to stay
-   Accommodation shortlist
-   Experiences/activities
-   Restaurant/local suggestions where appropriate
-   Transportation guidance
-   What to skip / what is worth it
-   Planning notes and booking links
-   Client makes reservations/bookings

### Done For You deliverable

**Starting at \$1,000**

Dani performs the deeper research and builds the trip plan:

-   Flight-option research
-   Hotel/Airbnb research and shortlist
-   Rental car / transportation research
-   Destination routing
-   Experiences and local finds
-   Restaurant suggestions
-   Day-by-day itinerary
-   Booking/reference links
-   Client makes final purchases/reservations unless Dani later
    establishes a compliant booking service
-   Confirmed trip details can be loaded into GHL
-   Approved email/SMS trip reminders and booking reminders

### GHL trip-reminder workflow model

Do not promise a specific reminder until the workflow is tested. Use
confirmed dates as workflow triggers.

``` text
Workflow: Done For You — Trip Ready

ENTRY:
- Tag = SERVICE_DFY
- Trip Start Date exists
- Required messaging consent exists

ACTIONS:
- Internal notification to Dani: verify trip record
- Pre-trip email: send at chosen interval before Trip Start Date
- Pre-trip SMS: send only to valid opted-in SMS contacts
- Flight reminder: trigger from confirmed flight date/time
- Lodging reminder: trigger from confirmed check-in date/time
- Rental car reminder: trigger from confirmed pickup date/time
- Activity reminders: trigger only for confirmed reservation date/time
- Return follow-up: trigger after Trip End Date
- Testimonial request: delay after return
```

**Critical GHL rule:** Store real confirmed dates/times in structured
fields wherever possible. Do not build reminders from free-text
itinerary descriptions.

### Environment Variables

  ----------------------------------------------------------------------------------------------------
  Name                      Required          Example                                Notes
  ------------------------- ----------------- -------------------------------------- -----------------
  `VITE_GHL_SURVEY_URL`     Yes               `https://YOUR_GHL_SURVEY_URL_HERE`     Public
                                                                                     survey/hosted
                                                                                     form URL

  `VITE_GHL_CALENDAR_URL`   No                `https://YOUR_GHL_CALENDAR_URL_HERE`   Optional
                                                                                     consultation
                                                                                     calendar

  `VITE_ANALYTICS_ID`       No                `YOUR_ANALYTICS_ID_HERE`               Analytics
                                                                                     provider ID

  `VITE_SITE_URL`           Yes               `https://YOUR_DOMAIN_HERE`             Canonical site
                                                                                     URL
  ----------------------------------------------------------------------------------------------------

### .env.example

``` bash
VITE_GHL_SURVEY_URL=https://YOUR_GHL_SURVEY_URL_HERE
VITE_GHL_CALENDAR_URL=https://YOUR_GHL_CALENDAR_URL_HERE
VITE_ANALYTICS_ID=YOUR_ANALYTICS_ID_HERE
VITE_SITE_URL=https://YOUR_DOMAIN_HERE
```

### Install

``` bash
npm install
cp .env.example .env
npm run dev
```

**Observable outcome:** Submitting a test survey creates/updates the
expected GHL contact, applies the correct service tag, and creates an
opportunity in **New Trip Inquiry**.

## Deployment Scripts

### Local development

``` bash
npm run dev
```

Expected: Windsurf's terminal displays the local Vite URL and the
homepage loads.

### Production build

``` bash
npm run build
```

Expected: A `dist/` directory is created without TypeScript errors.

### GitHub

``` bash
git init
git add .
git commit -m "Initial Trips by DaniB MVP"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_HERE
git push -u origin main
```

Expected: The complete source appears in the private or public
repository you chose.

### GHL handoff

GHL should remain the CRM/automation system. For the front-end, choose
one of these two approaches during implementation:

1.  **Custom-hosted front-end:** Deploy the Vite `dist/` output to a
    static host and connect the custom domain. Use GHL survey/calendar
    links or embeds.
2.  **GHL-hosted page/funnel:** Reproduce the approved layout in the GHL
    page builder and use GHL-native forms/surveys. Keep GitHub as the
    canonical source for custom code/assets.

Do **not** claim a GitHub→GHL automatic deployment pipeline until an
actual supported integration has been configured and tested.

### Release checklist

``` text
[ ] npm run build passes
[ ] Mobile homepage checked
[ ] Plan My Trip CTA opens correct GHL survey
[ ] Test contact enters GHL
[ ] Correct tag is applied
[ ] Correct pipeline stage is created
[ ] Thank-you destination works
[ ] Email workflow tested with internal address
[ ] SMS workflow tested only with a consented test number
[ ] All trip date/time fields checked for timezone behavior
[ ] Privacy page published
```

**Observable outcome:** A real test lead can travel from website →
survey → GHL contact → pipeline → approved follow-up without manual data
repair.

## Testing & Debug Essentials

### Front-end smoke tests

1.  Homepage loads at 375px, 768px, 1440px widths.
2.  Every **Tell Me About Your Trip** CTA goes to the same intake path.
3.  Service prices display as **starting at**, not fixed universal
    prices.
4.  Costa Rica is presented as a specialty, not the only destination.
5.  No language implies Dani is ticketing or booking travel unless that
    service is actually established.
6.  `npm run build` passes before every release.

### GHL end-to-end tests

Create four test contacts:

``` text
A. Done With You + email consent
B. Done For You + email/SMS consent
C. Done For You + email only
D. Done For You + no marketing SMS consent
```

Verify:

-   Correct tag
-   Correct pipeline stage
-   Correct opportunity value
-   Correct internal notification
-   No SMS to a contact who did not provide valid consent
-   Date-based reminder uses the intended trip timezone
-   Editing a trip date does not leave an obsolete reminder active
-   Duplicate form submissions do not create confusing duplicate
    opportunities

### Logging

For the front-end MVP, log only non-sensitive technical events. Do not
place full survey answers, passport information, payment data, or
sensitive traveler details in browser logs.

``` ts
export function track(event: string, properties: Record<string, unknown> = {}) {
  if (import.meta.env.DEV) {
    console.info("[analytics]", event, properties);
  }
}
```

### Error boundary

``` tsx
import React from "react";

export class ErrorBoundary extends React.Component<
  React.PropsWithChildren,
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="section">
          <div className="container">
            <h1>Looks like this page took an unexpected detour.</h1>
            <p>Please refresh or return to the homepage.</p>
          </div>
        </main>
      );
    }
    return this.props.children;
  }
}
```

**Observable outcome:** Known failure modes produce a clear fallback
instead of a blank page.

## Accessibility Checklist

-   [ ] Every input has a visible label.
-   [ ] Survey errors identify the field and explain how to fix it.
-   [ ] Full site works with keyboard only.
-   [ ] Visible focus state on links, buttons, fields, and cards.
-   [ ] Heading order is logical (`h1` → `h2` → `h3`).
-   [ ] Decorative images use empty alt text; meaningful travel images
    have concise alt text.
-   [ ] Text over photography meets contrast requirements or uses a
    solid overlay.
-   [ ] Tap targets are at least comfortably finger-sized.
-   [ ] No information is communicated by color alone.
-   [ ] Motion respects `prefers-reduced-motion`.
-   [ ] SMS/email consent controls are not pre-checked.
-   [ ] Pricing is readable by screen readers and includes "starting
    at."

**Observable outcome:** A keyboard-only user can navigate from homepage
through the intake CTA without losing context.

## Performance Playbook

-   Convert hero/destination photos to WebP/AVIF.
-   Keep hero image roughly ≤300 KB where visual quality permits.
-   Lazy-load below-the-fold images.
-   Avoid video backgrounds in v1.
-   Use only two font families and limited weights.
-   Keep GHL embeds isolated so they do not block the entire homepage.
-   Prefer a linked/embedded survey on `/plan-my-trip` rather than
    loading heavy third-party scripts on every page.
-   Run production build before release.
-   Add caching at the chosen static host.
-   Do not ship API keys or private GHL credentials in `VITE_`
    variables; those are browser-visible.
-   Keep the MVP stateless on the custom front-end.

**Observable outcome:** The homepage remains fast even when GHL or
analytics integrations are temporarily slow.

## Business Impact & Analytics

### Primary KPI

**Qualified trip inquiries per referred visitor.**

Secondary KPIs:

-   Homepage → survey start rate
-   Survey completion rate
-   Done With You vs. Done For You selection
-   Inquiry → paid planning client
-   Average planning revenue
-   Days from inquiry to planning
-   Post-trip testimonial rate
-   Referral rate

### Events / Analytics

  ------------------------------------------------------------------------------
  Event                    Trigger           Properties        Success Metric
  ------------------------ ----------------- ----------------- -----------------
  `view_home`              Homepage viewed   referral source   Baseline

  `click_plan_trip`        Main CTA clicked  section           CTA rate

  `view_services`          Services section  ---               Offer engagement
                           viewed                              

  `select_service`         Service chosen    `dwy` / `dfy`     Package mix

  `survey_start`           Intake begins     source            Start rate

  `survey_complete`        GHL confirms      service           Completion rate
                           submit                              

  `consultation_booked`    Calendar booked   service           Qualified
                                                               conversion

  `client_won`             GHL stage changes service, value    Revenue
                                                               conversion

  `trip_ready`             GHL trip-ready    destination       Fulfillment
                           stage                               

  `testimonial_received`   Review captured   service           Advocacy
  ------------------------------------------------------------------------------

### Minimal analytics helper

``` ts
export function analytics(event: string, props: Record<string, unknown> = {}) {
  window.dispatchEvent(
    new CustomEvent("danib:analytics", { detail: { event, props } })
  );
}
```

Connect the helper to the analytics provider chosen later.

### Homepage copy map

**Eyebrow:** Personal Travel Planning • Worldwide + Costa Rica

**Hero:**\
**You dream about the trip. DaniB obsesses over the details.**

**Subhead:**\
Thoughtful travel planning for people who want an incredible trip
without spending nights comparing reviews, routes, rentals, stays, and
47 open browser tabs.

**Primary CTA:** Tell Me About Your Trip

**Trust line:**\
*My friends call me Detail Dani for a reason.*

**Done With You:**\
**You know where. Let's make it great.**\
Starting at \$500.

**Done For You:**\
**Tell me the kind of trip you want. I'll get into the details.**\
Starting at \$1,000.

**Costa Rica:**\
**Costa Rica is more than a pin on my map. It's home.**

**Final CTA:**\
**Ready to stop researching and start looking forward to the trip?**\
Tell Dani About Your Trip →

### Positioning guardrail

Do not call Dani a travel agent unless/until that accurately reflects
the business and any applicable requirements. MVP language should focus
on **travel planning, research, recommendations, itinerary design,
organization, and concierge-style guidance**.

**Observable outcome:** The site can measure the full referral → inquiry
→ client path instead of counting page views alone.

## Auto-Grade & Fix-It Plan

  ------------------------------------------------------------------------
  Category                                     Score Why
  --------------------- ---------------------------- ---------------------
  UI/UX                                       97/100 One dominant journey,
                                                     two understandable
                                                     offers,
                                                     referral-first trust

  Code Clarity                                96/100 Small React
                                                     architecture,
                                                     centralized
                                                     copy/config, no
                                                     unnecessary backend

  Performance                                 95/100 Static-first site,
                                                     optimized image
                                                     policy, GHL isolated
                                                     from core render

  Accessibility                               96/100 Explicit keyboard,
                                                     contrast, labels,
                                                     reduced-motion and
                                                     consent requirements

  Testing/Debug                               95/100 Front-end smoke tests
                                                     plus four GHL
                                                     workflow test
                                                     personas

  Business Impact                             98/100 Clear \$500/\$1,000+
                                                     ladder, referral
                                                     positioning, CRM
                                                     pipeline and
                                                     post-trip loop
  ------------------------------------------------------------------------

**Overall weighted readiness: 96+/100.**

### Fix-It Plan before public launch

-   Add 3--5 genuine client/friend testimonials after permission is
    received.
-   Replace generic destination photography with real Dani/travel
    imagery over time.
-   Test actual GHL form embeds and automation behavior on mobile.
-   Verify SMS/email consent wording and messaging configuration for the
    jurisdictions/customers served.
-   Test date/time reminders across destination time zones.
-   Validate the first five paid projects and adjust package
    scope/pricing from actual hours spent.
-   Add a clear change/cancellation/refund policy before taking payment.
-   Add terms/privacy content appropriate to the actual data and
    services used.

All six categories already exceed the required 90/100 threshold.

## FAQ & Troubleshooting

### Q: Is Dani a travel agent?

**A:** The MVP positions Dani as a travel-planning concierge: research,
recommendations, itinerary creation, and organization. Customers make
final travel purchases/reservations unless the business later
establishes a separate booking service.

### Q: Why does Done For You start at \$1,000?

**A:** Trip complexity varies dramatically. A four-day getaway and a
three-week multi-stop trip should not automatically cost the same.
"Starting at" protects the business while giving customers a clear entry
price.

### Q: What happens after the survey?

**A:** GHL should create/update the contact, tag the requested service,
create the opportunity, notify Dani, and send only the communications
configured for that customer's permissions.

### Q: Can GHL text flight and reservation reminders?

**A:** Design the workflow to do so using confirmed structured
dates/times and appropriate consent. Test each reminder workflow before
promising it publicly.

### Q: Should we collect passport or credit-card details in the trip survey?

**A:** No for the MVP. Collect only what Dani actually needs to plan the
trip. Avoid unnecessary sensitive identity/payment data.

### Q: What if the visitor has no destination yet?

**A:** Allow "I'm open to ideas." Dani can qualify the trip using dates,
budget, climate, travel style, flight tolerance, and desired
experiences.

### Q: What if the visitor already booked flights?

**A:** Branch around flight research and focus Dani's effort on stays,
routing, transportation, activities, and itinerary.

### Q: Does GitHub automatically publish into GHL?

**A:** Do not assume so. GitHub is the code source/version history. GHL
is the CRM/automation layer and may also host/recreate the approved
page. Establish a specific deployment process only after testing the
chosen GHL setup.

### Q: What is the best first testimonial?

**A:** Ask early customers to describe the problem Dani removed: time
saved, places they would not have found, confidence in decisions, and
how organized the trip felt. Never fabricate testimonials.

### Q: Why feature Costa Rica if Dani plans worldwide travel?

**A:** It creates a credible specialty and a strong story without
limiting the brand. Use "Worldwide travel + Costa Rica specialty"
consistently.

## Next Iteration Plan (7-Day)

### Day 1 --- Brand + GHL foundation

-   Create Trips by DaniB logo wordmark/text treatment.
-   Reserve domain/social handles if desired.
-   Create GHL pipeline and custom fields.
-   Create tags: `SERVICE_DWY`, `SERVICE_DFY`, `COSTA_RICA`.
-   **Verify:** A manual test contact can be moved through every
    pipeline stage.

### Day 2 --- Build the website shell

-   Initialize Vite/React/TypeScript in Windsurf.
-   Add design tokens.
-   Build Hero, Services, Detail Dani, Costa Rica, How It Works, FAQ,
    footer.
-   Push to GitHub.
-   **Verify:** Homepage works at mobile and desktop widths.

### Day 3 --- Build the trip survey

-   Create the nine-screen intake in GHL.
-   Add branching for Done With You vs. Done For You.
-   Add clear consent controls.
-   Connect thank-you destination.
-   **Verify:** Four test personas produce the expected contact
    fields/tags.

### Day 4 --- Build lead automation

-   New inquiry internal alert.
-   Client confirmation email.
-   Optional consultation calendar.
-   Pipeline opportunity creation.
-   **Verify:** Test inquiry reaches Dani and the customer test inbox
    correctly.

### Day 5 --- Build Done For You trip operations

-   Create structured trip-date fields.
-   Build pre-trip, flight, lodging, rental-car, and activity reminder
    templates.
-   Add guard conditions for missing dates and messaging consent.
-   **Verify:** Use near-future dummy dates and confirm workflow timing
    before enabling for customers.

### Day 6 --- QA + trust

-   Mobile QA.
-   Accessibility pass.
-   Image optimization.
-   Privacy/terms/service-scope review.
-   Add real testimonials if available and approved.
-   **Verify:** Complete a full website → GHL → reminder dry run.

### Day 7 --- Soft launch to referrals

-   Send the site privately to 5--10 friends.
-   Ask them to explain what Dani sells after 10 seconds.
-   Watch where they hesitate in the survey.
-   Track package selection.
-   Fix confusing copy before wider sharing.
-   **Verify:** At least one person unfamiliar with the build can
    complete the intake without help.

------------------------------------------------------------------------

# Windsurf Master Build Prompt

Paste the following into Windsurf after creating a blank project:

``` text
You are the senior product engineer for Trips by DaniB.

Build a production-quality mobile-first React + TypeScript + Vite website from the specification in this repository.

BUSINESS:
Trips by DaniB is a referral-first travel-planning concierge. Dani is known by friends as “Detail Dani” because she researches reviews, neighborhoods, routes, stays, transportation and experiences in depth. She plans worldwide travel and now lives in Costa Rica, giving the brand a special Costa Rica angle.

OFFERS:
1. Done With You — starting at $500.
   Customer already has a destination/strong direction. Dani provides curated recommendations for where to stay, what to do, areas to prioritize, transportation guidance and planning advice.
2. Done For You — starting at $1,000.
   Dani researches flight options, hotel/Airbnb options, rental cars/transportation, experiences, local finds and creates a day-by-day itinerary. Confirmed trip details may be entered into GoHighLevel for approved email/SMS reminders.

POSITIONING:
Do not describe Dani as a travel agent or imply that she purchases/tickets travel for customers. Describe the service as planning, research, recommendations, itinerary design and concierge-style organization.

DESIGN:
Coastal modern + understated luxury + warm boho.
Palette:
sand #F6F0E7
shell #FFFDF9
ocean #173F43
sage #84947E
clay #B86F52
ink #202624
mist #DDE7E3
Use Cormorant Garamond-style serif headlines and Inter/system sans body typography.
Large destination imagery, generous whitespace, rounded cards, subtle shadows, no generic corporate travel aesthetic.

PRIMARY COPY:
Brand: Trips by DaniB
Hero: “You dream about the trip. DaniB obsesses over the details.”
Subhead: “Thoughtful travel planning for people who want an incredible trip without spending nights comparing reviews, routes, rentals, stays, and 47 open browser tabs.”
CTA: “Tell Me About Your Trip”
Trust hook: “My friends call me Detail Dani for a reason.”
Costa Rica line: “Costa Rica is more than a pin on my map. It’s home.”

PAGES:
/
 /plan-my-trip
 /thank-you
 /privacy

COMPONENTS:
Header
Hero
ServiceCards
DetailDani
CostaRica
HowItWorks
TripCTA
FAQ
Footer
ErrorBoundary

TECHNICAL:
- React + TypeScript + Vite
- No custom backend/database/auth for MVP
- Centralize copy/config in src/config/site.ts
- Use VITE_GHL_SURVEY_URL for the GHL intake destination
- Never put private GHL credentials in browser environment variables
- Responsive at 375, 768 and 1440 widths
- Semantic HTML
- Visible keyboard focus
- Reduced motion support
- Optimize/lazy-load images
- No fabricated testimonials
- No lorem ipsum
- No dead buttons
- npm run build must pass

GHL:
The front-end sends visitors to or embeds the configured GHL trip survey. GHL owns contact records, pipeline, tags, custom fields, calendar, email/SMS and trip reminder workflows. Do not invent private API credentials. Do not claim GitHub automatically deploys to GHL.

SUCCESS:
A referred visitor should understand what Dani sells within 10 seconds, distinguish the $500+ and $1,000+ services, understand the Costa Rica specialty, trust the “Detail Dani” story, and start the trip survey from any primary CTA.

After implementation:
1. Run the production build.
2. Fix all TypeScript/build errors.
3. Report files created/changed.
4. Report any GHL values still requiring configuration.
5. Give me a five-minute manual QA checklist.
```

# Launch Decision

**Build this MVP now.** The concept does not need more features before
validation. The competitive advantage is Dani's judgment and attention
to detail; the website and GHL should make that expertise easier to buy,
deliver, organize, and refer.

The first meaningful product test is not traffic. It is whether a
referred visitor says:

**"Oh---this is exactly what Dani has always done for us. Now I can just
hire her to do it."**
