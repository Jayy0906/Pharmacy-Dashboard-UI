"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
);

export default function SalesChart() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          stepSize: 500,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const labels = [
    "Dec 7",
    "Dec 8",
    "Dec 9",
    "Dec 10",
    "Dec 11",
    "Dec 12",
    "Dec 13",
  ];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        data: [2400, 2900, 2200, 3300, 2900, 3400, 3100],
        borderColor: "#10B981",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        tension: 0.4,
        pointBackgroundColor: "#10B981",
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
        <h3 className="text-sm md:text-base font-semibold">
          Sales Overview (Last 7 Days)
        </h3>
        <select className="text-xs md:text-sm border border-gray-300 rounded-md px-2 py-1 md:px-3 md:py-1.5 bg-gray-100">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>This month</option>
        </select>
      </div>
      <div className="h-48 md:h-64">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
