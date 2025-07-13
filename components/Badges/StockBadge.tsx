"use client";

import React from "react";
import clsx from "clsx";

type StockStatus = "good" | "warning" | "critical";

interface StockBadgeProps {
  stock: number;
  status: StockStatus;
}

export default function StockBadge({ stock, status }: StockBadgeProps) {
  const bgColor = {
    good: "bg-green-100 text-green-900",
    warning: "bg-yellow-100 text-yellow-800",
    critical: "bg-red-100 text-red-800",
  };

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
      <span
        className={clsx("w-2.5 h-2.5 rounded-full mr-", dotColor[status])}
      />
      <div className="flex flex-col leading-tight text-center">
        <span className="font-bold text-sm">{stock}</span>
        <span className="text-[11px] -mt-0.5">units</span>
      </div>
    </div>
  );
}
