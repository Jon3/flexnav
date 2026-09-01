"use client";

import { useMemo, useState } from "react";
import type { OpenRole, OpenRoleStatus, RoleTag } from "@/types";
import { roleCategoryLabels, roleCategoryOrder, roleTagLabels, roleTagOrder } from "@/data/roleCategories";

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
        <h4
          className={`font-semibold text-slate-900 ${role.status === "filled" ? "line-through" : ""}`}
        >
          {role.title}
        </h4>
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

      <div className="mt-2 flex flex-wrap gap-1.5">
        {role.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
            {roleTagLabels[tag]}
          </span>
        ))}
      </div>

      {role.skillsGained && (
        <p className="mt-2 text-xs font-medium text-brand-700">Build: {role.skillsGained}</p>
      )}

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
  const [activeTags, setActiveTags] = useState<Set<RoleTag>>(new Set());

  function toggleTag(tag: RoleTag) {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) {
        next.delete(tag);
      } else {
        next.add(tag);
      }
      return next;
    });
  }

  const filteredRoles = useMemo(() => {
    if (activeTags.size === 0) return roles;
    return roles.filter((role) => role.tags.some((tag) => activeTags.has(tag)));
  }, [roles, activeTags]);

  const rolesByCategory = useMemo(() => {
    const map = new Map<string, OpenRole[]>();
    for (const role of filteredRoles) {
      const list = map.get(role.category) ?? [];
      list.push(role);
      map.set(role.category, list);
    }
    return map;
  }, [filteredRoles]);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter roles">
        {roleTagOrder.map((tag) => {
          const isActive = activeTags.has(tag);
          return (
            <button
              key={tag}
              type="button"
              aria-pressed={isActive}
              onClick={() => toggleTag(tag)}
              className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
                isActive
                  ? "border-brand-700 bg-brand-700 text-white"
                  : "border-slate-300 bg-white text-slate-600 hover:border-brand-400"
              }`}
            >
              {roleTagLabels[tag]}
            </button>
          );
        })}
        {activeTags.size > 0 && (
          <button
            type="button"
            onClick={() => setActiveTags(new Set())}
            className="rounded-full px-3 py-1 text-xs font-semibold text-slate-500 underline"
          >
            Clear filters
          </button>
        )}
      </div>

      <div className="mt-6 space-y-8">
        {roleCategoryOrder.map((category) => {
          const categoryRoles = rolesByCategory.get(category);
          if (!categoryRoles?.length) return null;
          return (
            <div key={category} id={category} className="scroll-mt-24">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                {roleCategoryLabels[category]}
              </h3>
              <ul className="mt-3 space-y-3">
                {categoryRoles.map((role) => (
                  <RoleCard key={role.title} role={role} />
                ))}
              </ul>
            </div>
          );
        })}
        {filteredRoles.length === 0 && (
          <p className="text-sm text-slate-500">No roles match those filters right now.</p>
        )}
      </div>
    </div>
  );
}
