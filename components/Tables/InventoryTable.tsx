"use client";

import React, { useState } from "react";
import ProductCard from "../Cards/ProductCard"; // Imports the ProductCard component used for displaying individual product rows.
import Pagination from "../Pagination/Pagination";
/**
 * InventoryTable Component
 *
 * Displays a table of products in the inventory.
 * It includes a header with product count and a "Show" dropdown,
 * the main table with product details, and a pagination footer.
 */
export default function InventoryTable() {
  // Sample product data to be displayed in the table.
  // The `as const` assertion ensures that the array and its objects are deeply immutable and their literal types are inferred.
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const products = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      category: "Pain Relief",
      sku: "PAR-500-001",
      stock: 150,
      allocated: 25,
      costPrice: "£2.50",
      sellingPrice: "£3.00",
      expiry: "Dec 2025",
      supplier: "PharmaCorp Ltd",
      location: "Shelf A1",
      stockStatus: "good", // Used for visual indication (e.g., green for good stock)
    },
    {
      id: 2,
      name: "Ibuprofen 400mg",
      category: "Anti-inflammatory",
      sku: "IBU-400-002",
      stock: 12,
      allocated: 8,
      costPrice: "£3.20",
      sellingPrice: "£3.84",
      expiry: "Mar 2024",
      supplier: "MediSupply Co",
      location: "Shelf B2",
      stockStatus: "warning", // Used for visual indication (e.g., orange for low stock)
    },
    {
      id: 3,
      name: "Amoxicillin 250mg",
      category: "Antibiotic",
      sku: "AMX-250-003",
      stock: 0,
      allocated: 0,
      costPrice: "£5.80",
      sellingPrice: "£6.96",
      expiry: "Jan 2026",
      supplier: "GlobalPharma",
      location: "Cold Storage",
      stockStatus: "critical", // Used for visual indication (e.g., red for out of stock)
    },
    // Add more products here...
  ] as const;

  const totalItems = products.length;

  // Paginated data
  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    // Main section container for the inventory table, with styling for background, shadow, and overflow.
    <section className="bg-white rounded-lg shadow-sm w-full overflow-hidden">
      {/* Table Header Section */}
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 px-6 py-4">
        {/* Products Count Title */}
        <h3 className="font-medium text-gray-700 text-lg">
          Products ({totalItems} items)
        </h3>
        <div className="flex items-center gap-2 text-base font-medium mt-2 sm:mt-0">
          <span className="text-gray-700">Show:</span>
          <select
            aria-label="Show number of items" // Accessibility label for the select element.
            className="border border-gray-200 rounded-md py-1 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 bg-gray-100 cursor-pointer"
            value={itemsPerPage}
            disabled
          >
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
        </div>
      </header>

      <div className="overflow-x-auto lg:overflow-visible scrollbar-thin">
        <table className="w-full text-left text-base text-gray-700">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-6 py-3 font-medium">Product Name</th>
              <th className="px-6 py-3 font-medium">SKU/PNO</th>
              <th className="px-6 py-3 font-medium">Stock</th>
              <th className="px-6 py-3 font-medium">Allocated</th>
              <th className="px-6 py-3 font-medium">Cost Price</th>
              <th className="px-6 py-3 font-medium">Selling Price</th>
              <th className="px-6 py-3 font-medium">Expiry</th>
              <th className="px-6 py-3 font-medium">Supplier</th>
              <th className="px-6 py-3 font-medium">Location</th>
              <th className="px-6 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pass props to Pagination */}
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        itemLabel="inventory"
      />
    </section>
  );
}
