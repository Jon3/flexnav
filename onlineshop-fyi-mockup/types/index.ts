export type ProductStatus = "in-development" | "early-build" | "planned";

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: "plugin" | "theme" | "roadmap";
  status: ProductStatus;
  highlights: string[];
}

export const statusLabel: Record<ProductStatus, string> = {
  "in-development": "In development — not yet released",
  "early-build": "Early build — architecture proven, more coming",
  planned: "Planned — not yet started",
};
