"use client";

import { Product } from "@/types/ProductType";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

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
      className="rounded-xl w-100 p-5 space-y-3 border border-gray-200"
    >
      <h2 className="font-bold text-lg">Edit Product</h2>

      <input {...register("name")} className="input" />
      <input {...register("category")} className="input" />
      <input type="number" {...register("price", { valueAsNumber: true })} />
      <input type="number" {...register("stock", { valueAsNumber: true })} />

      <div className="flex gap-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600">
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-200 px-4 py-2 rounded cursor-pointer hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
