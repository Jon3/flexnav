# NHS Top Up — Operations Checklist

Internal tracking document for open requirements and decisions as the proposal
develops. Not published on the public site — the Progress page shows a
lighter, public-facing summary once things are actually decided or done.

Status values: `Open` (not started) · `Researching` (info gathered, decision
pending) · `Decided` (chosen, not yet actioned) · `Done` (actioned/live).

## Legal & governance

| Item | Status | Notes |
|---|---|---|
| Charity/legal structure (charity, CIO, CIC, etc.) | Open | Not yet decided — see Proposal page "What's not decided yet." |
| Charity registration & tax status | Open | Depends on structure decision above. |

## Finance & accounting

| Item | Status | Notes |
|---|---|---|
| Accounting software | Researching | Xero, QuickBooks Online, or Sage for general bookkeeping; **Beacon** or **Donorfy** for donor CRM/Gift Aid. If income later exceeds ~£5m, dedicated fund-accounting platforms (Liberty Accounts, Pegasus, iplicit) handle SORP fund-accounting properly. |
| SORP compliance timing | Researching | SORP 2026 (charity accounting standard) applies to periods starting on/after 1 Jan 2026 — relevant to when we formally register. |
| Financial transparency model | Researching | Long-term goal: append-only, auditable transaction record (no editing past entries, only new correcting entries) — gets blockchain-style tamper-evidence without running actual blockchain infrastructure. Start with a single trusted central ledger. Ties to "Transparent by design" site messaging. |

## Technology & funding for tech

| Item | Status | Notes |
|---|---|---|
| AWS Imagine Grant (UK) | Researching | Funds nonprofits adopting cloud/AI/ML — two tracks (Pathfinder, Go Further Faster). Best-fit Amazon programme for our tech/scalability needs. Worth pursuing once we have a registered charity status (grants usually require this). |
| Amazon Regional Creatives Fund | Decided — not applicable | £30k grants, but scoped to creative-industry skills programmes, not general charity ops. Not a fit. |
| AmazonSmile | Decided — not applicable | Discontinued Feb 2023. Do not reference this on the site. |
| Software/platform choice & scaling plan | Open | Needs a named Tech Lead (see Roles below) to own this. |

## Vehicles & logistics

| Item | Status | Notes |
|---|---|---|
| Charity van leasing | Researching | Charity-specific providers (e.g. Charity Fleetcare) offer no-markup leasing rates for charities. |
| EV/van grants | Researching | Government Zero Emission Van Grant: up to £5,000 off at purchase. Broader £1bn government package supporting electric van/truck adoption through 2030, incl. £170m for charging infrastructure. |
| Maintenance contracts | Open | Not yet researched in detail. |

## Roles / people needed (for future "areas where help is needed" section)

| Role | Status | Notes |
|---|---|---|
| Tech Lead | In conversation | Candidate identified (brother-in-law — .NET dev moving into React/apps). Pitch message drafted. Not yet confirmed — published on the public Get Involved page as "In conversation," not "Filled," until he actually says yes. |
| Charity Status / Accounting Lead | Open | Owns registration, tax, SORP compliance, accounting software choice. |
| Vehicle & Logistics Lead | Open | Owns fleet deals, maintenance contracts, delivery scaling. |
| Marketing & Partnerships Lead | Open | Owns PR, brand, and outreach to sponsors/partners. Build local credibility before approaching national/high-profile supporters (see Partnerships & Marketing Ideas below). |
| International Development Lead | Open | Deliberately later-stage — not a priority until the core model is proven locally. |

These five are now also shown publicly on the Get Involved page ("Specific
roles we're looking to fill") — keep this table and that page in sync when
status changes.

## Partnerships & marketing ideas (not yet pursued — do not name on public site until real)

| Idea | Notes |
|---|---|
| Retailer product/tech sponsorship | e.g. a large homeware retailer providing smart-shop tech or merchandise in kind. Speculative — no relationship exists yet. Don't name a specific company publicly until something real is agreed. |
| Surplus food redistribution | Rather than approaching individual supermarkets cold, more realistic route is via established surplus-food redistribution networks (e.g. FareShare, Company Shop Group) who already have retailer relationships — worth approaching them first. |
| Delivery network for hire | Once the delivery/logistics side exists, offer it to small local businesses (e.g. fresh/health food producers) at a discount rate as a future income stream — ties to the Vehicle & Logistics Lead role. |
| Celebrity/high-profile endorsement | Aspirational, right instinct — but credibility usually needs to be built bottom-up first. Realistic order: local press/community traction → regional media → local personalities as "ambassadors" → national/celebrity interest once there's a real story to tell, not before. |
| Corporate matched-giving / payroll giving | Many large companies match employee donations or run payroll-giving schemes — a proven, lower-effort route into corporate support than chasing a headline sponsor cold. |
| University partnerships | Business schools often run pro-bono student consulting projects (business plan validation, market research) — cheap, credible early-stage support. |
| "Founding member" recognition | Public recognition (named founding member status, first refusal on paid roles later) rather than material rewards — charities have private-benefit rules restricting material rewards to founders/volunteers from charitable funds, so recognition-based framing is the safe version of the same idea. |
| Job centre / recruitment platform outreach | Idea: list volunteer roles via local job centres and platforms like Indeed/Reed/Monster, framed as flexible/skill-building opportunities (not paid jobs) — many people would give some time even if not full-time. No relationship or listing exists yet — do not state on the public site that these are live channels until something is actually agreed with a named platform or job centre. |

## Site roles structure (Done)

The Get Involved page now organises all open roles into 6 categories
(Leadership & Governance, Technology & Innovation, Retail Operations,
Logistics & Delivery, Partnerships & Expansion, Voluntary Opportunities),
each role tagged (Volunteer / Flexible hours / Remote / Hybrid / In-person)
with visitor-facing filters, plus a "skills you'll build" line per role.
Source of truth for role content is `data/openRoles.ts`.

## Recruitment process design

| Item | Status | Notes |
|---|---|---|
| Video call interview standards | Open | Idea: a short video call for roles beyond casual shop volunteering, once there are enough applicants to warrant it. Not in place yet — the site doesn't claim a formal process exists. |
| Per-role requirements | Open | Define clear, simple requirements for each role (see `data/openRoles.ts`) as people actually apply, rather than over-specifying upfront. |
| Recruitment Lead role | Added to site | New role added under Leadership & Governance — owns designing the above. As regions/stores open, this evolves into coordinating regional recruitment leads reporting up to this role (or a future recruitment manager). |

### Org structure

- **National recruitment team** (starting point) — handles all applications and video interviews centrally while volume is low.
- **Regional recruitment leads** — delegated to as regions/stores grow, so hiring stays local without needing a full national team per region from day one.
- **Store managers** — deliberately kept out of the hiring decision itself; their job is welcoming new team members and day-to-day support once someone's already through the process, not running interviews.

### Process (once built)

Online applications → clear role profile per position (already exists as
copy in `data/openRoles.ts`, would become structured data) → video interview
where appropriate (not every role needs one — e.g. casual shop volunteering
probably shouldn't) → induction.

### Future software module — phased build order

This is the recruitment module's roadmap for whenever the membership/accounts
system gets built (see the "membership area" discussion — deliberately not
built yet: needs a database, real user data, and the GDPR obligations that
come with it). Build in this order, each phase usable on its own before the
next is added:

1. **Application tracking** — capture and store applications against role
   profiles. The foundational layer everything else sits on.
2. **Interview scheduling** — calendar/video-call coordination once
   application volume justifies it.
3. **Onboarding** — induction workflow for people who've been accepted.
4. **Regional assignment** — route applications/people to the right
   region/store once there's more than one location.
5. **Internal promotions** — track progression (ties directly to the
   Leadership pathway on the Get Involved page: volunteer → team leader →
   store/area/regional).

Each phase should work standalone — don't build phase 3 in a way that
requires phase 4 to exist, since real growth won't happen in a straight line.

## Growth pathways (Done)

The Get Involved page now presents three pathways under "Grow with NHS Top
Up": Volunteer (flexible hours), Employment (work experience → part-time →
full-time as the org grows), and Leadership (volunteer → team leader →
store/area/regional, with mentoring). Explicit equal-value statement
included: a few hours a month is valued the same as someone training toward
a regional leadership role. Source: `data/growthPathways.ts`.

---

**Process going forward:** raise a requirement or question → it gets added
here as `Open` → researched (status → `Researching`, findings noted) →
decided together (status → `Decided`) → actioned (status → `Done`). Anything
worth telling site visitors about gets pulled into the public Progress page
separately, in plain language, once it's actually true.
