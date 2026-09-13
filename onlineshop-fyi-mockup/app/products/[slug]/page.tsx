import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { statusLabel } from "@/types";

interface ProductPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = products.find((item) => item.slug === params.slug);
  return { title: product?.name ?? "Product" };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link href="/products" className="text-sm font-medium text-glow-cyan hover:underline">
        ← All products
      </Link>

      <h1 className="mt-4 text-4xl font-bold text-white">{product.name}</h1>
      <p className="mt-2 text-lg text-slate-400">{product.tagline}</p>
      <span className="mt-4 inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
        {statusLabel[product.status]}
      </span>

      <p className="mt-8 leading-relaxed text-slate-300">{product.description}</p>

      <h2 className="mt-10 text-lg font-semibold text-white">Highlights</h2>
      <ul className="mt-4 space-y-2">
        {product.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3 text-slate-300">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-glow-gradient" />
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
}
