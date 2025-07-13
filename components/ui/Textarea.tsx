import React from "react";

interface TextareaProps {
  id: string;
  label: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  id,
  label,
  placeholder = "",
  rows = 3,
  required = false,
  value,
  onChange,
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
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-[#CBD5E1] bg-white text-[#94A3B8] placeholder-[#94A3B8] text-sm px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
      ></textarea>
    </div>
  );
};

export default Textarea;
