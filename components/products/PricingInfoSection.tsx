import React from "react";
import { FaPoundSign } from "react-icons/fa";

interface Product {
  costPrice: number;
  vatRate: number;
  sellingPrice: number;
  taxRate: string;
}

const PricingInfoSection: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <section className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
      <h2 className="font-semibold text-[#334155] mb-3 md:mb-4 flex items-center gap-2">
        <FaPoundSign className="text-[#10B981]" />
        <span>Pricing Information</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 text-sm">
        <div>
          <label className="block text-xs font-semibold text-[#475569] mb-1">
            Cost Price
          </label>
          <p className="font-semibold text-[#1E293B] text-lg">
            £{product.costPrice.toFixed(2)}
          </p>
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#475569] mb-1">
            VAT Rate
          </label>
          <p className="font-semibold text-[#1E293B] text-sm">
            {product.vatRate}%
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <label className="block text-xs font-semibold text-[#475569] mb-1">
              Selling Price
            </label>
            <p className="font-semibold text-[#10B981] text-lg">
              £{product.sellingPrice.toFixed(2)}
            </p>
          </div>
          <div
            className="w-5 h-5 rounded-full bg-[#E2E8F0] flex items-center justify-center text-[#64748B] text-xs font-semibold cursor-pointer select-none"
            title="Auto-calculated selling price"
          >
            i
          </div>
        </div>
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
