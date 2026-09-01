export type NavThemeName = "brand" | "midnight" | "sunrise";

export interface NavThemeVars {
  "--nav-bg": string;
  "--nav-fg": string;
  "--nav-muted": string;
  "--nav-border": string;
  "--nav-accent": string;
  "--nav-accent-fg": string;
  "--nav-panel-bg": string;
  "--nav-panel-border": string;
  "--nav-hover": string;
}

export interface NavTheme {
  name: NavThemeName;
  label: string;
  description: string;
  vars: NavThemeVars;
}

export const navThemeOrder: NavThemeName[] = ["brand", "midnight", "sunrise"];

export const navThemes: Record<NavThemeName, NavTheme> = {
  brand: {
    name: "brand",
    label: "Brand (default)",
    description:
      "The site's everyday look: white header, teal accents. Calm and credible for a proposal-stage charity site — this is what visitors see today.",
    vars: {
      "--nav-bg": "rgba(255,255,255,0.95)",
      "--nav-fg": "#334155",
      "--nav-muted": "#64748b",
      "--nav-border": "#e2e8f0",
      "--nav-accent": "#0f766e",
      "--nav-accent-fg": "#ffffff",
      "--nav-panel-bg": "#ffffff",
      "--nav-panel-border": "#e2e8f0",
      "--nav-hover": "#f0fdf9",
    },
  },
  midnight: {
    name: "midnight",
    label: "Midnight",
    description:
      "A dark, confident header for pages that want more visual weight — teal glows against near-black.",
    vars: {
      "--nav-bg": "rgba(15,23,42,0.95)",
      "--nav-fg": "#cbd5e1",
      "--nav-muted": "#94a3b8",
      "--nav-border": "#1e293b",
      "--nav-accent": "#2dd4bf",
      "--nav-accent-fg": "#0f172a",
      "--nav-panel-bg": "#0f172a",
      "--nav-panel-border": "#1e293b",
      "--nav-hover": "#1e293b",
    },
  },
  sunrise: {
    name: "sunrise",
    label: "Sunrise",
    description:
      "A warm, welcoming skin — cream background, coral accent. Suits community and shop-front pages.",
    vars: {
      "--nav-bg": "rgba(255,251,245,0.95)",
      "--nav-fg": "#78350f",
      "--nav-muted": "#b45309",
      "--nav-border": "#fde68a",
      "--nav-accent": "#ea580c",
      "--nav-accent-fg": "#ffffff",
      "--nav-panel-bg": "#fffbf5",
      "--nav-panel-border": "#fde68a",
      "--nav-hover": "#fef3c7",
    },
  },
};
