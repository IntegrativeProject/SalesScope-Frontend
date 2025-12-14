import {
  CreateOrderPayload,
  Order,
  OrdersApiResponse,
} from "@/types/OrdersType";

const BASE_URL = "https://integrative-salescope.onrender.com";

export async function getOrders(): Promise<Order[]> {
  try {
    const res = await fetch(`${BASE_URL}/orders`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Error al obtener las órdenes");
    }
    const data: OrdersApiResponse = await res.json();
    return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function createOrder(payload: CreateOrderPayload) {
  try {
    const res = await fetch(`${BASE_URL}/orders/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Error al registrar la venta");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
