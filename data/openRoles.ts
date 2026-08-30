import type { OpenRole } from "@/types";

export const openRoles: OpenRole[] = [
  {
    title: "Tech Lead",
    status: "in-conversation",
    description:
      "Owns the technical direction of NHS Top Up: the website today, a future app, and hosting and scalability as the project grows.",
    details: [
      "Acts as product owner as this grows — setting priorities and roadmap, not just building what's asked for.",
      "Builds and owns a dedicated app for the NHS Top-Up Foundation once there's a clear need for one, alongside the website.",
      "Makes the ongoing call on hosting and scalability as usage grows, including evaluating grant-funded infrastructure options.",
    ],
  },
  {
    title: "Charity Status / Accounting Lead",
    status: "open",
    description:
      "Owns charity registration, tax status, SORP compliance, and choosing the accounting platform.",
    details: [
      "Sets up proper fund accounting from day one, including Gift Aid once registration allows it.",
      "Advises on structure (charity, CIO, CIC) and its trade-offs before registration is finalised.",
      "Prepares the organisation for its first annual return and independent examination once registered.",
    ],
  },
  {
    title: "Vehicle & Logistics Lead",
    status: "open",
    description: "Owns fleet deals, maintenance contracts, and delivery scaling.",
    details: [
      "Negotiates leasing and maintenance deals, including EV grants to keep running costs down.",
      "Designs delivery zones and click-and-collect logistics as the shop network grows.",
      "Explores offering the delivery network to local businesses as a future income stream.",
    ],
  },
  {
    title: "Marketing & Partnerships Lead",
    status: "open",
    description:
      "Builds the public profile of NHS Top Up and leads outreach to potential sponsors, partners, and supporters.",
    details: [
      "Develops a marketing and PR plan, building local credibility before approaching national or high-profile supporters.",
      "Leads outreach for corporate sponsorship and local business partnerships.",
      "Owns brand and messaging consistency across the website, shops, and any future app.",
    ],
  },
  {
    title: "International Development Lead",
    status: "open",
    description:
      "Explores whether and how the NHS Top Up model could extend beyond its initial region, once the core model is proven.",
    details: [
      "Researches equivalent healthcare-charity models internationally for lessons and risks.",
      "Assesses legal, regulatory, and cultural differences before recommending any international expansion.",
      "A deliberately later-stage role — not a priority until the initial model is running well locally.",
    ],
  },
];
