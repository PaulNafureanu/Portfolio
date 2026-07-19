import { ArrowLeft, Check, ShoppingBag } from "lucide-react";
import { Link, useParams } from "react-router";
import { products } from "../data/products";

export default function ProductPage() {
  const { slug } = useParams();

  const product = products.find((currentProduct) => currentProduct.slug === slug);

  if (!product) {
    return (
      <section className="ecommerce-empty-state">
        <h1>Product not found</h1>
        <p>The requested product does not exist.</p>

        <Link className="ecommerce-button" to="/ecommerce/products">
          Return to shop
        </Link>
      </section>
    );
  }

  const isAvailable = product.stock > 0;

  return (
    <section className="ecommerce-product-page">
      <Link className="ecommerce-back-link" to="/ecommerce/products">
        <ArrowLeft size={18} />
        Back to products
      </Link>

      <div className="ecommerce-product-details">
        <div className="ecommerce-product-details__image-wrapper">
          <img className="ecommerce-product-details__image" src={product.imageUrl} alt={product.name} />
        </div>

        <div className="ecommerce-product-details__content">
          <p className="ecommerce-eyebrow">{product.category}</p>

          <h1>{product.name}</h1>

          <p className="ecommerce-product-details__price">€{product.price.toFixed(2)}</p>

          <p className="ecommerce-product-details__description">{product.description}</p>

          <div
            className={
              isAvailable ? "ecommerce-stock-status ecommerce-stock-status--available" : "ecommerce-stock-status"
            }
          >
            <span />

            {isAvailable ? `${product.stock} units available` : "Currently out of stock"}
          </div>

          <div className="ecommerce-quantity-row">
            <label className="ecommerce-field ecommerce-field--quantity">
              <span>Quantity</span>

              <input type="number" min="1" max={product.stock} defaultValue="1" disabled={!isAvailable} />
            </label>

            <button className="ecommerce-button ecommerce-button--wide" type="button" disabled={!isAvailable}>
              <ShoppingBag size={19} />

              {isAvailable ? "Add to cart" : "Out of stock"}
            </button>
          </div>

          <div className="ecommerce-product-features">
            <h2>Product details</h2>

            <ul>
              {product.features.map((feature) => (
                <li key={feature}>
                  <Check size={18} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p className="ecommerce-product-sku">SKU: {product.sku}</p>
        </div>
      </div>
    </section>
  );
}
