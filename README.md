# NHS Top Up (working title)

A version-one site for **NHS Top Up**, a proposal-stage concept for a charity retail scheme
that would help top up NHS support in ways core funding doesn't reach.

> **This is not an official NHS or government project.** It is not affiliated with or
> endorsed by NHS England or any NHS body, is at proposal stage only, and does not accept
> donations of any kind. See the [FAQ](./app/faq/page.tsx) for details.

## Stack

- [Next.js](https://nextjs.org/) 14 (App Router)
- TypeScript
- Tailwind CSS

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # eslint
```

## Project structure

```
app/                 Route pages (App Router) — home, about, proposal, progress,
                     get-involved, faq, contact
components/          Reusable UI (Header, Footer, forms, timeline, FAQ accordion, etc.)
data/                Content as typed data — site copy, benefits, timeline, FAQs, roles
types/               Shared TypeScript types for the data layer
legacy-flexnav/      Unrelated legacy jQuery plugin previously in this repo, kept for
                     reference — not part of the NHS Top Up site
```

Page content is intentionally driven by the files in `data/` rather than hardcoded in
each page, so copy can be edited without touching component code, and new items
(benefits, FAQs, timeline steps, involvement roles) can be added by editing one file.

## Design notes

- **Mobile-first, accessible, light and credible.** No NHS or government branding is
  used — the colour palette and styling are deliberately generic to avoid implying
  official status.
- **Disclaimer surfaced everywhere.** A short disclaimer banner appears site-wide, with
  the fuller wording in the footer and on key pages (home, about, get involved).
- **Forms email their submissions.** The Get Involved and Contact forms POST to
  `app/api/get-involved/route.ts` and `app/api/contact/route.ts`, which send an email via
  [Resend](https://resend.com) to the address in `RECIPIENT_EMAIL`. If `RESEND_API_KEY`
  isn't set, the API returns a clear error rather than pretending to succeed — the form
  shows an honest "that didn't send" message with a fallback `mailto:` link instead of a
  false confirmation. See `.env.local.example` for the required environment variable.

## What's deliberately not built yet

This is a v1 scaffold. Kept simple on purpose, ready to extend later:

- No database or persistence — form submissions are emailed, not stored anywhere.
- No CMS — content lives in typed files under `data/`.
- No authentication, donations, or payment flows (donations aren't being accepted at
  this stage in any case).
- Vercel Web Analytics is enabled (cookie-free page views); no other analytics or
  tracking beyond that.
