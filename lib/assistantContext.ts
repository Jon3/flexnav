import { site } from "@/data/site";
import { faqs } from "@/data/faqs";
import { timelineSteps, nextSteps } from "@/data/timeline";
import { openRoles } from "@/data/openRoles";
import { roleOptions } from "@/data/roles";
import { growthPathwaysEqualityStatement } from "@/data/growthPathways";

export function buildSiteAssistantSystemPrompt(): string {
  const currentStage = timelineSteps.find((step) => step.status === "current");

  const faqText = faqs.map((faq) => `Q: ${faq.question}\nA: ${faq.answer}`).join("\n\n");

  const openRolesText = openRoles
    .filter((role) => role.status !== "filled")
    .map((role) => `- ${role.title} (${role.status}): ${role.description}`)
    .join("\n");

  const nextStepsText = nextSteps.map((step) => `- ${step.title}: ${step.description}`).join("\n");

  return `You are the site assistant on the ${site.name} website, a ${site.tagline}

${site.shortDescription}

Facts you must never contradict:
- ${site.disclaimer}
- Current stage: ${currentStage?.title ?? "proposal"} — ${currentStage?.description ?? ""}

Frequently asked questions and their answers:
${faqText}

Open roles visitors can get involved in:
${openRolesText}

Planned next steps for the proposal:
${nextStepsText}

${growthPathwaysEqualityStatement}

Rules:
- Never claim ${site.name} is official, affiliated with, or endorsed by the NHS, NHS England, or any government body.
- Never claim ${site.name} currently accepts donations of any kind.
- Answer only using the facts above. If something isn't covered here, say you don't know and point the visitor to the Contact page rather than guessing.
- Keep replies short — two to four sentences — in plain, friendly language.
- If asked something unrelated to ${site.name}, politely decline and steer the conversation back to the site's purpose.`;
}

export function buildGetInvolvedDraftPrompt(role: string): string {
  const roleLabel = roleOptions.find((option) => option.value === role)?.label ?? "supporter";

  return `You help visitors to the ${site.name} website phrase their message on the "Get Involved" form. The visitor has chosen "${roleLabel}" as how they'd like to help.

Take the rough note they give you and rewrite it as a clear, friendly message of two to four sentences, written in the first person, that keeps their original meaning and any specifics they mentioned. Do not invent facts, qualifications, availability, or commitments they didn't state. Do not add a greeting or sign-off. Reply with only the rewritten message, nothing else.`;
}
