import Card from "@/components/ui/Card";
import ListContainer from "@/components/ui/ListContainer";
import RegisterForm from "@/components/ui/RegisterForm";
import { Product, ProductsResponse } from "@/types/ProductType";
import React from "react";

export default async function page() {
  const response = await fetch(
    "https://integrative-salescope.onrender.com/products/?page_size=9999"
  );
  const data:ProductsResponse = await response.json();
  const products = data.data;
  const totalProducts = products.length;

    const totalInventoryValue = products.reduce(
    (acc: number, product: Product) => acc + product.price * product.stock,
    0
  );
    const formatted = totalInventoryValue.toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
});
  return (
    <div>
      <div className="flex justify-center  space-x-10 p-5 mt-1 b rounded-2xl">
        <div className="">
          <h1 className="p-1 text-center font-bold  text-4xl   w-95  mb-8 ">
            Product Management
          </h1>
          <RegisterForm mainName="New Product" firstField="Name" secondField="Price" thirdField="Initial stock" fourthField="Category" buttonLabel="Add product"/>
        </div>
        <div>
          <ListContainer products={products} mainTitle="Inventory" />
        </div>
      </div>
      <div className="flex justify-center space-x-30 ">
        <Card
          w="w-80"
          h="h-50"
          worth={totalProducts}
          mainText="Total Products"
          iconRoute="/icons/agregar-producto.png"
        />
        <Card
          w="w-80"
          h="h-50"
          worth={formatted}
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
