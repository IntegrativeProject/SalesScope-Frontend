import Card from "@/components/ui/Card";

export default function page() {
  return (
    <div>
      <h1 className="p-1 ml-9 font-semibold  text-4xl">Dashboard</h1>
      <div className="flex gap-30 mt-5   mx-10   rounded-lg">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
