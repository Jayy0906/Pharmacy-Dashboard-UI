// components/ui/Button.tsx
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "success";
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  fullWidthOnMobile?: boolean; // New prop for responsive width
}

export default function Button({
  children,
  variant = "primary",
  icon,
  className = "",
  onClick,
  type = "button",
  fullWidthOnMobile = false, // Default to false
}: ButtonProps) {
  const variantClasses = {
    primary: "bg-teal-600 hover:bg-teal-700 text-white",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-800",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    success: "bg-green-600 hover:bg-green-700 text-white",
  };

  // Responsive width class for mobile
  const responsiveWidthClass = fullWidthOnMobile ? "w-full sm:w-auto" : "";

  return (
    <button
      type={type}
      className={`font-semibold rounded-md px-4 py-2 flex items-center justify-center gap-2 transition-colors cursor-pointer ${variantClasses[variant]} ${responsiveWidthClass} ${className}`}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}
