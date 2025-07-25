"use client";

import React from "react";
import clsx from "clsx";

type StockStatus = "good" | "warning" | "critical";

interface StockBadgeProps {
  stock: number;
  status: StockStatus;
}

// Renders a badge showing current stock level with color based on status
export default function StockBadge({ stock, status }: StockBadgeProps) {
  // Background and text color based on stock status
  const bgColor = {
    good: "bg-green-100 text-green-900",
    warning: "bg-yellow-100 text-yellow-800",
    critical: "bg-red-100 text-red-800",
  };

  // Dot color indicating status level visually
  const dotColor = {
    good: "bg-green-700",
    warning: "bg-yellow-700",
    critical: "bg-red-700",
  };

  return (
    <div
      className={clsx(
        "inline-flex items-center rounded-3xl px-4 py-1",
        bgColor[status],
      )}
    >
      {/* Colored status dot */}
      <span
        className={clsx("w-2.5 h-2.5 rounded-full mr-2", dotColor[status])}
      />
      {/* Stock value and label */}
      <div className="flex flex-col leading-tight text-center">
        <span className="font-bold text-sm">{stock}</span>
        <span className="text-[11px] -mt-0.5">units</span>
      </div>
    </div>
  );
}
