import { Outlet } from "react-router";
import EcommerceHeader from "./EcommerceHeader";

export default function EcommerceLayout() {
  return (
    <div className="ecommerce-shell min-h-dvh bg-[#f4f5f1] font-sans text-[#172019] antialiased">
      <EcommerceHeader />

      <main>
        <Outlet />
      </main>
    </div>
  );
}
