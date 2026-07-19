import { LayoutDashboard, ShoppingBag, Store } from "lucide-react";
import { NavLink } from "react-router";
import { useCart } from "../store/useCart";

type NavigationLinkProps = {
  isActive: boolean;
};

function getNavigationClass({ isActive }: NavigationLinkProps) {
  return [
    "inline-flex items-center gap-2 rounded-full px-3 py-2",
    "text-sm font-semibold transition",
    "focus-visible:outline-none focus-visible:ring-2",
    "focus-visible:ring-[#172019] focus-visible:ring-offset-2",
    isActive ? "bg-[#e5e9e3] text-[#172019]" : "text-[#616b63] hover:bg-[#edf0eb] hover:text-[#172019]",
  ].join(" ");
}

export default function EcommerceHeader() {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-[#dfe3dd] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-18 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink
          to="/ecommerce/products"
          className="flex items-center gap-2.5 rounded-lg font-bold tracking-[-0.03em] text-[#172019] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#172019]"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-[#172019] text-white">
            <Store size={18} strokeWidth={2.2} />
          </span>

          <span className="text-lg">Northstar</span>
        </NavLink>

        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Store navigation">
          <NavLink to="/ecommerce/products" className={getNavigationClass}>
            <Store size={17} />

            <span className="hidden sm:inline">Shop</span>
          </NavLink>

          <NavLink to="/ecommerce/admin/products" className={getNavigationClass}>
            <LayoutDashboard size={17} />

            <span className="hidden sm:inline">Admin</span>
          </NavLink>

          <NavLink
            data-store-button="dark"
            to="/ecommerce/cart"
            style={{
              color: "#ffffff",
              WebkitTextFillColor: "#ffffff",
            }}
            className="relative ml-1 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#172019] px-3.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#29352d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#172019] focus-visible:ring-offset-2 sm:px-4"
          >
            <ShoppingBag size={18} />

            <span data-store-button-label className="hidden sm:inline">
              Cart
            </span>

            {itemCount > 0 && (
              <span className="grid min-w-5 place-items-center rounded-full bg-white px-1.5 py-0.5 text-[11px] font-extrabold text-[#172019]">
                {itemCount}
              </span>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
