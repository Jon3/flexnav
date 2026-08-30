import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <Section tight className="pt-12">
      <h1 className="text-3xl font-bold text-slate-900">Frequently asked questions</h1>
      <p className="mt-4 text-slate-600">
        The short version: this is a proposal, not an official NHS project, and we&apos;re not taking
        donations yet. Read on for more detail.
      </p>

      <div className="mt-8">
        <FaqAccordion faqs={faqs} />
      </div>
    </Section>
  );
}
