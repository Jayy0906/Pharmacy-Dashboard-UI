// components/purchaseorders/PurchaseOrdersTable.tsx
import PurchaseOrderRow from "./PurchaseOrderRow";
import { PurchaseOrder } from "@/app/purchase-orders/types";

interface PurchaseOrdersTableProps {
  orders: PurchaseOrder[];
}

export default function PurchaseOrdersTable({
  orders,
}: PurchaseOrdersTableProps) {
  return (
    <div className="overflow-x-auto border border-gray-200 rounded-md">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              PO NUMBER
            </th>
            <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              SUPPLIER NAME
            </th>
            <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              CREATED DATE
            </th>
            <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              EXPECTED DELIVERY
            </th>
            <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              ITEMS
            </th>
            <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              TOTAL COST
            </th>
            <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              STATUS
            </th>
            <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              ACTIONS
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-sm">
          {orders.length > 0 ? (
            orders.map((order) => (
              <PurchaseOrderRow key={order.id} order={order} />
            ))
          ) : (
            <tr>
              <td colSpan={8} className="px-4 py-6 text-center text-gray-500">
                No purchase orders found matching your filters
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
