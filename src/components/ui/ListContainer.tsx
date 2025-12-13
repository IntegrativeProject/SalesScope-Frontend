"use client";
import { Product } from "@/types/ProductType";
import React from "react";
import SearchBar from "./SearchBar";

type ListProps = {
  mainTitle?: string;
  price?: number;
  products?: Product[];
};

export default function ListContainer({ mainTitle, products }: ListProps) {
  return (
    <div>
      <div className=" flex sticky top-0 z-5 space-x-20 text-xl font-bold text-black rounded-t-md h-11 shadow- border border-gray-200 bg-white p-2 ">
        <h1>{mainTitle}</h1>
        <div className="flex gap-4">
          Filters
          <img src="/icons/filter.png" alt="filter-icon" className="w-8" />
          <SearchBar w="w-65" />
        </div>
      </div>
      <section className=" p-4 bg-white w-150 h-140 rounded-xl rounded-t-none  space-y-5 shadow-xl border border-gray-200 overflow-y-scroll ">
        {products?.map((item) => (
          <article
            key={item.product_id}
            className="p-4 bg-white min-h-24 border border-gray-200 rounded-xl  shadow-sm hover:shadow-md transition-all duration-200 flex items-center"
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
    </div>
  );
}
