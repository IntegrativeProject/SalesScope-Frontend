import Card from "@/components/ui/Card";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="flex justify-center space-x-30 ">
        <Card w={80} h={50} mainText="Total Products" iconRoute="/icons/agregar-producto.png"/>
        <Card w={80} h={50} mainText="Total Inventory Value" iconRoute="/icons/inventario.png"/>
        <Card w={80} h={50} mainText="Low Stock" iconRoute="/icons/nohaystock.png"/>
      </div>
    </div>
  );
}
