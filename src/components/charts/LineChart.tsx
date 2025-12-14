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

type LineChartProps = {
  labels: string[];
  data: number[];
  w?: string;
  h?: string;
};

export default function LineChart({ labels, data }: LineChartProps) {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Ventas",
        data,
        fill: true,
        backgroundColor: "rgba(72,128,255,0.15)",
        borderColor: "#4880FF",
        tension: 0.4,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: "#eee" },
      },
      x: {
        grid: { display: false },
      },
    },
  };

  return <Line data={chartData} options={options} />;
}
