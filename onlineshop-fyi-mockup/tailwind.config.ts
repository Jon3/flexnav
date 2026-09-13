import type { Config } from "tailwindcss";

// Dark, futuristic marketplace palette — deliberately distinct from any
// individual plugin's own theme, since this site sells themes rather than
// wearing one.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070d",
          900: "#0a0e1a",
          800: "#111627",
          700: "#1b2236",
          600: "#2a3450",
        },
        glow: {
          violet: "#8b5cf6",
          cyan: "#22d3ee",
          pink: "#ec4899",
        },
      },
      backgroundImage: {
        "glow-gradient": "linear-gradient(135deg, #8b5cf6 0%, #22d3ee 100%)",
        "glow-gradient-soft": "linear-gradient(135deg, rgba(139,92,246,0.18) 0%, rgba(34,211,238,0.18) 100%)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
