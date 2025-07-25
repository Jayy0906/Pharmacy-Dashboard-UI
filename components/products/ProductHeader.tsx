import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

/**
 * Interface for ProductHeaderProps.
 * Defines the properties expected by the ProductHeader component.
 */
interface ProductHeaderProps {
  title: string; // The main title of the product (e.g., product name).
  description: string; // A short description or subtitle for the product.
  onEdit: () => void; // Callback function to be called when the "Edit Product" button is clicked.
  onDelete: () => void; // Callback function to be called when the "Delete" button is clicked.
}

/**
 * ProductHeader Component
 *
 * Displays the product title and description, along with action buttons for
 * editing and deleting the product.
 *
 * @param {object} props - The component's properties.
 * @param {string} props.title - The main title of the product.
 * @param {string} props.description - A descriptive subtitle for the product.
 * @param {function} props.onEdit - Callback for the edit button.
 * @param {function} props.onDelete - Callback for the delete button.
 */
const ProductHeader: React.FC<ProductHeaderProps> = ({
  title,
  description,
  onEdit,
  onDelete,
}) => {
  return (
    // Header container with responsive flexbox styling
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6 gap-4">
      {/* Product Title and Description */}
      <div>
        <h1 className="text-xl md:text-2xl font-bold leading-tight text-gray-900">
          {title}
        </h1>
        <p className="text-gray-600 text-xs md:text-sm lg:text-base font-medium mt-1">
          {description}
        </p>
      </div>
      {/* Action Buttons (Edit and Delete) */}
      <div className="flex gap-3">
        {/* Edit Product Button */}
        <button
          onClick={onEdit} // Attaches the onEdit callback to the button's click event
          className="flex items-center gap-2 bg-[#10B981] hover:bg-[#0f9e6f] text-white text-xs md:text-sm font-semibold rounded-md px-3 md:px-4 py-1.5 md:py-2 cursor-pointer"
        >
          {/* Edit icon */}
          <FaEdit className="text-xs md:text-sm" />
          <span>Edit Product</span>
        </button>
        {/* Delete Button */}
        <button
          onClick={onDelete} // Attaches the onDelete callback to the button's click event
          className="flex items-center gap-2 border border-[#F87171] text-[#F87171] text-xs md:text-sm font-semibold rounded-md px-3 md:px-4 py-1.5 md:py-2 hover:bg-[#FEE2E2] cursor-pointer"
        >
          {/* Trash icon */}
          <FaTrashAlt className="text-xs md:text-sm" />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default ProductHeader;
