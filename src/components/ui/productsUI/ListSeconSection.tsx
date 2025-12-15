"use client";

import { Product } from "@/types/ProductType";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Button from "../Button";

type Props = {
  product: Product | null;
  onSave: (product: Product) => void;
  onCancel: () => void;
};

export default function ListSeconSection({ product, onSave, onCancel }: Props) {
  const { register, handleSubmit, reset } = useForm<Product>();

  useEffect(() => {
    if (product) reset(product);
  }, [product, reset]);

  if (!product) {
    return (
      <div className="w-100 p-5 text-gray-500">Select a product to edit</div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSave)}
      className="bg-base-200 rounded-xl w-100 p-5 space-y-3 grid grid-col-1 "
    >
      <h2 className="font-bold text-lg">Edit Product</h2>

      <input {...register("name")} className="p-2 rounded bg-base-100 border border-bg-gray-200" />
      <input {...register("category")} className="p-2 rounded bg-base-100 border border-bg-gray-200" />
      <label htmlFor=""> precio </label>
      <input type="number" {...register("price", { valueAsNumber: true })} className=" p-2 rounded bg-base-100 border " />
      <label htmlFor=""> cantidad </label>

      <input type="number" {...register("stock", { valueAsNumber: true })}  className=" p-2 rounded bg-base-100 border " />

      <div className="flex h-12 justify-center space-x-3" >
        <Button className=" ">
          Save
        </Button>
        <Button
        size="sm"
          variant="danger"
          type="button"
          onClick={onCancel}
         
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
