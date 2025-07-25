import React from "react";
import Checkbox from "../ui/Checkbox";
import { FaInfoCircle } from "react-icons/fa";

const POSRestrictions: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* POS-related checkboxes for age restriction and manual verification */}
      <div className="space-y-2">
        <Checkbox id="age18" label="18+ Only" />
        <Checkbox id="ageRestricted" label="Age-Restricted Sale" />
        <Checkbox
          id="manualAgeConfirm"
          label="Requires Manual Age Confirmation"
        />
      </div>

      {/* Warning box explaining effect on POS behavior */}
      <div className="bg-[#FFEDD5] border border-[#FBBF24] rounded-md p-2 text-[10px] text-[#B45309] font-semibold flex items-center gap-1">
        <FaInfoCircle className="text-[11px]" />
        <span>
          If enabled, POS will require pharmacist confirmation before sale.
        </span>
      </div>
    </div>
  );
};

export default POSRestrictions;
