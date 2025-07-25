// app/prescriptions/components/PrescriptionsTable.tsx
"use client";

import Link from "next/link";
import Image from "next/image"; // Import the Image component
import { Prescription } from "../../app/pos/types"; // Assuming Prescription type is correctly defined here

// Define reusable action type for prescription row actions (e.g. view, print)
interface PrescriptionAction {
  icon: string;
  color: string;
  label: string;
  onClick?: (id: string) => void;
}

// Extend Prescription with actions for internal rendering
interface PrescriptionWithActions extends Prescription {
  actions: PrescriptionAction[];
}

// Static list of prescriptions for demo/mockup
const prescriptions: PrescriptionWithActions[] = [
  // {
  //   id: "#RX-2024-001",
  //   patient: {
  //     name: "Sarah Johnson",
  //     image:
  //       "https://storage.googleapis.com/a1aa/image/b710d2f2-4f40-48be-d56f-4e7f0854e69f.jpg",
  //   },
  //   clinic: "Central Medical Clinic",
  //   dateReceived: "Jan 15, 2024",
  //   totalItems: 3,
  //   status: "Pending",
  //   statusColor: "bg-yellow-200",
  //   statusTextColor: "text-yellow-800",
  //   actions: [
  //     {
  //       icon: "eye",
  //       color: "hover:text-blue-600 cursor-pointer",
  //       label: "View",
  //       onClick: (id) =>
  //         (window.location.href = `/prescriptions/${id.replace("#", "")}`),
  //     },
  //     {
  //       icon: "check-circle",
  //       color: "text-green-600 hover:text-green-700 cursor-pointer",
  //       label: "Approve",
  //     },
  //     {
  //       icon: "print",
  //       color: "hover:text-gray-900 cursor-pointer",
  //       label: "Print",
  //     },
  //   ],
  // },
  // {
  //   id: "#RX-2024-002",
  //   patient: {
  //     name: "Michael Chen",
  //     image:
  //       "https://storage.googleapis.com/a1aa/image/7e0a1847-0d76-4c82-bba1-8510bf0ae7ca.jpg",
  //   },
  //   clinic: "Wellness Family Practice",
  //   dateReceived: "Jan 15, 2024",
  //   totalItems: 2,
  //   status: "Allocated",
  //   statusColor: "bg-blue-200",
  //   statusTextColor: "text-blue-800",
  //   actions: [
  //     {
  //       icon: "eye",
  //       color: "hover:text-blue-600",
  //       label: "View",
  //       onClick: (id) =>
  //         (window.location.href = `/prescriptions/${id.replace("#", "")}`),
  //     },
  //     {
  //       icon: "print",
  //       color: "hover:text-gray-900",
  //       label: "Print",
  //     },
  //     {
  //       icon: "sync-alt",
  //       color: "text-green-400 hover:text-green-600",
  //       label: "Refresh",
  //     },
  //   ],
  // },
  // {
  //   id: "#RX-2024-003",
  //   patient: {
  //     name: "Emma Davis",
  //     image:
  //       "https://storage.googleapis.com/a1aa/image/76467b73-87fe-43ab-b86e-b3c3f77ebe2a.jpg",
  //   },
  //   clinic: "Downtown Health Center",
  //   dateReceived: "Jan 14, 2024",
  //   totalItems: 1,
  //   status: "Ready",
  //   statusColor: "bg-green-200",
  //   statusTextColor: "text-green-800",
  //   actions: [
  //     {
  //       icon: "eye",
  //       color: "hover:text-blue-600",
  //       label: "View",
  //       onClick: (id) =>
  //         (window.location.href = `/prescriptions/${id.replace("#", "")}`),
  //     },
  //     {
  //       icon: "print",
  //       color: "hover:text-gray-900",
  //       label: "Print",
  //     },
  //     {
  //       icon: "download",
  //       color: "text-green-700 hover:text-green-800",
  //       label: "Download",
  //     },
  //   ],
  // },
  // {
  //   id: "#RX-2024-004",
  //   patient: {
  //     name: "Robert Wilson",
  //     image:
  //       "https://storage.googleapis.com/a1aa/image/629105b9-2933-4780-4ebe-e80cffd7cad5.jpg",
  //   },
  //   clinic: "City Medical Group",
  //   dateReceived: "Jan 13, 2024",
  //   totalItems: 4,
  //   status: "Collected",
  //   statusColor: "bg-gray-300",
  //   statusTextColor: "text-gray-700",
  //   actions: [
  //     {
  //       icon: "eye",
  //       color: "hover:text-blue-600",
  //       label: "View",
  //       onClick: (id) =>
  //         (window.location.href = `/prescriptions/${id.replace("#", "")}`),
  //     },
  //     {
  //       icon: "print",
  //       color: "hover:text-gray-900",
  //       label: "Print",
  //     },
  //   ],
  // },
  // Additional prescriptions...
];

export default function PrescriptionsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-[#F3F4F6]">
          {/* Table Column Headers */}
          <tr>
            <th className="px-6 py-3 text-left font-semibold text-gray-700 whitespace-nowrap">
              Prescription ID
            </th>
            <th className="px-6 py-3 text-left font-semibold text-gray-700 whitespace-nowrap">
              Patient Name
            </th>
            <th className="px-6 py-3 text-left font-semibold text-gray-700 whitespace-nowrap">
              Clinic Name
            </th>
            <th className="px-6 py-3 text-left font-semibold text-gray-700 whitespace-nowrap">
              Date <br /> Received
            </th>
            <th className="px-6 py-3 text-left font-semibold text-gray-700 whitespace-nowrap">
              Total <br /> Items
            </th>
            <th className="px-6 py-3 text-left font-semibold text-gray-700 whitespace-nowrap">
              Status
            </th>
            <th className="px-6 py-3 text-left font-semibold text-gray-700 whitespace-nowrap">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 bg-white">
          {/* Loop through each prescription and render row */}
          {prescriptions.map((prescription) => (
            <PrescriptionRow
              key={prescription.id}
              prescription={prescription}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Component that renders a single row for a prescription entry
function PrescriptionRow({
  prescription,
}: {
  prescription: PrescriptionWithActions;
}) {
  // Split full name into first and last (used for line breaks)
  const [firstName, lastName] = prescription.patient.name.split(" ");

  return (
    <tr>
      {/* Prescription ID */}
      <td className="px-6 py-4 text-gray-900 font-semibold whitespace-nowrap">
        {prescription.id}
      </td>

      {/* Patient Info + Avatar */}
      <td className="px-6 py-4 whitespace-nowrap flex items-center gap-3">
        <Image
          alt={`Portrait of ${prescription.patient.name}`}
          className="w-8 h-8 rounded-full object-cover"
          src={prescription.patient.image}
          width={32}
          height={32}
        />
        <div className="text-gray-900 font-semibold leading-tight">
          {firstName}
          <br />
          {lastName}
        </div>
      </td>

      {/* Clinic Name */}
      <td className="px-6 py-4 text-gray-700 font-semibold whitespace-normal max-w-[10rem]">
        {prescription.clinic}
      </td>

      {/* Date Received */}
      <td className="px-6 py-4 text-gray-700 font-semibold whitespace-nowrap">
        {prescription.dateReceived}
      </td>

      {/* Total Items */}
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="inline-block bg-blue-200 text-blue-800 rounded-full px-2.5 py-0.5 text-xs font-semibold leading-tight">
          {prescription.totalItems}
          <br />
          {prescription.totalItems === 1 ? "item" : "items"}
        </span>
      </td>

      {/* Status badge */}
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`inline-block ${prescription.statusColor} ${prescription.statusTextColor} rounded-full px-3 py-1 text-xs font-semibold`}
        >
          {prescription.status}
        </span>
      </td>

      {/* Action buttons (View, Print, etc.) */}
      <td className="px-6 py-4 whitespace-nowrap flex items-center gap-4 text-gray-600">
        {prescription.actions.map((action) =>
          action.label === "View" ? (
            <Link
              key={action.label}
              href={`/pos/${prescription.id.replace("#", "")}`}
              aria-label={`${action.label} prescription ${prescription.id}`}
              className={`${action.color} cursor-pointer`}
            >
              <i className={`fas fa-${action.icon}`}></i>
            </Link>
          ) : (
            <button
              key={action.label}
              aria-label={`${action.label} prescription ${prescription.id}`}
              className={`${action.color} cursor-pointer`}
              onClick={() => action.onClick?.(prescription.id)}
            >
              <i className={`fas fa-${action.icon}`}></i>
            </button>
          ),
        )}
      </td>
    </tr>
  );
}
