"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Header } from "../../../../components/Header/ReceivePurchaseOrderHeader";
import { POCard } from "../../../../components/receive-purchase-order/POCard";
import { ProgressBar } from "../../../../components/receive-purchase-order/ProgressBar";
import { ProductTable } from "../../../../components/receive-purchase-order/ProductTable";
import { FooterActions } from "../../../../components/receive-purchase-order/FooterActions";

// -------------------
// Type Definitions
// -------------------

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

// -------------------
// Main Page Component
// -------------------

export default function ReceivePurchaseOrderPage() {
  // Get PO Number from dynamic route `/receive-purchase-order/[poNumber]`
  const { poNumber } = useParams() as { poNumber: string };

  // Component state
  const [loading, setLoading] = useState<boolean>(true);
  const [poData, setPoData] = useState<PurchaseOrder | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch PO and products from backend when poNumber changes
  useEffect(() => {
    const fetchPO = async () => {
      try {
        const res = await fetch(`/api/purchase-orders/${poNumber}`);
        if (!res.ok) throw new Error("PO not found");
        const data = await res.json();

        // Set purchase order and product list
        setPoData(data.purchaseOrder);
        setProducts(data.products || []);
      } catch (error) {
        console.error("Failed to fetch PO:", error);
      } finally {
        setLoading(false);
      }
    };

    if (poNumber) {
      fetchPO();
    }
  }, [poNumber]);

  // Update product received quantity and status
  const handleQuantityChange = (id: string, newQuantity: number) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? {
              ...product,
              received: newQuantity,
              status:
                newQuantity === 0
                  ? "Pending"
                  : newQuantity === product.ordered
                    ? "Complete"
                    : "Partial",
            }
          : product,
      ),
    );
  };

  // Update product's selected storage location
  const handleLocationChange = (id: string, location: string) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, location } : product,
      ),
    );
  };

  // Simulate save action (e.g., for incomplete GRNs)
  const handleSave = () => {
    alert("GRN saved for later completion");
    // TODO: Integrate with API to persist partial state
  };

  // Finalize the GRN and ensure all validations are met
  const handleComplete = () => {
    const allValid = products.every(
      (p) => p.received === 0 || (p.received > 0 && p.location),
    );
    if (!allValid) {
      alert("Please select locations for all received items");
      return;
    }
    alert("GRN completed and inventory updated");
    // TODO: Integrate with backend to persist GRN and update stock
  };

  // Progress bar info
  const receivedItems = products.filter((p) => p.received > 0).length;
  const totalItems = products.length;

  // UI states
  if (loading) {
    return <div className="p-6 text-gray-600">Loading Purchase Order...</div>;
  }

  if (!poData) {
    return (
      <div className="p-6 text-red-500">
        Error: Purchase Order &quot;{poNumber}&quot; not found.
      </div>
    );
  }

  // Main layout and structure
  return (
    <div className="bg-slate-50 font-sans text-slate-900 min-h-screen">
      <div className="mx-auto">
        {/* Page header with GRN info */}
        <Header
          grnId="GRN will be generated"
          poNumber={poData.poNumber}
          supplierName={poData.supplier.name}
        />

        {/* Purchase Order Summary card */}
        <POCard
          poNumber={poData.poNumber}
          createdDate={poData.createdDate}
          status={poData.status}
          supplierName={poData.supplier.name}
          supplierEmail={poData.supplier.email}
          supplierPhone={poData.supplier.phone}
          expectedDate={poData.expectedDelivery}
          deliveryAddress={poData.deliveryAddress}
          priority={poData.priority}
          notes={poData.notes}
        />

        {/* Visual progress of receiving */}
        <ProgressBar received={receivedItems} total={totalItems} />

        {/* Product list to receive */}
        <ProductTable
          products={products}
          onQuantityChange={handleQuantityChange}
          onLocationChange={handleLocationChange}
        />

        {/* Save & Complete Action buttons */}
        <FooterActions onSave={handleSave} onComplete={handleComplete} />
      </div>
    </div>
  );
}
