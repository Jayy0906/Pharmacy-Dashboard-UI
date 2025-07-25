// components/sales-orders/StatusBadge.tsx
interface StatusBadgeProps {
  status: "Completed";
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1 bg-[#DCFCE7] text-[#22C55E] text-xs font-semibold rounded-full px-2 py-0.5 select-none">
      <i className="fas fa-check-circle text-[10px]"></i>
      {status}
    </span>
  );
}
