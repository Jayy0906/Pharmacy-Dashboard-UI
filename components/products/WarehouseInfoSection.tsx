import React from "react";
import { FaWarehouse, FaMapMarkerAlt } from "react-icons/fa";

interface Product {
  stockQuantity: number;
  allocated: number;
  available: number;
  location: string;
  expiry: string;
  stockStatus: string;
}

const WarehouseInfoSection: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <section className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
      <h2 className="font-semibold text-[#334155] mb-3 md:mb-4 flex items-center gap-2">
        <FaWarehouse className="text-[#10B981]" />
        <span>Warehouse Information</span>
      </h2>

      <div className="mb-3 text-sm">
        <p className="text-[#475569] mb-1">Quantity in Stock</p>
        <div className="flex items-center gap-2 font-extrabold text-lg text-[#1E293B]">
          {product.stockQuantity}
          <span className="flex items-center gap-1 bg-[#DCFCE7] text-[#15803D] text-xs font-semibold rounded-full px-2 py-[2px]">
            <div className="w-2 h-2 rounded-full bg-[#15803D]"></div>
            {product.stockStatus}
          </span>
        </div>
      </div>

      <div className="mb-3 text-sm">
        <p className="text-[#475569] mb-1">Allocated to Prescriptions</p>
        <p className="font-semibold text-[#B45309]">{product.allocated}</p>
      </div>

      <div className="mb-3 text-sm">
        <p className="text-[#475569] mb-1">Available Quantity</p>
        <p className="font-semibold text-[#15803D]">{product.available}</p>
      </div>

      <div className="mb-3 text-sm">
        <p className="text-[#475569] mb-1">Location</p>
        <div className="inline-flex items-center gap-1 bg-[#F1F5F9] text-[#475569] text-xs font-semibold rounded-md px-3 py-1">
          <FaMapMarkerAlt />
          {product.location}
        </div>
      </div>

      <div className="text-sm">
        <p className="text-[#475569] mb-1">Expiry Date</p>
        <p className="font-semibold text-[#1E293B]">{product.expiry}</p>
      </div>
    </section>
  );
};

export default WarehouseInfoSection;
