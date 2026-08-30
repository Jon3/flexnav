import type { NavItem } from "@/types";

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
  contactEmail: "hello@nhstopup.example",
} as const;

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Proposal", href: "/proposal" },
  { label: "Progress", href: "/progress" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
