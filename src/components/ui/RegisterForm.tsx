"use client";

import { useForm } from "react-hook-form";
import { Product } from "@/types/ProductType";

type FormData = {
  name: string;
  price: number;
  stock: number;
  category: string;
};

type RegisterProps = {
  mainName?: string;
  firstField?: string;
  secondField?: string;
  thirdField?: string;
  fourthField?: string;
  buttonLabel?: string;
};

export default function RegisterForm({
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
  } = useForm<FormData>({
    mode: "onBlur",
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(
        "https://integrative-salescope.onrender.com/products/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) throw new Error();

      alert("Producto creado correctamente");
      reset();
    } catch {
      alert("Error creando producto");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-5 bg-white rounded-xl flex flex-col gap-2 w-[400px] shadow-xl border border-gray-200"
    >
      <h2 className="text-center text-xl font-bold text-black">{mainName}</h2>
      <label className="font-semibold">{firstField}</label>
      <input
        {...register("name", {
          required: "El nombre es obligatorio",
          minLength: {
            value: 3,
            message: "Debe tener al menos 3 caracteres",
          },
        })}
        className="border border-gray-300 p-2 rounded"
        placeholder="Cama"
      />
      {errors.name && (
        <span className="text-red-500 text-sm">{errors.name.message}</span>
      )}

    
      <label className="font-semibold">{secondField}</label>
      <input
        type="number"
        {...register("price", {
          required: "El precio es obligatorio",
          valueAsNumber: true,
          min: {
            value: 1,
            message: "Debe ser mayor a 0",
          },
        })}
        className="border border-gray-300 p-2 rounded"
        placeholder="100"
      />
      {errors.price && (
        <span className="text-red-500 text-sm">{errors.price.message}</span>
      )}

      <label className="font-semibold">{thirdField}</label>
      <input
        type="number"
        {...register("stock", {
          required: "El stock es obligatorio",
          valueAsNumber: true,
          min: {
            value: 0,
            message: "No puede ser negativo",
          },
        })}
        className="border border-gray-300 p-2 rounded"
        placeholder="1000"
      />
      {errors.stock && (
        <span className="text-red-500 text-sm">{errors.stock.message}</span>
      )}

     
      <label className="font-semibold">{fourthField}</label>
      <input
        {...register("category", {
          required: "La categoría es obligatoria",
        })}
        className="border border-gray-300 p-2 rounded"
        placeholder="Hogar"
      />
      {errors.category && (
        <span className="text-red-500 text-sm">
          {errors.category.message}
        </span>
      )}

      <button
        disabled={isSubmitting}
        className="w-full bg-[#4880FF] hover:bg-blue-400 mt-5 text-white p-3 rounded-lg font-bold disabled:opacity-50 cursor-pointer"
      >
        {isSubmitting ? "Guardando..." : buttonLabel}
      </button>
    </form>
  );
}
