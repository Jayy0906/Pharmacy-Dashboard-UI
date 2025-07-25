// app/suppliers/[id]/page.tsx
"use client"; // Ensures this component runs on the client side (needed for useState, useParams, etc.)

import { useState } from "react";
import { useParams } from "next/navigation"; // Hook to access dynamic route params in Next.js

// UI Components
import { Breadcrumb } from "../../../components/supplier-details/Breadcrumb";
import { SupplierHeader } from "../../../components/Header/SupplierHeader";
import { SupplierTabs } from "../../../components/supplier-details/SupplierTabs";
import { ProductSearch } from "../../../components/supplier-details/ProductSearch";
import { ProductTable } from "../../../components/supplier-details/ProductTable";

// Type definition for products associated with a supplier
interface Product {
  id: string;
  name: string;
  description: string;
  sku: string;
  lastOrdered: string;
  totalQuantity: string;
  price: string;
  icon: string;
  iconBg: string;
}

// Type definition for a supplier
interface Supplier {
  id: string;
  name: string;
  type: string;
  email: string;
  phone: string;
  city: string;
  address: string;
  productsCount: number;
  status: "Active" | "Inactive";
  color: string;
  website?: string;
  logo?: string;
}

// 🔧 Mock supplier data to simulate backend response (to be replaced with API integration)
const mockSuppliers: Supplier[] = [
  {
    id: "1",
    name: "MedSupply Ltd",
    type: "Pharmaceutical Distributor",
    email: "contact@medsupply.co.uk",
    phone: "+44 20 1234 5678",
    city: "London, UK",
    address: "123 Medical St, E1 6AN",
    productsCount: 247,
    status: "Active",
    color: "emerald",
    website: "www.medsupply.co.uk",
    logo: "https://storage.googleapis.com/a1aa/image/04aab7bf-deb1-4810-4cb0-b76c9d7596c6.jpg",
  },
  {
    id: "2",
    name: "PharmaCorp UK",
    type: "Medical Equipment",
    email: "orders@pharmacorp.uk",
    phone: "+44 161 987 6543",
    city: "Manchester, UK",
    address: "45 Industrial Ave, M1 2AB",
    productsCount: 89,
    status: "Active",
    color: "indigo",
    website: "www.pharmacorp.uk",
    logo: "https://example.com/pharmacorp-logo.jpg",
  },
];

export default function SupplierDetailPage() {
  const params = useParams(); // Next.js hook to extract dynamic route parameters
  const id = params?.id as string; // Extract `id` from route and cast to string

  const [searchQuery, setSearchQuery] = useState(""); // Track the product search input

  // Lookup supplier from mock list based on route ID
  const supplier = mockSuppliers.find((s) => s.id === id);

  // If supplier is not found, show fallback message
  if (!supplier) {
    return <div>Supplier not found</div>;
  }

  /**
   * Handler triggered when Edit button is clicked.
   * Currently uses alert — should be replaced with modal or navigation.
   */
  const handleEditSupplier = () => {
    alert("Edit supplier functionality would go here");
  };

  /**
   * Handler for live product search inside supplier's product list
   */
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Static product data (mock), ideally to be fetched based on supplier ID
  const products: Product[] = [
    {
      id: "1",
      name: "Paracetamol 500mg",
      description: "Pain Relief Tablets",
      sku: "MED-PAR-500",
      lastOrdered: "15 Dec 2024",
      totalQuantity: "2,500 units",
      price: "£0.08/unit",
      icon: "https://storage.googleapis.com/a1aa/image/e86f6de9-5716-445f-1bad-07d75466417f.jpg",
      iconBg: "bg-[#DBEAFE]",
    },
    {
      id: "2",
      name: "Ibuprofen 400mg",
      description: "Anti-inflammatory",
      sku: "MED-IBU-400",
      lastOrdered: "12 Dec 2024",
      totalQuantity: "1,800 units",
      price: "£0.12/unit",
      icon: "https://storage.googleapis.com/a1aa/image/032728f7-3190-43d0-3dfc-b4b132bbcb11.jpg",
      iconBg: "bg-[#D1FAE5]",
    },
    {
      id: "3",
      name: "Amoxicillin 250mg",
      description: "Antibiotic Capsules",
      sku: "MED-AMO-250",
      lastOrdered: "10 Dec 2024",
      totalQuantity: "900 units",
      price: "£0.45/unit",
      icon: "https://storage.googleapis.com/a1aa/image/28773bbe-9ed1-4a47-9180-3c65aca17f1b.jpg",
      iconBg: "bg-[#E9D5FF]",
    },
  ];

  // Filter product list based on live search
  const filteredProducts = products.filter((product) => {
    const lowerCaseQuery = searchQuery.toLowerCase();

    return (
      product.name.toLowerCase().includes(lowerCaseQuery) ||
      product.sku.toLowerCase().includes(lowerCaseQuery) ||
      product.lastOrdered.toLowerCase().includes(lowerCaseQuery) ||
      product.totalQuantity.toLowerCase().includes(lowerCaseQuery) ||
      product.price.toLowerCase().includes(lowerCaseQuery)
    );
  });

  return (
    <div className="bg-[#F9FBFC] text-[#374151] font-sans">
      <div className="mx-auto">
        {/* Breadcrumb Navigation */}
        <Breadcrumb currentPage={supplier.name} />

        {/* Supplier Profile Header */}
        <SupplierHeader
          name={supplier.name}
          status={supplier.status}
          email={supplier.email}
          phone={supplier.phone}
          website={supplier.website || ""}
          address={supplier.address}
          logo={supplier.logo || ""}
          onEdit={handleEditSupplier}
        />

        {/* Navigation Tabs (Details, History, Invoices etc.) */}
        <SupplierTabs supplierId={id} />

        {/* Product Search Bar */}
        <ProductSearch
          productCount={filteredProducts.length}
          onSearch={handleSearch}
        />

        {/* Product Table */}
        <ProductTable products={filteredProducts} />
      </div>
    </div>
  );
}
