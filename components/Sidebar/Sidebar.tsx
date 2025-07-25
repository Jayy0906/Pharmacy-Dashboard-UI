// app/dashboard/components/Sidebar/Sidebar.tsx
"use client"; // Marks this file as a Client Component in Next.js, meaning it runs on the client side.

import NavItem from "../NavItem/NavItem"; // Imports the NavItem component used for individual navigation links.
import { usePathname } from "next/navigation"; // Hook from Next.js to get the current URL pathname.

/**
 * Sidebar Component
 *
 * Renders the main navigation sidebar for the application.
 * It displays a logo, company name, and a list of navigation links.
 * The sidebar's visibility is controlled by the `menuOpen` prop, allowing it to slide in/out.
 *
 * @param {object} props - The component's properties.
 * @param {boolean} props.menuOpen - A boolean indicating whether the sidebar should be open (visible) or closed.
 */
export default function Sidebar({ menuOpen }: { menuOpen: boolean }) {
  // Get the current pathname from the Next.js router to determine active navigation items.
  const pathname = usePathname();

  // Defines the structure and content of the navigation menu items.
  // Each item has a path, an icon identifier (for Font Awesome, though direct SVG is used for logo),
  // a display label, and an optional activePattern for complex path matching (e.g., for sub-routes).
  const menuItems = [
    { path: "/", icon: "chart-line", label: "Dashboard" },
    {
      path: "/inventory",
      icon: "boxes",
      label: "Inventory",
      // Regular expression to match '/inventory' and any of its sub-routes (e.g., '/inventory/products/1').
      activePattern: /^\/inventory/,
    },
    { path: "/warehouse", icon: "warehouse", label: "Warehouse" },
    { path: "/pos", icon: "", label: "Point of Sale" },
    { path: "/purchase-orders", icon: "orders", label: "Purchase Orders" },
    {
      path: "/goods-in",
      icon: "",
      label: "Goods In",
      activePattern: /^\/goods-in/,
    },
    {
      path: "/prescriptions",
      icon: "file-prescription",
      label: "Prescriptions",
    },
    {
      path: "/suppliers",
      icon: "truck",
      label: "Suppliers",
      activePattern: /^\/suppliers(\/.*)?$/, //  Matches /suppliers, /suppliers/1, /suppliers/anything
    },
    {
      path: "/sales-orders",
      icon: "sales",
      label: "Sales Orders",
      activePattern: /^\/sales-orders(\/.*)?$/, // Matches /sales-orders and all sub-routes
    },
    {
      path: "/user-management",
      icon: "user",
      label: "User Management",
      activePattern: /^\/user-management(\/.*)?$/, // Matches /user-management and any sub-routes like /add, /edit, etc.
    },
    { path: "/patients", icon: "user-friends", label: "Patients" },
    { path: "/reports", icon: "chart-bar", label: "Reports" },
  ];

  return (
    // The main <aside> element acts as the sidebar container.
    // It uses Tailwind CSS classes for width, background, border, fixed/static positioning, height, and z-index.
    // The `transform` and `transition` classes create the slide-in/slide-out animation.
    // `menuOpen` prop controls the `translate-x` transformation for opening/closing the sidebar.
    <aside
      className={`w-64 bg-white border-r border-gray-200 fixed lg:static h-screen z-40 transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
    >
      {/* Logo and Company Name Section */}
      <div className="flex items-center gap-2 px-6 py-6 border-b border-gray-200">
        {/* Logo Container (teal background with SVG icon) */}
        <div className="bg-teal-600 rounded-md p-2 text-white">
          {/* SVG icon representing the pharmacy/medical theme */}
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
        {/* Company Name */}
        <div className="font-extrabold text-gray-900 text-lg leading-tight">
          Pathly
          <br />
          Pharmacy
        </div>
      </div>

      {/* Navigation Links Section */}
      <nav className="flex flex-col gap-1 px-4 py-6">
        {/* Map through the menuItems array to render each navigation link */}
        {menuItems.map((item) => (
          <NavItem
            key={item.path} // Unique key for each NavItem, typically the path
            href={item.path} // The URL path for the navigation item
            icon={item.icon} // The icon identifier for the NavItem component
            // Determine if the current NavItem should be active:
            // - If `item.activePattern` exists, test the current `pathname` against it.
            // - Otherwise, simply check if `pathname` strictly matches `item.path`.
            active={
              item.activePattern
                ? item.activePattern.test(pathname || "")
                : pathname === item.path
            }
          >
            {item.label} {/* The display label for the navigation item */}
          </NavItem>
        ))}
      </nav>
    </aside>
  );
}
