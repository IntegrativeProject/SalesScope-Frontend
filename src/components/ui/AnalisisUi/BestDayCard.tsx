"use client";

import { useEffect, useState } from "react";

import { getSalesByWeekday } from "@/services/Analitics.services";
import WeekdayBarChart from "../../charts/WeekdayBarChart";

type Props = {
  average: number;
  day: string;
};

export default function BestDayCard({ average, day }: Props) {
  const [labels, setLabels] = useState<string[]>([]);
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    getSalesByWeekday().then((res) => {
      console.log("WEEKDAY DATA:", res);
      setLabels(res.labels);
      setData(res.data);
    });
  }, []);
  return (
    <section className=" bg-base-200   w-155 h-130  rounded-xl p-6 shadow-xl  flex flex-col ">
      <h1 className="text-center text-xl font-bold ">
        Sales by Day of the Week
      </h1>
      <article className=" mt-5 h-[300px] ">
        <WeekdayBarChart data={data} labels={labels} />
      </article>
      <article className="p-4 mt-10  rounded-xl shadow border border-green-400 ">
        <h2 className="text-lg font-semibold">
          Best Day: <strong className="text-green-400">{day}</strong>
        </h2>
        <p className="text-sm ">Average sales of ${average}</p>
      </article>
    </section>
  );
}
