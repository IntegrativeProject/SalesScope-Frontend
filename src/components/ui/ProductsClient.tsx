"use client";

import { useState } from "react";
import { Product } from "@/types/ProductType";
import ListContainer from "./ListContainer";
import ListSeconSection from "./ListSeconSection";

type Props = {
  initialProducts: Product[];
};

export default function ProductsClient({ initialProducts }: Props) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleDelete = async (id: number) => {
    if (!confirm("¿Eliminar producto?")) return;

    try {
      const res = await fetch(
        `https://integrative-salescope.onrender.com/products/${id}`,
        { method: "DELETE" }
      );

      if (!res.ok) throw new Error();

      setProducts((prev) =>
        prev.filter((product) => product.product_id !== id)
      );
    } catch {
      alert("Error eliminando producto");
    }
  };

  const handleUpdate = async (updated: Product) => {
    try {
      const res = await fetch(
        `https://integrative-salescope.onrender.com/products/${updated.product_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updated),
        }
      );

      if (!res.ok) throw new Error();

      setProducts((prev) =>
        prev.map((p) => (p.product_id === updated.product_id ? updated : p))
      );

      setSelectedProduct(null);
    } catch {
      alert("Error actualizando producto");
    }
  };

  return (
    <div className="flex bg-white rounded-xl p-5 h-160">
      <ListContainer
        products={products}
        mainTitle="Inventory"
        onEdit={setSelectedProduct}
        onDelete={handleDelete}
      />

      <ListSeconSection
        product={selectedProduct}
        onSave={handleUpdate}
        onCancel={() => setSelectedProduct(null)}
      />
    </div>
  );
}
