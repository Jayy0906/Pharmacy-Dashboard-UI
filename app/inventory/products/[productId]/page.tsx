"use client";

import React, { use } from "react";

// Importing UI sections for product detail view
import ProductHeader from "@/components/products/ProductHeader";
import GeneralInfoSection from "@/components/products/GeneralInfoSection";
import PricingInfoSection from "@/components/products/PricingInfoSection";
import POSRestrictionsSection from "@/components/products/POSRestrictionsSection";
import BarcodeSection from "@/components/products/BarcodeSection";
import TransactionHistorySection from "@/components/products/TransactionHistorySection";
import WarehouseInfoSection from "@/components/products/WarehouseInfoSection";
import ProductImagesSection from "@/components/products/ProductImagesSection";

// Server component with `params` for dynamic route [productId]
const ProductDetailsPage = ({
  params,
}: {
  params: Promise<{ productId: string }>; // Receiving the productId as a promise
}) => {
  const { productId } = use(params); // Unwrapping the promise using experimental `use` hook

  // Mock product data (ideally this would come from a real API)
  const product = {
    id: productId,
    name: "Paracetamol 500mg Tablets",
    description:
      "Pain relief tablets containing 500mg paracetamol. For mild to moderate pain and fever reduction.",
    sku: "PAR-500-001",
    group: "Pain Relief",
    subgroup: "Analgesics",
    brand: "Pfizer",
    model: "Standard",
    size: "Pack of 24",
    costPrice: 2.5,
    vatRate: 20,
    sellingPrice: 3.0,
    taxRate: "Standard Rate",
    barcode: "1234567890123",
    stockQuantity: 150,
    allocated: 25,
    available: 125,
    location: "Shelf A1",
    expiry: "December 2025",
    status: "Active",
    stockStatus: "Healthy Stock",
  };

  // Edit action handler (can be used to navigate to the edit form)
  const handleEdit = () => {
    console.log("Edit product clicked");
    // TODO: Navigate to edit page
  };

  // Delete action handler (can show confirmation modal)
  const handleDelete = () => {
    console.log("Delete product clicked");
    // TODO: Implement delete logic
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <div className="w-full mx-auto">
        {/* Product title, description and edit/delete buttons */}
        <ProductHeader
          title="Product Details"
          description="View and update information for this medicine."
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {/* Two-column layout (main content + sidebar) */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          {/* Main product details section */}
          <div className="flex-1 space-y-4 md:space-y-6">
            <GeneralInfoSection product={product} />
            <PricingInfoSection product={product} />
            <POSRestrictionsSection />
            <BarcodeSection barcode={product.barcode} />
            <TransactionHistorySection />
          </div>

          {/* Sidebar: warehouse info and product images */}
          <aside className="w-full lg:w-[320px] space-y-4 md:space-y-6">
            <WarehouseInfoSection product={product} />
            <ProductImagesSection />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
