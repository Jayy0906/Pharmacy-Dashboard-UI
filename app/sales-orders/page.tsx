// app/sales-orders/page.tsx
"use client";

import { useState, useEffect } from "react";
import SalesOrdersHeader from "@/components/Header/SalesOrdersHeader";
import FilterControls from "@/components/sales-orders/FilterControls";
import SalesOrdersTable from "@/components/sales-orders/SalesOrdersTable";
import Pagination from "@/components/Pagination/Pagination";
import { SalesOrder } from "@/app/sales-orders/types";

// API Service Functions (would be in a separate file)
const fetchSalesOrders = async (): Promise<SalesOrder[]> => {
  // In a real app, this would be an actual API call
  // Example:
  // const response = await fetch('/api/sales-orders');
  // if (!response.ok) throw new Error('Failed to fetch sales orders');
  // return response.json();

  // Mock data for demonstration
  return [
    {
      id: "#RX-10023",
      customerName: "Sarah Johnson",
      customerImage:
        "https://storage.googleapis.com/a1aa/image/aabc72e2-e0bf-4eda-9e0f-862c9df56d16.jpg",
      source: "Prescription",
      completionDate: "2024-01-15",
      totalPrice: 24.5,
      paymentMethod: "Card",
      status: "Completed",
    },
    {
      id: "#POS-2098",
      customerName: "Michael Chen",
      customerImage:
        "https://storage.googleapis.com/a1aa/image/f84cee2c-99fa-4716-0dbd-466a9277b429.jpg",
      source: "POS",
      completionDate: "2024-01-14",
      totalPrice: 18.75,
      paymentMethod: "Cash",
      status: "Completed",
    },
    {
      id: "#RX-10022",
      customerName: "Emma Wilson",
      customerImage:
        "https://storage.googleapis.com/a1aa/image/6a7e76c8-e4fd-40ae-5d7e-8f37964cfc11.jpg",
      source: "Prescription",
      completionDate: "2024-01-13",
      totalPrice: 45.2,
      paymentMethod: "Card",
      status: "Completed",
    },
    {
      id: "#POS-2097",
      customerName: "David Brown",
      customerImage:
        "https://storage.googleapis.com/a1aa/image/317d6861-3e88-4a15-92da-87e254f8b2fa.jpg",
      source: "POS",
      completionDate: "2024-01-12",
      totalPrice: 12.3,
      paymentMethod: "Other",
      status: "Completed",
    },
    // Add more mock data as needed...
  ];
};

export default function SalesOrdersPage() {
  const [salesOrders, setSalesOrders] = useState<SalesOrder[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<SalesOrder[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [orderTypeFilter, setOrderTypeFilter] = useState<string | null>(null);
  const [paymentMethodFilter, setPaymentMethodFilter] = useState<string | null>(
    null,
  );
  const [dateRange, setDateRange] = useState<{
    start: string;
    end: string;
  } | null>(null);

  // Fetch data from API
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchSalesOrders();
        setSalesOrders(data);
        setFilteredOrders(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load sales orders",
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Apply filters whenever filter criteria change
  useEffect(() => {
    let result = [...salesOrders];

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (order) =>
          order.id.toLowerCase().includes(term) ||
          order.customerName.toLowerCase().includes(term) ||
          order.completionDate.includes(term),
      );
    }

    // Apply order type filter
    if (orderTypeFilter) {
      result = result.filter((order) => order.source === orderTypeFilter);
    }

    // Apply payment method filter
    if (paymentMethodFilter) {
      result = result.filter(
        (order) => order.paymentMethod === paymentMethodFilter,
      );
    }

    // Apply date range filter
    if (dateRange) {
      result = result.filter((order) => {
        const orderDate = new Date(order.completionDate);
        const startDate = new Date(dateRange.start);
        const endDate = new Date(dateRange.end);
        return orderDate >= startDate && orderDate <= endDate;
      });
    }

    setFilteredOrders(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [
    searchTerm,
    orderTypeFilter,
    paymentMethodFilter,
    dateRange,
    salesOrders,
  ]);

  // Get unique values for dropdowns
  const orderTypeOptions = Array.from(
    new Set(salesOrders.map((order) => order.source)),
  );
  const paymentMethodOptions = Array.from(
    new Set(salesOrders.map((order) => order.paymentMethod)),
  );

  // Get current orders for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);

  // Handle filter changes
  const handleSearch = (term: string) => setSearchTerm(term);
  const handleOrderTypeFilter = (type: string | null) =>
    setOrderTypeFilter(type);
  const handlePaymentMethodFilter = (method: string | null) =>
    setPaymentMethodFilter(method);
  const handleDateFilter = (start: string, end: string) => {
    if (start && end) {
      setDateRange({ start, end });
    } else {
      setDateRange(null);
    }
  };

  // Handle items per page change
  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  // Handle export functionality
  const handleExport = () => {
    alert("Export functionality would generate a report");
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#10B981]"></div>
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

  return (
    <div className="bg-[#F8FAFC] text-[#1E293B] min-h-screen">
      <div className="mx-auto">
        <SalesOrdersHeader onExport={handleExport} />
        <FilterControls
          onSearch={handleSearch}
          onOrderTypeFilter={handleOrderTypeFilter}
          onPaymentMethodFilter={handlePaymentMethodFilter}
          onDateFilter={handleDateFilter}
          orderTypeOptions={orderTypeOptions}
          paymentMethodOptions={paymentMethodOptions}
        />
        <SalesOrdersTable orders={currentOrders} />
        <Pagination
          totalItems={filteredOrders.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={handleItemsPerPageChange}
          itemLabel="sales orders"
        />
      </div>
    </div>
  );
}
