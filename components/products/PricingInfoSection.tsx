import React from "react";
import { FaPoundSign } from "react-icons/fa";

/**
 * Interface for the Product object specific to pricing information.
 * Defines the structure of the product pricing data used in this component.
 */
interface Product {
  costPrice: number;
  vatRate: number;
  sellingPrice: number;
  taxRate: string;
}

/**
 * PricingInfoSection Component
 *
 * Displays pricing information for a product, including cost price, VAT rate,
 * selling price, and tax rate.
 *
 * @param {object} props - The component's properties.
 * @param {Product} props.product - An object containing the product's pricing details.
 */
const PricingInfoSection: React.FC<{ product: Product }> = ({ product }) => {
  return (
    // Section container with styling for background, padding, rounded corners, and shadow.
    <section className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
      {/* Section title for Pricing Information */}
      <h2 className="font-semibold text-[#334155] mb-3 md:mb-4 flex items-center gap-2">
        {/* Pound sign icon for visual representation of currency */}
        <FaPoundSign className="text-[#10B981]" />
        <span>Pricing Information</span>
      </h2>

      {/* Grid layout for various pricing details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 text-sm">
        {/* Cost Price */}
        <div>
          <label className="block text-xs font-semibold text-[#475569] mb-1">
            Cost Price
          </label>
          {/* Displays the cost price formatted to two decimal places */}
          <p className="font-semibold text-[#1E293B] text-lg">
            £{product.costPrice.toFixed(2)}
          </p>
        </div>
        {/* VAT Rate */}
        <div>
          <label className="block text-xs font-semibold text-[#475569] mb-1">
            VAT Rate
          </label>
          {/* Displays the VAT rate as a percentage */}
          <p className="font-semibold text-[#1E293B] text-sm">
            {product.vatRate}%
          </p>
        </div>
        {/* Selling Price with an info icon */}
        <div className="flex items-center gap-2">
          <div>
            <label className="block text-xs font-semibold text-[#475569] mb-1">
              Selling Price
            </label>
            {/* Displays the selling price formatted to two decimal places, highlighted in green */}
            <p className="font-semibold text-[#10B981] text-lg">
              £{product.sellingPrice.toFixed(2)}
            </p>
          </div>
          {/* Info icon indicating auto-calculated selling price */}
          <div
            className="w-5 h-5 rounded-full bg-[#E2E8F0] flex items-center justify-center text-[#64748B] text-xs font-semibold cursor-pointer select-none"
            title="Auto-calculated selling price" // Tooltip on hover
          >
            i
          </div>
        </div>
        {/* Tax Rate */}
        <div>
          <label className="block text-xs font-semibold text-[#475569] mb-1">
            Tax Rate
          </label>
          <p className="font-semibold text-[#1E293B] text-sm">
            {product.taxRate}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingInfoSection;
