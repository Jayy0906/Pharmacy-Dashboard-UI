// app/suppliers/page.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "../../components/Header/SuppliersHeader";
import { SearchFilters } from "../../components/suppliers/SearchFilters";
import { SupplierTable } from "../../components/suppliers/SupplierTable";

// Type definition for a Supplier object
interface Supplier {
  id: string; // Unique supplier ID
  name: string; // Supplier's name
  type: string; // Type/category (e.g., pharmaceutical, equipment)
  email: string; // Supplier contact email
  phone: string; // Supplier contact phone number
  city: string; // City location
  address: string; // Full address
  productsCount: number; // Number of products supplied
  status: "Active" | "Inactive"; // Status tag for the supplier
  color: string; // Color code used for icon styling
}

/**
 * Main page component for managing suppliers.
 * Features: search, filter, and display of supplier list
 */
export default function SuppliersPage() {
  // Initial list of suppliers (static demo data for now)
  const [suppliers, setSuppliers] = useState<Supplier[]>([
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
    },
    // Add more suppliers as needed
  ]);

  // Filtered supplier list for rendering after search/filter
  const [filteredSuppliers, setFilteredSuppliers] = useState(suppliers);

  // Next.js router hook for client-side navigation
  const router = useRouter();

  /**
   * Handler for live search functionality.
   * Filters the supplier list based on search keywords.
   */
  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredSuppliers(suppliers); // Reset if empty query
      return;
    }

    const lowerCaseQuery = query.toLowerCase();

    // Search through multiple fields (name, email, etc.)
    const filtered = suppliers.filter(
      (supplier) =>
        supplier.name.toLowerCase().includes(lowerCaseQuery) ||
        supplier.email.toLowerCase().includes(lowerCaseQuery) ||
        supplier.phone.toLowerCase().includes(lowerCaseQuery) ||
        supplier.type.toLowerCase().includes(lowerCaseQuery) ||
        supplier.city.toLowerCase().includes(lowerCaseQuery) ||
        supplier.address.toLowerCase().includes(lowerCaseQuery) ||
        supplier.status.toLowerCase().includes(lowerCaseQuery) ||
        supplier.productsCount.toString().includes(lowerCaseQuery),
    );

    setFilteredSuppliers(filtered); // Update filtered list
  };

  /**
   * Handler for dropdown-based filters.
   * Applies location and status filters to supplier list.
   */
  const handleFilter = (location: string, status: string) => {
    let filtered = [...suppliers];

    if (location !== "All Locations") {
      filtered = filtered.filter((supplier) => supplier.city === location);
    }

    if (status !== "All Status") {
      filtered = filtered.filter((supplier) => supplier.status === status);
    }

    setFilteredSuppliers(filtered); // Update filtered list
  };

  /**
   * Handler triggered when the user clicks "Add New Supplier".
   * Currently just shows an alert — to be replaced with modal or route later.
   */
  const handleAddSupplier = () => {
    alert("Add new supplier functionality would go here");
  };

  /**
   * Navigates to the edit page for a specific supplier.
   * Uses dynamic routing with the supplier ID.
   */
  const handleEditSupplier = (id: string) => {
    router.push(`/suppliers/${id}`);
  };

  /**
   * Handler to view supplier's past activity/history.
   * Currently just an alert placeholder.
   */
  const handleViewHistory = (id: string) => {
    alert(`View history for supplier with ID: ${id}`);
  };

  /**
   * Deletes a supplier from both state arrays after confirmation.
   */
  const handleDeleteSupplier = (id: string) => {
    if (confirm("Are you sure you want to delete this supplier?")) {
      // Remove supplier from both the main and filtered lists
      setSuppliers(suppliers.filter((supplier) => supplier.id !== id));
      setFilteredSuppliers(
        filteredSuppliers.filter((supplier) => supplier.id !== id),
      );
    }
  };

  return (
    <div className="bg-[#F8FAFC] text-gray-700 min-h-screen">
      <div className="mx-auto">
        {/* Header section with title and Add button */}
        <Header onAddSupplier={handleAddSupplier} />

        {/* Search + filter inputs */}
        <SearchFilters onSearch={handleSearch} onFilter={handleFilter} />

        {/* Table displaying filtered supplier list */}
        <SupplierTable
          suppliers={filteredSuppliers}
          onEdit={handleEditSupplier}
          onViewHistory={handleViewHistory}
          onDelete={handleDeleteSupplier}
        />
      </div>
    </div>
  );
}
