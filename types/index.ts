export interface NavItem {
  label: string;
  href: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: BenefitIcon;
}

export type BenefitIcon = "heart" | "shield" | "store" | "people" | "coin" | "clock" | "growth";

export type ProposalStage = "concept" | "proposal" | "pilot" | "launch";

export interface TimelineStep {
  stage: ProposalStage;
  title: string;
  description: string;
  status: "current" | "upcoming" | "done";
}

export interface NextStep {
  title: string;
  description: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export type InvolvementRole = "supporter" | "volunteer" | "professional" | "partner";

export interface RoleOption {
  value: InvolvementRole;
  label: string;
  description: string;
}

export type OpenRoleStatus = "open" | "in-conversation" | "filled";

export type OpenRoleCategory =
  | "leadership-governance"
  | "technology-innovation"
  | "retail-operations"
  | "logistics-delivery"
  | "partnerships-expansion"
  | "voluntary-opportunities";

export type RoleTag = "volunteer" | "flexible-hours" | "remote" | "hybrid" | "in-person";

export interface OpenRole {
  title: string;
  status: OpenRoleStatus;
  category: OpenRoleCategory;
  tags: RoleTag[];
  description: string;
  skillsGained?: string;
  details?: string[];
}
