"use client";

import { useState } from "react";
import WarehouseStats from "../../components/warehouse/WarehouseStats";
import LocationSearch from "../../components/warehouse/LocationSearch";
import LocationsTable from "../../components/warehouse/LocationsTable";

export default function WarehousePage() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    zone: "All Zones",
    type: "Storage Type",
    status: "Status",
    capacity: "Capacity",
  });

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-[#F8FAFC] text-[#1E293B] min-h-screen">
      <div className="mx-auto">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <div>
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight mb-1">
              Warehouse Management
            </h1>
            <p className="text-gray-600 text-xs md:text-sm lg:text-base font-medium">
              Manage storage locations, zones, and warehouse layout for optimal
              inventory organization.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="bg-teal-700 hover:bg-teal-600 text-white font-semibold text-[15px] md:text-[12px] lg:text-base rounded-md px-2 md:px-4 py-2 md:py-0 lg:py-2 flex items-center gap-2 cursor-pointer">
              <i className="fas fa-plus"></i>
              Add New Location
            </button>
            <button className="bg-white border border-[#CBD5E1] hover:bg-[#F1F5F9] text-[#475569] font-semibold text-[15px] md:text-[12px] lg:text-base rounded-md px-2 md:px-4 py-2 md:py-0 lg:py-2 flex items-center gap-2 cursor-pointer">
              <i className="fas fa-download"></i>
              Export Layout
            </button>
          </div>
        </header>

        <WarehouseStats />
        <LocationSearch
          search={search}
          onSearchChange={handleSearchChange}
          filters={filters}
          onFilterChange={handleFilterChange}
        />
        <LocationsTable search={search} filters={filters} />
      </div>
    </div>
  );
}
