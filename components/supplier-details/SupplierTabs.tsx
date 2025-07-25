// components/supplier-details/SupplierTabs.tsx

import Link from "next/link"; // Used for client-side navigation between tabs
import { usePathname } from "next/navigation"; // Hook to get the current route path

// Props for SupplierTabs component: expects a supplierId to generate dynamic tab URLs
interface SupplierTabsProps {
  supplierId: string;
}

/**
 * SupplierTabs Component
 *
 * Renders horizontal navigation tabs for a supplier's detail view.
 * Tabs include: Supplied Products, Purchase Orders, and Internal Notes.
 * Highlights the currently active tab based on the route pathname.
 */
export const SupplierTabs = ({ supplierId }: SupplierTabsProps) => {
  // Get the current pathname (e.g., /suppliers/1/orders)
  const pathname = usePathname();

  // Define the tab structure dynamically based on supplierId
  const tabs = [
    {
      name: "Supplied Products", // Default landing tab
      href: `/suppliers/${supplierId}`, // Matches main supplier detail page
    },
    {
      name: "Purchase Orders", // View supplier's purchase orders
      href: `/suppliers/${supplierId}/orders`,
    },
    {
      name: "Internal Notes", // View/add internal notes about this supplier
      href: `/suppliers/${supplierId}/notes`,
    },
  ];

  return (
    <nav
      className="flex space-x-6 border-b border-[#E5E7EB] text-sm font-medium text-[#6B7280] mb-4 overflow-x-auto"
      aria-label="Supplier navigation tabs"
    >
      {tabs.map((tab) => {
        // Check if this tab matches the current route
        const isActive = pathname === tab.href;

        return (
          <Link
            key={tab.name}
            href={tab.href}
            className={`pb-2 whitespace-nowrap ${
              isActive
                ? "text-[#059669] border-b-2 border-[#059669]" // Active tab styling
                : "hover:text-[#374151]" // Hover state for inactive tabs
            }`}
          >
            {tab.name}
          </Link>
        );
      })}
    </nav>
  );
};
