interface FilterSectionProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  startDate: string;
  onStartDateChange: (value: string) => void;
  endDate: string;
  onEndDateChange: (value: string) => void;
  statusFilter: string;
  onStatusFilterChange: (value: string) => void;
}

// Renders search input, date range filters, and status filter buttons
export default function FilterSection({
  searchTerm,
  onSearchChange,
  startDate,
  onStartDateChange,
  endDate,
  onEndDateChange,
  statusFilter,
  onStatusFilterChange,
}: FilterSectionProps) {
  // Available filter statuses
  const statuses = ["All", "Pending", "Fully Received", "Partially Received"];

  return (
    <section className="bg-white rounded-lg p-4 mb-8 shadow-sm border border-gray-200">
      {/* Search and Date Filters */}
      <form className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0 w-full">
        {/* Text search input */}
        <input
          type="search"
          placeholder="Search by PO Number, Supplier..."
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
          aria-label="Search by PO Number, Supplier"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />

        {/* Start & End Date Inputs */}
        <div className="flex flex-row gap-3 w-full sm:w-auto">
          <input
            type="date"
            aria-label="Start date"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
            className="w-1/2 sm:w-36 border border-gray-300 rounded-md px-3 py-2 font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 cursor-pointer"
          />
          <input
            type="date"
            aria-label="End date"
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
            className="w-1/2 sm:w-36 border border-gray-300 rounded-md px-3 py-2 font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 cursor-pointer"
          />
        </div>
      </form>

      {/* Status Buttons */}
      <nav className="mt-4 grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
        {statuses.map((status) => (
          <button
            key={status}
            type="button"
            onClick={() => onStatusFilterChange(status)}
            className={`${
              statusFilter === status
                ? "bg-teal-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-teal-700 hover:text-white"
            } font-semibold rounded-md px-4 py-2 w-full sm:w-auto min-w-[128px] cursor-pointer`}
          >
            {status}
          </button>
        ))}
      </nav>
    </section>
  );
}
