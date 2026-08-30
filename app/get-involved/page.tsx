import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { GetInvolvedForm } from "@/components/GetInvolvedForm";
import { OpenRolesList } from "@/components/OpenRolesList";
import { GrowthPathways } from "@/components/GrowthPathways";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { openRoles } from "@/data/openRoles";
import { growthPathways, growthPathwaysEqualityStatement } from "@/data/growthPathways";

export const metadata: Metadata = { title: "Get Involved" };

export default function GetInvolvedPage() {
  return (
    <Section tight className="pt-12">
      <h1 className="text-3xl font-bold text-slate-900">Get involved</h1>
      <p className="mt-4 text-slate-600">
        NHS Top Up is still a proposal, so there&apos;s no formal programme to join yet — but if you&apos;re
        interested, tell us how you&apos;d like to help and we&apos;ll keep you in the loop as things develop.
      </p>

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-slate-900">Grow with NHS Top Up</h2>
        <p className="mt-1 text-sm text-slate-600">
          Whether you want to contribute a few hours a month or aim for a long-term career path, there&apos;s
          a route that fits.
        </p>
        <div className="mt-4">
          <GrowthPathways pathways={growthPathways} equalityStatement={growthPathwaysEqualityStatement} />
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-semibold text-slate-900">Specific roles we&apos;re looking to fill</h2>
        <p className="mt-1 text-sm text-slate-600">
          Beyond general support, a range of areas need someone to own them early on — these are founding
          roles: get involved now and you help shape how NHS Top Up runs from the start. Most can flex
          around you — a few hours here and there is genuinely useful, not just full-time commitment — and
          many double as a chance to build real experience: retail, tech, logistics, or leadership, not just
          charity work. Filter by what fits your time and how you&apos;d like to help.
        </p>
        <div className="mt-4">
          <OpenRolesList roles={openRoles} />
        </div>
      </div>

      <div className="mt-10 max-w-xl">
        <GetInvolvedForm />
      </div>

      <div className="mt-10 max-w-xl">
        <DisclaimerBanner variant="inline" />
      </div>
    </Section>
  );
}
