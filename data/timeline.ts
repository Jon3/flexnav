import type { NextStep, TimelineStep } from "@/types";

export const timelineSteps: TimelineStep[] = [
  {
    stage: "concept",
    title: "Concept",
    description: "Initial idea explored: could a charity retail model help top up NHS support?",
    status: "done",
  },
  {
    stage: "proposal",
    title: "Proposal development",
    description:
      "Working out the model in detail — governance, legal structure, and how funds would be raised and used.",
    status: "current",
  },
  {
    stage: "pilot",
    title: "Pilot",
    description: "A small-scale trial to test the model before any wider rollout.",
    status: "upcoming",
  },
  {
    stage: "launch",
    title: "Launch",
    description: "Full launch, subject to the outcome of the pilot and necessary approvals.",
    status: "upcoming",
  },
];

export const nextSteps: NextStep[] = [
  {
    title: "Define the legal and governance structure",
    description: "Deciding what kind of organisation this needs to be, and how it would be run and overseen.",
  },
  {
    title: "Talk to NHS bodies and charity regulators",
    description: "Understanding what approvals, registrations, and safeguards would be required.",
  },
  {
    title: "Build a founding supporter group",
    description: "Bringing together early supporters, volunteers, and healthcare professionals to shape the plan.",
  },
  {
    title: "Publish a full written proposal",
    description: "A detailed, public document setting out the model, so it can be scrutinised and challenged.",
  },
];
