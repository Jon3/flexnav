"use client";

import { useState } from "react";
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

function RoleCard({ role }: { role: OpenRole }) {
  const [expanded, setExpanded] = useState(false);
  const hasDetails = !!role.details?.length;

  return (
    <li
      className={`rounded-xl border border-slate-200 bg-white p-4 ${
        role.status === "filled" ? "opacity-60" : ""
      }`}
    >
      <button
        type="button"
        className="flex w-full flex-wrap items-center gap-2 text-left"
        onClick={() => hasDetails && setExpanded((v) => !v)}
        aria-expanded={hasDetails ? expanded : undefined}
        disabled={!hasDetails}
      >
        <h3
          className={`font-semibold text-slate-900 ${role.status === "filled" ? "line-through" : ""}`}
        >
          {role.title}
        </h3>
        <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${statusStyles[role.status]}`}>
          {statusLabels[role.status]}
        </span>
        {hasDetails && (
          <svg
            viewBox="0 0 24 24"
            width={18}
            height={18}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className={`ml-auto flex-none text-slate-500 transition-transform ${
              expanded ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        )}
      </button>

      <p className="mt-1 text-sm text-slate-600">{role.description}</p>

      {hasDetails && expanded && (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
          {role.details!.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      )}
    </li>
  );
}

export function OpenRolesList({ roles }: { roles: OpenRole[] }) {
  return (
    <ul className="space-y-3">
      {roles.map((role) => (
        <RoleCard key={role.title} role={role} />
      ))}
    </ul>
  );
}
