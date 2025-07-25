import {
  InformationCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

// Info section showing required/optional CSV fields and limitations
export default function RequirementsInfo() {
  return (
    <div className="bg-[#E0E7FF] rounded-md p-4 text-[#1E40AF] space-y-3">
      {/* Section heading */}
      <div className="font-semibold flex items-center space-x-1">
        <InformationCircleIcon className="h-4 w-4" />
        <span>CSV Format Requirements</span>
      </div>

      {/* Fields breakdown */}
      <div className="flex flex-col md:flex-row md:space-x-78">
        <div>
          <h3 className="font-medium mb-1">Required Fields:</h3>
          <ul className="space-y-1 text-[#1E40AF] text-sm">
            {[
              "Product Name",
              "SKU",
              "Cost Price",
              "VAT Rate",
              "Stock Quantity",
              "Supplier Name",
            ].map((field) => (
              <li key={field} className="font-normal">
                {field}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-3 md:mt-0">
          <h3 className="font-medium mb-1">Optional Fields:</h3>
          <ul className="space-y-1 text-[#1E40AF] text-sm">
            {[
              "Description",
              "Barcode",
              "Location",
              "Expiry Date",
              "POS Rules",
            ].map((field) => (
              <li key={field} className="font-normal">
                {field}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider and note */}
      <hr className="border-[#93C5FD]" />

      <div className="flex items-center space-x-2 font-semibold">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <span>Maximum 1000 rows per upload</span>
      </div>
    </div>
  );
}
