import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

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
        product.name.toLowerCase().includes(normalizedSearch) || product.sku.toLowerCase().includes(normalizedSearch);

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
    <>
      <section className="ecommerce-hero">
        <div className="ecommerce-hero__content">
          <p className="ecommerce-eyebrow">New collection</p>

          <h1>Useful products for everyday life.</h1>

          <p>Carefully selected essentials for your home, work, and daily routine.</p>

          <a className="ecommerce-button ecommerce-button--light" href="#catalogue">
            Browse collection
          </a>
        </div>
      </section>

      <section className="ecommerce-catalogue" id="catalogue">
        <div className="ecommerce-section-heading">
          <div>
            <p className="ecommerce-eyebrow">Our products</p>
            <h2>Shop the collection</h2>
          </div>

          <p>{visibleProducts.length} products</p>
        </div>

        <div className="ecommerce-filters">
          <label className="ecommerce-field">
            <span>Search</span>

            <input
              type="search"
              placeholder="Search products or SKU..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>

          <label className="ecommerce-field">
            <span>Category</span>

            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              {categories.map((currentCategory) => (
                <option key={currentCategory} value={currentCategory}>
                  {currentCategory}
                </option>
              ))}
            </select>
          </label>

          <label className="ecommerce-field">
            <span>Sort by</span>

            <select value={sort} onChange={(event) => setSort(event.target.value as SortOption)}>
              <option value="featured">Featured</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
            </select>
          </label>
        </div>

        {visibleProducts.length > 0 ? (
          <div className="ecommerce-product-grid">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="ecommerce-empty-state">
            <h3>No products found</h3>
            <p>Try changing your search or category filters.</p>
          </div>
        )}
      </section>
    </>
  );
}
