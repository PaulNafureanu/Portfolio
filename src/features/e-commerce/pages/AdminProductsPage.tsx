import { Package, PackageCheck, Tags, TriangleAlert } from "lucide-react";
import { products } from "../data/products";

export default function AdminProductsPage() {
  const activeProducts = products.filter((product) => product.status === "active").length;

  const outOfStockProducts = products.filter((product) => product.stock === 0).length;

  const categories = new Set(products.map((product) => product.category)).size;

  return (
    <section className="ecommerce-admin-page">
      <div className="ecommerce-admin-heading">
        <div>
          <p className="ecommerce-eyebrow">Store administration</p>
          <h1>Product catalogue</h1>
          <p>Review products, prices, stock levels, SKUs, and catalogue status.</p>
        </div>

        <button className="ecommerce-button" type="button">
          Add product
        </button>
      </div>

      <div className="ecommerce-stat-grid">
        <article className="ecommerce-stat-card">
          <Package size={22} />
          <span>Total products</span>
          <strong>{products.length}</strong>
        </article>

        <article className="ecommerce-stat-card">
          <PackageCheck size={22} />
          <span>Active products</span>
          <strong>{activeProducts}</strong>
        </article>

        <article className="ecommerce-stat-card">
          <TriangleAlert size={22} />
          <span>Out of stock</span>
          <strong>{outOfStockProducts}</strong>
        </article>

        <article className="ecommerce-stat-card">
          <Tags size={22} />
          <span>Categories</span>
          <strong>{categories}</strong>
        </article>
      </div>

      <div className="ecommerce-table-wrapper">
        <table className="ecommerce-products-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>SKU</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th aria-label="Actions" />
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className="ecommerce-table-product">
                    <img src={product.imageUrl} alt="" />

                    <div>
                      <strong>{product.name}</strong>
                      <span>{product.description}</span>
                    </div>
                  </div>
                </td>

                <td>{product.sku}</td>
                <td>{product.category}</td>
                <td>€{product.price.toFixed(2)}</td>
                <td>{product.stock}</td>

                <td>
                  <span className={`ecommerce-status-badge ecommerce-status-badge--${product.status}`}>
                    {product.status.replaceAll("-", " ")}
                  </span>
                </td>

                <td>
                  <button className="ecommerce-table-action" type="button">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
