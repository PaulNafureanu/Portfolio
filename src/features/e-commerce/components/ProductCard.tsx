import { Link } from "react-router";
import type { Product } from "../types/product.types";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const isAvailable = product.stock > 0;

  return (
    <article className="ecommerce-product-card">
      <Link className="ecommerce-product-card__image-wrapper" to={`/ecommerce/products/${product.slug}`}>
        <img className="ecommerce-product-card__image" src={product.imageUrl} alt={product.name} />

        {!isAvailable && <span className="ecommerce-product-card__badge">Out of stock</span>}
      </Link>

      <div className="ecommerce-product-card__content">
        <p className="ecommerce-product-card__category">{product.category}</p>

        <Link className="ecommerce-product-card__title" to={`/ecommerce/products/${product.slug}`}>
          {product.name}
        </Link>

        <div className="ecommerce-product-card__footer">
          <strong>€{product.price.toFixed(2)}</strong>

          <Link className="ecommerce-text-link" to={`/ecommerce/products/${product.slug}`}>
            View product
          </Link>
        </div>
      </div>
    </article>
  );
}
