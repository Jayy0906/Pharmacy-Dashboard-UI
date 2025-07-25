import React from "react";
import { FaCheck } from "react-icons/fa";

interface FormFooterProps {
  onSaveDraft: () => void;
  onSaveAdd: () => void;
  isSubmitting: boolean;
}

const FormFooter: React.FC<FormFooterProps> = ({
  onSaveDraft,
  onSaveAdd,
  isSubmitting,
}) => {
  return (
    // Footer with Save Draft and Save + Add buttons
    <footer className="flex justify-end gap-3 mt-6 py-4 border-t border-[#E2E8F0]">
      {/* Save as Draft button */}
      <button
        type="button"
        onClick={onSaveDraft}
        disabled={isSubmitting}
        className="bg-white border border-[#CBD5E1] rounded-md text-[#475569] text-sm font-medium px-5 py-2 hover:bg-[#F1F5F9] transition cursor-pointer disabled:opacity-50"
      >
        Save as Draft
      </button>

      {/* Save and Add button (primary) */}
      <button
        type="button"
        onClick={onSaveAdd}
        disabled={isSubmitting}
        className="bg-teal-700 hover:bg-teal-600 text-white text-sm font-semibold rounded-md px-5 py-2.5 flex items-center gap-2 transition cursor-pointer disabled:opacity-50"
      >
        <FaCheck />
        {isSubmitting ? "Saving..." : "Save & Add Product"}
      </button>
    </footer>
  );
};

export default FormFooter;
