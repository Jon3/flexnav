import type { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "mega-menu",
    name: "MegaMenu",
    tagline: "A fully animated, touch-friendly mega menu for nopCommerce.",
    description:
      "Replaces nopCommerce's default top menu with an animated, configurable mega menu: custom dropdown backgrounds, per-item icons, and dedicated mobile accordion and drill-down modes. Built to work across existing and new themes, not just one.",
    category: "plugin",
    status: "in-development",
    highlights: [
      "Animated Level 1 & Level 2 dropdowns, plus a Shop category flyout",
      "Custom background image or HTML per dropdown panel",
      "Mobile accordion and legacy drill-down modes, picked per store",
      "Theme-independent — ships its own CSS rather than assuming a theme's",
    ],
  },
  {
    slug: "anything-slider",
    name: "Anything Slider",
    tagline: "Run several independent sliders on one page — not just one global slider.",
    description:
      "Most nopCommerce slider plugins are a single settings blob — one slide list for the whole store. Anything Slider is built the other way round: any number of named, independently-configured slider instances, each with its own content source.",
    category: "plugin",
    status: "early-build",
    highlights: [
      "True multi-instance architecture — a real entity per slider, not shared settings",
      "Picture content type live and verified with two simultaneous homepage instances",
      "Product, Category, News, and Blog content types on the roadmap",
      "Built on Swiper.js (MIT), with each instance getting its own scoped init",
    ],
  },
  {
    slug: "advanced-themes",
    name: "Advanced Full-Page Themes",
    tagline: "App-like, one-section-at-a-time themes designed around MegaMenu and Anything Slider.",
    description:
      "A theme line built for a full-page, touchscreen-friendly experience — MegaMenu on top, Anything Slider instances dropping straight into each section. Still at the research stage; a licensing question for the underlying full-page engine needs settling first.",
    category: "theme",
    status: "planned",
    highlights: [
      "Designed to slot MegaMenu and Anything Slider straight into a full-page layout",
      "Touchscreen-first navigation, one section at a time",
      "Blocked on a licensing decision for the full-page engine before build starts",
    ],
  },
  {
    slug: "payment-banking-plugins",
    name: "Payment & Banking Integrations",
    tagline: "Payment gateway and banking integrations for nopCommerce stores.",
    description:
      "A planned category for payment and banking plugins, on the roadmap alongside the navigation and theming line. Nothing built yet — placeholder for scoping once the core MegaMenu / Anything Slider work is stable.",
    category: "roadmap",
    status: "planned",
    highlights: ["Not yet scoped — check back as the roadmap firms up"],
  },
];
