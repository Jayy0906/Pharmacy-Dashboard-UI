import React from "react";
import Select from "../ui/Select";
import { FaPlus } from "react-icons/fa";
import { SUPPLIERS } from "../../lib/constants";

const DefaultSupplier: React.FC = () => {
  return (
    <div className="space-y-4">
      <Select id="supplier" label="Supplier" options={SUPPLIERS} required />
      <button
        type="button"
        className="mt-3 w-full border border-[#10B981] text-[#10B981] rounded-md text-sm font-semibold py-2 flex items-center justify-center gap-2 hover:bg-[#ECFDF5] transition cursor-pointer"
      >
        <FaPlus /> Add New Supplier
      </button>
    </div>
  );
};

export default DefaultSupplier;
