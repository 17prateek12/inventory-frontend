export interface OrderItem {
  product_id: number;
  quantity: number;
}

export interface CreateOrder {
  customer_id: number;
  items: OrderItem[];
}

export interface Order {
  id: number;
  customer_id: number;
  total_amount: number;
  created_at: string;
}