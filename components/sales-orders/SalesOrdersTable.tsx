// components/sales-orders/SalesOrdersTable.tsx
import { SalesOrder } from "@/app/sales-orders/types";
import SourceBadge from "./SourceBadge";
import PaymentBadge from "./PaymentBadge";
import StatusBadge from "./StatusBadge";
import Link from "next/link";
import Image from "next/image";

interface SalesOrdersTableProps {
  orders: SalesOrder[];
  isLoading?: boolean;
  error?: string | null;
}

export default function SalesOrdersTable({
  orders,
  isLoading = false,
  error = null,
}: SalesOrdersTableProps) {
  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 flex justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#10B981]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 text-red-500">
        {error}
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 text-center text-gray-500">
        No sales orders found
      </div>
    );
  }

  return (
    <section className="bg-white rounded-lg shadow-sm overflow-x-auto">
      <table className="w-full text-sm text-[#334155] border-collapse min-w-[700px]">
        <thead className="bg-[#F1F5F9] text-[#475569]">
          <tr>
            <th className="text-left font-semibold px-6 py-3 whitespace-nowrap">
              Order ID
            </th>
            <th className="text-left font-semibold px-6 py-3 whitespace-nowrap">
              Customer Name
            </th>
            <th className="text-left font-semibold px-6 py-3 whitespace-nowrap">
              Source
            </th>
            <th className="text-left font-semibold px-6 py-3 whitespace-nowrap">
              Completion Date
            </th>
            <th className="text-left font-semibold px-6 py-3 whitespace-nowrap">
              Total Price
            </th>
            <th className="text-left font-semibold px-6 py-3 whitespace-nowrap">
              Payment Method
            </th>
            <th className="text-left font-semibold px-6 py-3 whitespace-nowrap">
              Status
            </th>
            <th className="text-left font-semibold px-6 py-3 whitespace-nowrap">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-b border-[#E2E8F0] hover:bg-gray-50"
            >
              <td className="px-6 py-4 font-semibold text-[#1E293B] whitespace-nowrap">
                {order.id}
              </td>
              <td className="px-6 py-4 flex items-center gap-3 text-[#1E293B] font-semibold whitespace-nowrap">
                <Image
                  alt={`Portrait of ${order.customerName}`}
                  className="rounded-full object-cover"
                  src={order.customerImage}
                  width={32}
                  height={32}
                  quality={100}
                />

                {order.customerName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <SourceBadge source={order.source} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {new Date(order.completionDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </td>
              <td className="px-6 py-4 font-semibold text-[#1E293B] whitespace-nowrap">
                £{order.totalPrice.toFixed(2)}
                <span className="ml-1 inline-block bg-[#DCFCE7] text-[#22C55E] text-[10px] font-semibold rounded px-1.5 py-0.5 select-none">
                  VAT
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <PaymentBadge method={order.paymentMethod} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <StatusBadge status={order.status} />
              </td>
              <td className="px-6 py-4 text-[#059669] cursor-pointer hover:text-[#047857] whitespace-nowrap">
                <Link href={`/sales-orders/${order.id}`}>
                  <i className="fas fa-eye"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
