import { ShoppingBag } from "lucide-react";
import { Link } from "react-router";

export default function CartPage() {
  return (
    <section className="ecommerce-empty-state">
      <ShoppingBag size={42} />

      <h1>Your cart is empty</h1>

      <p>Add products from the catalogue to begin an order.</p>

      <Link className="ecommerce-button" to="/ecommerce/products">
        Browse products
      </Link>
    </section>
  );
}
