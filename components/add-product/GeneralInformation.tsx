import React from "react";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Textarea from "../ui/Textarea";
import Checkbox from "../ui/Checkbox";
import { PRODUCT_GROUPS, SUBGROUPS } from "../../lib/constants";

const GeneralInformation: React.FC = () => {
  return (
    <div className="space-y-5">
      {/* Product Name field */}
      <Input
        id="productName"
        label="Product Name"
        placeholder="Enter product name"
        required
      />

      {/* SKU and Status checkbox */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 gap-4">
        <div className="flex-1 min-w-[180px]">
          <Input
            id="sku"
            label="SKU/PNO"
            placeholder="e.g., PAR-500-001"
            required
          />
        </div>
        <Checkbox
          id="statusActive"
          label="Active"
          checked
          labelClassName="text-[#2563EB]"
        />
      </div>

      {/* Product description textarea */}
      <Textarea
        id="description"
        label="Description"
        placeholder="Product description..."
      />

      {/* Product group and subgroup */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Select
          id="productGroup"
          label="Product Group"
          options={PRODUCT_GROUPS}
          required
        />
        <Select id="subgroup" label="Subgroup" options={SUBGROUPS} />
      </div>

      {/* Brand and model input */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input id="brand" label="Brand" placeholder="Brand name" />
        <Input id="model" label="Model" placeholder="Model" />
      </div>

      {/* Size and color input */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input id="size" label="Size" placeholder="e.g., 500mg, 10ml" />
        <Input id="color" label="Color" placeholder="Color" />
      </div>
    </div>
  );
};

export default GeneralInformation;
