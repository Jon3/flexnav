# Status Log

Newest entry at the top. Each entry: who, when, what changed, what's next.
Keep entries short — this is a handoff log, not a diary.

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
