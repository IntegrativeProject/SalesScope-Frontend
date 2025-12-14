
import ListSales from "@/components/ui/salesUI/ListSales";
import RegisterSaleForm from "@/components/ui/salesUI/RegisterSaleForm";
import { getProducts } from "@/services/products.services";
import { Product } from "@/types/ProductType";
import React from "react";

export default async function page() {
  const products: Product[] = await getProducts();
  const sales:Ordes
  return (
    <div className="space-x-1">
      <h1 className="p-1 ml-9 font-bold  text-4xl">Register Sale</h1>
      <h2 className="p-1 ml-9 font-semibold text-gray-700 text-xl">
        Add a new sales transaction
      </h2>
      <div className="grid grid-cols-2 p-2 mt-5  rounded-2xl">
        <RegisterSaleForm initialProducts={products} />
        <ListSales/>
      </div>
    </div>
  );
}
