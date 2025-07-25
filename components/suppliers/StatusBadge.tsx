// components/suppliers/StatusBadge.tsx

// Props interface specifying allowed status values
interface StatusBadgeProps {
  status: "Active" | "Inactive"; // Only accepts these two values
}

/**
 * StatusBadge Component
 *
 * Displays a small pill-shaped badge with a color and label
 * based on the supplier's status ("Active" or "Inactive").
 */
export const StatusBadge = ({ status }: StatusBadgeProps) => {
  // Determine if status is "Active"
  const isActive = status === "Active";

  return (
    <span
      className={`
        inline-flex items-center gap-2
        ${isActive ? "bg-[#D1FAE5] text-[#15803D]" : "bg-[#FEE2E2] text-[#B91C1C]"}
        text-xs font-semibold rounded-full px-3 py-1
      `}
    >
      {/* Colored circle indicator */}
      <span
        className={`
          w-3 h-3 rounded-full block
          ${isActive ? "bg-[#15803D]" : "bg-[#B91C1C]"}
        `}
      ></span>

      {/* Status text label: "Active" or "Inactive" */}
      {status}
    </span>
  );
};
