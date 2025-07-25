import Link from "next/link";

// Page header component for inventory listing page
export default function InventoryHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      {/* Title and description */}
      <div>
        <h1 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight mb-1">
          Inventory Management
        </h1>
        <p className="text-gray-600 text-xs md:text-sm lg:text-base font-medium">
          Manage all Type 4 products in stock. Search, filter, and view detailed
          medicine information.
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2">
        <Link
          href="/inventory/add-product"
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm rounded-md px-4 py-2 flex items-center gap-2"
        >
          <span>+</span>
          Add New Product
        </Link>

        <Link
          href="/inventory/bulk-import-export"
          className="border border-gray-300 text-gray-700 font-semibold text-sm rounded-md px-4 py-2 flex items-center gap-2"
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
              d="M4 4h16v4H4z M4 12h16v4H4z"
            />
          </svg>
          Bulk Import (CSV)
        </Link>
      </div>
    </div>
  );
}
