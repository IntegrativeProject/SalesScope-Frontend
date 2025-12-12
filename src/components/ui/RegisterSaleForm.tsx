"use client";

import { useEffect, useState } from "react"
import { Product } from "@/types/ProductType"
import { MdExpandMore } from "react-icons/md"

export default function RegisterSaleForm() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [openSelect, setOpenSelect] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      const res = await fetch("https://integrative-salescope.onrender.com/products");
      const data = await res.json();
      setProducts(data);
    }
    loadProducts();
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!selectedProduct) {
      alert("You must select a product.");
      return;
    }

    if (quantity <= 0) {
      alert("The quantity must be greater than 0.");
      return;
    }

    console.log({
      productId: selectedProduct.product_id,
      quantity,
      date,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white shadow rounded-xl border border-gray-200 max-w-[450px] flex flex-col gap-5"
    >
      <h2 className="text-xl font-bold text-black">New Sale</h2>
      <p className="text-gray-500 -mt-3">Complete the details of the sale made</p>

      <label className="font-semibold">Product</label>

      <div className="relative">
        <button
          type="button"
          onClick={() => setOpenSelect(!openSelect)}
          onFocus={() => setOpenSelect(true)}
          className="w-full border border-gray-300 bg-gray-50 p-3 rounded-md flex justify-between items-center text-black"
        >
          {selectedProduct
            ? `${selectedProduct.name} - $${selectedProduct.price}`
            : "Selecciona un producto"}
          <span> <MdExpandMore /> </span>
        </button>

        {openSelect && (
          <div
            className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg 
                       z-50 max-h-60 "
          >
            {products.map((products) => (
              <div
                key={products.product_id}
                onClick={() => {
                  setSelectedProduct(products);
                  setOpenSelect(false); 
                }}
                className="p-3 hover:bg-gray-100 cursor-pointer text-black"
              >
                {products.name} - ${products.price}
              </div>
            ))}
          </div>
        )}
      </div>

      <label className="font-semibold">Quantity</label>
      <input
        type="number"
        value={quantity}
        min={1}
        className="border border-gray-300 bg-gray-50 p-3 rounded-md text-black"
        onChange={(e) => setQuantity(Number(e.target.value))}
      />

      <label className="font-semibold">Date</label>
      <input
        type="date"
        className="border border-gray-300 bg-gray-50 p-3 rounded-md text-black"
        onChange={(e) => setDate(e.target.value)}
      />

      <button className="w-full bg-gray-600 hover:bg-gray-500 text-white p-3 rounded-lg font-medium flex gap-2 justify-center items-center">
         Register sale
      </button>
    </form>
  );
}
