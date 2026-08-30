import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { BenefitCard } from "@/components/BenefitCard";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { benefits } from "@/data/benefits";
import { timelineSteps } from "@/data/timeline";
import { site } from "@/data/site";

export default function HomePage() {
  const currentStage = timelineSteps.find((step) => step.status === "current");

  return (
    <>
      <Section tight className="pt-12">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Proposal stage</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {site.name}: {site.tagline}
        </h1>
        <p className="mt-4 text-lg text-slate-600">{site.shortDescription}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/get-involved">Get involved</Button>
          <Button href="/proposal" variant="secondary">
            Read the proposal
          </Button>
        </div>
      </Section>

      <Section tight>
        <DisclaimerBanner variant="inline" />
      </Section>

      <Section>
        <h2 className="text-xl font-bold text-slate-900">Key benefits</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} benefit={benefit} />
          ))}
        </ul>
      </Section>

      {currentStage && (
        <Section className="bg-slate-50">
          <h2 className="text-xl font-bold text-slate-900">Current status</h2>
          <p className="mt-2 text-sm font-semibold text-brand-700">{currentStage.title}</p>
          <p className="mt-2 text-slate-600">{currentStage.description}</p>
          <div className="mt-6">
            <Button href="/progress" variant="secondary">
              See full progress timeline
            </Button>
          </div>
        </Section>
      )}

      <Section className="text-center">
        <h2 className="text-xl font-bold text-slate-900">Want to help shape this?</h2>
        <p className="mx-auto mt-2 max-w-xl text-slate-600">
          NHS Top Up is being built in the open. Supporters, volunteers, healthcare professionals, and
          organisations are all welcome to get involved at this early stage.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href="/get-involved">Get involved</Button>
          <Button href="/faq" variant="secondary">
            Read the FAQs
          </Button>
        </div>
      </Section>
    </>
  );
}
