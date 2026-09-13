import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <section className="text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-glow-cyan">
          Coming soon to nopCommerce
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          The marketplace for
          <br />
          <span className="text-gradient">next-generation nopCommerce plugins.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">{site.shortDescription}</p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/products"
            className="rounded-full bg-glow-gradient px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-105"
          >
            Browse products
          </Link>
        </div>
      </section>

      <section className="mt-24">
        <div className="mb-8 flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold text-white">On the roadmap</h2>
          <Link href="/products" className="text-sm font-medium text-glow-cyan hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
