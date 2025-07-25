// app/sales-orders/[id]/page.tsx
"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import InvoiceHeader from "@/components/Header/InvoiceHeader";
import OrderCustomerInfo from "@/components/invoices/OrderCustomerInfo";
import ItemizedProducts from "@/components/invoices/ItemizedProducts";
import AdditionalNotes from "@/components/invoices/AdditionalNotes";
import InvoiceFooter from "@/components/invoices/InvoiceFooter";
import { InvoiceData } from "./types";

const fetchInvoiceData = async (id: string): Promise<InvoiceData> => {
  // First check if the ID is in the hash format (RX-10023)
  const cleanId = id.startsWith("#") ? id.substring(1) : id;

  // Mock data - replace with actual API call
  return {
    orderId: cleanId,
    orderType: "Prescription",
    orderDate: "2024-01-15",
    completionDate: "2024-01-15",
    paymentMethod: "Card",
    status: "Completed",
    customer: {
      id: "PT-1023",
      name: "Sarah Johnson",
      image:
        "https://storage.googleapis.com/a1aa/image/7fdbfb6f-a145-4d65-5a5e-e65ad8cab487.jpg",
      email: "sarah.johnson@email.com",
      phone: "+44 7700 900123",
      address: "123 High Street\nLondon, SW1A 1AA",
    },
    items: [
      {
        name: "Paracetamol 500mg Tablets",
        description: "Pack of 32 tablets",
        quantity: 2,
        unitPrice: 3.5,
        vatRate: 20,
        lineTotal: 7.0,
      },
      {
        name: "Ibuprofen 400mg Tablets",
        description: "Pack of 24 tablets",
        quantity: 1,
        unitPrice: 4.25,
        vatRate: 20,
        lineTotal: 4.25,
      },
      {
        name: "Vitamin D3 1000IU Capsules",
        description: "Pack of 60 capsules",
        quantity: 1,
        unitPrice: 8.99,
        vatRate: 0,
        lineTotal: 8.99,
      },
    ],
    subtotal: 20.24,
    vatTotal: 2.3,
    prescriptionCharge: 9.65,
    grandTotal: 24.5,
    notes:
      "Take paracetamol as needed for pain relief, maximum 8 tablets in 24 hours. Ibuprofen to be taken with food, 3 times daily. Patient advised about potential interactions.",
    pharmacy: {
      name: "Pathly Pharmacy",
      tagline: "Your Trusted Healthcare Partner",
      address: "456 Health Street\nLondon, EC1A 1BB",
      phone: "+44 20 7946 0958",
      email: "info@pathlypharmacy.co.uk",
      gphcRegistration: "1234567",
      vatNumber: "GB123456789",
    },
  };
};

export default function InvoicePage() {
  const params = useParams();
  const router = useRouter();
  const [invoice, setInvoice] = useState<InvoiceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Handle both regular params and hash fragments
        let orderId = params.id as string;

        // If the ID comes from a hash URL (#RX-10023)
        if (!orderId && typeof window !== "undefined") {
          orderId = window.location.hash.substring(1);
          if (orderId) {
            // Redirect to proper URL format if we got ID from hash
            router.replace(`/sales-orders/${orderId}`);
            return;
          }
        }

        if (!orderId) {
          throw new Error("Order ID not found");
        }

        const data = await fetchInvoiceData(orderId);
        setInvoice(data);
      } catch (err) {
        console.error("Error loading invoice:", err);
        setError(err instanceof Error ? err.message : "Failed to load invoice");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [params.id, router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  if (!invoice) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-slate-600">Invoice not found</div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 text-slate-900 font-sans min-h-screen">
      <div className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8">
        <InvoiceHeader
          orderId={invoice.orderId}
          onBack={() => router.push("/sales-orders")} // Better navigation
        />

        <OrderCustomerInfo
          orderInfo={{
            id: invoice.orderId,
            type: invoice.orderType,
            date: invoice.orderDate,
            completionDate: invoice.completionDate,
            paymentMethod: invoice.paymentMethod,
            status: invoice.status,
          }}
          customerInfo={invoice.customer}
        />

        <ItemizedProducts
          items={invoice.items}
          subtotal={invoice.subtotal}
          vatTotal={invoice.vatTotal}
          prescriptionCharge={invoice.prescriptionCharge}
          grandTotal={invoice.grandTotal}
        />

        <AdditionalNotes notes={invoice.notes} />

        <InvoiceFooter pharmacy={invoice.pharmacy} />
      </div>
    </div>
  );
}
