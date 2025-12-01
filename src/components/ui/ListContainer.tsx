import React from "react";
type ListProps = {
  mainTitle?: string;
  price?: number;
};

export default function ListContainer({ mainTitle, price }: ListProps) {
  return (
    <section className="bg-[#FFFFFF] w-110 h-150 rounded-xl ">
      <h1 className="font-bold ">Latest Sales</h1>
      <article className="bg-[#FBFCFF] border border-[#D5D5D5] mx-4 rounded-xl  ">
        <div className="flex space-x-60">
          <div>
            <h1 className="font-bold" >Product A</h1>
            <p className="text-[#ADADAD] font-semibold" >Amount:3</p>
            <p className="text-[#ADADAD] font-semibold"> 24 Nov 2025 </p>
          </div>
          <div className="flex items-center" >
            <h1 className="font-bold">$8481</h1>
          </div>
        </div>
      </article>
    </section>
  );
}
