"use client";

import { useEffect, useState } from "react";
import LineChart from "../charts/LineChart";
import { getWeeklySalesChart } from "@/services/Analitics.services";

export default function PredictionCard() {
  const [labels, setLabels] = useState<string[]>([]);
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    getWeeklySalesChart().then((res) => {
      setLabels(res.labels);
      setData(res.data);
    });
  }, []);

  return (
    <section className="bg-white w-320 rounded-xl p-6 shadow-sm border border-gray-200 flex flex-col gap-4">
      <h2 className="text-xl font-bold text-gray-800">
        Historical Sales & Prediction
      </h2>

      <LineChart labels={labels} data={data} h="350px" w="1200px" />

      <article className="p-3 bg-blue-100 rounded-xl shadow border border-blue-300">
        <h3 className="text-lg font-semibold">
          Prediction for the coming weeks:
        </h3>
        <p className="text-sm text-gray-700">
          The last weeks show a strong growth trend. It is recommended to
          increase stock levels of best-selling products.
        </p>
      </article>
    </section>
  );
}
