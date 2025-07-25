// components/supplier-details/Breadcrumb.tsx

import Link from "next/link"; // Next.js component for client-side navigation

// Props type for the breadcrumb component
interface BreadcrumbProps {
  currentPage: string; // Label of the current page (e.g., supplier name)
}

/**
 * Breadcrumb Component
 *
 * Provides navigation hierarchy for the supplier detail page.
 * Displays:
 *    - A link back to the suppliers list.
 *    - The name of the current supplier as plain text.
 *
 * Example: Suppliers > MedSupply Ltd
 */
export const Breadcrumb = ({ currentPage }: BreadcrumbProps) => {
  return (
    <nav className="mb-4 text-sm text-[#6B7280]">
      {/* Link back to supplier listing */}
      <Link href="/suppliers" className="hover:text-teal-700 transition-colors">
        Suppliers
      </Link>

      {/* Arrow separator */}
      <span className="mx-1">&gt;</span>

      {/* Current supplier name (non-clickable) */}
      <span className="font-semibold text-[#111827]">{currentPage}</span>
    </nav>
  );
};
