import ProductsClient from "@/components/ui/ProductsClient";
import RegisterForm from "@/components/ui/RegisterForm";
import Card from "@/components/ui/Card";
import { Product, ProductsResponse } from "@/types/ProductType";
import { getProducts } from "@/services/products.services";

export default async function Page() {
   const products: Product[] = await getProducts();
  

 
 

  const totalProducts = products.length;

  const totalInventoryValue = products.reduce(
    (acc, product) => acc + product.price * product.stock,
    0
  );

  const formatted = totalInventoryValue.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div>
      <div className="flex justify-center space-x-10 p-5">
        <div>
          <h1 className="p-1 ml-9 font-bold text-4xl">Product Management</h1>
          <h2 className="p-1 ml-9 font-semibold text-gray-700 text-xl">
            Manage your product inventory
          </h2>

          <RegisterForm
            mainName="New Product"
            firstField="Name"
            secondField="Price"
            thirdField="Initial stock"
            fourthField="Category"
            buttonLabel="Add product"
          />
        </div>

        <ProductsClient initialProducts={products} />
      </div>

      <div className="flex justify-center space-x-30">
        <Card
          w="w-80"
          h="h-50"
          worth={totalProducts}
          mainText="Total Products"
          iconRoute="/icons/agregar-producto.png"
        />

        <Card
          w="w-80"
          h="h-50"
          worth={formatted}
          mainText="Total Inventory Value"
          iconRoute="/icons/inventario.png"
        />

        <Card
          w="w-80"
          h="h-50"
          mainText="Low Stock"
          iconRoute="/icons/nohaystock.png"
        />
      </div>
    </div>
  );
}
