import Card from "@/components/ui/Card";
import ListContainer from "@/components/ui/ListContainer";
import RegisterForm from "@/components/ui/RegisterForm";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="flex justify-center  space-x-10 p-5 mt-1 b rounded-2xl">
        <div className="">
          <h1 className="p-1 text-center font-bold  text-4xl   w-95  mb-8 ">
            Product Management
          </h1>
          <RegisterForm />
        </div>
        <div>
          <ListContainer />
        </div>
      </div>
      <div className="flex justify-center space-x-30 ">
        <Card
          w="w-80"
          h="h-50"
          mainText="Total Products"
          iconRoute="/icons/agregar-producto.png"
        />
        <Card
          w="w-80"
          h="h-50"
          mainText="Total Inventory Value"
          iconRoute="/icons/inventario.png"
        />
        <Card
          w="w-80"
          h="h-50"
          mainText="Low Stock"
          iconRoute="/icons/nohaystock.png"
        />
      </div>
    </div>
  );
}
