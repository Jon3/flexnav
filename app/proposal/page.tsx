import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Proposal" };

export default function ProposalPage() {
  return (
    <Section tight className="pt-12">
      <h1 className="text-3xl font-bold text-slate-900">The proposal</h1>
      <p className="mt-4 text-slate-600">
        This is a working summary of the {site.name} concept. It will be replaced with a full, detailed
        proposal document as the idea develops — this page is a starting point, not a finished plan.
      </p>

      <div className="mt-8 space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">The problem</h2>
          <p className="mt-2 text-slate-600">
            NHS services and patients sometimes need small amounts of extra support that sit outside what
            core NHS funding covers — the kind of gaps that a well-run charitable scheme could help close.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">The idea</h2>
          <p className="mt-2 text-slate-600">
            A network of charity retail shops, run under proper charitable governance, raising funds
            specifically earmarked to top up NHS-related support — with transparent reporting on where the
            money goes.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">How this could reach people</h2>
          <p className="mt-2 text-slate-600">
            Physical charity shops are the starting point, but this site is being built on modern, scalable
            web technology so it can grow alongside the proposal — including, in time, a full online charity
            shop alongside any physical locations.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">What&apos;s not decided yet</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-600">
            <li>The legal and governance structure</li>
            <li>Which NHS bodies or services this could formally connect to, if any</li>
            <li>How funds would be allocated and reported</li>
            <li>Timelines beyond the current proposal-development stage</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">What we need to figure this out</h2>
          <p className="mt-2 text-slate-600">
            Input from supporters, volunteers, healthcare professionals, and potential partners — and,
            eventually, conversations with NHS bodies and charity regulators.
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button href="/progress" variant="secondary">
          See progress and next steps
        </Button>
        <Button href="/get-involved">Get involved</Button>
      </div>
    </Section>
  );
}
