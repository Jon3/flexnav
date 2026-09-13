# AI Dev Team — Collaboration Plan

Working notes for how Claude and Codex/ChatGPT collaborate across John's
devices (desktop, laptop — both networked — with iPhone, iPad, and Android
as remote supervision/control points). This file is the source of truth for
picking up work cold — read this and `STATUS.md` before chat history.

## Goal

A small AI dev team spanning John's machines, working in parallel without
either side waiting on the other. As close to hands-off as possible:
agents work in batches (e.g. ~30 minutes of autonomous work), only stopping
to ask John when a real decision is needed, with remote supervision from
his phone in the meantime.

## Workflow model

- **Shared-repo-centric.** All agents work from the same repo(s). Separate
  git branches or worktrees per task, with clear task boundaries agreed up
  front so two agents don't edit the same files at the same time.
- **Plan/status files, not chat history.** Every agent updates this plan
  file and `STATUS.md` at the end of a work session so any other agent (or
  John) can enter cold — without needing the conversation that produced the
  change. Changelog and tests are the shared record, not chat transcripts.
- **Codex/ChatGPT side** aligns to the same convention: same plan file,
  same changelog/status file, same tests as the handoff mechanism.
- **Escalation rule:** don't ask John about implementation detail; do ask
  about anything that changes scope, branding, data, or where something
  gets deployed.

## Standing design requirement: reusable slider/carousel

Any slider or carousel component built for these sites must:

- Support **multiple independent instances on the same page**, each bound
  to its own data source (e.g. one slider for products, one for
  categories, one for news, one for blog posts) — not a single global
  slider config.
- Be styleable/sizeable to **slot cleanly into a full-page layout**, not
  just a small homepage widget.

Status: spec captured here, nothing built yet. Flag which page/section
needs it first before implementing — no current NHS Top Up page has a
carousel yet.

## Open items for John

- Confirm task boundaries between Claude and Codex once the Codex side is
  set up, so branches/worktrees don't overlap.
- Confirm scope and repo/domain for the new "online shop" mockup project
  raised in chat (separate from NHS Top Up) before it gets built.

## Related docs

- `STATUS.md` — per-task status log (what's done / in progress / blocked).
- `OPERATIONS-CHECKLIST.md` — NHS Top Up business/product tracker (separate
  concern from this dev-process file).
