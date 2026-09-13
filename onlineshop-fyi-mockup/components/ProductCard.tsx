import Link from "next/link";
import { statusLabel, type Product } from "@/types";

const statusStyles: Record<Product["status"], string> = {
  "in-development": "border-glow-cyan/40 bg-glow-cyan/10 text-glow-cyan",
  "early-build": "border-glow-violet/40 bg-glow-violet/10 text-glow-violet",
  planned: "border-white/20 bg-white/5 text-slate-400",
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-white/20 hover:bg-white/[0.06]"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-white">{product.name}</h3>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-medium ${statusStyles[product.status]}`}
        >
          {statusLabel[product.status]}
        </span>
      </div>
      <p className="text-sm text-slate-400">{product.tagline}</p>
      <span className="mt-auto text-sm font-medium text-glow-cyan opacity-0 transition-opacity group-hover:opacity-100">
        View details →
      </span>
    </Link>
  );
}
