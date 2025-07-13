"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

interface FormHeaderProps {
  title: string;
  description: string;
  onCancel: () => void;
  onSave: () => void;
  isSubmitting: boolean; // 👈 NEW
}

const FormHeader: React.FC<FormHeaderProps> = ({
  title,
  description,
  onCancel,
  onSave,
  isSubmitting, // 👈 NEW
}) => {
  const router = useRouter();

  return (
    <header className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-3">
        <button
          type="button"
          onClick={() => {
            onCancel();
            router.push("/inventory");
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
          className="bg-[#10B981] hover:bg-[#0f9e6e] text-white text-sm font-semibold rounded-md px-5 py-2.5 transition cursor-pointer disabled:opacity-50"
        >
          {isSubmitting ? "Saving..." : "Save Product"}
        </button>
      </div>
    </header>
  );
};

export default FormHeader;
