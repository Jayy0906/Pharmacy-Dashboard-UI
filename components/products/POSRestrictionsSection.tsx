import React from "react";
import { FaShieldAlt, FaTimes } from "react-icons/fa";

const POSRestrictionsSection: React.FC = () => {
  const restrictions = [
    "18+ Only",
    "Age-Restricted Sale",
    "Requires Manual Age Confirmation",
  ];

  return (
    <section className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
      <h2 className="font-semibold text-[#334155] mb-3 md:mb-4 flex items-center gap-2">
        <FaShieldAlt className="text-[#10B981]" />
        <span>POS Restrictions & Age Confirmation</span>
      </h2>

      <ul className="space-y-2 text-sm text-[#475569]">
        {restrictions.map((restriction, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#F87171] flex items-center justify-center text-white text-xs font-bold">
              <FaTimes />
            </div>
            {restriction}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default POSRestrictionsSection;
