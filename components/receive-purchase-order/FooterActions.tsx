import { FaBookmark, FaCheckCircle, FaInfoCircle } from "react-icons/fa";

interface FooterActionsProps {
  onSave: () => void;
  onComplete: () => void;
}

// Bottom action bar containing Save & Complete GRN buttons
export const FooterActions = ({ onSave, onComplete }: FooterActionsProps) => {
  return (
    <footer className="bg-white rounded-lg border border-slate-200 p-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-slate-700">
      {/* Informational message on validation */}
      <div className="flex items-start gap-2 text-slate-600">
        <FaInfoCircle className="text-blue-600 mt-1" />
        <span>Review all quantities and locations before completing</span>
      </div>

      {/* Save & Complete Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-end">
        <button
          className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-md px-5 py-2 flex items-center justify-center gap-2 cursor-pointer"
          onClick={onSave}
        >
          <FaBookmark />
          Save &amp; Receive Later
        </button>

        <button
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-md px-5 py-2 flex items-center justify-center gap-2 cursor-pointer"
          onClick={onComplete}
        >
          <FaCheckCircle />
          Complete GRN &amp; Update Inventory
        </button>
      </div>
    </footer>
  );
};
