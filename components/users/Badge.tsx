// components/ui/Badge.tsx
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  color: "purple" | "blue" | "orange" | "teal";
}

const colorClasses = {
  purple: "bg-purple-100 text-purple-800",
  blue: "bg-blue-100 text-blue-800",
  orange: "bg-orange-100 text-orange-800",
  teal: "bg-teal-100 text-teal-800",
};

export default function Badge({ children, color }: BadgeProps) {
  return (
    <span
      className={`inline-block text-xs font-semibold rounded-full px-3 py-1 ${colorClasses[color]}`}
    >
      {children}
    </span>
  );
}
