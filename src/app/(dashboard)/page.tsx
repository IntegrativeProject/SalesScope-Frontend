"use client";

import BarChart from "@/components/charts/BarChart";
import Card from "@/components/ui/Card";
import LineChart from "@/components/charts/LineChart";
import { useEffect, useState } from "react";
import {
  getDailyAverage,
  getProductsSold,
  getTopProducts,
  getTotalSales,
  getTransactions,
  getWeeklySales,
} from "@/services/Analitics.services";

export default function Page() {
const [lineLabels, setLineLabels] = useState<string[]>([]);
const [lineData, setLineData] = useState<number[]>([]);

const [barLabels, setBarLabels] = useState<string[]>([]);
const [barData, setBarData] = useState<number[]>([]);


  const [totalSales, setTotalSales] = useState(0);
  const [dailyAvg, setDailyAvg] = useState(0);
  const [productsSold, setProductsSold] = useState(0);
  const [transactions, setTransactions] = useState(0);

  useEffect(() => {
    Promise.all([
      getTotalSales(),
      getDailyAverage(),
      getProductsSold(),
      getTransactions(),
    ]).then(([sales, avg, products, trans]) => {
      setTotalSales(sales);
      setDailyAvg(avg);
      setProductsSold(products);
      setTransactions(trans);
    });
  }, []);
 useEffect(() => {
  async function loadCharts() {
    /* LINE CHART (Weekly revenue) */
    const weekly = await getWeeklySales();

    setLineLabels(
      weekly.map((w: any) =>
        new Date(w.week).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })
      )
    );

    setLineData(
      weekly.map((w: any) => w.revenue)
    );

    /* BAR CHART (Top products) */
    const products = await getTopProducts(5);

    setBarLabels(
      products.map((p: any) => p.name)
    );

    setBarData(
      products.map((p: any) => p.total_sold)
    );
  }

  loadCharts();
}, []);


  return (
    <div>
      <h1 className="p-1 ml-9 font-bold  text-4xl">Dashboard</h1>
      <h2 className="p-1 ml-9 font-semibold text-gray-700 text-xl">
        Summary of your sales and key metrics
      </h2>

      <div className=" ml-11 grid grid-cols-4 gap-x-3 bg-[#F5F6FA] mt-5 ">
        <Card
          w="w-80"
          h="h-50"
          mainText="Total Sales"
          worth={totalSales}
          percentage="12.5%"
          endText=" vs previous week"
          iconRoute="/icons/sales.png"
          simbol={true}
        />
        <Card
          w="w-80"
          h="h-50"
          mainText="Daily Avarage"
          worth={dailyAvg}
          percentage="18.3%"
          endText="vs previous week"
          iconRoute="/icons/promedio.png"
          simbol={true}
        />
        <Card
          w="w-80"
          h="h-50"
          mainText="Products Sold"
          worth={productsSold}
          percentage="15.2%"
          endText="vs previous week"
          iconRoute="/icons/box.png"
        />
        <Card
          w="w-80"
          h="h-50"
          mainText="Transaction"
          worth={transactions}
          percentage="9.8%"
          endText="vs previous week"
          iconRoute="/icons/money.png"
        />
      </div>
      <div className="grid grid-cols-2 mt-2 gap-0 p-15">
        <article className="bg-white w-160 rounded-xl shadow-xl p-6">
         <LineChart labels={lineLabels} data={lineData} />
        </article>
        <article className="bg-white rounded-xl shadow-xl p-4">
         <BarChart labels={barLabels} data={barData} />
        </article>
      </div>
    </div>
  );
}
