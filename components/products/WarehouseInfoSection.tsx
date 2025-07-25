import React from "react";
import { FaWarehouse, FaMapMarkerAlt } from "react-icons/fa";

/**
 * Interface for the Product object specific to warehouse information.
 * Defines the structure of the product warehouse data used in this component.
 */
interface Product {
  stockQuantity: number; // Total quantity of the product in stock.
  allocated: number; // Quantity of the product allocated to prescriptions.
  available: number; // Quantity of the product available for new orders.
  location: string; // Storage location of the product in the warehouse.
  expiry: string; // Expiry date of the product.
  stockStatus: string; // Current stock status (e.g., "In Stock", "Low Stock").
}

/**
 * WarehouseInfoSection Component
 *
 * Displays detailed warehouse information for a product, including
 * stock quantity, allocated quantity, available quantity, location, and expiry date.
 *
 * @param {object} props - The component's properties.
 * @param {Product} props.product - An object containing the product's warehouse details.
 */
const WarehouseInfoSection: React.FC<{ product: Product }> = ({ product }) => {
  return (
    // Section container with styling for background, padding, rounded corners, and shadow.
    <section className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
      {/* Section title for Warehouse Information */}
      <h2 className="font-semibold text-[#334155] mb-3 md:mb-4 flex items-center gap-2">
        {/* Warehouse icon for visual representation */}
        <FaWarehouse className="text-[#10B981]" />
        <span>Warehouse Information</span>
      </h2>

      {/* Quantity in Stock Display */}
      <div className="mb-3 text-sm">
        <p className="text-[#475569] mb-1">Quantity in Stock</p>
        <div className="flex items-center gap-2 font-extrabold text-lg text-[#1E293B]">
          {product.stockQuantity}
          {/* Stock Status (e.g., "In Stock", "Low Stock") */}
          <span className="flex items-center gap-1 bg-[#DCFCE7] text-[#15803D] text-xs font-semibold rounded-full px-2 py-[2px]">
            {/* Status indicator dot */}
            <div className="w-2 h-2 rounded-full bg-[#15803D]"></div>
            {product.stockStatus}
          </span>
        </div>
      </div>

      {/* Allocated to Prescriptions Quantity */}
      <div className="mb-3 text-sm">
        <p className="text-[#475569] mb-1">Allocated to Prescriptions</p>
        <p className="font-semibold text-[#B45309]">{product.allocated}</p>
      </div>

      {/* Available Quantity */}
      <div className="mb-3 text-sm">
        <p className="text-[#475569] mb-1">Available Quantity</p>
        <p className="font-semibold text-[#15803D]">{product.available}</p>
      </div>

      {/* Location */}
      <div className="mb-3 text-sm">
        <p className="text-[#475569] mb-1">Location</p>
        {/* Display of product location with a map marker icon */}
        <div className="inline-flex items-center gap-1 bg-[#F1F5F9] text-[#475569] text-xs font-semibold rounded-md px-3 py-1">
          <FaMapMarkerAlt />
          {product.location}
        </div>
      </div>

      {/* Expiry Date */}
      <div className="text-sm">
        <p className="text-[#475569] mb-1">Expiry Date</p>
        <p className="font-semibold text-[#1E293B]">{product.expiry}</p>
      </div>
    </section>
  );
};

export default WarehouseInfoSection;
