"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);


type ChartProps={
  w:string
  h:string
}
export default function LineChart({w,h}:ChartProps) {
  const data = {
    labels: [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
      "Week 8",
      "Week 9",
      "Week 10",
      "Week 11",
      "Week 12",
      


    ],
    datasets: [
      {
        label: "Weekly Sales",
        data: [5, 12, 9, 20, 64.37, 18, 25, 30, 15, 28, 35, 40],
        fill: true,
        backgroundColor: "rgba(72, 128, 255, 0.2)", // degradado suave
        borderColor: "#4880FF",
        pointBackgroundColor: "#4880FF",
        tension: 0.3, // suaviza la curva
      },
    ],
  };

  const options = {
    responsive: false,
    plugins: {
      legend: { position: "top" as const },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => context.parsed.y.toFixed(2),
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: (value) => value + "%",
        },
        grid: {
          drawBorder: false,
          color: "#e0e0e0",
        },
      },
      x: {
        grid: {
          drawBorder: false,
          color: "#f0f0f0",
        },
      },
    },
  };

  return (
    <div className="p-2  ">
      <Line data={data} options={options} width={w} height={h}/>
    </div>
  );
}
