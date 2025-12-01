import Card from "@/components/ui/Card";


export default function page() {
  return (
    <div>
      <h1 className="p-1 ml-9 font-bold  text-4xl">Dashboard</h1>
      <div className=" ml-11 grid grid-cols-4 gap-x-3 bg-[#F5F6FA] mt-5 ">
          <Card w={78} h={50} mainText="Total Sales" worth={36.200} percentage="12.5%" endText=" vs previous week" iconRoute="/icons/ventas.png" simbol={true}/>
          <Card w={78} h={50} mainText="Daily Avarage" worth={5.171} percentage="18.3%" endText="vs previous week" iconRoute="/icons/promedio.png" simbol={true}/>
          <Card w={78} h={50} mainText="Products Sold" worth={362} percentage="15.2%" endText="vs previous week" iconRoute="/icons/agregar-producto.png"/>
          <Card w={78} h={50} mainText="Transaction" worth={89} percentage="9.8%" endText="vs previous week" iconRoute="/icons/transaccion2.png"/>
      </div>
    </div>
  );
}
