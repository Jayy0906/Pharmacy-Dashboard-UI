import React from "react";
import Input from "../ui/Input";
import Select from "../ui/Select";
import { FaCalendarAlt, FaBarcode } from "react-icons/fa";
import { WAREHOUSE_LOCATIONS } from "../../lib/constants";

const WarehouseInformation: React.FC = () => {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          id="initialStock"
          label="Initial Stock Quantity"
          type="number"
          min={0}
          value={0}
          required
        />
        <Select
          id="location"
          label="Location"
          options={WAREHOUSE_LOCATIONS}
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          id="expiryDate"
          label="Expiry Date"
          type="date"
          icon={<FaCalendarAlt />}
        />
        <div>
          <Input
            id="barcode"
            label="Barcode"
            placeholder="Scan or enter barcode"
            icon={<FaBarcode />}
          />
        </div>
      </div>
    </div>
  );
};

export default WarehouseInformation;
