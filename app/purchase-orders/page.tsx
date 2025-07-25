// app/purchase-orders/page.tsx
"use client";

import { useState, useEffect } from "react";
import PurchaseordersHeader from "@/components/Header/PurchaseordersHeader";
import FilterControls from "@/components/purchaseorders/FilterControls";
import PurchaseOrdersTable from "@/components/purchaseorders/PurchaseOrdersTable";
import Pagination from "@/components/Pagination/Pagination";
import { PurchaseOrder } from "@/app/purchase-orders/types";

export default function PurchaseOrdersPage() {
  const [purchaseOrders, setPurchaseOrders] = useState<PurchaseOrder[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<PurchaseOrder[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [supplierFilter, setSupplierFilter] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState<{
    start: string;
    end: string;
  } | null>(null);

  // Initialize with mock data
  useEffect(() => {
    // In a real app, this would be an API call
    const mockData: PurchaseOrder[] = [
      {
        id: "PO-2023-0045",
        supplier: "MedSupply Inc.",
        createdDate: "2023-05-24",
        expectedDelivery: "2023-06-02",
        items: 12,
        totalCost: 4250.0,
        status: "In Progress",
        statusColor: "purple",
        actions: ["view"],
      },
      {
        id: "PO-2023-0044",
        supplier: "PharmaDirect",
        createdDate: "2023-05-22",
        expectedDelivery: "2023-05-30",
        items: 8,
        totalCost: 2780.5,
        status: "Sent",
        statusColor: "orange",
        actions: ["view", "refresh"],
      },
      {
        id: "PO-2023-0043",
        supplier: "MediWholesale Ltd.",
        createdDate: "2023-05-18",
        expectedDelivery: "2023-05-25",
        items: 15,
        totalCost: 6325.75,
        status: "Completed",
        statusColor: "green",
        actions: ["view"],
      },
      {
        id: "PO-2023-0042",
        supplier: "Global Pharma Supply",
        createdDate: "2023-05-15",
        expectedDelivery: "2023-05-23",
        items: 6,
        totalCost: 1850.0,
        status: "Pending",
        statusColor: "yellow",
        actions: ["view", "edit", "cancel"],
      },
      {
        id: "PO-2023-0041",
        supplier: "MedSupply Inc.",
        createdDate: "2023-05-10",
        expectedDelivery: "2023-05-18",
        items: 10,
        totalCost: 3420.25,
        status: "Cancelled",
        statusColor: "red",
        actions: ["view"],
      },
      {
        id: "PO-2023-0040",
        supplier: "HealthPlus Distributors",
        createdDate: "2023-05-05",
        expectedDelivery: "2023-05-12",
        items: 7,
        totalCost: 2100.75,
        status: "Completed",
        statusColor: "green",
        actions: ["view"],
      },
      {
        id: "PO-2023-0039",
        supplier: "MediWholesale Ltd.",
        createdDate: "2023-05-01",
        expectedDelivery: "2023-05-08",
        items: 9,
        totalCost: 3200.0,
        status: "In Progress",
        statusColor: "purple",
        actions: ["view", "refresh"],
      },
    ];

    setPurchaseOrders(mockData);
    setFilteredOrders(mockData);
  }, []);

  // Apply filters whenever filter criteria change
  useEffect(() => {
    let result = [...purchaseOrders];

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (order) =>
          order.id.toLowerCase().includes(term) ||
          order.supplier.toLowerCase().includes(term) ||
          order.createdDate.includes(term) ||
          order.expectedDelivery.includes(term),
      );
    }

    // Apply status filter
    if (statusFilter) {
      result = result.filter((order) => order.status === statusFilter);
    }

    // Apply supplier filter
    if (supplierFilter) {
      result = result.filter((order) => order.supplier === supplierFilter);
    }

    // Apply date range filter
    if (dateRange) {
      result = result.filter((order) => {
        const createdDate = new Date(order.createdDate);
        const startDate = new Date(dateRange.start);
        const endDate = new Date(dateRange.end);
        return createdDate >= startDate && createdDate <= endDate;
      });
    }

    setFilteredOrders(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, statusFilter, supplierFilter, dateRange, purchaseOrders]);

  // Get unique values for dropdowns
  const statusOptions = Array.from(
    new Set(purchaseOrders.map((order) => order.status)),
  );
  const supplierOptions = Array.from(
    new Set(purchaseOrders.map((order) => order.supplier)),
  );

  // Get current orders for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);

  // Handle filter changes
  const handleSearch = (term: string) => setSearchTerm(term);
  const handleStatusFilter = (status: string | null) => setStatusFilter(status);
  const handleSupplierFilter = (supplier: string | null) =>
    setSupplierFilter(supplier);
  const handleDateFilter = (start: string, end: string) => {
    if (start && end) {
      setDateRange({ start, end });
    } else {
      setDateRange(null);
    }
  };

  // Handle create new PO
  const handleCreatePO = () => {
    alert("Create New PO functionality would open a form");
    // In a real app, you would navigate to a create page or open a modal
  };

  return (
    <div className="mx-auto p-6">
      <PurchaseordersHeader />
      <FilterControls
        onSearch={handleSearch}
        onStatusFilter={handleStatusFilter}
        onSupplierFilter={handleSupplierFilter}
        onDateFilter={handleDateFilter}
        onCreatePO={handleCreatePO}
        statusOptions={statusOptions}
        supplierOptions={supplierOptions}
      />
      <PurchaseOrdersTable orders={currentOrders} />
      <Pagination
        totalItems={filteredOrders.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        itemLabel="purchase orders"
      />
    </div>
  );
}
