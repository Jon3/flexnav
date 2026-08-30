import Link from "next/link";
import { navItems, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <p className="text-sm text-slate-600">{site.disclaimer}</p>

        <nav aria-label="Footer" className="mt-6">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brand-700">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-6 text-xs text-slate-400">
          &copy; {new Date().getFullYear()} {site.name} (working title). Concept and proposal stage only.
        </p>
      </div>
    </footer>
  );
}
