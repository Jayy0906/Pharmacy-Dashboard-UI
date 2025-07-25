"use client";

import { useEffect, useState } from "react";
import PurchaseOrderRow from "./PurchaseOrderRow"; // Row component for each order

// PO Type definition
interface PurchaseOrder {
  poNumber: string;
  supplier: {
    name: string;
    email: string;
  };
  createdDate: string;
  status: "Sent" | "Incomplete" | "Complete";
  expectedDelivery: string;
  completed: boolean;
}

interface Props {
  searchTerm: string;
  statusFilter: string;
  startDate: string;
  endDate: string;
}

// Main table that displays filtered Purchase Orders
export default function PurchaseOrdersTable({
  searchTerm,
  statusFilter,
  startDate,
  endDate,
}: Props) {
  const [orders, setOrders] = useState<PurchaseOrder[]>([]); // All fetched orders
  const [filteredOrders, setFilteredOrders] = useState<PurchaseOrder[]>([]); // Orders after filters applied
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch orders from backend
  useEffect(() => {
    async function fetchOrders() {
      setLoading(true);
      try {
        const res = await fetch("/api/purchase-orders"); // Replace with real endpoint
        const data: PurchaseOrder[] = await res.json();
        setOrders(data);
      } catch (err) {
        console.error("Error fetching purchase orders:", err);
        setError("Failed to load purchase orders.");
      } finally {
        setLoading(false);
      }
    }

    fetchOrders();
  }, []);

  // Filter logic when any dependency changes
  useEffect(() => {
    const lowerSearch = searchTerm.toLowerCase();

    const filtered = orders.filter((order) => {
      const matchesSearch =
        order.poNumber.toLowerCase().includes(lowerSearch) ||
        order.supplier.name.toLowerCase().includes(lowerSearch) ||
        order.supplier.email.toLowerCase().includes(lowerSearch);

      const matchesStatus =
        statusFilter === "All"
          ? true
          : statusFilter === "Pending"
            ? order.status === "Sent" || order.status === "Incomplete"
            : statusFilter === "Fully Received"
              ? order.status === "Complete"
              : statusFilter === "Partially Received"
                ? order.status === "Incomplete"
                : true;

      const created = new Date(order.createdDate);
      const start = startDate ? new Date(startDate) : null;
      const endD = endDate ? new Date(endDate) : null;

      const matchesDate =
        (!start || created >= start) && (!endD || created <= endD);

      return matchesSearch && matchesStatus && matchesDate;
    });

    setFilteredOrders(filtered);
  }, [orders, searchTerm, statusFilter, startDate, endDate]);

  if (loading) {
    return (
      <div className="text-center text-sm py-6 text-gray-500">
        Loading purchase orders...
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-sm py-6 text-red-500">{error}</div>;
  }

  return (
    <section className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">
      <table className="w-full text-left text-sm text-gray-600 border-collapse">
        <thead className="border-b border-gray-200">
          <tr>
            <th className="py-3 px-4 uppercase font-semibold text-xs tracking-wider w-[140px]">
              PO Number
            </th>
            <th className="py-3 px-4 uppercase font-semibold text-xs tracking-wider w-[180px]">
              Supplier
            </th>
            <th className="py-3 px-4 uppercase font-semibold text-xs tracking-wider w-[140px] whitespace-nowrap">
              Created Date
            </th>
            <th className="py-3 px-4 uppercase font-semibold text-xs tracking-wider w-[120px]">
              Status
            </th>
            <th className="py-3 px-4 uppercase font-semibold text-xs tracking-wider w-[140px] whitespace-nowrap">
              Expected Delivery
            </th>
            <th className="py-3 px-4 uppercase font-semibold text-xs tracking-wider w-[120px]">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <PurchaseOrderRow key={order.poNumber} {...order} />
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center py-6 text-gray-400">
                No matching purchase orders found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}
