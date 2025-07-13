// import { useSidebar } from '../../context/SidebarContext';
import Link from "next/link";

export default function InventoryHeader() {
  // const { setMenuOpen } = useSidebar();

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      <div>
        {/* Mobile Hamburger */}
        {/* <button
          className="block lg:hidden mb-2 text-gray-600 hover:text-gray-800"
          onClick={() => setMenuOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button> */}

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
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold text-[15px] md:text-[12px] lg:text-base rounded-md px-2 md:px-4 py-2 md:py-0 lg:py-2 flex items-center gap-2 cursor-pointer"
        >
          <span>+</span>
          Add New Product
        </Link>

        <button className="border border-gray-300 text-gray-700 font-semibold text-[15px] md:text-[12px] lg:text-base rounded-md px-2 md:px-4 py-2 md:py-0 lg:py-2 flex items-center gap-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
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
        </button>
      </div>
    </div>
  );
}
