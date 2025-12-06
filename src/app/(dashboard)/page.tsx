import BarChart from "@/components/charts/BarChart";
import Card from "@/components/ui/Card";
import LineChart from "@/components/charts/LineChart";

export default function page() {
  return (
    <div>
      <h1 className="p-1 ml-9 font-bold  text-4xl">Dashboard</h1>
      <div className=" ml-11 grid grid-cols-4 gap-x-3 bg-[#F5F6FA] mt-5 ">
        <Card
          w="w-80"
          h="h-50"
          mainText="Total Sales"
          worth={36.2}
          percentage="12.5%"
          endText=" vs previous week"
          iconRoute="/icons/ventas.png"
          simbol={true}
        />
        <Card
          w="w-80"
          h="h-50"
          mainText="Daily Avarage"
          worth={5.171}
          percentage="18.3%"
          endText="vs previous week"
          iconRoute="/icons/promedio.png"
          simbol={true}
        />
        <Card
          w="w-80"
          h="h-50"
          mainText="Products Sold"
          worth={362}
          percentage="15.2%"
          endText="vs previous week"
          iconRoute="/icons/agregar-producto.png"
        />
        <Card
          w="w-80"
          h="h-50"
          mainText="Transaction"
          worth={89}
          percentage="9.8%"
          endText="vs previous week"
          iconRoute="/icons/transaccion2.png"
        />
      </div>
      <div className="grid grid-cols-2 mt-2 gap-0 p-15">
        <article className="bg-white w-160 rounded-xl shadow-xl p-6">
          <LineChart h="350px" w="540px"/>
        </article>
        <article className="bg-white rounded-xl shadow-xl p-4">
          <BarChart />
        </article>
      </div>
    </div>
  );
}
