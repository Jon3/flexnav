import type { TimelineStep } from "@/types";

const statusStyles: Record<TimelineStep["status"], string> = {
  done: "bg-brand-600 border-brand-600",
  current: "bg-brand-600 border-brand-600 ring-4 ring-brand-100",
  upcoming: "bg-white border-slate-300",
};

export function Timeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <ol className="relative border-l border-slate-200 pl-6">
      {steps.map((step) => (
        <li key={step.stage} className="mb-8 last:mb-0">
          <span
            className={`absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 ${statusStyles[step.status]}`}
            aria-hidden="true"
          />
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold text-slate-900">{step.title}</h3>
            {step.status === "current" && (
              <span className="rounded-full bg-brand-100 px-2 py-0.5 text-xs font-semibold text-brand-800">
                Current stage
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-slate-600">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
