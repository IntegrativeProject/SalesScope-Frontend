"use client";
import { Product } from "@/types/ProductType";



type ListProps = {
  
  products?: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
};

export default function ListContainer({

  products,
  onDelete,
  onEdit,
}: ListProps) {
  return (
    <div>
     

      <section className=" p-4 bg-white w-150 h-133 rounded-xl rounded-t-none  space-y-5 shadow-xl border border-gray-200  overflow-y-scroll ">
        {products?.map((item) => (
          <article
            key={item.product_id}
            className="p-4 bg-white min-h-24 border border-gray-200 rounded-xl  shadow-sm hover:shadow-md transition-all duration-200 flex items-center"
          >
            <div className="flex flex-col justify-center flex-1">
              <h2 className="font-semibold text-lg text-gray-800">
                {item.name}
              </h2>

              <div className="flex text-sm space-x-2 text-gray-500">
                <p className="capitalize">{item.category}</p>
                <p className="font-medium text-gray-700">{`Stock: ${item.stock}`}</p>
              </div>
            </div>

            <div className="flex items-center  px-2 py-1 gap-2 rounded-lg">
              <p className="font-bold text-lg text-black">${item.price}</p>

              <button
                onClick={() => onEdit(item)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <img src="icons/edit.png" className="w-5" />
              </button>

              <button
                onClick={() => onDelete(item.product_id)}
                className="p-2 rounded-lg hover:bg-red-100"
              >
                <img src="icons/delete.png" className="w-5" />
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
