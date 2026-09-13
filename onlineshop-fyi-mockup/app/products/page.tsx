import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-white">Products</h1>
      <p className="mt-2 max-w-2xl text-slate-400">
        Everything here is shown at its real, current stage — nothing is dressed up as finished before it is.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
