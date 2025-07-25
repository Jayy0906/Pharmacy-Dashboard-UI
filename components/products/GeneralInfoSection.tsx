import React from "react";
import { FaInfoCircle } from "react-icons/fa";

/**
 * Interface for the Product object.
 * Defines the structure of the product data used in this component.
 */
interface Product {
  name: string;
  description: string;
  sku: string;
  group: string;
  subgroup: string;
  brand: string;
  model: string;
  size: string;
  status: string;
}

/**
 * GeneralInfoSection Component
 *
 * Displays general information about a product, including its name, description,
 * SKU, product group, subgroup, brand, model, and size.
 *
 * @param {object} props - The component's properties.
 * @param {Product} props.product - An object containing the product's general details.
 */
const GeneralInfoSection: React.FC<{ product: Product }> = ({ product }) => {
  return (
    // Section container with styling for background, padding, rounded corners, and shadow.
    <section className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
      {/* Section title for General Information */}
      <h2 className="font-semibold text-[#334155] mb-3 md:mb-4 flex items-center gap-2">
        {/* Info icon for visual representation */}
        <FaInfoCircle className="text-[#10B981]" />
        <span>General Information</span>
      </h2>

      {/* Product Name and Status Display */}
      <div className="mb-3 md:mb-4">
        <label className="block text-xs font-semibold text-[#475569] mb-1">
          Product Name
        </label>
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-[#1E293B] text-sm md:text-base">
            {product.name}
          </h3>
          {/* Product Status (e.g., "Active", "Inactive") */}
          <div className="flex items-center gap-1 bg-[#DCFCE7] text-[#15803D] text-xs font-semibold rounded-full px-2 py-[2px]">
            {/* Status indicator dot */}
            <div className="w-2 h-2 rounded-full bg-[#15803D]"></div>
            {product.status}
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="mb-4">
        <label className="block text-xs font-semibold text-[#475569] mb-1">
          Description
        </label>
        <p className="bg-[#F1F5F9] rounded-md p-3 text-xs md:text-sm text-[#475569] leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Grid for SKU, Product Group, Subgroup, Brand, Model, and Size */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 text-sm">
        {/* SKU / PNO */}
        <div>
          <label className="block text-xs font-semibold text-[#475569] mb-1">
            SKU / PNO
          </label>
          {/* Read-only input for SKU */}
          <input
            className="w-full bg-[#F1F5F9] rounded-md px-3 py-2 text-[#334155] font-semibold text-sm border border-transparent focus:outline-none"
            readOnly
            type="text"
            value={product.sku}
          />
        </div>
        {/* Product Group */}
        <div>
          <label className="block text-xs font-semibold text-[#475569] mb-1">
            Product Group
          </label>
          <p className="font-semibold text-[#1E293B] text-sm">
            {product.group}
          </p>
        </div>
        {/* Subgroup */}
        <div>
          <label className="block text-xs font-semibold text-[#475569] mb-1">
            Subgroup
          </label>
          <p className="font-semibold text-[#1E293B] text-sm">
            {product.subgroup}
          </p>
        </div>
        {/* Brand */}
        <div>
          <label className="block text-xs font-semibold text-[#475569] mb-1">
            Brand
          </label>
          <p className="font-semibold text-[#1E293B] text-sm">
            {product.brand}
          </p>
        </div>
        {/* Model */}
        <div>
          <label className="block text-xs font-semibold text-[#475569] mb-1">
            Model
          </label>
          <p className="font-semibold text-[#1E293B] text-sm">
            {product.model}
          </p>
        </div>
        {/* Size */}
        <div>
          <label className="block text-xs font-semibold text-[#475569] mb-1">
            Size
          </label>
          <p className="font-semibold text-[#1E293B] text-sm">{product.size}</p>
        </div>
      </div>
    </section>
  );
};

export default GeneralInfoSection;
