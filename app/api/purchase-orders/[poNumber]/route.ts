import { NextResponse } from "next/server";

type Supplier = {
  name: string;
  email: string;
  phone: string;
};

type PurchaseOrder = {
  poNumber: string;
  createdDate: string;
  status: string;
  supplier: Supplier;
  expectedDelivery: string;
  deliveryAddress: string;
  priority: string;
  notes: string;
};

type Product = {
  id: string;
  name: string;
  description: string;
  sku: string;
  ordered: number;
  received: number;
  status: string;
  color: string;
  icon: string;
  location: string;
};

type PurchaseOrderData = {
  purchaseOrder: PurchaseOrder;
  products: Product[];
};

export async function GET(
  req: Request,
  { params }: { params: { poNumber: string } },
) {
  const { poNumber } = params;

  // Fake DB with strong typing
  const purchaseOrders: Record<string, PurchaseOrderData> = {
    "PO-2024-001": {
      purchaseOrder: {
        poNumber: "PO-2024-001",
        createdDate: "2024-01-15",
        status: "Sent",
        supplier: {
          name: "MedSupply Corp",
          email: "contact@medsupply.com",
          phone: "+1 (555) 123-4567",
        },
        expectedDelivery: "2024-01-20",
        deliveryAddress: "Main Warehouse",
        priority: "Standard",
        notes:
          "Standard delivery terms. Handle with care for temperature-sensitive items. Verify expiry dates.",
      },
      products: [
        {
          id: "1",
          name: "Paracetamol 500mg",
          description: "Pain Relief Tablets",
          sku: "PAR-500-100",
          ordered: 100,
          received: 0,
          status: "Pending",
          color: "blue",
          icon: "https://storage.googleapis.com/a1aa/image/3a7ceb56-2f23-4765-82c5-ae27e9421f82.jpg",
          location: "",
        },
        {
          id: "2",
          name: "Ibuprofen 200mg",
          description: "Anti-inflammatory",
          sku: "IBU-200-50",
          ordered: 50,
          received: 0,
          status: "Pending",
          color: "green",
          icon: "https://storage.googleapis.com/a1aa/image/4006c0f0-41bb-4adf-eb8a-5083e3bf9348.jpg",
          location: "",
        },
        {
          id: "3",
          name: "Aspirin 75mg",
          description: "Blood Thinner",
          sku: "ASP-75-200",
          ordered: 200,
          received: 0,
          status: "Pending",
          color: "purple",
          icon: "https://storage.googleapis.com/a1aa/image/97d6cff8-01ac-4623-edd4-e6919cb1bc6a.jpg",
          location: "",
        },
        {
          id: "4",
          name: "Amoxicillin 250mg",
          description: "Antibiotic Capsules",
          sku: "AMX-250-30",
          ordered: 30,
          received: 0,
          status: "Pending",
          color: "red",
          icon: "https://storage.googleapis.com/a1aa/image/0949c5fd-746b-4f2e-483b-1fe0a3fc4df0.jpg",
          location: "",
        },
        {
          id: "5",
          name: "Insulin Pen 100IU",
          description: "Diabetes Treatment",
          sku: "INS-100-10",
          ordered: 10,
          received: 0,
          status: "Pending",
          color: "yellow",
          icon: "https://storage.googleapis.com/a1aa/image/c0090abd-73a9-4d87-fc32-bcf1ccfb2970.jpg",
          location: "",
        },
      ],
    },
    "PO-2024-002": {
      purchaseOrder: {
        poNumber: "PO-2024-002",
        createdDate: "2024-02-01",
        status: "Incomplete",
        supplier: {
          name: "Global Health Ltd",
          email: "support@globalhealth.com",
          phone: "+1 (555) 987-6543",
        },
        expectedDelivery: "2024-02-05",
        deliveryAddress: "Secondary Warehouse",
        priority: "Urgent",
        notes: "Requires cold chain logistics. Handle with care.",
      },
      products: [],
    },
  };

  const data = purchaseOrders[poNumber];

  if (!data) {
    return new NextResponse(
      JSON.stringify({ error: "Purchase Order not found" }),
      {
        status: 404,
      },
    );
  }

  return NextResponse.json(data);
}
