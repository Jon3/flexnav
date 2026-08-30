import type { RoleOption } from "@/types";

export const roleOptions: RoleOption[] = [
  {
    value: "supporter",
    label: "Supporter",
    description: "Follow along and help spread the word.",
  },
  {
    value: "volunteer",
    label: "Volunteer",
    description:
      "Help with the early, hands-on work of building the proposal itself — governance, structure, research, or admin.",
  },
  {
    value: "professional",
    label: "Healthcare professional",
    description: "Offer frontline insight into where support is needed most.",
  },
  {
    value: "partner",
    label: "Organisation / partner",
    description: "Represent a charity, business, or NHS-connected organisation.",
  },
];
