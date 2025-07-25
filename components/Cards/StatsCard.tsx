"use client"; // Marks this component as a Client Component in Next.js

import { useState } from "react"; // Imports the useState hook for managing component state

/**
 * StatsCard component displays a statistical metric with an icon, value, label, and optional trend.
 * It also supports a toggle switch for certain metrics.
 *
 * @param {object} props - The component props.
 * @param {string} props.icon - The name of the icon to display (e.g., 'box', 'calculator').
 * @param {'blue' | 'green' | 'orange' | 'red'} props.color - The primary color theme for the card.
 * @param {string} props.value - The main value to display (e.g., "1,234", "$500").
 * @param {string} props.label - A descriptive label for the metric.
 * @param {string} [props.trend] - Optional: A string representing a trend (e.g., "+5%").
 * @param {boolean} [props.trendPositive=true] - Optional: Indicates if the trend is positive (green) or negative (red).
 * @param {boolean} [props.isToggle=false] - Optional: If true, renders a toggle switch instead of a trend.
 */
export default function StatsCard({
  icon,
  color,
  value,
  label,
  trend,
  trendPositive = true,
  isToggle = false,
}: {
  icon: string;
  color: "blue" | "green" | "orange" | "red";
  value: string;
  label: string;
  trend?: string;
  trendPositive?: boolean;
  isToggle?: boolean;
}) {
  // State for the toggle switch, defaulting to 'true' (ON)
  const [isChecked, setIsChecked] = useState(true);

  /**
   * Defines Tailwind CSS classes for different color themes.
   * Helps apply consistent background and text colors based on the 'color' prop.
   */
  const colorClasses = {
    blue: { bg: "bg-blue-100", text: "text-blue-600" },
    green: { bg: "bg-green-100", text: "text-green-600" },
    orange: { bg: "bg-orange-100", text: "text-orange-600" },
    red: { bg: "bg-red-100", text: "text-red-600" },
  };

  /**
   * Defines Tailwind CSS classes for positive and negative trend colors.
   */
  const trendColors = {
    positive: "text-green-600",
    negative: "text-red-600",
  };

  return (
    // Main container for the stats card, with styling for background, rounding, padding, and shadow.
    <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm h-full">
      {/* Top section of the card: icon and trend/toggle */}
      <div className="flex justify-between items-start">
        {/* Icon container with dynamic background and text colors based on 'color' prop */}
        <div
          className={`${colorClasses[color].bg} p-2 sm:p-3 rounded-lg flex items-center justify-center`}
        >
          {/* SVG Icon: Renders the icon dynamically based on the 'icon' prop */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${colorClasses[color].text}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={getIconPath(icon)} // Calls helper function to get SVG path data for the icon
            />
          </svg>
        </div>
        {/* Conditional rendering for Trend or Toggle */}
        {trend && !isToggle && (
          // Displays trend if 'trend' prop is provided and 'isToggle' is false
          <span
            className={`${
              trendPositive ? trendColors.positive : trendColors.negative
            } text-xs sm:text-sm font-medium`}
          >
            {trend}
          </span>
        )}
        {isToggle && (
          // Displays a toggle switch if 'isToggle' is true
          <label className="relative inline-flex items-center cursor-pointer w-11 h-6">
            <input
              type="checkbox"
              className="sr-only peer" // Hides the checkbox visually but keeps it accessible
              checked={isChecked} // Controls the checked state of the toggle
              onChange={() => setIsChecked(!isChecked)} // Toggles the state on change
            />
            {/* Styled div for the toggle track */}
            <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-[#16a085] peer-focus:ring-green-300 transition-colors"></div>
            {/* Styled div for the toggle thumb */}
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-5"></div>
          </label>
        )}
      </div>
      {/* Bottom section of the card: value and label */}
      <div className="mt-2 sm:mt-3">
        {/* Displays the main value or "ON/OFF" if it's a toggle */}
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
          {isToggle ? (isChecked ? "ON" : "OFF") : value}
        </p>
        {/* Displays the descriptive label */}
        <p className="text-xs sm:text-sm text-gray-600 mt-1">{label}</p>
      </div>
    </div>
  );
}

/**
 * Helper function to retrieve SVG path data for various icons.
 * This function centralizes icon definitions to keep the main component cleaner.
 *
 * @param {string} icon - The name of the icon.
 * @returns {string} The SVG path data string.
 */
function getIconPath(icon: string) {
  const icons: Record<string, string> = {
    box: "M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zm0 2v3H4V9h16zM4 19v-6h16v6H4z", // Box icon path
    "file-prescription":
      "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2zM10 9h4m-4 3h4m-4 3h4", // File prescription icon path
    calculator:
      "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z", // Calculator icon path
    "exclamation-triangle":
      "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z", // Exclamation triangle icon path
  };
  return icons[icon] || icons["box"]; // Returns the path for the requested icon or a default 'box' icon if not found
}
