// components/Header/InventoryHeader.tsx

// import { useSidebar } from '../../context/SidebarContext';
import Link from "next/link"; // Imports Next.js Link component for client-side navigation

/**
 * InventoryHeader component displays the title and description for the Inventory Management page.
 * It also provides quick action buttons for adding new products and bulk import/export.
 */

export default function InventoryHeader() {
  // The commented-out code below shows how a sidebar toggle could be integrated if needed.
  // const { setMenuOpen } = useSidebar();

  return (
    // Container for the inventory header, with responsive flexbox layout.
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      <div>
        <h1 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight mb-1">
          Inventory Management
        </h1>
        <p className="text-gray-600 text-xs md:text-sm lg:text-base font-medium">
          Manage all Type 4 products in stock. Search, filter, and view detailed
          medicine information.
        </p>
      </div>

      <div className="flex gap-2">
        <Link
          href="/inventory/add-product"
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold text-[15px] md:text-[12px] lg:text-base rounded-md px-2 md:px-6 py-2 md:py-0 lg:px-4 lg:py-2 flex items-center gap-2 cursor-pointer"
        >
          <span>+</span>
          Add New Product
        </Link>

        <Link
          href="/inventory/bulk-import-export"
          className="border border-gray-300 text-gray-700 font-semibold text-[15px] md:text-[12px] lg:text-base rounded-md px-2 md:px-4 py-2 md:py-0 lg:py-2 flex items-center gap-2 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4h16v4H4z M4 12h16v4H4z" // This path segment seems unusual for typical import/export; it draws two rectangles. Might be a placeholder or custom icon.
            />
          </svg>
          Bulk Import (CSV)
        </Link>
      </div>
    </div>
  );
}
