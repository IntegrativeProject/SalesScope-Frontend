export interface SaleItem {
  product_id: number;
  quantity: number;
}

export interface CreateOrderPayload {
  user_id: number;
  status?: "pending" | "paid" | "shipped" | "cancelled";
  items: SaleItem[];
}

// Tipo de item de la orden
export interface OrderItem {
  order_item_id: number;
  product_id: number;
  quantity: number;
  total_price: number;
}

// Tipo de una orden
export interface Order {
  order_id: number;
  user_id: number;
  status: "pending" | "paid" | "shipped" | "cancelled";
  total_amount: number;
  created_at: string; // opcional: Date si parseas
  updated_at: string;
  items: OrderItem[];
}

// Tipo del response completo de la API
export interface OrdersApiResponse {
  message: string;
  data: Order[];
}