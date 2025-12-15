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
      <section className=" bg-base-200 p-4  w-150 h-133 rounded-xl rounded-t-none  space-y-5 shadow-xl border   overflow-y-scroll ">
        {products?.map((item) => (
          <article
            key={item.product_id}
            className="p-4  min-h-24 border  rounded-xl  shadow-sm hover:shadow-md transition-all duration-200 flex items-center"
          >
            <div className="flex flex-col justify-center flex-1">
              <h2 className="font-semibold text-lg ">
                {item.name}
              </h2>

              <div className="flex text-sm space-x-2 ">
                <p className="capitalize">{item.category}</p>
                <p className="font-medium ">{`Stock: ${item.stock}`}</p>
              </div>
            </div>

            <div className="flex items-center  px-2 py-1 gap-2 rounded-lg">
              <p className="font-bold text-lg ">${item.price}</p>

              <button
                onClick={() => onEdit(item)}
                className="p-2 rounded-lg  cursor-pointer"
              >
                <img src="icons/edit.png" className="w-5" />
              </button>

              <button
                onClick={() => onDelete(item.product_id)}
                className="p-2 rounded-lg hover:bg-red-200 cursor-pointer"
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
