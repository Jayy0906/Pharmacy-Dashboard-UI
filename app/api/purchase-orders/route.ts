// app/api/purchase-orders/route.ts

import { NextResponse } from "next/server";

export async function GET() {
  const orders = [
    {
      poNumber: "PO-2024-001",
      supplier: { name: "MedSupply Corp", email: "contact@medsupply.com" },
      createdDate: "2024-01-15",
      status: "Sent",
      expectedDelivery: "2024-01-20",
      completed: false,
    },
    {
      poNumber: "PO-2024-002",
      supplier: { name: "PharmaTech Ltd", email: "orders@pharmatech.com" },
      createdDate: "2024-01-16",
      status: "Incomplete",
      expectedDelivery: "2024-01-22",
      completed: false,
    },
    {
      poNumber: "PO-2024-003",
      supplier: {
        name: "Global Pharmaceuticals",
        email: "supply@globalpharma.com",
      },
      createdDate: "2024-01-14",
      status: "Complete",
      expectedDelivery: "2024-01-19",
      completed: true,
    },
  ];

  return NextResponse.json(orders);
}
