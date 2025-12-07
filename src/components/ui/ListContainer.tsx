"use client";
import { Product } from "@/types/ProductType";
import React from "react";

type ListProps = {
  mainTitle?: string;
  price?: number;
  products?: Product[];
};

export default function ListContainer({ mainTitle, products }: ListProps) {
  return (
    
      <section className="bg-white w-150 h-150 rounded-xl p-5 space-y-5 shadow-xl border border-gray-200 overflow-y-scroll ">
        <h1 className="text-center text-xl font-bold text-black mb-4">
          {mainTitle}
        </h1>

        {products?.map((item) => (
          <article
            key={item.product_id}
            className="bg-white min-h-24 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 flex items-center"
          >
            <div className="flex flex-col justify-center flex-1">
              <h2 className="font-semibold text-lg text-gray-800">
                {item.name}
              </h2>

              <div className="flex text-sm space-x-2 text-gray-500">
                <p className="capitalize">{item.category}</p>
                <p className="font-medium text-gray-700">{`Stock: ${item.stock}`}</p>
              </div>
            </div>

            <div className="flex items-center  px-2 py-1 gap-2 rounded-lg">
              <p className="font-bold text-lg text-black">${item.price}</p>

              <button className="p-2 rounded-lg hover:bg-gray-100 transition">
                <img
                  src="icons/edit.png"
                  alt="edit_icon"
                  className="w-5 cursor-pointer"
                />
              </button>

              <button className="p-2 rounded-lg hover:bg-red-100 transition">
                <img
                  src="icons/delete.png"
                  alt="delete_icon"
                  className="w-5 cursor-pointer"
                />
              </button>
            </div>
          </article>
        ))}
      </section>
      
    
  );
}
