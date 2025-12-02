"use client"
import { useState } from "react"
import { toast } from "react-hot-toast"

interface RegisterFormProps {
  onSubmit: (data: {
    name: string;
    quantity: number;
    unitPrice: number;
    date: string;
  }) => void;
}

export default function RegisterForm({ onSubmit }: RegisterFormProps) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitPrice, setPrice] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !quantity || !unitPrice) {
      toast.error("All fields are required.");
      return;
    }
        onSubmit({
      name,
      quantity: Number(quantity),
      unitPrice: Number(unitPrice),
      date: new Date().toISOString(),
    })

    toast.success("Sale registered successfully.");

    setName("");
    setQuantity("")
    setPrice("")
  }

  return (
      <form
      onSubmit={handleSubmit}
      className="p-5 bg-white shadow rounded-xl flex flex-col gap-5 w-[400px]"
    >
      <h2 className="text-center text-xl font-bold text-black">New Sale</h2>

      <input
        className="border-gray-300 border p-2 rounded text-black"
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="border border-gray-300 p-2 rounded text-black bg-white"
        placeholder="Quantity"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <input
        className="w-full border border-gray-300 rounded-lg p-2 bg-white text-black"
        placeholder="Unit price"
        type="number"
        value={unitPrice}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button className="w-full bg-blue-500 hover:bg-blue-400 text-white p-3 rounded-lg cursor-pointer">
        Register sale
      </button>
    </form>
  )
}

