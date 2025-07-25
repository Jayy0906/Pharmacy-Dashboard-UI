import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import FormSelect from "./FormSelect";

// Form to export inventory data with filter dropdowns
export default function ExportForm() {
  const filterOptions = [
    { id: "product-type", label: "Product Type", options: ["All Types"] },
    {
      id: "stock-status",
      label: "Stock Status",
      options: ["All Stock Levels"],
    },
    { id: "supplier", label: "Supplier", options: ["All Suppliers"] },
    { id: "location", label: "Location", options: ["All Locations"] },
  ];

  return (
    <form className="bg-white rounded-lg p-6 shadow-sm">
      {/* Heading with icon */}
      <div className="flex items-start space-x-3 mb-4">
        <div className="bg-[#DBEAFE] text-[#3B82F6] rounded-md p-3">
          <DocumentArrowDownIcon className="h-6 w-6" />
        </div>
        <div>
          <h2 className="font-semibold text-[#334155] text-base">
            Export Inventory
          </h2>
          <p className="text-[#64748B] text-xs">
            Download current inventory data as CSV
          </p>
        </div>
      </div>

      {/* Filter dropdowns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {filterOptions.map((option) => (
          <FormSelect
            key={option.id}
            id={option.id}
            label={option.label}
            options={option.options}
          />
        ))}
      </div>

      {/* Filtered result info */}
      <p className="text-[#475569] text-base mb-4">
        247 products match current filters
      </p>

      {/* Submit button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-teal-700 hover:bg-teal-600 text-white font-semibold rounded-md px-5 py-2 flex items-center space-x-2 cursor-pointer"
        >
          <DocumentArrowDownIcon className="h-4 w-4" />
          <span>Download CSV</span>
        </button>
      </div>
    </form>
  );
}
