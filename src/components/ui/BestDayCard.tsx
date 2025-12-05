import BarChart from "../BarChart";

type Props = {
  average: number;
  day: string;
};

export default function BestDayCard({ average, day }: Props) {
  return (
    <section className="bg-white   w-155 h-auto  rounded-xl p-6 shadow-xl border border-gray-200 flex flex-col justify-end">
      <article className="">
      <BarChart />
      </article>
      <article className="p-4 gap-y-20  bg-green-100 rounded-xl shadow border border-green-400">
        
        <h2 className="text-lg font-semibold">
          Best Day: <strong className="text-green-400">{day}</strong>
        </h2>
        <p className="text-sm text-gray-800">Average sales of ${average}</p>
      </article>
    </section>
  );
}
