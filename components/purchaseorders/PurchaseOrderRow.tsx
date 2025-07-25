// components/purchaseorders/PurchaseOrderRow.tsx
import { PurchaseOrder } from "@/app/purchase-orders/types";

interface PurchaseOrderRowProps {
  order: PurchaseOrder;
}

export default function PurchaseOrderRow({ order }: PurchaseOrderRowProps) {
  const colorClasses = {
    purple: "bg-purple-100 text-purple-800",
    orange: "bg-orange-100 text-orange-800",
    green: "bg-green-100 text-green-800",
    yellow: "bg-yellow-100 text-yellow-800",
    red: "bg-red-100 text-red-800",
  };

  const actionIcons = {
    view: { icon: "fa-eye", label: "View details", color: "text-blue-500" },
    refresh: {
      icon: "fa-sync-alt",
      label: "Refresh status",
      color: "text-gray-500",
    },
    edit: { icon: "fa-edit", label: "Edit", color: "text-green-500" },
    cancel: { icon: "fa-ban", label: "Cancel", color: "text-red-500" },
  };

  // Format dates for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <tr className="hover:bg-gray-50">
      <td className="whitespace-nowrap px-4 py-3 text-blue-600 font-semibold underline cursor-pointer">
        {order.id}
      </td>
      <td className="whitespace-nowrap px-4 py-3 font-semibold">
        {order.supplier}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-gray-500">
        {formatDate(order.createdDate)}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-gray-500">
        {formatDate(order.expectedDelivery)}
      </td>
      <td className="whitespace-nowrap px-4 py-3">{order.items}</td>
      <td className="whitespace-nowrap px-4 py-3 font-bold">
        ${order.totalCost.toFixed(2)}
      </td>
      <td className="whitespace-nowrap px-4 py-3">
        <span
          className={`inline-block rounded-full text-xs font-semibold px-2 py-0.5 ${colorClasses[order.statusColor]}`}
        >
          {order.status}
        </span>
      </td>
      <td className="whitespace-nowrap px-4 py-3 space-x-3">
        {order.actions.map((action) => (
          <button
            key={action}
            aria-label={actionIcons[action].label}
            className={actionIcons[action].color}
            title={actionIcons[action].label}
          >
            <i className={`cursor-pointer fas ${actionIcons[action].icon}`}></i>
          </button>
        ))}
      </td>
    </tr>
  );
}
