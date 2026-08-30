import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Timeline } from "@/components/Timeline";
import { timelineSteps, nextSteps } from "@/data/timeline";

export const metadata: Metadata = { title: "Progress" };

export default function ProgressPage() {
  return (
    <>
      <Section tight className="pt-12">
        <h1 className="text-3xl font-bold text-slate-900">Progress</h1>
        <p className="mt-4 text-slate-600">
          NHS Top Up is currently in the <strong>concept and proposal development</strong> stage. Here&apos;s
          where things stand, and what comes next.
        </p>
      </Section>

      <Section tight>
        <Timeline steps={timelineSteps} />
      </Section>

      <Section className="bg-slate-50">
        <h2 className="text-xl font-bold text-slate-900">Next steps</h2>
        <ul className="mt-6 space-y-5">
          {nextSteps.map((step) => (
            <li key={step.title}>
              <h3 className="font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{step.description}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
