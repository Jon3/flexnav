import type { OpenRole, OpenRoleStatus } from "@/types";

const statusStyles: Record<OpenRoleStatus, string> = {
  open: "bg-brand-100 text-brand-800",
  "in-conversation": "bg-amber-100 text-amber-800",
  filled: "bg-slate-200 text-slate-600",
};

const statusLabels: Record<OpenRoleStatus, string> = {
  open: "Open",
  "in-conversation": "In conversation",
  filled: "Filled",
};

export function OpenRolesList({ roles }: { roles: OpenRole[] }) {
  return (
    <ul className="space-y-3">
      {roles.map((role) => (
        <li
          key={role.title}
          className={`rounded-xl border border-slate-200 bg-white p-4 ${
            role.status === "filled" ? "opacity-60" : ""
          }`}
        >
          <div className="flex flex-wrap items-center gap-2">
            <h3
              className={`font-semibold text-slate-900 ${
                role.status === "filled" ? "line-through" : ""
              }`}
            >
              {role.title}
            </h3>
            <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${statusStyles[role.status]}`}>
              {statusLabels[role.status]}
            </span>
          </div>
          <p className="mt-1 text-sm text-slate-600">{role.description}</p>
        </li>
      ))}
    </ul>
  );
}
