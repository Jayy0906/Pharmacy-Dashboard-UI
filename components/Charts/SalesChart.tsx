"use client"; // Marks this component as a Client Component in Next.js

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
import { Line } from "react-chartjs-2"; // Imports the Line chart component from react-chartjs-2

// Registers necessary Chart.js components. This is crucial for tree-shaking
// and ensuring only the required components are bundled.
ChartJS.register(
  CategoryScale, // For X-axis categories (e.g., dates)
  LinearScale, // For Y-axis numerical values
  PointElement, // For data points on the line
  LineElement, // For drawing the line itself
  Title, // For chart title
  Tooltip, // For interactive tooltips on hover
  Filler, // For filling the area under the line
);

/**
 * SalesChart component displays a line chart showing sales overview for the last 7 days.
 * It uses Chart.js and react-chartjs-2 for rendering the chart.
 */
export default function SalesChart() {
  /**
   * Configuration options for the Chart.js line chart.
   * This object defines responsiveness, plugins, and axis scales.
   */
  const options = {
    responsive: true, // Chart resizes automatically with container
    maintainAspectRatio: false, // Allows chart to take up full available height/width
    plugins: {
      legend: {
        display: false, // Hides the legend as there's only one dataset
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Y-axis starts from zero
        grid: {
          drawBorder: false, // Hides the Y-axis border
          color: "rgba(0, 0, 0, 0.05)", // Light grey color for horizontal grid lines
        },
        ticks: {
          stepSize: 500, // Y-axis ticks increment by 500
        },
      },
      x: {
        grid: {
          display: false, // Hides vertical grid lines for the X-axis
        },
      },
    },
  };

  // Labels for the X-axis (dates for the last 7 days)
  const labels = [
    "Dec 7",
    "Dec 8",
    "Dec 9",
    "Dec 10",
    "Dec 11",
    "Dec 12",
    "Dec 13",
  ];

  /**
   * Data for the Chart.js line chart.
   * Includes labels for the X-axis and a single dataset for sales figures.
   */
  const data = {
    labels, // Uses the labels defined above
    datasets: [
      {
        fill: true, // Fills the area under the line
        data: [2400, 2900, 2200, 3300, 2900, 3400, 3100], // Sales data points
        borderColor: "#10B981", // Line color (teal green)
        backgroundColor: "rgba(16, 185, 129, 0.1)", // Filled area color (light teal green)
        tension: 0.4, // Smoothness of the line (0 = sharp corners, 1 = very curved)
        pointBackgroundColor: "#10B981", // Color of the data points
        pointRadius: 4, // Radius of the data points
        pointHoverRadius: 6, // Radius of the data points on hover
        borderWidth: 2, // Thickness of the line
      },
    ],
  };

  return (
    // Main container for the sales chart, with styling for background, rounding, padding, and shadow.
    <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
      {/* Chart Header: Title and Time Period Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
        {/* Chart Title */}
        <h3 className="text-sm md:text-base font-semibold">
          Sales Overview (Last 7 Days)
        </h3>
        {/* Time Period Selector */}
        <select className="text-xs md:text-sm border border-gray-300 rounded-md px-2 py-1 md:px-3 md:py-1.5 bg-gray-100">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>This month</option>
        </select>
      </div>
      {/* Chart Area */}
      <div className="h-48 md:h-64">
        {/* Renders the Line chart with defined options and data */}
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
