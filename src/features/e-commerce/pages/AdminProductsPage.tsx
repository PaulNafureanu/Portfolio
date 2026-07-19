import { Edit3, Package, PackageCheck, Plus, Search, Tags, TriangleAlert } from "lucide-react";
import { useMemo, useState } from "react";
import { products } from "../data/products";
import type { Product } from "../types/product.types";

function getProductStatus(product: Product) {
  if (product.stock === 0) {
    return {
      label: "Out of stock",
      className: "bg-[#f6e6e5] text-[#8a3d38]",
    };
  }

  if (product.stock <= 5) {
    return {
      label: "Low stock",
      className: "bg-[#fff1ca] text-[#705812]",
    };
  }

  if (product.status === "draft") {
    return {
      label: "Draft",
      className: "bg-[#ece9f5] text-[#594b73]",
    };
  }

  return {
    label: "Active",
    className: "bg-[#e3f1e6] text-[#336244]",
  };
}

export default function AdminProductsPage() {
  const [search, setSearch] = useState("");

  const activeProducts = products.filter((product) => product.status === "active").length;

  const outOfStockProducts = products.filter((product) => product.stock === 0).length;

  const categoryCount = new Set(products.map((product) => product.category)).size;

  const visibleProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.sku.toLowerCase().includes(normalizedSearch) ||
        product.category.toLowerCase().includes(normalizedSearch),
    );
  }, [search]);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 text-xs font-bold tracking-[0.18em] text-[#748078] uppercase">Store administration</p>

          <h1 className="text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Product catalogue</h1>

          <p className="mt-4 max-w-2xl leading-7 text-[#687269]">
            Review products, pricing, inventory, SKUs and catalogue availability.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-xl bg-[#172019] px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#29352d]"
        >
          <Plus size={18} />
          Add product
        </button>
      </div>

      <div className="mt-9 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <article className="rounded-3xl border border-[#dfe3dd] bg-white p-5 shadow-sm">
          <span className="grid size-10 place-items-center rounded-xl bg-[#e6ebe4] text-[#506056]">
            <Package size={20} />
          </span>

          <p className="mt-5 text-sm font-semibold text-[#727b74]">Total products</p>

          <strong className="mt-1 block text-3xl font-extrabold">{products.length}</strong>
        </article>

        <article className="rounded-3xl border border-[#dfe3dd] bg-white p-5 shadow-sm">
          <span className="grid size-10 place-items-center rounded-xl bg-[#e3f1e6] text-[#39704b]">
            <PackageCheck size={20} />
          </span>

          <p className="mt-5 text-sm font-semibold text-[#727b74]">Active</p>

          <strong className="mt-1 block text-3xl font-extrabold">{activeProducts}</strong>
        </article>

        <article className="rounded-3xl border border-[#dfe3dd] bg-white p-5 shadow-sm">
          <span className="grid size-10 place-items-center rounded-xl bg-[#f6e6e5] text-[#8a3d38]">
            <TriangleAlert size={20} />
          </span>

          <p className="mt-5 text-sm font-semibold text-[#727b74]">Out of stock</p>

          <strong className="mt-1 block text-3xl font-extrabold">{outOfStockProducts}</strong>
        </article>

        <article className="rounded-3xl border border-[#dfe3dd] bg-white p-5 shadow-sm">
          <span className="grid size-10 place-items-center rounded-xl bg-[#ece9f5] text-[#594b73]">
            <Tags size={20} />
          </span>

          <p className="mt-5 text-sm font-semibold text-[#727b74]">Categories</p>

          <strong className="mt-1 block text-3xl font-extrabold">{categoryCount}</strong>
        </article>
      </div>

      <div className="mt-8 rounded-3xl border border-[#dfe3dd] bg-white p-4 shadow-sm">
        <label className="relative block">
          <Search className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-[#8a938c]" size={17} />

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search products, categories or SKU..."
            className="min-h-12 w-full rounded-xl border border-[#d9ddd7] bg-[#fafbf9] pr-4 pl-10 text-sm outline-none focus:border-[#66746a] focus:ring-4 focus:ring-[#66746a]/10"
          />
        </label>
      </div>

      <div className="mt-5 hidden overflow-hidden rounded-3xl border border-[#dfe3dd] bg-white shadow-sm md:block">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead className="bg-[#f8faf7]">
              <tr className="border-b border-[#e3e6e1]">
                {["Product", "SKU", "Category", "Price", "Stock", "Status", ""].map((heading) => (
                  <th
                    key={heading}
                    className="px-5 py-4 text-xs font-extrabold tracking-[0.08em] text-[#727b74] uppercase"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {visibleProducts.map((product) => {
                const status = getProductStatus(product);

                return (
                  <tr key={product.id} className="border-b border-[#eceeeb] last:border-0 hover:bg-[#fafbf9]">
                    <td className="px-5 py-4">
                      <div className="flex min-w-72 items-center gap-4">
                        <img src={product.imageUrl} alt="" className="size-14 rounded-xl object-cover" />

                        <div className="min-w-0">
                          <strong className="block truncate text-sm">{product.name}</strong>

                          <span className="mt-1 block max-w-64 truncate text-xs text-[#7d857f]">
                            {product.description}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4 text-sm font-semibold whitespace-nowrap text-[#667068]">{product.sku}</td>

                    <td className="px-5 py-4 text-sm whitespace-nowrap">{product.category}</td>

                    <td className="px-5 py-4 text-sm font-bold whitespace-nowrap">€{product.price.toFixed(2)}</td>

                    <td className="px-5 py-4 text-sm font-bold">{product.stock}</td>

                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1.5 text-xs font-bold whitespace-nowrap ${status.className}`}
                      >
                        {status.label}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-right">
                      <button
                        type="button"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[#d8ddd6] bg-white px-3 py-2 text-sm font-bold transition hover:bg-[#eef1ec]"
                      >
                        <Edit3 size={15} />
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:hidden">
        {visibleProducts.map((product) => {
          const status = getProductStatus(product);

          return (
            <article key={product.id} className="rounded-3xl border border-[#dfe3dd] bg-white p-4 shadow-sm">
              <div className="flex gap-4">
                <img src={product.imageUrl} alt="" className="size-20 shrink-0 rounded-2xl object-cover" />

                <div className="min-w-0 flex-1">
                  <strong className="block truncate">{product.name}</strong>

                  <p className="mt-1 text-xs font-semibold text-[#788179]">{product.sku}</p>

                  <span className={`mt-3 inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${status.className}`}>
                    {status.label}
                  </span>
                </div>
              </div>

              <dl className="mt-4 grid grid-cols-3 gap-3 border-t border-[#e5e8e3] pt-4 text-sm">
                <div>
                  <dt className="text-xs text-[#7b847d]">Price</dt>

                  <dd className="mt-1 font-bold">€{product.price.toFixed(2)}</dd>
                </div>

                <div>
                  <dt className="text-xs text-[#7b847d]">Stock</dt>

                  <dd className="mt-1 font-bold">{product.stock}</dd>
                </div>

                <div>
                  <dt className="text-xs text-[#7b847d]">Category</dt>

                  <dd className="mt-1 truncate font-bold">{product.category}</dd>
                </div>
              </dl>

              <button
                type="button"
                className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-[#d8ddd6] bg-[#f8faf7] text-sm font-bold"
              >
                <Edit3 size={15} />
                Edit product
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
