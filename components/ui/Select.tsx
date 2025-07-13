import React from "react";

interface SelectProps {
  id: string;
  label: string;
  options: { value: string; label: string }[];
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  id,
  label,
  options,
  required = false,
  value,
  onChange,
  disabled = false,
  className = "",
}) => {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-xs font-semibold text-[#475569] mb-1"
      >
        {label}
        {required && " *"}
      </label>
      <select
        id={id}
        required={required}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full rounded-md border border-[#CBD5E1] cursor-pointer ${
          disabled ? "bg-[#F1F5F9]" : "bg-white"
        } text-[#0F172A] text-sm font-semibold px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
