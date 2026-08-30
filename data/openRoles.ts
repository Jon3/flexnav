import type { OpenRole } from "@/types";

export const openRoles: OpenRole[] = [
  // Leadership & Governance
  {
    title: "Charity Status / Accounting Lead",
    status: "open",
    category: "leadership-governance",
    tags: ["volunteer", "flexible-hours", "remote"],
    description:
      "Owns charity registration, tax status, SORP compliance, and choosing the accounting platform.",
    skillsGained: "Charity finance & compliance experience",
    details: [
      "Sets up proper fund accounting from day one, including Gift Aid once registration allows it.",
      "Advises on structure (charity, CIO, CIC) and its trade-offs before registration is finalised.",
      "Prepares the organisation for its first annual return and independent examination once registered.",
    ],
  },
  {
    title: "Legal & Governance Advisers",
    status: "open",
    category: "leadership-governance",
    tags: ["volunteer", "flexible-hours", "remote"],
    description: "Advise on charity compliance, contracts, and governance as the structure is set up.",
    skillsGained: "Governance & contract experience",
  },
  {
    title: "Grants & Fundraising Team",
    status: "open",
    category: "leadership-governance",
    tags: ["volunteer", "flexible-hours", "remote"],
    description: "Researches and applies for grants, and builds a wider fundraising strategy.",
    skillsGained: "Fundraising & grant-writing experience",
  },

  // Technology & Innovation
  {
    title: "Tech Lead",
    status: "in-conversation",
    category: "technology-innovation",
    tags: ["volunteer", "flexible-hours", "remote"],
    description:
      "Owns the technical direction of NHS Top Up: the website today, a future app, and hosting and scalability as the project grows.",
    skillsGained: "Product ownership & software architecture experience",
    details: [
      "Acts as product owner as this grows — setting priorities and roadmap, not just building what's asked for.",
      "Builds and owns a dedicated app for the NHS Top-Up Foundation once there's a clear need for one, alongside the website.",
      "Makes the ongoing call on hosting and scalability as usage grows, including evaluating grant-funded infrastructure options.",
    ],
  },
  {
    title: "Ecommerce Team",
    status: "open",
    category: "technology-innovation",
    tags: ["volunteer", "flexible-hours", "remote"],
    description: "Runs online listings, click-and-collect, and online orders as the shop goes digital.",
    skillsGained: "Ecommerce & online retail experience",
  },
  {
    title: "Data & Research Group",
    status: "open",
    category: "technology-innovation",
    tags: ["volunteer", "flexible-hours", "remote"],
    description: "Tracks impact and researches expansion opportunities to guide decisions with evidence.",
    skillsGained: "Data analysis & research experience",
  },

  // Retail Operations
  {
    title: "Retail Operations Lead",
    status: "open",
    category: "retail-operations",
    tags: ["volunteer", "flexible-hours", "in-person"],
    description: "Sets consistent standards for how shops run, so every location feels part of one thing.",
    skillsGained: "Retail management experience",
  },
  {
    title: "Facilities Team",
    status: "open",
    category: "retail-operations",
    tags: ["volunteer", "flexible-hours", "in-person"],
    description: "Handles repairs and shop fitting to keep locations running and looking the part.",
    skillsGained: "Practical trades & facilities experience",
  },

  // Logistics & Delivery
  {
    title: "Vehicle & Logistics Lead",
    status: "open",
    category: "logistics-delivery",
    tags: ["volunteer", "flexible-hours", "hybrid"],
    description: "Owns fleet deals, maintenance contracts, and delivery scaling.",
    skillsGained: "Logistics & fleet management experience",
    details: [
      "Negotiates leasing and maintenance deals, including EV grants to keep running costs down.",
      "Designs delivery zones and click-and-collect logistics as the shop network grows.",
      "Explores offering the delivery network to local businesses as a future income stream.",
    ],
  },

  // Partnerships & Expansion
  {
    title: "Marketing & Partnerships Lead",
    status: "open",
    category: "partnerships-expansion",
    tags: ["volunteer", "flexible-hours", "hybrid"],
    description:
      "Builds the public profile of NHS Top Up and leads outreach to potential sponsors, partners, and supporters.",
    skillsGained: "Marketing & partnership-building experience",
    details: [
      "Develops a marketing and PR plan, building local credibility before approaching national or high-profile supporters.",
      "Leads outreach for corporate sponsorship and local business partnerships.",
      "Owns brand and messaging consistency across the website, shops, and any future app.",
    ],
  },
  {
    title: "Donations & Partnerships Lead",
    status: "open",
    category: "partnerships-expansion",
    tags: ["volunteer", "flexible-hours", "hybrid"],
    description: "Secures stock donation agreements with businesses to keep shops supplied.",
    skillsGained: "Negotiation & partnership experience",
  },
  {
    title: "Regional Development Lead",
    status: "open",
    category: "partnerships-expansion",
    tags: ["volunteer", "flexible-hours", "hybrid"],
    description: "Helps open new stores and build local partnerships as NHS Top Up expands region by region.",
    skillsGained: "Business development & leadership experience",
  },
  {
    title: "International Development Lead",
    status: "open",
    category: "partnerships-expansion",
    tags: ["volunteer", "flexible-hours", "remote"],
    description:
      "Explores whether and how the NHS Top Up model could extend beyond its initial region, once the core model is proven.",
    skillsGained: "Strategic research experience",
    details: [
      "Researches equivalent healthcare-charity models internationally for lessons and risks.",
      "Assesses legal, regulatory, and cultural differences before recommending any international expansion.",
      "A deliberately later-stage role — not a priority until the initial model is running well locally.",
    ],
  },

  // Voluntary Opportunities
  {
    title: "Shop & Event Volunteer",
    status: "open",
    category: "voluntary-opportunities",
    tags: ["volunteer", "flexible-hours", "in-person"],
    description:
      "No experience needed — help on the shop floor or at events, whenever you have time to spare, even just a few hours.",
    skillsGained: "Retail & customer service experience",
  },
];
