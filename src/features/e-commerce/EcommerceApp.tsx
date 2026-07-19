import { Navigate, Route, Routes } from "react-router";
import EcommerceLayout from "./components/EcommerceLayout";
import AdminProductsPage from "./pages/AdminProductsPage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import ProductsPage from "./pages/ProductsPage";
import { CartProvider } from "./store/CartProvider";
import "./ecommerce.css";

export default function EcommerceApp() {
  return (
    <CartProvider>
      <Routes>
        <Route element={<EcommerceLayout />}>
          <Route index element={<Navigate to="products" replace />} />

          <Route path="products" element={<ProductsPage />} />

          <Route path="products/:slug" element={<ProductPage />} />

          <Route path="cart" element={<CartPage />} />

          <Route path="admin/products" element={<AdminProductsPage />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}
