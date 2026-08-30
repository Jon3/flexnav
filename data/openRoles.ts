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
  },
  {
    title: "Vehicle & Logistics Lead",
    status: "open",
    description: "Owns fleet deals, maintenance contracts, and delivery scaling.",
  },
];
