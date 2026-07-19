import { type ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { products } from "../data/products";
import { CartContext } from "./cart.context";
import type { CartItem } from "./cart.types";

const STORAGE_KEY = "northstar-cart";

function loadCart(): CartItem[] {
  try {
    const storedCart = localStorage.getItem(STORAGE_KEY);

    if (!storedCart) {
      return [];
    }

    const parsedCart: unknown = JSON.parse(storedCart);

    if (!Array.isArray(parsedCart)) {
      return [];
    }

    return parsedCart.filter(
      (item): item is CartItem =>
        typeof item === "object" &&
        item !== null &&
        "productId" in item &&
        typeof item.productId === "string" &&
        "quantity" in item &&
        typeof item.quantity === "number" &&
        item.quantity > 0,
    );
  } catch {
    return [];
  }
}

type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>(loadCart);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((productId: string, quantity = 1) => {
    const product = products.find((currentProduct) => currentProduct.id === productId);

    if (!product || product.stock <= 0) {
      return;
    }

    const safeQuantity = Math.min(Math.max(quantity, 1), product.stock);

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.productId === productId);

      if (!existingItem) {
        return [
          ...currentItems,
          {
            productId,
            quantity: safeQuantity,
          },
        ];
      }

      return currentItems.map((item) =>
        item.productId === productId
          ? {
              ...item,
              quantity: Math.min(item.quantity + safeQuantity, product.stock),
            }
          : item,
      );
    });
  }, []);

  const setQuantity = useCallback((productId: string, quantity: number) => {
    const product = products.find((currentProduct) => currentProduct.id === productId);

    if (!product || product.stock <= 0) {
      return;
    }

    const safeQuantity = Math.min(Math.max(quantity, 1), product.stock);

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.productId === productId
          ? {
              ...item,
              quantity: safeQuantity,
            }
          : item,
      ),
    );
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.productId !== productId));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const itemCount = useMemo(() => items.reduce((total, item) => total + item.quantity, 0), [items]);

  const value = useMemo(
    () => ({
      items,
      itemCount,
      addItem,
      setQuantity,
      removeItem,
      clearCart,
    }),
    [items, itemCount, addItem, setQuantity, removeItem, clearCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
