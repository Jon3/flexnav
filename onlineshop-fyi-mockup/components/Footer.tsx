import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-xs text-slate-500">
      <p>{site.mockupNotice}</p>
      <p className="mt-2">&copy; {new Date().getFullYear()} {site.name} — mockup preview.</p>
    </footer>
  );
}
