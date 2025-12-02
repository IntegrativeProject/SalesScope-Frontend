import React from "react";

type ListProps = {
  mainTitle?: string;
  price?: number;
};

export default function ListContainer({ mainTitle, price }: ListProps) {
  return (
    <section className="bg-white w-260 h-auto rounded-xl p-4 space-y-5 shadow-xl border border-gray-200">
      <h1 className="text-center text-xl font-bold text-black">Latest Sales</h1>

      <article className="bg-[#FBFCFF] border border-[#D5D5D5] rounded-xl p-2">
        <h2 className="font-bold text-base ">Product A</h2>

        <div className="flex space-x-40">
          <div className="flex items-center mt-auto flex-col-2 gap-3 text-sm text-[#ADADAD] font-medium  ">
            <p className="">Amount: 3</p>
            <p className="">24 Nov 2025</p>
          </div>

          <div className="flex items-center ml-150 ">
            <p className="font-bold text-lg">$8481</p>
          </div>
        </div>
      </article>
      <article className="bg-[#FBFCFF] border border-[#D5D5D5] rounded-xl p-2">
        <h2 className="font-bold text-base ">Product A</h2>

        <div className="flex space-x-40">
          <div className="flex items-center mt-auto flex-col-2 gap-3 text-sm text-[#ADADAD] font-medium  ">
            <p className="">Amount: 3</p>
            <p className="">24 Nov 2025</p>
          </div>

          <div className="flex items-center  ">
            <p className="font-bold text-lg ml-150">$8481</p>
          </div>
        </div>
      </article>
      <article className="bg-[#FBFCFF] border border-[#D5D5D5] rounded-xl p-2">
        <h2 className="font-bold text-base ">Product A</h2>

        <div className="flex space-x-40">
          <div className="flex items-center mt-auto flex-col-2 gap-3 text-sm text-[#ADADAD] font-medium  ">
            <p className="">Amount: 3</p>
            <p className="">24 Nov 2025</p>
          </div>

          <div className="flex items-center  ">
            <p className="font-bold text-lg ml-150">$8481</p>
          </div>
        </div>
      </article>
      <article className="bg-[#FBFCFF] border border-[#D5D5D5] rounded-xl p-2">
        <h2 className="font-bold text-base ">Product A</h2>

        <div className="flex space-x-40">
          <div className="flex items-center mt-auto flex-col-2 gap-3 text-sm text-[#ADADAD] font-medium  ">
            <p className="">Amount: 3</p>
            <p className="">24 Nov 2025</p>
          </div>

          <div className="flex items-center  ">
            <p className="font-bold text-lg ml-150">$8481</p>
          </div>
        </div>
      </article>
      <article className="bg-[#FBFCFF] border border-[#D5D5D5] rounded-xl p-2">
        <h2 className="font-bold text-base ">Product A</h2>

        <div className="flex space-x-40">
          <div className="flex items-center mt-auto flex-col-2 gap-3 text-sm text-[#ADADAD] font-medium  ">
            <p className="">Amount: 3</p>
            <p className="">24 Nov 2025</p>
          </div>

          <div className="flex items-center  ">
            <p className="font-bold text-lg ml-150">$8481</p>
          </div>
        </div>
      </article>
      <article className="bg-[#FBFCFF] border border-[#D5D5D5] rounded-xl p-2">
        <h2 className="font-bold text-base ">Product A</h2>

        <div className="flex space-x-40">
          <div className="flex items-center mt-auto flex-col-2 gap-3 text-sm text-[#ADADAD] font-medium  ">
            <p className="">Amount: 3</p>
            <p className="">24 Nov 2025</p>
          </div>

          <div className="flex items-center  ">
            <p className="font-bold text-lg ml-150 ">$8481</p>
          </div>
        </div>
      </article>
     
      
    </section>
  );
}
