# Trips by DaniB

Referral-first travel-planning concierge website.

## Stack
- React
- TypeScript
- Vite
- GoHighLevel for survey, CRM, pipeline, calendar, email/SMS, reminders
- GitHub for source control

## Start

```bash
npm install
cp .env.example .env
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Configure GoHighLevel

Set `VITE_GHL_SURVEY_URL` in `.env` to the public GHL survey/form URL.

## Build

```bash
npm run build
```

Expected: a `dist/` folder is generated without TypeScript errors.
