// components/sales-orders/PaymentBadge.tsx
interface PaymentBadgeProps {
  method: "Card" | "Cash" | "Other";
}

export default function PaymentBadge({ method }: PaymentBadgeProps) {
  const badgeClasses = {
    Card: "bg-[#E9D5FF] text-[#8B5CF6]",
    Cash: "bg-[#DCFCE7] text-[#22C55E]",
    Other: "bg-[#E0E7FF] text-[#4338CA]",
  };

  const iconClasses = {
    Card: "fas fa-credit-card",
    Cash: "fas fa-money-bill-wave",
    Other: "fas fa-credit-card-blank",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 ${badgeClasses[method]} text-xs font-semibold rounded-full px-2 py-0.5 select-none`}
    >
      <i className={`${iconClasses[method]} text-[10px]`}></i>
      {method}
    </span>
  );
}
