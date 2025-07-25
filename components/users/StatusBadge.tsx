// components/ui/StatusBadge.tsx
import { ReactNode } from "react";

interface StatusBadgeProps {
  children: ReactNode;
  status: "Active" | "Inactive";
}

export default function StatusBadge({ children, status }: StatusBadgeProps) {
  const activeClasses = "bg-green-100 text-green-700";
  const inactiveClasses = "bg-red-100 text-red-700";

  return (
    <span
      className={`inline-flex items-center gap-1 text-xs font-semibold rounded-full px-3 py-1 ${status === "Active" ? activeClasses : inactiveClasses}`}
    >
      <span
        className={`w-2 h-2 rounded-full block ${status === "Active" ? "bg-green-700" : "bg-red-700"}`}
      ></span>
      {children}
    </span>
  );
}
