// components/supplier-details/ProductSearch.tsx

import { FaSearch } from "react-icons/fa"; // FontAwesome search icon

// Props type for the ProductSearch component
interface ProductSearchProps {
  productCount: number; // Number of products currently being shown
  onSearch: (query: string) => void; // Callback to update search query in parent
}

/**
 * ProductSearch Component
 *
 * This component displays:
 * - A search input field to filter products by name, SKU, etc.
 * - A product count indicator showing how many products are visible.
 */
export const ProductSearch = ({
  productCount,
  onSearch,
}: ProductSearchProps) => {
  /**
   * Handles real-time input changes in the search field.
   * Passes the updated query to the parent via onSearch().
   */
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <section className="bg-white rounded-lg p-4 border border-[#E5E7EB] mb-6">
      <div className="flex justify-between items-center">
        {/* Search input field */}
        <form className="w-full max-w-xs">
          <label className="sr-only" htmlFor="search">
            Search products
          </label>

          <div className="relative text-gray-400 focus-within:text-gray-600">
            {/* Icon inside input */}
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <FaSearch />
            </div>

            {/* Actual search input */}
            <input
              className="block w-full rounded-md border border-[#D1D5DB] bg-[#F9FBFC] py-2 pl-10 pr-3 text-sm placeholder-[#9CA3AF] focus:border-[#059669] focus:ring-1 focus:ring-[#059669] focus:outline-none"
              id="search"
              name="search"
              placeholder="Search products..."
              type="search"
              onChange={handleSearch}
            />
          </div>
        </form>

        {/* Product count display */}
        <div className="text-sm font-semibold text-[#374151]">
          Showing {productCount} products
        </div>
      </div>
    </section>
  );
};
