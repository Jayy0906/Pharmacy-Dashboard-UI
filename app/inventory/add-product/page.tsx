// app/inventory/add-product/page.tsx
"use client";

import React, { useState } from "react";
import FormHeader from "@/components/add-product/FormHeader";
import FormSection from "@/components/add-product/FormSection";
import FormFooter from "@/components/add-product/FormFooter";
import GeneralInformation from "@/components/add-product/GeneralInformation";
import PricingInformation from "@/components/add-product/PricingInformation";
import WarehouseInformation from "@/components/add-product/WarehouseInformation";
import POSRestrictions from "@/components/add-product/POSRestrictions";
import DefaultSupplier from "@/components/add-product/DefaultSupplier";
import ProductImages from "@/components/add-product/ProductImages";
import {
  FaInfoCircle,
  FaPoundSign,
  FaWarehouse,
  FaShieldAlt,
  FaTruck,
  FaImage,
} from "react-icons/fa";

const AddProductPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCancel = () => {
    console.log("Form canceled");
  };

  const handleSave = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      console.log("Product saved");
    }, 1000);
  };

  const handleSaveDraft = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      console.log("Saved as draft");
    }, 1000);
  };

  const handleSaveAdd = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      console.log("Saved and added product");
    }, 1000);
  };

  return (
    <div className="bg-[#F8FAFC] text-[#1E293B] flex flex-col flex-1 w-full">
      <FormHeader
        title="Add New Product"
        description="Add a new Type 4 product to your inventory system."
        onCancel={handleCancel}
        onSave={handleSave}
        isSubmitting={isSubmitting}
      />

      <main className="flex flex-col lg:flex-row gap-6 flex-grow">
        <section className="flex flex-col gap-6 flex-grow max-w-full lg:max-w-[720px]">
          <FormSection
            icon={
              <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-[#DBEAFE] text-[#2563EB]">
                <FaInfoCircle />
              </div>
            }
            title="General Information"
          >
            <GeneralInformation />
          </FormSection>

          <FormSection
            icon={
              <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-[#DCFCE7] text-[#22C55E]">
                <FaPoundSign />
              </div>
            }
            title="Pricing Information"
          >
            <PricingInformation />
          </FormSection>

          <FormSection
            icon={
              <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-[#E9D5FF] text-[#8B5CF6]">
                <FaWarehouse />
              </div>
            }
            title="Warehouse Information"
          >
            <WarehouseInformation />
          </FormSection>
        </section>

        <aside className="flex flex-col gap-6 w-full max-w-full lg:max-w-[360px]">
          <FormSection
            icon={
              <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-[#FFEDD5] text-[#F97316]">
                <FaShieldAlt />
              </div>
            }
            title="POS Restrictions"
            className="p-5 space-y-4"
          >
            <POSRestrictions />
          </FormSection>

          <FormSection
            icon={
              <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-[#BFDBFE] text-[#2563EB]">
                <FaTruck />
              </div>
            }
            title="Default Supplier"
            className="p-5 space-y-4"
          >
            <DefaultSupplier />
          </FormSection>

          <FormSection
            icon={
              <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-[#E2E8F0] text-[#475569]">
                <FaImage />
              </div>
            }
            title="Product Images"
            className="p-5 space-y-4"
          >
            <ProductImages />
          </FormSection>
        </aside>
      </main>

      <FormFooter
        onSaveDraft={handleSaveDraft}
        onSaveAdd={handleSaveAdd}
        isSubmitting={isSubmitting}
      />
    </div>
  );
};

export default AddProductPage;
