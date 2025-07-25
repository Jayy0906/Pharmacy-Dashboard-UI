// lib/api/salesOrders.ts
import { SalesOrder } from "@/app/sales-orders/types";

export const fetchSalesOrders = async (): Promise<SalesOrder[]> => {
  try {
    const response = await fetch("/api/sales-orders");
    if (!response.ok) {
      throw new Error("Failed to fetch sales orders");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching sales orders:", error);
    throw error;
  }
};

export const exportSalesOrders = async (filters: {
  searchTerm?: string;
  orderType?: string;
  paymentMethod?: string;
  dateRange?: { start: string; end: string };
}): Promise<Blob> => {
  try {
    const response = await fetch("/api/sales-orders/export", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filters),
    });
    if (!response.ok) {
      throw new Error("Failed to export sales orders");
    }
    return await response.blob();
  } catch (error) {
    console.error("Error exporting sales orders:", error);
    throw error;
  }
};
