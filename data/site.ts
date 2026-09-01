import type { NavItem } from "@/types";
import { growthPathways } from "@/data/growthPathways";
import { roleCategoryLabels, roleCategoryOrder } from "@/data/roleCategories";

export const site = {
  name: "NHS Top Up",
  workingTitle: true,
  tagline: "A proposal for charity-retail-funded health top-ups.",
  shortDescription:
    "NHS Top Up is an early-stage proposal for a charity retail scheme that would raise funds to help top up support for NHS patients and services in ways core funding doesn't reach.",
  disclaimer:
    "NHS Top Up is an independent, proposal-stage concept. It is not an official NHS or government project, is not affiliated with or endorsed by NHS England or any NHS body, and does not currently accept donations of any kind.",
  disclaimerShort:
    "Proposal stage — not an official NHS or government project. No donations are being accepted yet.",
  contactEmail: "jonathonhopley@hotmail.com",
} as const;

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Proposal",
    href: "/proposal",
    mega: {
      columns: [
        {
          heading: "The concept",
          links: [
            { label: "The problem", href: "/proposal#the-problem", description: "Why NHS Top Up exists." },
            { label: "The idea", href: "/proposal#the-idea", description: "Charity shops, funds earmarked for NHS top-ups." },
            {
              label: "How this could reach people",
              href: "/proposal#how-it-reaches-people",
              description: "Shops today, one shared real-time inventory over time.",
            },
          ],
        },
        {
          heading: "Open questions",
          links: [
            { label: "What's not decided yet", href: "/proposal#not-decided-yet" },
            { label: "What we need to figure this out", href: "/proposal#what-we-need" },
          ],
        },
      ],
      featured: {
        eyebrow: "Proposal stage",
        title: "See where things stand",
        description: "Track what's decided, in progress, and still open.",
        cta: { label: "View progress", href: "/progress" },
      },
    },
  },
  { label: "Progress", href: "/progress" },
  {
    label: "Get Involved",
    href: "/get-involved",
    mega: {
      columns: [
        {
          heading: "Ways to grow",
          links: growthPathways.map((pathway) => ({
            label: pathway.title,
            href: `/get-involved#${pathway.title.toLowerCase().replace(/\s+/g, "-")}`,
            description: pathway.description,
          })),
        },
        {
          heading: "Roles we need",
          links: roleCategoryOrder.map((category) => ({
            label: roleCategoryLabels[category],
            href: `/get-involved#${category}`,
          })),
        },
      ],
      featured: {
        eyebrow: "Founding roles",
        title: "Shape it from the start",
        description: "Tell us how you'd like to help and we'll keep you in the loop.",
        cta: { label: "Tell us how you can help", href: "/get-involved#get-involved-form" },
      },
    },
  },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
