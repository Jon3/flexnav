import type { OpenRoleCategory, RoleTag } from "@/types";

export const roleCategoryOrder: OpenRoleCategory[] = [
  "leadership-governance",
  "technology-innovation",
  "retail-operations",
  "logistics-delivery",
  "partnerships-expansion",
  "voluntary-opportunities",
];

export const roleCategoryLabels: Record<OpenRoleCategory, string> = {
  "leadership-governance": "Leadership & Governance",
  "technology-innovation": "Technology & Innovation",
  "retail-operations": "Retail Operations",
  "logistics-delivery": "Logistics & Delivery",
  "partnerships-expansion": "Partnerships & Expansion",
  "voluntary-opportunities": "Voluntary Opportunities",
};

export const roleTagOrder: RoleTag[] = ["volunteer", "flexible-hours", "remote", "hybrid", "in-person"];

export const roleTagLabels: Record<RoleTag, string> = {
  volunteer: "Volunteer",
  "flexible-hours": "Flexible hours",
  remote: "Remote",
  hybrid: "Hybrid",
  "in-person": "In-person",
};
