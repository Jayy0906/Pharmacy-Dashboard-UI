// components/supplier-details/StatusBadge.tsx

// Define the shape of props the component expects.
// This ensures type safety and clarity in usage.
interface StatusBadgeProps {
  status: "Active" | "Inactive"; // Only two allowed status values
}

/**
 * StatusBadge Component
 *
 * A reusable badge component that visually represents the supplier's status.
 * - Shows a small colored dot and the status text ("Active" or "Inactive")
 * - Green for "Active", Red for "Inactive"
 */
export const StatusBadge = ({ status }: StatusBadgeProps) => {
  // Determine if the status is "Active" for conditional styling
  const isActive = status === "Active";

  return (
    <span
      className={`inline-flex items-center rounded-full text-xs font-medium px-2.5 py-0.5 ${
        isActive ? "bg-[#D1FAE5] text-[#065F46]" : "bg-[#FEE2E2] text-[#991B1B]"
      }`}
    >
      {/* Colored dot on the left indicating status */}
      <span
        className={`w-2 h-2 rounded-full inline-block mr-1 ${
          isActive ? "bg-[#065F46]" : "bg-[#991B1B]"
        }`}
      ></span>
      {status}
    </span>
  );
};
