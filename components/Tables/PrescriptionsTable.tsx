"use client";

import React, { useState } from "react";
import Image from "next/image"; // Imports the optimized Image component from Next.js.
import Pagination from "../Pagination/Pagination";

/**
 * PrescriptionsTable Component
 *
 * Displays a table of recent prescriptions, including patient details,
 * prescribed medicines, status, date, and actions.
 * It also features a search bar and a button to add a new prescription.
 */
export default function PrescriptionsTable() {
  // Sample data for prescriptions.
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // You can change this if needed

  const prescriptions = [
    {
      id: 1,
      patient: "John Smith",
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
      medicines: "Paracetamol, Ibuprofen",
      status: "Pending", // Status of the prescription
      date: "Dec 13, 2024",
    },
    {
      id: 2,
      patient: "Emma Wilson",
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
      medicines: "Amoxicillin, Vitamin D",
      status: "Ready",
      date: "Dec 13, 2024",
    },
    {
      id: 3,
      patient: "Michael Brown",
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
      medicines: "Aspirin, Omeprazole",
      status: "Allocated",
      date: "Dec 12, 2024",
    },
    // Add more if needed
  ];

  // Defines Tailwind CSS classes for different prescription statuses.
  // This object allows for dynamic styling based on the `status` property.
  const statusStyles = {
    Pending: "bg-yellow-100 text-yellow-800",
    Ready: "bg-green-100 text-green-800",
    Allocated: "bg-blue-100 text-blue-800",
  };

  const filteredPrescriptions = prescriptions.filter((prescription) => {
    const actionLabel = prescription.status === "Pending" ? "Allocate" : "View";
    const searchableString = (
      prescription.patient +
      prescription.medicines +
      prescription.status +
      prescription.date +
      actionLabel
    ).toLowerCase();

    return searchableString.includes(searchTerm.toLowerCase());
  });

  // Calculate paginated data
  const totalItems = filteredPrescriptions.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredPrescriptions.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    // Main container for the prescriptions table, with background, rounded corners, shadow, and overflow.
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Header Section */}
      <div className="px-4 sm:px-6 py-4 border-b border-gray-200 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold text-gray-900">
          Recent Prescriptions
        </h3>

        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search prescriptions..."
            className="w-full sm:w-auto px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-black-500"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to page 1 on search
            }}
          />
          <button className="inline-flex items-center justify-center gap-1 px-4 py-2 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-md w-full sm:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            New Prescription
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          {/* Table Header */}
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left font-medium text-gray-600">
                Patient Name
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-600">
                Medicines
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-600">
                Status
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-600">
                Date
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {paginatedData.map((prescription) => (
              <tr key={prescription.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <Image
                      src={prescription.image}
                      alt={prescription.patient}
                      width={36} // Explicit width for Next.js Image optimization
                      height={36} // Explicit height for Next.js Image optimization
                      className="rounded-full object-cover"
                    />
                    <span className="font-medium text-gray-900">
                      {prescription.patient}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {prescription.medicines}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-0.5 inline-flex text-xs font-semibold rounded-full ${
                      statusStyles[
                        prescription.status as keyof typeof statusStyles
                      ]
                    }`}
                  >
                    {prescription.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">{prescription.date}</td>
                <td className="px-6 py-4">
                  {prescription.status === "Pending" ? (
                    <button className="bg-[#38a2e8] text-white text-xs font-medium px-2 py-1 rounded-lg hover:bg-[#2196db]">
                      Allocate Stock
                    </button>
                  ) : (
                    <button className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-lg hover:bg-gray-200">
                      View
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        itemLabel="prescriptions"
      />
    </div>
  );
}
