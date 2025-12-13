"use client";

import { useState } from "react";
import { Product } from "@/types/ProductType";
import ListContainer from "./ListContainer";
import ListSeconSection from "./ListSeconSection";
import { deleteProduct, updateProduct } from "@/services/products.services";
import RegisterForm from "./RegisterForm";

type Props = {
  initialProducts: Product[];
};

export default function ProductsClient({ initialProducts }: Props) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductCreated = (newProduct: Product) => {
    setProducts((prev) => [newProduct, ...prev]);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("¿Eliminar producto?")) return;

    try {
      await deleteProduct(id);
      setProducts((prev) => prev.filter((p) => p.product_id !== id));
    } catch {
      alert("Error eliminando producto");
    }
  };


  const handleUpdate = async (product: Product) => {
    try {
      await updateProduct(product);
      setProducts((prev) =>
        prev.map((p) => (p.product_id === product.product_id ? product : p))
      );
      setSelectedProduct(null);
    } catch {
      alert("Error actualizando producto");
    }
  };

  return (
    <div className="flex bg-white rounded-xl p-5 h-160">
       <RegisterForm
          mainName="New Product"
          firstField="Name"
          secondField="Price"
          thirdField="Initial stock"
          fourthField="Category"
          buttonLabel="Add product"
          onCreated={handleProductCreated}
        />
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
