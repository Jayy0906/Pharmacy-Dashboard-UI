import React from "react";
import { FaShieldAlt, FaTimes } from "react-icons/fa";

/**
 * POSRestrictionsSection Component
 *
 * Displays a list of Point of Sale (POS) restrictions and age confirmation requirements.
 */
const POSRestrictionsSection: React.FC = () => {
  // Array of restriction strings to be displayed.
  const restrictions = [
    "18+ Only",
    "Age-Restricted Sale",
    "Requires Manual Age Confirmation",
  ];

  return (
    // Section container with styling for background, padding, rounded corners, and shadow.
    <section className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
      {/* Section title for POS Restrictions & Age Confirmation */}
      <h2 className="font-semibold text-[#334155] mb-3 md:mb-4 flex items-center gap-2">
        {/* Shield icon for visual representation */}
        <FaShieldAlt className="text-[#10B981]" />
        <span>POS Restrictions & Age Confirmation</span>
      </h2>

      {/* Unordered list to display each restriction */}
      <ul className="space-y-2 text-sm text-[#475569]">
        {/* Map over the restrictions array to render each item */}
        {restrictions.map((restriction, index) => (
          <li key={index} className="flex items-center gap-2">
            {/* Red circle with a 'FaTimes' icon to indicate a restriction */}
            <div className="w-4 h-4 rounded-full bg-[#F87171] flex items-center justify-center text-white text-xs font-bold">
              <FaTimes />
            </div>
            {/* The restriction text */}
            {restriction}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default POSRestrictionsSection;
