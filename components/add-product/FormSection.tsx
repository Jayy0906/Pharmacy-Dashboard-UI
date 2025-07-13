import React, { ReactNode } from "react";

interface FormSectionProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
}

const FormSection: React.FC<FormSectionProps> = ({
  icon,
  title,
  children,
  className = "",
}) => {
  return (
    <div className={`bg-white rounded-lg p-6 space-y-5 ${className}`}>
      <div className="flex items-center gap-3">
        <div className="flex justify-center items-center w-8 h-8 rounded-md">
          {icon}
        </div>
        <h2 className="font-semibold text-[#0F172A] text-sm leading-tight">
          {title}
        </h2>
      </div>
      <div className="space-y-5">{children}</div>
    </div>
  );
};

export default FormSection;
