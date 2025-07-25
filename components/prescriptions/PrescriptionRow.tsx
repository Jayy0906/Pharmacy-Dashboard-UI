// components/prescriptions/PrescriptionRow.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import AllocateStockModal from "./AllocateStockModal";
import AllocationSummaryModal from "./AllocationSummaryModal";

interface PrescriptionRowProps {
  id: string;
  patient: {
    name: string;
    email: string;
    image: string;
    phone: string;
  };
  clinic: string;
  date: string;
  items: number;
  status: string;
  actions: string[];
}

export default function PrescriptionRow({
  id,
  patient,
  clinic,
  date,
  items,
  status,
  actions,
}: PrescriptionRowProps) {
  const [showAllocateModal, setShowAllocateModal] = useState(false);
  // const [showReadyModal, setShowReadyModal] = useState(false);
  const [showSummaryModal, setShowSummaryModal] = useState(false);

  const handleAllocate = (quantity: number, notes: string) => {
    console.log(`Allocated ${quantity} with notes: ${notes}`);
    // Handle allocation logic here
  };

  const statusClasses = {
    Pending: "bg-orange-100 text-orange-500",
    Allocated: "bg-green-100 text-green-600",
    "Ready for Pickup": "bg-blue-100 text-blue-500",
    Collected: "bg-gray-100 text-gray-600",
  };

  const medicationToAllocate = {
    name: "Metformin 500mg",
    form: "Tablets",
    prescribedQuantity: "60 tablets",
    stockAvailable: "20 tablets",
    maxAllocation: 20,
    status: "In Stock" as "In Stock" | "Out of Stock",
  };

  return (
    <>
      <tr className="bg-white rounded-lg shadow-sm">
        <td className="px-2 sm:px-3 py-3 align-middle">
          <a className="text-blue-500 font-semibold hover:underline" href="#">
            #{id}
          </a>
        </td>

        <td className="px-2 sm:px-3 py-3 align-middle flex items-center gap-3 w-[180px] whitespace-nowrap">
          <Image
            alt={`Portrait of ${patient.name}`}
            className="w-8 h-8 rounded-full object-cover"
            height={32}
            width={32}
            src={patient.image}
          />
          <div className="leading-tight">
            <p className="font-semibold text-gray-900 text-sm">
              {patient.name}
            </p>
            <p className="text-gray-500 text-xs">{patient.email}</p>
          </div>
        </td>

        <td className="px-2 sm:px-3 py-3 align-middle font-semibold text-gray-900 text-sm whitespace-nowrap">
          {clinic}
        </td>

        <td className="px-2 sm:px-3 py-3 align-middle text-gray-700 text-sm">
          {date}
        </td>

        <td className="px-2 sm:px-3 py-3 align-middle font-semibold text-gray-900 text-sm">
          {items > 0 ? `${items} items` : ""}
        </td>

        <td className="px-2 sm:px-3 py-3 align-middle">
          {status && (
            <span
              className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
                statusClasses[status as keyof typeof statusClasses]
              }`}
            >
              <i
                className={`fas ${
                  status === "Pending"
                    ? "fa-clock text-xs"
                    : status === "Allocated"
                      ? "fa-check"
                      : ""
                }`}
              ></i>
              {status}
            </span>
          )}
        </td>

        <td className="px-2 sm:px-3 py-3 align-middle text-sm flex gap-4">
          {actions.map((action) => (
            <button
              key={action}
              onClick={() => {
                if (action === "Allocate") {
                  setShowAllocateModal(true);
                } else if (action === "View") {
                  setShowSummaryModal(true);
                }
              }}
              className={`${
                action === "View"
                  ? "text-blue-500 cursor-pointer"
                  : action === "Allocate" || action === "Ready"
                    ? "text-green-600 cursor-pointer"
                    : "text-gray-900 cursor-pointer"
              } hover:underline font-normal`}
            >
              {action}
            </button>
          ))}
        </td>
      </tr>

      <AllocateStockModal
        isOpen={showAllocateModal}
        onClose={() => setShowAllocateModal(false)}
        onAllocate={handleAllocate}
        patient={{ ...patient, prescriptionId: id }}
        medication={medicationToAllocate}
      />

      <AllocationSummaryModal
        isOpen={showSummaryModal}
        onClose={() => setShowSummaryModal(false)}
      />
    </>
  );
}
