// components/purchaseorders/FilterControls.tsx
"use client";

import { useState } from "react";

interface FilterControlsProps {
  onSearch: (term: string) => void;
  onStatusFilter: (status: string | null) => void;
  onSupplierFilter: (supplier: string | null) => void;
  onDateFilter: (start: string, end: string) => void;
  onCreatePO: () => void;
  statusOptions: string[];
  supplierOptions: string[];
}

export default function FilterControls({
  onSearch,
  onStatusFilter,
  onSupplierFilter,
  onDateFilter,
  onCreatePO,
  statusOptions,
  supplierOptions,
}: FilterControlsProps) {
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showSupplierDropdown, setShowSupplierDropdown] = useState(false);
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  const handleDateApply = () => {
    onDateFilter(dateStart, dateEnd);
    setShowDateDropdown(false);
  };

  const handleDateReset = () => {
    setDateStart("");
    setDateEnd("");
    onDateFilter("", "");
    setShowDateDropdown(false);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-3 sm:space-y-0 mb-6">
      {/* Search Input */}
      <div className="w-full sm:flex-1">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative text-gray-400 focus-within:text-gray-600">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <i className="fas fa-search"></i>
          </span>
          <input
            id="search"
            name="search"
            className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 md:pr-2 text-sm placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none focus:ring-1"
            placeholder="Search by PO ID, supplier name, product, or date"
            type="search"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Dropdown buttons */}
      <div className="flex flex-wrap gap-3 w-full sm:w-auto">
        {/* Status Filter Dropdown */}
        <div className="relative">
          <button
            type="button"
            className="flex-1 sm:flex-none inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 min-w-[110px] cursor-pointer"
            onClick={() => setShowStatusDropdown(!showStatusDropdown)}
          >
            <i className="fas fa-filter mr-2"></i>Status
            <i className="fas fa-chevron-down ml-1 text-xs"></i>
          </button>

          {showStatusDropdown && (
            <div className="absolute z-10 mt-1 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  onClick={() => {
                    onStatusFilter(null);
                    setShowStatusDropdown(false);
                  }}
                >
                  All Statuses
                </button>
                {statusOptions.map((status) => (
                  <button
                    key={status}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left cursor-pointer"
                    onClick={() => {
                      onStatusFilter(status);
                      setShowStatusDropdown(false);
                    }}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Date Range Dropdown */}
        <div className="relative">
          <button
            type="button"
            className="flex-1 sm:flex-none inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 min-w-[110px] cursor-pointer"
            onClick={() => setShowDateDropdown(!showDateDropdown)}
          >
            <i className="fas fa-calendar-alt mr-2"></i>Date Range
            <i className="fas fa-chevron-down ml-1 text-xs"></i>
          </button>

          {showDateDropdown && (
            <div className="absolute z-10 mt-1 w-64 p-4 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    className="block w-full rounded-md border border-gray-300 py-2 px-3 text-sm"
                    value={dateStart}
                    onChange={(e) => setDateStart(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    End Date
                  </label>
                  <input
                    type="date"
                    className="block w-full rounded-md border border-gray-300 py-2 px-3 text-sm"
                    value={dateEnd}
                    onChange={(e) => setDateEnd(e.target.value)}
                  />
                </div>
                <div className="flex justify-between space-x-2">
                  <button
                    className="flex-1 rounded-md bg-gray-200 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
                    onClick={handleDateReset}
                  >
                    Reset
                  </button>
                  <button
                    className="flex-1 rounded-md bg-indigo-600 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                    onClick={handleDateApply}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Supplier Filter Dropdown */}
        <div className="relative">
          <button
            type="button"
            className="flex-1 sm:flex-none inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 min-w-[110px] cursor-pointer"
            onClick={() => setShowSupplierDropdown(!showSupplierDropdown)}
          >
            <i className="fas fa-truck mr-2"></i>Supplier
            <i className="fas fa-chevron-down ml-1 text-xs"></i>
          </button>

          {showSupplierDropdown && (
            <div className="absolute z-10 mt-1 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 max-h-60 overflow-y-auto">
              <div className="py-1">
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  onClick={() => {
                    onSupplierFilter(null);
                    setShowSupplierDropdown(false);
                  }}
                >
                  All Suppliers
                </button>
                {supplierOptions.map((supplier) => (
                  <button
                    key={supplier}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left cursor-pointer"
                    onClick={() => {
                      onSupplierFilter(supplier);
                      setShowSupplierDropdown(false);
                    }}
                  >
                    {supplier}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Create Button */}
      <button
        type="button"
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 cursor-pointer"
        onClick={onCreatePO}
      >
        <i className="fas fa-plus mr-2"></i>Create New PO
      </button>
    </div>
  );
}
