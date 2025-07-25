"use client";

import { FaSearch } from "react-icons/fa";
import Button from "./Button";
import { useState, useEffect } from "react";

interface UserFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onRoleFilter: (role: string) => void;
  onStatusFilter: (status: string) => void;
  onSortChange: (sort: string) => void;
  onDateRangeChange: (range: string) => void;
}

export default function UserFilters({
  searchTerm,
  onSearchChange,
  onRoleFilter,
  onStatusFilter,
  onSortChange,
  onDateRangeChange,
}: UserFiltersProps) {
  const [localSearch, setLocalSearch] = useState(searchTerm);

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchChange(localSearch);
    }, 300);
    return () => clearTimeout(timer);
  }, [localSearch, onSearchChange]);

  return (
    <form
      className="bg-white rounded-lg p-4 mb-6 shadow-sm max-w-full"
      onSubmit={(e) => e.preventDefault()}
    >
      {/* Search */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
        <div className="flex-1">
          <label className="sr-only cursor-pointer" htmlFor="search">
            Search
          </label>
          <div className="relative text-gray-400">
            <input
              className="w-full border border-gray-200 rounded-md py-2 pl-10 pr-3 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              id="search"
              placeholder="Search by name, email, or role"
              type="search"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <Button variant="primary" icon={<FaSearch />} type="submit">
          Search
        </Button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
        <select
          aria-label="Filter by role"
          className="border border-gray-200 rounded-md py-2 px-3 text-sm font-semibold text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent cursor-pointer"
          onChange={(e) => onRoleFilter(e.target.value)}
        >
          <option value="">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="Pharmacist">Pharmacist</option>
          <option value="Inventory Manager">Inventory Manager</option>
          <option value="POS Operator">POS Operator</option>
        </select>

        <select
          aria-label="Filter by status"
          className="border border-gray-200 rounded-md py-2 px-3 text-sm font-semibold text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent cursor-pointer"
          onChange={(e) => onStatusFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <select
          aria-label="Sort by"
          className="border border-gray-200 rounded-md py-2 px-3 text-sm font-semibold text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent cursor-pointer"
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="Name">Sort by Name</option>
          <option value="Date">Sort by Date Created</option>
          <option value="Status">Sort by Status</option>
        </select>

        <select
          aria-label="Filter by date range"
          className="border border-gray-200 rounded-md py-2 px-3 text-sm font-semibold text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent cursor-pointer"
          onChange={(e) => onDateRangeChange(e.target.value)}
        >
          <option value="">Date Range</option>
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
        </select>
      </div>
    </form>
  );
}
