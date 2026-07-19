import { Outlet } from "react-router";
import EcommerceHeader from "./EcommerceHeader";

export default function EcommerceLayout() {
  return (
    <div className="ecommerce-demo">
      <EcommerceHeader />

      <main className="ecommerce-page-container">
        <Outlet />
      </main>
    </div>
  );
}
