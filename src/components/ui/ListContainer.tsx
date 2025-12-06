import { Product } from "@/types/ProductType";
import React from "react";

type ListProps = {
  mainTitle?: string;
  price?: number;
  products?:Product[]
};

export default function ListContainer({ mainTitle, price,products }: ListProps) {
    console.log(products);
    

  return (
    <section className="bg-white w-260 h-auto rounded-xl p-4 space-y-5 shadow-xl border border-gray-200">
      <h1 className="text-center text-xl font-bold text-black">{mainTitle}</h1>
      {products?.map((item)=>(
        <article key={item.product_id} className="bg-[#FBFCFF] border border-[#D5D5D5] rounded-xl p-2">
        <h2 className="font-bold text-base ">{item.name}</h2>

        <div className="flex space-x-40">
          <div className="flex items-center mt-auto flex-col-2 gap-3 text-sm text-[#ADADAD] font-medium  ">
            <p className="">{`price: ${item.price}`}</p>
            <p className="">{`Stock: ${item.stock}`}</p>
          </div>

          <div className="flex items-center ml-150 ">
            <p className="font-bold text-lg">{item.price}</p>
          </div>
        </div>
      </article>
      ))}

     
     
      
    </section>
  );
}

 