// components/Header/SuppliersHeader.tsx

import { FaTruck, FaPlus } from "react-icons/fa";

// Define the props interface to receive handler function for "Add Supplier" button
interface HeaderProps {
  onAddSupplier: () => void; // Callback function triggered on clicking "Add New Supplier"
}

// Header component for the Supplier Management page
export const Header = ({ onAddSupplier }: HeaderProps) => {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
      {/* Left section: Title and description */}
      <div>
        <h1 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight mb-1 flex gap-2 items-center">
          <FaTruck className="text-[#059669]" /> {/* Truck icon */}
          Supplier Management
        </h1>
        <p className="text-gray-600 text-xs md:text-sm lg:text-base font-medium">
          Manage all suppliers linked to medicines and purchase orders
        </p>
      </div>

      {/* Right section: Add Supplier button */}
      <button
        type="button"
        onClick={onAddSupplier} // Trigger callback passed as prop
        className="mt-4 sm:mt-0 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-md px-4 py-2 flex items-center gap-2 cursor-pointer"
      >
        <FaPlus /> {/* Plus icon */}
        Add New Supplier
      </button>
    </header>
  );
};
