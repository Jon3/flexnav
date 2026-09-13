import Link from "next/link";
import { navItems, site } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          {site.name.replace(".fyi", "")}
          <span className="text-gradient">.fyi</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-300">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
