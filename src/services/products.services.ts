import { Product, ProductsResponse } from "@/types/ProductType";

const BASE_URL = "https://integrative-salescope.onrender.com/products";


export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/?page_size=9999`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error fetching products");
  }

  const data: ProductsResponse = await res.json();
  return data.data;
}


export async function createProduct(product: Partial<Product>) {
  const res = await fetch(`${BASE_URL}/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!res.ok) {
    throw new Error("Error creating product");
  }

  return res.json();
}


export async function updateProduct(product: Product) {
  const res = await fetch(`${BASE_URL}/${product.product_id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!res.ok) {
    throw new Error("Error updating product");
  }

  return res.json();
}

export async function deleteProduct(id: number) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Error deleting product");
  }

  return true;
}
