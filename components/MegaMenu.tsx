"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { NavItem } from "@/types";

function slugify(label: string) {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-+|-+$)/g, "");
}

function Chevron({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={14}
      height={14}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className={className}
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

/** Desktop mega menu bar: hover-intent + click disclosure panels, closes on outside click / Escape / route change. */
export function DesktopMegaNav({ items, pathname }: { items: NavItem[]; pathname: string }) {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const rootRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    setOpenItem(null);
  }, [pathname]);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpenItem(null);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && openItem) {
        const triggerId = `mega-trigger-${openItem}`;
        setOpenItem(null);
        document.getElementById(triggerId)?.focus();
      }
    }
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openItem]);

  function openOnHover(id: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenItem(id);
  }

  function closeOnHoverOut() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenItem(null), 150);
  }

  return (
    <nav ref={rootRef} id="primary-navigation" aria-label="Primary" className="hidden sm:block">
      <ul className="flex items-center gap-1 text-sm font-medium">
        {items.map((item) => {
          const id = slugify(item.label);
          const isActive = pathname === item.href;
          const linkClasses = (active: boolean) =>
            `rounded-md px-3 py-2 transition-colors text-[var(--nav-fg)] hover:text-[var(--nav-accent)] ${
              active ? "text-[var(--nav-accent)]" : ""
            }`;

          if (!item.mega) {
            return (
              <li key={item.href}>
                <Link href={item.href} className={linkClasses(isActive)}>
                  {item.label}
                </Link>
              </li>
            );
          }

          const panelOpen = openItem === id;
          return (
            <li
              key={item.href}
              className="relative"
              onMouseEnter={() => openOnHover(id)}
              onMouseLeave={closeOnHoverOut}
            >
              <button
                id={`mega-trigger-${id}`}
                type="button"
                aria-expanded={panelOpen}
                aria-controls={`mega-panel-${id}`}
                aria-haspopup="true"
                onClick={() => setOpenItem(panelOpen ? null : id)}
                className={`flex items-center gap-1 ${linkClasses(isActive || panelOpen)}`}
              >
                {item.label}
                <Chevron className={`transition-transform ${panelOpen ? "rotate-180" : ""}`} />
              </button>

              {panelOpen && (
                <div
                  id={`mega-panel-${id}`}
                  role="region"
                  aria-label={`${item.label} menu`}
                  className="animate-mega-in absolute left-1/2 top-full z-50 mt-2 w-[min(90vw,640px)] -translate-x-1/2 rounded-2xl border p-6 shadow-xl"
                  style={
                    {
                      backgroundColor: "var(--nav-panel-bg)",
                      borderColor: "var(--nav-panel-border)",
                      color: "var(--nav-fg)",
                    } as CSSProperties
                  }
                >
                  <div className={`grid gap-6 ${item.mega.featured ? "sm:grid-cols-[1fr_1fr_auto]" : "sm:grid-cols-2"}`}>
                    {item.mega.columns.map((column) => (
                      <div key={column.heading}>
                        <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--nav-muted)]">
                          {column.heading}
                        </h3>
                        <ul className="mt-3 space-y-1">
                          {column.links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                onClick={() => setOpenItem(null)}
                                className="-mx-2 block rounded-md px-2 py-1.5 hover:bg-[var(--nav-hover)]"
                              >
                                <span className="block font-medium">{link.label}</span>
                                {link.description && (
                                  <span className="mt-0.5 block text-xs text-[var(--nav-muted)]">
                                    {link.description}
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {item.mega.featured && (
                      <div
                        className="rounded-xl p-4 sm:w-56"
                        style={
                          {
                            backgroundColor: "var(--nav-accent)",
                            color: "var(--nav-accent-fg)",
                          } as CSSProperties
                        }
                      >
                        {item.mega.featured.eyebrow && (
                          <p className="text-xs font-semibold uppercase tracking-wide opacity-80">
                            {item.mega.featured.eyebrow}
                          </p>
                        )}
                        <p className="mt-1 font-semibold">{item.mega.featured.title}</p>
                        <p className="mt-1 text-sm opacity-90">{item.mega.featured.description}</p>
                        <Link
                          href={item.mega.featured.cta.href}
                          onClick={() => setOpenItem(null)}
                          className="mt-3 inline-block text-sm font-semibold underline underline-offset-2"
                        >
                          {item.mega.featured.cta.label}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/** Small-screen accordion fallback — each mega item drills down in place, no separate page/breadcrumb needed for one level of nesting. */
export function MobileMegaNav({
  items,
  pathname,
  onNavigate,
}: {
  items: NavItem[];
  pathname: string;
  onNavigate: () => void;
}) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <nav id="mobile-navigation" aria-label="Primary" className="border-t sm:hidden" style={{ borderColor: "var(--nav-border)" }}>
      <ul className="mx-auto max-w-3xl px-4 py-2 text-sm font-medium">
        {items.map((item) => {
          const id = slugify(item.label);
          const isActive = pathname === item.href;

          if (!item.mega) {
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className={`block py-2 text-[var(--nav-fg)] ${isActive ? "text-[var(--nav-accent)]" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          }

          const expanded = openItem === id;
          return (
            <li key={item.href} className="border-b last:border-b-0" style={{ borderColor: "var(--nav-border)" }}>
              <div className="flex items-center">
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className={`flex-1 py-2 text-[var(--nav-fg)] ${isActive ? "text-[var(--nav-accent)]" : ""}`}
                >
                  {item.label}
                </Link>
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={`mobile-panel-${id}`}
                  aria-label={`${expanded ? "Hide" : "Show"} ${item.label} submenu`}
                  onClick={() => setOpenItem(expanded ? null : id)}
                  className="p-2 text-[var(--nav-muted)]"
                >
                  <Chevron className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
                </button>
              </div>

              {expanded && (
                <div id={`mobile-panel-${id}`} className="pb-3 pl-3">
                  {item.mega.columns.map((column) => (
                    <div key={column.heading} className="mb-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--nav-muted)]">
                        {column.heading}
                      </p>
                      <ul className="mt-1 space-y-1">
                        {column.links.map((link) => (
                          <li key={link.href}>
                            <Link href={link.href} onClick={onNavigate} className="block py-1.5 text-[var(--nav-fg)]">
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {item.mega.featured && (
                    <Link
                      href={item.mega.featured.cta.href}
                      onClick={onNavigate}
                      className="mt-1 inline-block text-sm font-semibold text-[var(--nav-accent)]"
                    >
                      {item.mega.featured.cta.label} →
                    </Link>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
