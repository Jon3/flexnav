"use client";

import { useState, type CSSProperties } from "react";
import { navItems, site } from "@/data/site";
import { navThemeOrder, navThemes, type NavThemeName } from "@/data/navThemes";
import { DesktopMegaNav, MobileMegaNav } from "@/components/MegaMenu";

/**
 * Not linked from the public site nav. A working reference for the mega menu component and its
 * theme presets, built from the same nav data and component as the live Header — informed by
 * Codrops' navigation Blueprints (accessible disclosure-pattern dropdowns, mobile accordion
 * drill-down) rather than a full menu/menuitem widget, which has patchy screen-reader support.
 */
export default function NavigationBlueprintPage() {
  const [theme, setTheme] = useState<NavThemeName>("brand");
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeTheme = navThemes[theme];

  return (
    <div className="py-10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-900">Navigation blueprint</h1>
        <p className="mt-4 text-slate-600">
          A working preview of the mega menu that powers the site header, and the theme presets it
          can wear. Same nav data, same component — this page just lets you switch skins and see
          the desktop panel and mobile accordion side by side.
        </p>

        <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Choose a theme">
          {navThemeOrder.map((name) => {
            const t = navThemes[name];
            const isActive = theme === name;
            return (
              <button
                key={name}
                type="button"
                onClick={() => setTheme(name)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-brand-700 bg-brand-700 text-white"
                    : "border-slate-300 text-slate-700 hover:border-brand-400"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-sm text-slate-500">{activeTheme.description}</p>
      </div>

      <div
        data-nav-theme={theme}
        style={activeTheme.vars as CSSProperties}
        className="mx-4 mt-6 overflow-hidden rounded-2xl border border-[var(--nav-border)] shadow-sm sm:mx-auto sm:max-w-3xl"
      >
        <div className="bg-[var(--nav-bg)]">
          <div className="flex items-center justify-between px-4 py-4 sm:px-6">
            <span className="text-lg font-bold text-[var(--nav-fg)]">
              {site.name}
              <span className="ml-2 align-middle text-xs font-medium text-[var(--nav-accent)]">Proposal</span>
            </span>

            <button
              type="button"
              className="rounded-md p-2 text-[var(--nav-fg)] hover:bg-[var(--nav-hover)] sm:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
              <svg viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}>
                {mobileOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>

            <DesktopMegaNav items={navItems} pathname="/design/navigation" />
          </div>

          {mobileOpen && (
            <MobileMegaNav items={navItems} pathname="/design/navigation" onNavigate={() => setMobileOpen(false)} />
          )}
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-3xl px-4 sm:px-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Where the ideas came from
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
          <li>
            <strong>Disclosure pattern, not a menubar.</strong> Each mega item is a plain button with
            <code className="mx-1 rounded bg-slate-100 px-1 py-0.5 text-xs">aria-expanded</code>/
            <code className="mx-1 rounded bg-slate-100 px-1 py-0.5 text-xs">aria-controls</code>, the same
            approach Codrops&apos; horizontal drop-down blueprints use — more robust with screen readers
            than a full <code className="mx-1 rounded bg-slate-100 px-1 py-0.5 text-xs">menu</code>/
            <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">menuitem</code> widget.
          </li>
          <li>
            <strong>Mobile drills down in place</strong> instead of pushing to a new screen — one level of
            nesting doesn&apos;t need Codrops&apos; breadcrumb/back-button multi-level pattern, just an
            accordion.
          </li>
          <li>
            <strong>Hover-intent plus click</strong> on desktop, carried over from this repo&apos;s own
            original flexnav plugin (hover reveal for desktop, tap targets for touch) — one component
            serving both input types.
          </li>
          <li>
            <strong>Themes are CSS variables</strong> set once on the header element and read by the whole
            menu tree, so a new skin is a new value object, not new markup.
          </li>
        </ul>
      </div>
    </div>
  );
}
