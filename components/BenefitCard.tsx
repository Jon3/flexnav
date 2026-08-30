import type { Benefit } from "@/types";
import { Icon } from "@/components/Icon";

export function BenefitCard({ benefit }: { benefit: Benefit }) {
  return (
    <li className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5">
      <Icon name={benefit.icon} className="mt-0.5 h-6 w-6 flex-none text-brand-700" />
      <div>
        <h3 className="font-semibold text-slate-900">{benefit.title}</h3>
        <p className="mt-1 text-sm text-slate-600">{benefit.description}</p>
      </div>
    </li>
  );
}
