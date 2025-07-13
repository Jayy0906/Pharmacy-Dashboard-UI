"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header({ onMenuToggle }: { onMenuToggle: () => void }) {
  const pathname = usePathname();

  const getPageTitle = () => {
    if (pathname === "/") return "Dashboard";
    if (pathname.startsWith("/inventory/add-product")) return "Add Product";
    if (pathname === "/inventory") return "Inventory";
    if (
      pathname.startsWith("/inventory/products/") &&
      pathname.split("/").length === 4
    ) {
      return "Product Details";
    }
    if (pathname.startsWith("/prescriptions")) return "Prescriptions";
    if (pathname.startsWith("/patients")) return "Patients";
    if (pathname.startsWith("/suppliers")) return "Suppliers";
    if (pathname.startsWith("/reports")) return "Reports";
    return "";
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center">
        <button
          className="lg:hidden mr-4 text-gray-500 hover:text-gray-700"
          onClick={onMenuToggle}
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
        <h1 className="text-base font-semibold text-gray-900">
          {getPageTitle()}
        </h1>
      </div>
      <div className="flex items-center gap-4 lg:gap-6">
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
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src="https://storage.googleapis.com/a1aa/image/93c98107-e391-4418-ecd6-da946731c8c0.jpg"
            alt="Profile"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="hidden sm:inline text-sm font-medium text-gray-700">
            Sarah Johnson
          </span>
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
