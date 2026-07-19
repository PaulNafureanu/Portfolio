import { LayoutDashboard, ShoppingBag } from "lucide-react";
import { NavLink } from "react-router";

export default function EcommerceHeader() {
  return (
    <header className="ecommerce-header">
      <div className="ecommerce-header__content">
        <NavLink className="ecommerce-brand" to="/ecommerce/products">
          Northstar
        </NavLink>

        <nav className="ecommerce-navigation">
          <NavLink className="ecommerce-navigation__link" to="/ecommerce/products">
            Shop
          </NavLink>

          <NavLink className="ecommerce-navigation__link" to="/ecommerce/admin/products">
            <LayoutDashboard size={18} />
            Admin
          </NavLink>

          <NavLink className="ecommerce-cart-link" to="/ecommerce/cart">
            <ShoppingBag size={20} />
            <span>Cart</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
