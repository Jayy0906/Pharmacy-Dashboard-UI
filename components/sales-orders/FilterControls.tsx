// components/sales-orders/FilterControls.tsx
"use client";

import { useState, useEffect } from "react";

interface FilterControlsProps {
  onSearch: (term: string) => void;
  onOrderTypeFilter: (type: string | null) => void;
  onPaymentMethodFilter: (method: string | null) => void;
  onDateFilter: (start: string, end: string) => void;
  orderTypeOptions: string[];
  paymentMethodOptions: string[];
}

export default function FilterControls({
  onSearch,
  onOrderTypeFilter,
  onPaymentMethodFilter,
  onDateFilter,
  orderTypeOptions,
  paymentMethodOptions,
}: FilterControlsProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, onSearch]);

  const handleDateChange = () => {
    if (startDate && endDate) {
      onDateFilter(startDate, endDate);
    } else {
      onDateFilter("", "");
    }
  };

  return (
    <form
      className="bg-white rounded-lg p-4 mb-6 grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto] sm:gap-6"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:flex-1">
        <input
          aria-label="Search by Customer Name or Order ID"
          className="flex-1 border border-[#CBD5E1] rounded-md px-4 py-2 text-sm placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent"
          placeholder="Search by Customer Name or Order ID"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <button
        className="bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-md px-6 py-2 flex items-center justify-center gap-2 text-sm cursor-pointer w-full sm:w-auto"
        type="submit"
      >
        <i className="fas fa-search"></i>
        Search
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:col-span-2 mt-2">
        <div>
          <label
            htmlFor="dateFrom"
            className="block text-xs font-semibold text-[#475569] mb-1"
          >
            Date Range
          </label>
          <input
            id="dateFrom"
            type="date"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
              if (endDate) handleDateChange();
            }}
            className="w-full border border-[#CBD5E1] rounded-md px-3 py-2 text-sm placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent cursor-pointer"
          />
        </div>
        <div>
          <label
            htmlFor="dateTo"
            className="block text-xs font-semibold text-[#475569] mb-1"
          >
            To
          </label>
          <input
            id="dateTo"
            type="date"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
              if (startDate) handleDateChange();
            }}
            className="w-full border border-[#CBD5E1] rounded-md px-3 py-2 text-sm placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent cursor-pointer"
          />
        </div>
        <div>
          <label
            htmlFor="orderType"
            className="block text-xs font-semibold text-[#475569] mb-1"
          >
            Order Type
          </label>
          <select
            id="orderType"
            onChange={(e) => onOrderTypeFilter(e.target.value || null)}
            className="w-full border border-[#CBD5E1] rounded-md px-3 py-2 text-sm text-[#475569] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent cursor-pointer"
          >
            <option value="">All Types</option>
            {orderTypeOptions.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="paymentMethod"
            className="block text-xs font-semibold text-[#475569] mb-1"
          >
            Payment Method
          </label>
          <select
            id="paymentMethod"
            onChange={(e) => onPaymentMethodFilter(e.target.value || null)}
            className="w-full border border-[#CBD5E1] rounded-md px-3 py-2 text-sm text-[#475569] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent cursor-pointer"
          >
            <option value="">All Methods</option>
            {paymentMethodOptions.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </div>
      </div>
    </form>
  );
}
