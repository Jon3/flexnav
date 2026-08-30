import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { GetInvolvedForm } from "@/components/GetInvolvedForm";
import { OpenRolesList } from "@/components/OpenRolesList";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { openRoles } from "@/data/openRoles";

export const metadata: Metadata = { title: "Get Involved" };

export default function GetInvolvedPage() {
  return (
    <Section tight className="pt-12">
      <h1 className="text-3xl font-bold text-slate-900">Get involved</h1>
      <p className="mt-4 text-slate-600">
        NHS Top Up is still a proposal, so there&apos;s no formal programme to join yet — but if you&apos;re
        interested, tell us how you&apos;d like to help and we&apos;ll keep you in the loop as things develop.
      </p>

      <div className="mt-8 max-w-xl">
        <h2 className="text-lg font-semibold text-slate-900">Specific roles we&apos;re looking to fill</h2>
        <p className="mt-1 text-sm text-slate-600">
          Beyond general support, a few specific areas need someone to own them early on — these are
          founding roles: get involved now and you help shape how NHS Top Up runs from the start.
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
