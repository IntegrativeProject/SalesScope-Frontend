import ListContainer from "@/components/ui/ListContainer";
import RegisterSaleForm from "@/components/ui/RegisterSaleForm";
import React from "react";

export default function page() {
  return (
    <div> 
       <h1 className="p-1 ml-9 font-bold  text-4xl">Register Sale</h1>
      <h2 className="p-1 ml-9 font-semibold text-gray-700 text-xl">Add a new sales transaction</h2>

    <div className="flex justify-center p-2 mt-5 b rounded-2xl" >
      <div className="w-150 ">
        <RegisterSaleForm />
      </div>
      <div >
        <ListContainer />
      </div>
    </div>
    </div>
  );
}
