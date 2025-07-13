import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

interface ProductHeaderProps {
  title: string;
  description: string;
  onEdit: () => void;
  onDelete: () => void;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({
  title,
  description,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6 gap-4">
      <div>
        <h1 className="text-xl md:text-2xl font-bold leading-tight text-gray-900">
          {title}
        </h1>
        <p className="text-gray-600 text-xs md:text-sm lg:text-base font-medium mt-1">
          {description}
        </p>
      </div>
      <div className="flex gap-3">
        <button
          onClick={onEdit}
          className="flex items-center gap-2 bg-[#10B981] hover:bg-[#0f9e6f] text-white text-xs md:text-sm font-semibold rounded-md px-3 md:px-4 py-1.5 md:py-2 cursor-pointer"
        >
          <FaEdit className="text-xs md:text-sm" />
          <span>Edit Product</span>
        </button>
        <button
          onClick={onDelete}
          className="flex items-center gap-2 border border-[#F87171] text-[#F87171] text-xs md:text-sm font-semibold rounded-md px-3 md:px-4 py-1.5 md:py-2 hover:bg-[#FEE2E2] cursor-pointer"
        >
          <FaTrashAlt className="text-xs md:text-sm" />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default ProductHeader;
