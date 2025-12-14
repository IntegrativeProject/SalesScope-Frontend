"use client";

import { Product, ProductsResponse } from "@/types/ProductType";
import { useEffect, useState, useRef } from "react";

import { MdExpandMore, MdCheck } from "react-icons/md";
type RegistterSaleFormProps ={
  initialProducts:Product[]
}
export default function RegisterSaleForm({initialProducts}:RegistterSaleFormProps) {
  
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [openSelect, setOpenSelect] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);


 
  return (
    <form
     
      className="p-6 bg-white shadow rounded-md border border-gray-200 max-w-[450px] flex flex-col gap-5"
    >
      <h2 className="text-xl font-bold text-black">New Sale</h2>
      <p className="text-gray-500 -mt-3">Complete the details of the sale made</p>

      <label className="font-semibold text-black">Producto</label>

      <div className="relative" ref={selectRef}>
        <button
          type="button"
          onClick={() => setOpenSelect(!openSelect)}
          className="w-full border border-gray-300 bg-gray-50 p-3 rounded-md flex justify-between items-center text-black"
        >
          <span className={selectedProduct ? 'text-black' : 'text-gray-500'}>
            {selectedProduct
              ? `${selectedProduct.name} - $${selectedProduct.price}`
              : "Selecciona un producto"}
          </span>
          <span 
            className={`transition-transform duration-200 ${openSelect ? 'rotate-180' : 'rotate-0'}`}
          > 
            <MdExpandMore className="text-xl" /> 
          </span>
        </button>

        {openSelect && (
          <div
            className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg 
                             z-50 max-h-60 overflow-y-auto"
          >
            {initialProducts.map((product) => {
              const isSelected = selectedProduct?.product_id === product.product_id;
              return (
                <div
                  key={product.product_id}
                  onClick={() => {
                    setSelectedProduct(product);
                    setOpenSelect(false); 
                  }}
                  className={`p-3 cursor-pointer text-black flex justify-between items-center 
                              ${isSelected ? 'bg-blue-100 font-medium' : 'hover:bg-gray-200'}`}
                >
                  {product.name} - ${product.price} {isSelected && <MdCheck className="text-blue-600 text-xl" />}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <label className="font-semibold text-black">Quantity</label>
      <input
        type="number"
        value={quantity}
        min={1}
        className="border border-gray-300 bg-gray-50 p-3 rounded-md text-black"
        onChange={(e) => setQuantity(Number(e.target.value))}
      />

      <label className="font-semibold text-black">Date</label>
      <input
        type="date"
        value={date}
        className="border border-gray-300 bg-gray-50 p-3 rounded-md text-black"
        onChange={(e) => setDate(e.target.value)}
      />

      <button 
        type="submit"
        className="w-full bg-blue-400 hover:bg-gray-500 text-white p-3 rounded-lg font-bold flex gap-2 justify-center items-center cursor-pointer"
        disabled={isSubmitting}
      >
        Register sale
      </button>
    </form>
  );
}