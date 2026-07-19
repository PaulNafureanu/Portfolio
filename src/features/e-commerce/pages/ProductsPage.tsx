import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import heroImage from "../assets/hero.png";

type SortOption = "featured" | "price-low" | "price-high";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState<SortOption>("featured");

  const categories = ["All", ...new Set(products.map((product) => product.category))];

  const visibleProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    const filteredProducts = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.sku.toLowerCase().includes(normalizedSearch) ||
        product.description.toLowerCase().includes(normalizedSearch);

      const matchesCategory = category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });

    return [...filteredProducts].sort((first, second) => {
      if (sort === "price-low") {
        return first.price - second.price;
      }

      if (sort === "price-high") {
        return second.price - first.price;
      }

      return 0;
    });
  }, [category, search, sort]);

  return (
    <div className="pb-20">
      <div className="mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 sm:pt-8 lg:px-8">
        <section className="relative isolate flex min-h-[460px] items-end overflow-hidden rounded-[2rem] px-6 py-10 shadow-[0_24px_70px_rgba(22,31,25,0.12)] sm:min-h-[520px] sm:px-10 sm:py-14 lg:px-16">
          <div
            className="absolute inset-0 bg-cover bg-[72%_center] sm:bg-center"
            style={{
              backgroundImage: `url(${heroImage})`,
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1510]/95 via-[#0b1510]/65 to-[#0b1510]/5" />

          <div className="relative z-10 max-w-2xl text-white">
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-white/65 uppercase">New collection</p>

            <h1 className="max-w-xl text-4xl leading-[0.98] font-extrabold tracking-[-0.065em] text-white sm:text-5xl lg:text-7xl">
              Useful products for everyday life.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/75 sm:text-lg">
              Carefully selected essentials for your home, work, and daily routine.
            </p>

            <a
              data-store-button="light"
              href="#catalogue"
              style={{
                color: "#172019",
                WebkitTextFillColor: "#172019",
              }}
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 text-sm font-extrabold text-[#172019] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#edf0eb]"
            >
              <span data-store-button-label>Browse collection</span>
            </a>
          </div>
        </section>
      </div>

      <section id="catalogue" className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 pt-16 sm:px-6 sm:pt-24 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.18em] text-[#728077] uppercase">Our products</p>

            <h2 className="text-3xl font-extrabold tracking-[-0.05em] text-[#172019] sm:text-5xl">
              Shop the collection
            </h2>
          </div>

          <p className="text-sm font-medium text-[#737b75]">
            {visibleProducts.length} {visibleProducts.length === 1 ? "product" : "products"}
          </p>
        </div>

        <div className="mb-8 rounded-3xl border border-[#dfe3dd] bg-white p-4 shadow-sm sm:p-5">
          <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_220px_220px]">
            <label className="grid gap-2">
              <span className="text-xs font-bold text-[#5e685f]">Search</span>

              <div className="relative">
                <Search
                  className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-[#8b948d]"
                  size={17}
                />

                <input
                  type="search"
                  value={search}
                  placeholder="Search products or SKU..."
                  onChange={(event) => setSearch(event.target.value)}
                  className="min-h-12 w-full rounded-xl border border-[#d9ddd7] bg-[#fafbf9] pr-4 pl-10 text-sm text-[#172019] outline-none transition placeholder:text-[#929a94] focus:border-[#66746a] focus:ring-4 focus:ring-[#66746a]/10"
                />
              </div>
            </label>

            <label className="grid gap-2">
              <span className="text-xs font-bold text-[#5e685f]">Category</span>

              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="min-h-12 w-full rounded-xl border border-[#d9ddd7] bg-[#fafbf9] px-3.5 text-sm text-[#172019] outline-none transition focus:border-[#66746a] focus:ring-4 focus:ring-[#66746a]/10"
              >
                {categories.map((currentCategory) => (
                  <option key={currentCategory} value={currentCategory}>
                    {currentCategory}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5e685f]">
                <SlidersHorizontal size={14} />
                Sort by
              </span>

              <select
                value={sort}
                onChange={(event) => setSort(event.target.value as SortOption)}
                className="min-h-12 w-full rounded-xl border border-[#d9ddd7] bg-[#fafbf9] px-3.5 text-sm text-[#172019] outline-none transition focus:border-[#66746a] focus:ring-4 focus:ring-[#66746a]/10"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
              </select>
            </label>
          </div>
        </div>

        {visibleProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="grid min-h-72 place-items-center rounded-3xl border border-dashed border-[#cfd5ce] bg-white px-6 text-center">
            <div>
              <Search className="mx-auto mb-4 text-[#7f8981]" size={34} />

              <h3 className="text-xl font-bold text-[#172019]">No products found</h3>

              <p className="mt-2 text-sm text-[#737b75]">Try changing your search or category.</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
