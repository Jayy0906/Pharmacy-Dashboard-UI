// components/Header/Header.tsx
"use client";

import Image from "next/image"; // Imports Next.js Image component for optimized images
import { usePathname } from "next/navigation"; // Imports usePathname hook to get the current URL path

/**
 * Header component for the application.
 * Displays the current page title, notification icon, and user profile.
 * It also includes a hamburger icon for toggling the sidebar on smaller screens.
 *
 * @param {object} props - The component props.
 * @param {() => void} props.onMenuToggle - Function to call when the menu toggle button is clicked.
 */
export default function Header({ onMenuToggle }: { onMenuToggle: () => void }) {
  const pathname = usePathname(); // Gets the current URL pathname

  /**
   * Determines the page title based on the current pathname.
   * This function provides dynamic titles for different routes in the application.
   * @returns {string} The title of the current page.
   */
  const getPageTitle = () => {
    if (pathname === "/") return "Dashboard";
    if (pathname.startsWith("/inventory/add-product")) return "Add Product";
    if (pathname === "/inventory") return "Inventory";
    if (pathname === "/inventory/bulk-import-export")
      return "Bulk Import/Export";
    if (pathname === "/pos") return "Point of Sale";
    // if (pathname.startsWith("/pos/") && pathname.split("/").length === 3) {
    //   return "Prescription POS";
    // }
    if (pathname === "/warehouse") return "Warehouse";
    if (pathname === "/purchase-orders") return "Purchase Orders";
    if (pathname === "/goods-in") return "Goods In";
    if (pathname.startsWith("/goods-in/receive-purchase-order/"))
      return "Receive Purchase Order";

    // Checks for product details page (e.g., /inventory/products/123)
    if (
      pathname.startsWith("/inventory/products/") &&
      pathname.split("/").length === 4
    ) {
      return "Product Details";
    }
    if (pathname.startsWith("/prescriptions")) return "Prescriptions";
    if (pathname.startsWith("/sales-orders")) return "Sales Orders";
    if (pathname.startsWith("/user-management")) return "User Management";
    if (pathname.startsWith("/patients")) return "Patients";
    if (pathname.startsWith("/suppliers")) return "Suppliers";
    if (pathname.startsWith("/reports")) return "Reports";
    return ""; // Default empty string if no match
  };

  return (
    // Header element with sticky positioning, border, padding, and flexbox for alignment.
    <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4 flex items-center justify-between sticky top-0 z-30">
      {/* Left section: Hamburger menu (mobile) and Page Title */}
      <div className="flex items-center">
        {/* Hamburger menu button, visible only on large screens (lg) */}
        <button
          className="lg:hidden mr-4 text-gray-500 hover:text-gray-700"
          onClick={onMenuToggle} // Triggers the sidebar toggle function
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Dynamic Page Title */}
        <h1 className="text-base font-semibold text-gray-900">
          {getPageTitle()}
        </h1>
      </div>
      {/* Right section: Notifications and User Profile */}
      <div className="flex items-center gap-4 lg:gap-6">
        {/* Notifications Button */}
        <button
          aria-label="Notifications"
          className="text-gray-500 hover:text-gray-700 text-lg relative cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>
        {/* User Profile Section */}
        <div className="flex items-center gap-2 cursor-pointer">
          {/* User Profile Image */}
          <Image
            src="https://storage.googleapis.com/a1aa/image/93c98107-e391-4418-ecd6-da946731c8c0.jpg"
            alt="Profile"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
          {/* User Name (hidden on small screens) */}
          <span className="hidden sm:inline text-sm font-medium text-gray-700">
            Sarah Johnson
          </span>
          {/* Dropdown arrow icon (hidden on small screens) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="hidden sm:block h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
