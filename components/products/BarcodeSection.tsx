import React from "react";
import { FaBarcode } from "react-icons/fa";

/**
 * BarcodeSection Component
 *
 * Displays the barcode information for a product.
 * It's a read-only input field showing the provided barcode.
 *
 * @param {object} props - The component's properties.
 * @param {string} props.barcode - The barcode string to be displayed.
 */
const BarcodeSection: React.FC<{ barcode: string }> = ({ barcode }) => {
  return (
    // Section container with styling for background, padding, rounded corners, and shadow.
    <section className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
      {/* Section title for Barcode Information */}
      <h2 className="font-semibold text-[#334155] mb-3 md:mb-4 flex items-center gap-2">
        {/* Barcode icon for visual representation */}
        <FaBarcode className="text-[#10B981]" />
        <span>Barcode Information</span>
      </h2>

      {/* Label for the barcode input field */}
      <label className="block text-xs font-semibold text-[#475569] mb-1">
        Barcode
      </label>
      {/* Read-only input field displaying the barcode value */}
      <input
        className="w-full bg-[#F1F5F9] rounded-md px-3 py-2 text-[#334155] font-semibold text-sm border border-transparent focus:outline-none"
        readOnly // Ensures the input cannot be edited by the user
        type="text" // Specifies the input type as text
        value={barcode} // Binds the input's value to the 'barcode' prop
      />
    </section>
  );
};

export default BarcodeSection;
