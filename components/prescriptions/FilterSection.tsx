// components/prescriptions/FilterSection.tsx

/**
 * FilterSection component renders tabs for prescription statuses,
 * a search bar, dropdown filters, and action buttons (filter/download).
 */
export default function FilterSection() {
  // Define tab data with label, count, and active state
  const tabs = [
    { label: "All", count: 24, active: true },
    { label: "Pending", count: 8, active: false },
    { label: "Allocated", count: 6, active: false },
    { label: "Ready for Pickup", count: 7, active: false },
    { label: "Collected", count: 3, active: false },
  ];

  return (
    <section className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
      {/* Tab Navigation */}
      <nav className="flex flex-wrap gap-6 text-xs font-medium text-gray-600 border-b border-gray-200 pb-3 mb-3">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`flex items-center gap-1 ${
              tab.active
                ? "text-green-600 border-b-2 border-green-600 rounded-sm px-2 py-1"
                : tab.label === "Pending"
                  ? "text-orange-400"
                  : tab.label === "Allocated"
                    ? "text-green-400"
                    : tab.label === "Ready for Pickup"
                      ? "text-blue-400"
                      : "text-gray-500"
            }`}
            type="button"
          >
            {tab.label}
            {/* Count badge */}
            <span
              className={`ml-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                tab.active
                  ? "bg-green-100 text-green-600"
                  : tab.label === "Pending"
                    ? "bg-orange-100 text-orange-400"
                    : tab.label === "Allocated"
                      ? "bg-green-100 text-green-400"
                      : tab.label === "Ready for Pickup"
                        ? "bg-blue-100 text-blue-400"
                        : "bg-gray-200 text-gray-600"
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </nav>

      {/* Filter Controls: search, dropdowns, and buttons */}
      <form className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 flex-wrap">
        {/* Left side inputs */}
        <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
          <input
            className="flex-grow sm:w-72 border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="search"
            placeholder="Search prescriptions..."
            type="search"
          />
          <select
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
            id="clinic"
            name="clinic"
          >
            <option>All Clinics</option>
          </select>
          <select
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
            id="date"
            name="date"
          >
            <option>Last 30 days</option>
          </select>
        </div>

        {/* Right-aligned icons for filter and download */}
        <div className="flex items-center gap-3 sm:ml-auto">
          <button
            aria-label="Filter"
            className="text-gray-600 hover:text-gray-900 cursor-pointer"
            type="button"
          >
            <i className="fas fa-filter fa-lg"></i>
          </button>
          <button
            aria-label="Download"
            className="text-gray-600 hover:text-gray-900 cursor-pointer"
            type="button"
          >
            <i className="fas fa-download fa-lg"></i>
          </button>
        </div>
      </form>
    </section>
  );
}
