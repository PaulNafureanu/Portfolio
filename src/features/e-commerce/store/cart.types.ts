export type CartItem = {
  productId: string;
  quantity: number;
};

export type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  addItem: (productId: string, quantity?: number) => void;
  setQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
};
