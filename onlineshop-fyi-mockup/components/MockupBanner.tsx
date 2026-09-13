import { site } from "@/data/site";

export function MockupBanner() {
  return (
    <div className="bg-glow-gradient px-4 py-2 text-center text-xs font-medium text-ink-950 sm:text-sm">
      {site.mockupNotice}
    </div>
  );
}
