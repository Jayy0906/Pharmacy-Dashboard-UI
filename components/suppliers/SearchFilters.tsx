// components/suppliers/SearchFilters.tsx

"use client"; // Ensures this component runs on the client side (Next.js directive)

import { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa"; // FontAwesome icons used for search/filter visuals

// Props accepted by the SearchFilters component
interface SearchFiltersProps {
  onSearch: (query: string) => void; // Callback to trigger when search query changes
  onFilter: (location: string, status: string) => void; // Callback to apply location & status filters
}

/**
 * SearchFilters Component
 *
 * Provides:
 * - Text search input
 * - Dropdown filters for location and status
 * - Apply button to trigger filter action
 *
 * Used to refine supplier listings.
 */
export const SearchFilters = ({ onSearch, onFilter }: SearchFiltersProps) => {
  // State to track text input in the search bar
  const [searchQuery, setSearchQuery] = useState("");

  // State to track selected location filter
  const [location, setLocation] = useState("All Locations");

  // State to track selected status filter
  const [status, setStatus] = useState("All Status");

  /**
   * Handles user typing into the search input.
   * Updates state and invokes the parent callback for live filtering.
   */
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value); // Update local search query state
    onSearch(e.target.value); // Trigger search logic in parent component
  };

  /**
   * Called when the user clicks the "Apply Filters" button.
   * Passes selected dropdown values back to parent for filtering logic.
   */
  const handleFilter = () => {
    onFilter(location, status);
  };

  return (
    <section className="bg-white rounded-lg p-4 mb-6 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:gap-x-6">
        {/* ============================ SEARCH FIELD ============================ */}
        <div className="flex flex-col sm:flex-grow">
          <label
            htmlFor="search"
            className="text-xs font-semibold text-gray-700 mb-1"
          >
            Search Suppliers
          </label>
          <div className="relative">
            <input
              id="search"
              type="search"
              placeholder="Name, Email, Phone..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full border border-gray-300 rounded-md pl-9 pr-3 py-2 text-sm placeholder-gray-400 
                         focus:outline-none focus:ring-2 focus:ring-[#059669] focus:border-transparent"
            />
            {/* Search icon inside input box (absolute positioned) */}
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
          </div>
        </div>

        {/* ============================ LOCATION DROPDOWN ============================ */}
        <div className="flex flex-col sm:w-48">
          <label
            htmlFor="location"
            className="text-xs font-semibold text-gray-700 mb-1"
          >
            Location
          </label>
          <select
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 
                       focus:outline-none focus:ring-2 focus:ring-[#059669] focus:border-transparent cursor-pointer"
          >
            <option>All Locations</option>
            <option>London, UK</option>
            <option>Manchester, UK</option>
            {/* More locations can be added dynamically if needed */}
          </select>
        </div>

        {/* ============================ STATUS DROPDOWN ============================ */}
        <div className="flex flex-col sm:w-44">
          <label
            htmlFor="status"
            className="text-xs font-semibold text-gray-700 mb-1"
          >
            Status
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 
                       focus:outline-none focus:ring-2 focus:ring-[#059669] focus:border-transparent cursor-pointer"
          >
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* ============================ APPLY FILTER BUTTON ============================ */}
        <div className="flex sm:mt-[26px]">
          <button
            type="button"
            onClick={handleFilter}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-md px-4 py-2 
                       flex items-center gap-2 focus:outline-none focus:ring-2 focus:border-transparent 
                       transition-colors w-full sm:w-auto cursor-pointer"
          >
            <FaFilter />
            Apply Filters
          </button>
        </div>
      </div>
    </section>
  );
};
