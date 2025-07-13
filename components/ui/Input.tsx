import React from "react";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  step?: string;
  min?: number;
  className?: string;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  placeholder = "",
  required = false,
  value,
  onChange,
  disabled = false,
  step,
  min,
  className = "",
  icon,
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
      <div className="relative">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          readOnly={onChange === undefined} // ✅ Fix console warning
          disabled={disabled}
          step={step}
          min={min}
          className={`w-full rounded-md border border-[#CBD5E1] ${
            disabled ? "bg-[#F1F5F9] cursor-not-allowed" : "bg-white"
          } text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent ${
            icon ? "pr-8" : ""
          }`}
        />
        {icon && (
          <div className="absolute right-2 top-2.5 text-[#94A3B8] pointer-events-none">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
