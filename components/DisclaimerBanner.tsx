import { site } from "@/data/site";

export function DisclaimerBanner({ variant = "banner" }: { variant?: "banner" | "inline" }) {
  if (variant === "inline") {
    return (
      <p className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
        {site.disclaimer}
      </p>
    );
  }

  return (
    <div className="border-b border-amber-200 bg-amber-50 text-amber-900">
      <p className="mx-auto max-w-3xl px-4 py-2 text-center text-xs sm:text-sm">{site.disclaimerShort}</p>
    </div>
  );
}
