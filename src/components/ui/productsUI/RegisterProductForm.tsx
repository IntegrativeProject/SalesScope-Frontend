"use client";

import { createProduct } from "@/services/products.services";
import { Product } from "@/types/ProductType";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  price: number;
  stock: number;
  category: string;
};

type RegisterProps = {
  onCreated?: (product: Product) => void;
  mainName?: string;
  firstField?: string;
  secondField?: string;
  thirdField?: string;
  fourthField?: string;
  buttonLabel?: string;
};

export default function RegisterForm({
  onCreated,
  mainName,
  firstField,
  secondField,
  thirdField,
  fourthField,
  buttonLabel,
}: RegisterProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ mode: "onBlur" });

  const onSubmit = async (data: FormData) => {
    try {
      const created = await createProduct(data);

      onCreated?.(created.data ?? created);

      reset();
    } catch (error) {
      console.error(error);
      alert("Error creating product");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-5 bg-white rounded-xl h-auto flex flex-col gap-2 w-[400px] shadow-xl border border-gray-200"
    >
      <h2 className="text-center text-xl font-bold text-black">{mainName}</h2>

      <label className="font-semibold">{firstField}</label>
      <input
        {...register("name", {
          required: "The name is required",
          minLength: { value: 3, message: "Must be at least 3 characters" },
        })}
        className="border border-gray-300 p-2 rounded"
      />
      {errors.name && (
        <span className="text-red-500 text-sm">{errors.name.message}</span>
      )}

      <label className="font-semibold">{secondField}</label>
      <input
        type="number"
        {...register("price", {
          required: "The price is required",
          valueAsNumber: true,
          min: { value: 1, message: "Must be greater than 0" },
        })}
        className="border border-gray-300 p-2 rounded"
      />
      {errors.price && (
        <span className="text-red-500 text-sm">{errors.price.message}</span>
      )}

      <label className="font-semibold">{thirdField}</label>
      <input
        type="number"
        {...register("stock", {
          required: "Stock is required",
          valueAsNumber: true,
          min: { value: 0, message: "It can't be negative" },
        })}
        className="border border-gray-300 p-2 rounded"
      />
      {errors.stock && (
        <span className="text-red-500 text-sm">{errors.stock.message}</span>
      )}

      <label className="font-semibold">{fourthField}</label>
      <input
        {...register("category", {
          required: "The category is required",
        })}
        className="border border-gray-300 p-2 rounded"
      />
      {errors.category && (
        <span className="text-red-500 text-sm">{errors.category.message}</span>
      )}

      <button
        disabled={isSubmitting}
        className="w-full bg-[#4880FF] hover:bg-blue-400 mt-5 text-white p-3 rounded-lg font-bold disabled:opacity-50 cursor-pointer"
      >
        {isSubmitting ? "Saving..." : buttonLabel}
      </button>
    </form>
  );
}
