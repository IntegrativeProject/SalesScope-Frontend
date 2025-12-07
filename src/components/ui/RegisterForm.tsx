"use client"
import { useState } from "react";

type RegisterProps = {
  mainName?: string;
  buttonLabel?: string;
};

export default function RegisterForm({ mainName, buttonLabel }: RegisterProps) {
  const [name, setName] = useState("");
  const [stock, setStock] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const product = {
      name,
      description,
      price,
      stock,
    };

    try {
      const response = await fetch(
        "https://integrative-salescope.onrender.com/products/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );

      if (!response.ok) {
        throw new Error("Error al registrar producto");
      }

      alert("Producto creado correctamente");
    } catch (error) {
      console.log(error);
      alert("Error creando producto");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-5 bg-white rounded-xl flex flex-col gap-2 w-[400px] shadow-xl border border-gray-200"
    >
      <h2 className="text-center text-xl font-bold text-black">{mainName}</h2>

      <label className="font-semibold">Nombre</label>
      <input
        className="border-gray-300 border p-2 rounded text-black"
        placeholder="Cama"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label className="font-semibold ">Stock</label>
      <input
        className="border border-gray-300 p-2 rounded text-black bg-white"
        placeholder="100"
        type="number"
        value={stock}
        onChange={(e) => setStock(Number(e.target.value))}
      />

      <label className="font-semibold ">Precio</label>
      <input
        className="w-full border border-gray-300 rounded-lg p-2 bg-white text-black"
        placeholder="1000"
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />

      <label className="font-semibold ">Descripción</label>
      <input
        className="w-full border border-gray-300 rounded-lg p-2 bg-white text-black"
        placeholder="Cama de madera doble"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className="w-full bg-[#4880FF] hover:bg-blue-400 mt-5 text-white p-3 rounded-lg cursor-pointer font-bold">
        {buttonLabel}
      </button>
    </form>
  );
}
