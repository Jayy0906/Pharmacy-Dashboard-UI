// WarehouseHeader.tsx
// Header section for the Warehouse Management page with title and action buttons

export default function WarehouseHeader() {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
      {/* Left: Title & Subtitle */}
      <div>
        <h1 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight mb-1">
          Warehouse Management
        </h1>
        <p className="text-gray-600 text-xs md:text-sm lg:text-base font-medium md:max-w-sm lg:max-w-full">
          Manage storage locations, zones, and warehouse layout for optimal
          inventory organization.
        </p>
      </div>

      {/* Right: Action Buttons */}
      <div className="flex gap-3">
        {/* Add Location Button */}
        <button
          className="bg-teal-600 hover:bg-teal-500 text-white font-semibold text-[15px] md:text-[12px] lg:text-base rounded-md px-2 md:px-4 py-2 md:py-2 lg:py-2 flex items-center gap-2 cursor-pointer"
          type="button"
        >
          <i className="fas fa-plus"></i>
          Add New Location
        </button>

        {/* Export Layout Button */}
        <button
          className="bg-white border border-[#CBD5E1] hover:bg-[#F1F5F9] text-[#475569] font-semibold text-[15px] md:text-[12px] lg:text-base rounded-md px-2 md:px-4 py-2 md:py-2 lg:py-2 flex items-center gap-2 cursor-pointer"
          type="button"
        >
          <i className="fas fa-download"></i>
          Export Layout
        </button>
      </div>
    </header>
  );
}
