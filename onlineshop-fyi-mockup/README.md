# OnlineShop.fyi — mockup

A functional preview of **OnlineShop.fyi**, the planned marketplace for
MegaMenu, Anything Slider, advanced full-page themes, and payment/banking
integrations for nopCommerce. This is **not** the final store — it's here so
the look and feel (including the AI shopping-assistant greeter) can be seen
and reacted to before the real build goes ahead on proper e-commerce
infrastructure.

Product copy is pulled from the real project state in the `nop-megamenu-dev`
and `AnythingSlider` repos' own plan files, not invented — each product's
status badge reflects what's actually built, not aspiration.

## Why this lives inside `flexnav` for now

This was meant to be its own repository, but repo creation isn't available
to this session's GitHub integration (personal/org `create_repository` calls
are rejected with a 403 — pushes to already-attached repos work fine). It's
scaffolded here as a fully independent Next.js app (own `package.json`,
config, and dependencies — nothing shared with the NHS Top Up app one
directory up) so it's easy to lift into its own repo:

1. Create an empty GitHub repo (e.g. `Jon3/onlineshop-fyi-mockup`).
2. `git subtree split --prefix=onlineshop-fyi-mockup -b onlineshop-fyi-export`
   from the `flexnav` repo root, then push that branch to the new repo's
   `main`. Or just hand the folder to whichever agent has repo-creation
   rights.

## Stack

Next.js 14 (App Router), TypeScript, Tailwind CSS — same stack as the NHS
Top Up site, run independently:

```bash
cd onlineshop-fyi-mockup
npm install
npm run dev   # http://localhost:3001
```

## AI shopping assistant

`components/AiGreeter.tsx` auto-opens once per browser session with a
static welcome message, then hands off to `app/api/assistant/route.ts`
(OpenAI, same pattern as NHS Top Up's chat widget) grounded only in
`data/products.ts` — it won't claim a product is finished or purchasable
unless that file says so. Needs `OPENAI_API_KEY` set; without it the API
returns a clear 503 rather than failing silently.

## What's deliberately not built

- No cart, checkout, or payment flow — this is a look-and-function preview.
- No CMS or database — product data lives in `data/products.ts`.
- No real pricing — none has been decided yet.
