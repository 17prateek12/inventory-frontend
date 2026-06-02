export interface Product {
  id: number;
  name: string;
  sku: string;
  price: number;
  stock_quantity: number;
  image_url?: string;
  created_at: string;
}

export interface CreateProduct {
  name: string;
  sku: string;
  price: number;
  stock_quantity: number;
  image_url?: string;
}