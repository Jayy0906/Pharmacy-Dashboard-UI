"use client"; // Marks this as a client-side rendered component (Next.js specific)

import { useState } from "react";
import GoodsinHeader from "@/components/Header/GoodsinHeader";
import FilterSection from "@/components/goodsin/FilterSection";
import PurchaseOrdersTable from "@/components/goodsin/PurchaseOrdersTable";

// Top-level page component for "Goods In" section
export default function GoodsInPage() {
  // Local state to handle filters
  const [searchTerm, setSearchTerm] = useState(""); // For PO number or supplier search
  const [startDate, setStartDate] = useState(""); // Start date filter
  const [endDate, setEndDate] = useState(""); // End date filter
  const [statusFilter, setStatusFilter] = useState("All"); // Status filter (e.g., All, Pending, etc.)

  return (
    <main className="mx-auto">
      {/* Page title/header */}
      <GoodsinHeader />

      {/* Filter section: search, date range, status filter */}
      <FilterSection
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        startDate={startDate}
        onStartDateChange={setStartDate}
        endDate={endDate}
        onEndDateChange={setEndDate}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
      />

      {/* Purchase Orders Table - list filtered results */}
      <PurchaseOrdersTable
        searchTerm={searchTerm}
        startDate={startDate}
        endDate={endDate}
        statusFilter={statusFilter}
      />
    </main>
  );
}
