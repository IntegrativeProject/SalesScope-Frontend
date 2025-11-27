import Card from "@/components/ui/Card";

export default function page() {
  return (
    <div>
      <h1 className="p-10 font-semibold text-4xl" >Dashboard</h1>
      <div className=" grid grid-cols-4 mt-8 p-3 ">
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
    </div>
  );
}
