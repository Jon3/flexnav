# Status Log

Newest entry at the top. Each entry: who, when, what changed, what's next.
Keep entries short — this is a handoff log, not a diary.

---

## 2026-09-13 — Claude (session 3)

**Done:**
- Removed `onlineshop-fyi-mockup/` from this repo. It doesn't belong here —
  `flexnav` is NHS Top Up's repo, and the mockup previews an unrelated
  commercial project (the MegaMenu/Anything Slider marketplace). Reverted
  the `tsconfig.json` exclude added for it. The built code itself wasn't
  lost — copied out to session scratch space, ready to push once it has a
  proper home.

**Flag for John — public-repo exposure:**
- `flexnav` is a **public** GitHub repo. The mockup (and its reference to
  `nop-megamenu-dev`'s and `AnythingSlider`'s real project status) was live
  in this repo's public commit history for a short window before this
  removal. No API keys, credentials, or secrets were in any of it — just
  descriptive product/roadmap text — but it's still commercial-roadmap
  content that was briefly publicly visible. A plain revert (what just
  happened) leaves it recoverable from git history by anyone who looks;
  fully purging it needs a history rewrite (`git filter-repo` + force-push),
  which is destructive to anyone else's clones and only worth doing if
  John decides the exposure actually matters. Not done without his say-so.

**Needs a decision from John:**
- Where should the OnlineShop.fyi mockup actually live? A new repo (still
  blocked — `create_repository` returns 403 for this session), or folded
  into the MegaMenu ecosystem repos instead?
- Is the brief public-history exposure above worth a history rewrite, or
  fine to leave as a past revert?
- The wider repo list looks like it has duplicates/stale entries worth
  clearing up — see chat for the specifics; needs John's call on what to
  archive vs. keep.

**Branch:** `claude/collaboration-chat-got-uitv2e`

---

## 2026-09-13 — Claude (session 2)

**Done:**
- Built the OnlineShop.fyi mockup at `onlineshop-fyi-mockup/` — home,
  products listing, product detail pages, and an AI shopping-assistant
  greeter (`components/AiGreeter.tsx` + `app/api/assistant/route.ts`,
  OpenAI-backed, same degrade-gracefully-without-a-key pattern as NHS Top
  Up). Product copy/status pulled from the real state in
  `nop-megamenu-dev/MEGAMENU_MASTER_PLAN.md` and
  `AnythingSlider/ANYTHINGSLIDER_PLAN.md` (both cloned and inspected this
  session) rather than invented.
- Fully independent Next.js app (own package.json/config), root `flexnav`
  `tsconfig.json` updated to exclude it so the two builds don't collide;
  verified both build/lint cleanly on their own.

**Blocked / needs a decision from John:**
- `create_repository` returns 403 for this session — can't create the
  intended standalone repo for the mockup. It's sitting in `flexnav/
  onlineshop-fyi-mockup/` in the meantime (see `PLAN.md` and that folder's
  README for how to lift it out once an empty repo exists).

**Branch:** `claude/collaboration-chat-got-uitv2e`

---

## 2026-09-13 — Claude

**Done:**
- Added OpenAI-powered site chat widget (`components/ChatWidget.tsx` +
  `app/api/assistant/route.ts`) grounded in the site's own FAQ/roles/
  timeline content, plus a "Help me phrase this" helper on the Get Involved
  form. Both degrade gracefully without `OPENAI_API_KEY`.
- Captured the AI dev team collaboration model in `PLAN.md` per John's
  handoff notes (shared-repo workflow, branches/worktrees, plan/status
  files, hands-off batches with phone supervision).
- Logged the reusable multi-instance slider requirement in `PLAN.md` as a
  spec (not built — no page needs it yet).

**In progress / not started:**
- Nothing currently in flight on this branch.

**Blocked / needs a decision from John:**
- Scope and location of the new "online shop" mockup project (AI greeter
  bot on first load, mock storefront) — need to know: separate repo or a
  folder in this one, and whether it's NHS Top Up branded or a standalone
  generic demo before building anything.
- Task split between Claude and Codex once the Codex side is configured.

**Branch:** `claude/collaboration-chat-got-uitv2e`
