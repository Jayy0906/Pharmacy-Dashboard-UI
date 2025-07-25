// app/api/sales-orders/route.ts
import { NextResponse } from "next/server";
import { SalesOrder } from "@/app/sales-orders/types";

export async function GET() {
  try {
    // In a real app, you would fetch from your database
    const salesOrders: SalesOrder[] = [
      {
        id: "#RX-10023",
        customerName: "Sarah Johnson",
        customerImage: "https://example.com/sarah.jpg",
        source: "Prescription",
        completionDate: "2024-01-15",
        totalPrice: 24.5,
        paymentMethod: "Card",
        status: "Completed",
      },
      // ... more orders
    ];

    return NextResponse.json(salesOrders);
  } catch (error) {
    console.error("Failed to fetch sales orders:", error);
    return NextResponse.json(
      { error: "Failed to fetch sales orders" },
      { status: 500 },
    );
  }
}
