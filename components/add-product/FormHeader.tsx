"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

interface FormHeaderProps {
  title: string;
  description: string;
  onCancel: () => void;
  onSave: () => void;
  isSubmitting: boolean;
}

const FormHeader: React.FC<FormHeaderProps> = ({
  title,
  description,
  onCancel,
  onSave,
  isSubmitting,
}) => {
  const router = useRouter();

  return (
    // Form top section with back button, title, description, and action buttons
    <header className="flex items-center justify-between mb-6">
      {/* Back button and page title */}
      <div className="flex items-center space-x-3">
        <button
          type="button"
          onClick={() => {
            onCancel();
            router.push("/inventory"); // Navigate back to inventory page
          }}
          className="text-[#475569] hover:text-[#1E293B] cursor-pointer transition"
        >
          <FaArrowLeft className="text-lg" />
        </button>

        <div>
          <h1 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
            {title}
          </h1>
          <p className="text-gray-600 text-xs md:text-sm lg:text-base font-medium">
            {description}
          </p>
        </div>
      </div>

      {/* Right-side Save and Cancel buttons (hidden on small screens) */}
      <div className="hidden md:block flex space-x-3">
        <button
          type="button"
          onClick={onCancel}
          disabled={isSubmitting}
          className="bg-white border border-[#CBD5E1] rounded-md text-[#475569] text-sm font-medium px-4 py-2 hover:bg-[#F1F5F9] transition cursor-pointer disabled:opacity-50"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={onSave}
          disabled={isSubmitting}
          className="bg-teal-700 hover:bg-teal-600 text-white text-sm font-semibold rounded-md px-5 py-2.5 transition cursor-pointer disabled:opacity-50"
        >
          {isSubmitting ? "Saving..." : "Save Product"}
        </button>
      </div>
    </header>
  );
};

export default FormHeader;
