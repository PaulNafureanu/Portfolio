import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import type { Product } from "../types/product.types";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const isOutOfStock = product.stock === 0;
  const isLowStock = product.stock > 0 && product.stock <= 5;

  return (
    <article className="group overflow-hidden rounded-3xl border border-[#dfe3dd] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(23,32,25,0.10)]">
      <Link
        to={`/ecommerce/products/${product.slug}`}
        className="relative block aspect-square overflow-hidden bg-[#e9ece7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#172019]"
      >
        <img
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          src={product.imageUrl}
          alt={product.name}
          loading="lazy"
        />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
          {isOutOfStock && (
            <span className="rounded-full bg-[#172019] px-3 py-1.5 text-xs font-bold text-white shadow-sm">
              Out of stock
            </span>
          )}

          {isLowStock && (
            <span className="rounded-full bg-[#fff2cf] px-3 py-1.5 text-xs font-bold text-[#725812] shadow-sm">
              Only {product.stock} left
            </span>
          )}
        </div>
      </Link>

      <div className="p-5">
        <p className="mb-2 text-xs font-bold tracking-[0.14em] text-[#7a837c] uppercase">{product.category}</p>

        <Link
          to={`/ecommerce/products/${product.slug}`}
          className="block rounded-md text-lg font-bold tracking-[-0.025em] text-[#172019] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#172019]"
        >
          {product.name}
        </Link>

        <div className="mt-6 flex items-center justify-between gap-4">
          <strong className="text-lg text-[#172019]">€{product.price.toFixed(2)}</strong>

          <Link
            to={`/ecommerce/products/${product.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#5f6b62] transition hover:text-[#172019]"
          >
            View product
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}
