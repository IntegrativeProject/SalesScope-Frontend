"use client";

import { useMemo, useState } from "react";
import { Product } from "@/types/ProductType";
import ListContainer from "./ListContainer";
import ListSeconSection from "./ListSeconSection";
import RegisterForm from "./RegisterProductForm";
import { deleteProduct, updateProduct } from "@/services/products.services";

type Props = {
  initialProducts: Product[];
};

export default function ProductsClient({ initialProducts }: Props) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [stockFilter, setStockFilter] = useState("all");

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

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchName = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory = category === "all" || product.category === category;

      const matchStock =
        stockFilter === "all" ||
        (stockFilter === "in" && product.stock > 0) ||
        (stockFilter === "low" && product.stock < 5);

      return matchName && matchCategory && matchStock;
    });
  }, [products, search, category, stockFilter]);

  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <div className="flex rounded-xl p-5 h-160 gap-6">
      <RegisterForm
        mainName="New Product"
        firstField="Name"
        secondField="Price"
        thirdField="Initial stock"
        fourthField="Category"
        buttonLabel="Add product"
        onCreated={handleProductCreated}
      />

      <div className="flex flex-col gap-0 ">
        <div className="flex gap-3 bg-white p-3 rounded-xl rounded-b-none">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered w-48"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="select select-bordered"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            className="select select-bordered"
            value={stockFilter}
            onChange={(e) => setStockFilter(e.target.value)}
          >
            <option value="all">All stock</option>
            <option value="in">In stock</option>
            <option value="low">Low stock</option>
          </select>
        </div>

        <ListContainer
          products={filteredProducts}
          
          onEdit={setSelectedProduct}
          onDelete={handleDelete}
        />
      </div>

      <ListSeconSection
        product={selectedProduct}
        onSave={handleUpdate}
        onCancel={() => setSelectedProduct(null)}
      />
    </div>
  );
}
