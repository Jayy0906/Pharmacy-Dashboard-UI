// app/dashboard/components/Sidebar/Sidebar.tsx
"use client";

import NavItem from "../NavItem/NavItem";
import { usePathname } from "next/navigation";

export default function Sidebar({ menuOpen }: { menuOpen: boolean }) {
  const pathname = usePathname();

  const menuItems = [
    { path: "/", icon: "chart-line", label: "Dashboard" },
    {
      path: "/inventory",
      icon: "boxes",
      label: "Inventory",
      // Match any inventory sub-route
      activePattern: /^\/inventory/,
    },
    {
      path: "/prescriptions",
      icon: "file-prescription",
      label: "Prescriptions",
    },
    { path: "/patients", icon: "user-friends", label: "Patients" },
    { path: "/suppliers", icon: "truck", label: "Suppliers" },
    { path: "/reports", icon: "chart-bar", label: "Reports" },
  ];

  return (
    <aside
      className={`w-64 bg-white border-r border-gray-200 fixed lg:static h-screen z-40 transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
    >
      <div className="flex items-center gap-2 px-6 py-6 border-b border-gray-200">
        <div className="bg-teal-600 rounded-md p-2 text-white">
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
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        </div>
        <div className="font-extrabold text-gray-900 text-lg leading-tight">
          Pathly
          <br />
          Pharmacy
        </div>
      </div>

      <nav className="flex flex-col gap-1 px-4 py-6">
        {menuItems.map((item) => (
          <NavItem
            key={item.path}
            href={item.path}
            icon={item.icon}
            active={
              item.activePattern
                ? item.activePattern.test(pathname || "")
                : pathname === item.path
            }
          >
            {item.label}
          </NavItem>
        ))}
      </nav>
    </aside>
  );
}
