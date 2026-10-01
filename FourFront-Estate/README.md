# FourFront Estate

Abuja-focused real estate marketplace frontend.

## Current implementation

- Responsive FourFront Estate landing page
- Property marketplace with search and filters
- Property detail pages with galleries, amenities and enquiry actions
- Abuja neighbourhood directory and neighbourhood detail pages
- Agent directory and agent detail pages
- Favorites stored locally in the browser
- Property comparison page
- Viewing-request workflow UI
- Contact/enquiry workflow UI
- Client login/register screens
- SEO-friendly route structure
- Netlify SPA fallback
- Tailwind CSS design system

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment note

The original uploaded repository was a scaffold with an intentionally minimal `src/App.jsx`. The current source replaces that placeholder with the implemented public website. Supabase can be connected to the existing service layer once the production database schema and environment variables are supplied.
