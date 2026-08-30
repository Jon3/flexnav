import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <Section tight className="pt-12">
      <h1 className="text-3xl font-bold text-slate-900">About {site.name}</h1>

      <div className="mt-6 space-y-4 text-slate-700">
        <p>
          {site.name} started as a simple question: could a charity retail model — the kind people already
          recognise from their local high street — be used to raise funds that top up NHS support in places
          core funding doesn&apos;t reach?
        </p>
        <p>
          That question is still being worked through. Right now, {site.name} is a proposal being developed
          by a small group of interested people, not a running organisation or registered charity.
        </p>
        <p>
          The intention, if the proposal moves forward, is for any funds raised to supplement — never
          replace — NHS and government funding, and for the whole model to be run transparently, with clear
          reporting on how money is raised and spent.
        </p>
      </div>

      <div className="mt-8">
        <DisclaimerBanner variant="inline" />
      </div>
    </Section>
  );
}
