import React from "react";
import Select from "../ui/Select"; // Custom select dropdown component
import { FaPlus } from "react-icons/fa";
import { SUPPLIERS } from "../../lib/constants"; // Options for supplier dropdown

const DefaultSupplier: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Dropdown to select an existing supplier */}
      <Select id="supplier" label="Supplier" options={SUPPLIERS} required />

      {/* Button to open a modal or interface to add a new supplier */}
      <button
        type="button"
        className="mt-3 w-full border border-teal-700 text-teal-700 rounded-md text-sm font-semibold py-2 flex items-center justify-center gap-2 hover:bg-[#ECFDF5] transition cursor-pointer"
      >
        <FaPlus /> Add New Supplier
      </button>
    </div>
  );
};

export default DefaultSupplier;
