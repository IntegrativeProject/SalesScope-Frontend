"use client";

import { createProduct } from "@/services/products.services";
import { Product } from "@/types/ProductType";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "../Button";

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
      toast.error("Error creating product", { icon:"⚠️", duration:4000})
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-5 bg-base-200 rounded-xl h-auto flex flex-col gap-2 w-[400px] shadow-xl "
    >
      <h2 className="text-center text-xl font-bold ">{mainName}</h2>

      <label className="font-semibold">{firstField}</label>
      <input
        {...register("name", {
          required: "The name is required",
          minLength: { value: 3, message: "Must be at least 3 characters" },
        })}
        className=" p-2 rounded"
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
        className="  p-2 rounded"
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
        className=" p-2 rounded"
      />
      {errors.stock && (
        <span className="text-red-500 text-sm">{errors.stock.message}</span>
      )}

      <label className="font-semibold">{fourthField}</label>
      <input
        {...register("category", {
          required: "The category is required",
        })}
        className=" p-2 rounded"
      />
      
      {errors.category && (
        <span className="text-red-500 text-sm">{errors.category.message}</span>
      )}

      <Button
        variant="primary"
        disabled={isSubmitting}
        className="w-full  mt-5  p-3 rounded-lg font-bold disabled:opacity-50 cursor-pointer"
      >
        {isSubmitting ? "Saving..." : buttonLabel}
      </Button>
    </form>
  );
}
