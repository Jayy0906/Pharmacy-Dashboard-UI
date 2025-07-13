"use client";

import { useState } from "react";

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
  const [isChecked, setIsChecked] = useState(true);

  const colorClasses = {
    blue: { bg: "bg-blue-100", text: "text-blue-600" },
    green: { bg: "bg-green-100", text: "text-green-600" },
    orange: { bg: "bg-orange-100", text: "text-orange-600" },
    red: { bg: "bg-red-100", text: "text-red-600" },
  };

  const trendColors = {
    positive: "text-green-600",
    negative: "text-red-600",
  };

  return (
    <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm h-full">
      <div className="flex justify-between items-start">
        <div
          className={`${colorClasses[color].bg} p-2 sm:p-3 rounded-lg flex items-center justify-center`}
        >
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
              d={getIconPath(icon)}
            />
          </svg>
        </div>
        {trend && !isToggle && (
          <span
            className={`${trendPositive ? trendColors.positive : trendColors.negative} text-xs sm:text-sm font-medium`}
          >
            {trend}
          </span>
        )}
        {isToggle && (
          <label className="relative inline-flex items-center cursor-pointer w-11 h-6">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-[#16a085] peer-focus:ring-green-300 transition-colors"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-5"></div>
          </label>
        )}
      </div>
      <div className="mt-2 sm:mt-3">
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
          {isToggle ? (isChecked ? "ON" : "OFF") : value}
        </p>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">{label}</p>
      </div>
    </div>
  );
}

function getIconPath(icon: string) {
  const icons: Record<string, string> = {
    box: "M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zm0 2v3H4V9h16zM4 19v-6h16v6H4z",
    "file-prescription":
      "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2zM10 9h4m-4 3h4m-4 3h4",
    calculator:
      "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
    "exclamation-triangle":
      "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
  };
  return icons[icon] || icons["box"];
}
