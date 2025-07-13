import React from "react";

interface CheckboxProps {
  id: string;
  label: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  labelClassName?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
  className = "",
  labelClassName = "",
}) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        readOnly={onChange === undefined} // ✅ prevents warning when onChange is not passed
        className="w-4 h-4 text-[#2563EB] border border-[#CBD5E1] rounded focus:ring-2 focus:ring-[#2563EB]"
      />
      <label
        htmlFor={id}
        className={`text-sm font-semibold text-[#475569] ${labelClassName}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
