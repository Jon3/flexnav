import type { GrowthPathway } from "@/types";
import { Icon } from "@/components/Icon";

export function GrowthPathways({
  pathways,
  equalityStatement,
}: {
  pathways: GrowthPathway[];
  equalityStatement: string;
}) {
  return (
    <div>
      <ul className="grid gap-4 sm:grid-cols-3">
        {pathways.map((pathway) => (
          <li key={pathway.title} className="rounded-xl border border-slate-200 bg-white p-5">
            <Icon name={pathway.icon} className="h-6 w-6 text-brand-700" />
            <h3 className="mt-3 font-semibold text-slate-900">{pathway.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{pathway.description}</p>
          </li>
        ))}
      </ul>

      <p className="mt-4 rounded-xl border border-brand-200 bg-brand-50 p-4 text-sm font-medium text-brand-900">
        {equalityStatement}
      </p>
    </div>
  );
}
