"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function BarChart() {
  const data = {
    labels: ["Monday", "Tuesday", "Wednesday" , "Thursday" ,"Friday","Saturday","Sunday"],
    datasets: [
      {
        label: "Ventas",
        data: [150, 230, 180,200,190,120,185],
        backgroundColor: "#4880FF",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
    },
    scales: {
      y: {
        min: 0,
        max: 300,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return (
    <div style={{ height: "auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
}
