"use client";

import React from "react";
import ProductCard from "../Cards/ProductCard";

export default function InventoryTable() {
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
      stockStatus: "good",
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
      stockStatus: "warning",
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
      stockStatus: "critical",
    },
  ] as const;

  return (
    <section className="bg-white rounded-lg shadow-sm w-full overflow-hidden">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 px-6 py-4">
        <h3 className="font-medium text-gray-700 text-lg">
          Products (247 items)
        </h3>
        <div className="flex items-center gap-2 text-base font-medium mt-2 sm:mt-0">
          <span className="text-gray-700">Show:</span>
          <select
            aria-label="Show number of items"
            className="border border-gray-200 rounded-md py-1 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 bg-gray-100 cursor-pointer"
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
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>

      <footer className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 py-3 border-t border-gray-200 text-base font-medium ">
        <div className="text-gray-500">Showing 1 to 25 of 247 results</div>
        <nav className="inline-flex items-center gap-2 mt-2 sm:mt-0">
          <button className="border border-gray-300 rounded px-3 py-1 text-sm font-semibold hover:bg-gray-100 cursor-pointer">
            Previous
          </button>
          <button className="border border-teal-600 rounded px-3 py-1 text-sm font-semibold bg-teal-600 text-white cursor-pointer">
            1
          </button>
          <button className="border border-gray-300 rounded px-3 py-1 text-sm font-semibold hover:bg-gray-100 cursor-pointer">
            2
          </button>
          <button className="border border-gray-300 rounded px-3 py-1 text-sm font-semibold hover:bg-gray-100 cursor-pointer">
            3
          </button>
          <button className="border border-gray-300 rounded px-3 py-1 text-sm font-semibold hover:bg-gray-100 cursor-pointer">
            Next
          </button>
        </nav>
      </footer>
    </section>
  );
}
