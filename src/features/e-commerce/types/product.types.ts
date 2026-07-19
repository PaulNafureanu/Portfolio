export type ProductStatus = "active" | "draft" | "out-of-stock";

export type Product = {
  id: string;
  name: string;
  slug: string;
  sku: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  stock: number;
  status: ProductStatus;
  features: string[];
};
