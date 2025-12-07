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
    <section className="bg-white w-200 h-150 rounded-xl p-4 space-y-5 shadow-xl border border-gray-200 overflow-y-scroll ">
      <h1 className="text-center text-xl font-bold text-black">{mainTitle}</h1>
      {products?.map((item) => (
        <article
          key={item.product_id}
          className="bg-[#FBFCFF] border border-[#D5D5D5] rounded-xl p-2 "
        >
          <h2 className="font-bold text-base ">{item.name}</h2>

          <div className="grid grid-cols-2">
            <div className="flex items-center mt-auto flex-col-2 gap-3 text-sm text-[#ADADAD] font-medium  ">
              <p className="">{item.category}</p>
              <p className="">{`Stock: ${item.stock}`}</p>
            </div>

            <div className=" flex ml-auto text-right">
              <p className="font-bold text-lg">{item.price}</p>
              <button className=" px-3 py-1 ">
                <img
                  src="icons/edit.png"
                  alt="edit_icon"
                  className="w-5 cursor-pointer  "
                />
              </button>
              <button className=" px-3 py-1 ">
                <img
                  src="icons/delete.png"
                  alt="delete_icon"
                  className="w-5 cursor-pointer  "
                />
              </button>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
