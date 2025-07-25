import Link from "next/link";
import {
  CloudArrowUpIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import FileUploadSection from "./FileUploadSection";
import RequirementsInfo from "./RequirementsInfo";
import UpdateCheckbox from "./UpdateCheckbox";

// Main form for importing CSV files to update or add inventory
export default function ImportForm() {
  return (
    <form className="bg-white rounded-lg p-6 mb-8 space-y-6 shadow-sm">
      {/* Form heading with icon and link */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
        <div className="flex items-center space-x-3">
          <div className="bg-[#DCFCE7] text-[#22C55E] rounded-md p-3">
            <CloudArrowUpIcon className="h-6 w-6" />
          </div>
          <div>
            <h2 className="font-semibold text-[#334155] text-base">
              Import Inventory
            </h2>
            <p className="text-[#64748B] text-sm">
              Upload CSV file to add or update products
            </p>
          </div>
        </div>

        {/* Link to download a sample CSV */}
        <Link
          href="#"
          className="text-teal-700 text-sm font-medium flex items-center space-x-1 hover:text-teal-600"
        >
          <DocumentArrowDownIcon className="h-4 w-4" />
          <span>Download Sample CSV</span>
        </Link>
      </div>

      <FileUploadSection />
      <RequirementsInfo />
      <UpdateCheckbox />

      {/* Submit import button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-teal-700 hover:bg-teal-600 text-white font-semibold rounded-md px-5 py-2 flex items-center space-x-2 cursor-pointer"
        >
          <CloudArrowUpIcon className="h-4 w-4" />
          <span>Upload and Import</span>
        </button>
      </div>
    </form>
  );
}
