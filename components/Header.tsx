"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type CSSProperties } from "react";
import { navItems, site } from "@/data/site";
import { navThemes, type NavThemeName } from "@/data/navThemes";
import { DesktopMegaNav, MobileMegaNav } from "@/components/MegaMenu";

export function Header({ theme = "brand" }: { theme?: NavThemeName }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const activeTheme = navThemes[theme];

  return (
    <header
      data-nav-theme={theme}
      style={activeTheme.vars as CSSProperties}
      className="sticky top-0 z-40 border-b border-[var(--nav-border)] bg-[var(--nav-bg)] backdrop-blur"
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-bold text-[var(--nav-fg)]"
          onClick={() => setOpen(false)}
        >
          {site.name}
          <span className="ml-2 align-middle text-xs font-medium text-[var(--nav-accent)]">Proposal</span>
        </Link>

        <button
          type="button"
          className="rounded-md p-2 text-[var(--nav-fg)] hover:bg-[var(--nav-hover)] sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}>
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <DesktopMegaNav items={navItems} pathname={pathname} />
      </div>

      {open && <MobileMegaNav items={navItems} pathname={pathname} onNavigate={() => setOpen(false)} />}
    </header>
  );
}
