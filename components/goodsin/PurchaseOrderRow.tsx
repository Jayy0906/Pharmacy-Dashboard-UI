"use client";

import { useRouter } from "next/navigation";

interface PurchaseOrderRowProps {
  poNumber: string;
  supplier: {
    name: string;
    email: string;
  };
  createdDate: string;
  status: string;
  expectedDelivery: string;
  completed: boolean;
}

// Renders a single row in the PO table
export default function PurchaseOrderRow({
  poNumber,
  supplier,
  createdDate,
  status,
  expectedDelivery,
  completed,
}: PurchaseOrderRowProps) {
  const router = useRouter();

  // Status color map
  const statusClasses = {
    Sent: "bg-yellow-100 text-yellow-700",
    Incomplete: "bg-orange-100 text-orange-700",
    Complete: "bg-green-100 text-green-700",
  };

  // Handle button click to go to Receive page
  const handleReceiveClick = () => {
    router.push(`/goods-in/receive-purchase-order/${poNumber}`);
  };

  return (
    <tr className="border-t border-gray-200">
      <td className="py-4 px-4 font-semibold text-gray-900 whitespace-nowrap">
        {poNumber}
      </td>
      <td className="py-4 px-4">
        <p className="font-semibold text-gray-900 whitespace-nowrap">
          {supplier.name}
        </p>
        <p className="text-xs text-gray-500">{supplier.email}</p>
      </td>
      <td className="py-4 px-4 font-semibold text-gray-900 whitespace-nowrap">
        {createdDate}
      </td>
      <td className="py-4 px-4">
        <span
          className={`inline-block text-xs font-semibold px-3 py-1 rounded-full select-none ${
            statusClasses[status as keyof typeof statusClasses] ||
            "bg-gray-100 text-gray-500"
          }`}
        >
          {status}
        </span>
      </td>
      <td className="py-4 px-4 font-semibold text-gray-900 whitespace-nowrap">
        {expectedDelivery}
      </td>
      <td className="py-4 px-4">
        <button
          type="button"
          disabled={completed}
          onClick={handleReceiveClick}
          className={`inline-flex items-center gap-2 font-semibold rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 ${
            completed
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-teal-600 text-white hover:bg-teal-700 cursor-pointer"
          }`}
        >
          <i className={`fas ${completed ? "fa-check" : "fa-box-open"}`}></i>
          {completed ? "Completed" : "Receive"}
        </button>
      </td>
    </tr>
  );
}
