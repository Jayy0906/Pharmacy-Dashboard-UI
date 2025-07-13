import React, { useState } from "react";
import Input from "../ui/Input";
import Select from "../ui/Select";
import { FaInfoCircle, FaPoundSign } from "react-icons/fa";
import { TAX_RATES } from "../../lib/constants";

const PricingInformation: React.FC = () => {
  const [costPrice, setCostPrice] = useState(0);
  const [vat, setVat] = useState(20);

  const calculateSellingPrice = () => {
    return costPrice * (1 + vat / 100);
  };

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          id="costPrice"
          label="Cost Price (£)"
          type="number"
          step="0.01"
          min={0}
          value={costPrice}
          onChange={(e) => setCostPrice(parseFloat(e.target.value) || 0)}
          required
          icon={<FaPoundSign />}
        />
        <Input
          id="vat"
          label="VAT (%)"
          type="number"
          step="0.01"
          min={0}
          value={vat}
          onChange={(e) => setVat(parseFloat(e.target.value) || 0)}
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          id="standardCost"
          label="Standard Cost"
          type="number"
          step="0.01"
          min={0}
          value={0}
        />
        <div>
          <Input
            id="sellingPrice"
            label="Selling Price (Auto-calculated)"
            type="number"
            step="0.01"
            min={0}
            value={calculateSellingPrice().toFixed(2)}
            disabled
            icon={<FaInfoCircle title="Auto-calculated selling price" />}
          />
        </div>
      </div>

      <Select
        id="taxRate"
        label="Tax Rate"
        options={TAX_RATES}
        value="Standard Rate (20%)"
      />
    </div>
  );
};

export default PricingInformation;
