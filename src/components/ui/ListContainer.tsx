import React from "react";

type ListProps = {
  mainTitle?: string;
  price?: number;
};

export default function ListContainer({ mainTitle, price }: ListProps) {
  return (
    <section className="bg-white w-140 h-150 rounded-xl p-4 shadow">
      <h1 className="font-bold text-lg mb-4">Latest Sales</h1>

      <article className="bg-[#FBFCFF] border border-[#D5D5D5] rounded-xl p-2">
        <h2 className="font-bold text-base ">Product A</h2>

        <div className="flex space-x-40">
          <div className="flex items-center mt-auto flex-col-2 gap-3 text-sm text-[#ADADAD] font-medium  ">
            <p className="">Amount: 3</p>
            <p className="">24 Nov 2025</p>
          </div>

          <div className="flex items-center  ">
            <p className="font-bold text-lg">$8481</p>
          </div>
        </div>
      </article>
    </section>
  );
}
