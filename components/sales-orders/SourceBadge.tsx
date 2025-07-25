// components/sales-orders/SourceBadge.tsx
interface SourceBadgeProps {
  source: "Prescription" | "POS";
}

export default function SourceBadge({ source }: SourceBadgeProps) {
  const badgeClasses = {
    Prescription: "bg-[#DBEAFE] text-[#2563EB]",
    POS: "bg-[#FBD5B5] text-[#C2410C]",
  };

  const iconClasses = {
    Prescription: "fas fa-prescription-bottle-alt",
    POS: "fas fa-cash-register",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 ${badgeClasses[source]} text-xs font-semibold rounded-full px-2 py-0.5 select-none`}
    >
      <i className={`${iconClasses[source]} text-[10px]`}></i>
      {source}
    </span>
  );
}
