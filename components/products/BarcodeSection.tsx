import React from "react";
import { FaBarcode } from "react-icons/fa";

const BarcodeSection: React.FC<{ barcode: string }> = ({ barcode }) => {
  return (
    <section className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
      <h2 className="font-semibold text-[#334155] mb-3 md:mb-4 flex items-center gap-2">
        <FaBarcode className="text-[#10B981]" />
        <span>Barcode Information</span>
      </h2>

      <label className="block text-xs font-semibold text-[#475569] mb-1">
        Barcode
      </label>
      <input
        className="w-full bg-[#F1F5F9] rounded-md px-3 py-2 text-[#334155] font-semibold text-sm border border-transparent focus:outline-none"
        readOnly
        type="text"
        value={barcode}
      />
    </section>
  );
};

export default BarcodeSection;
