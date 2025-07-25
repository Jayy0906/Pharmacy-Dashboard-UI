// app/prescriptions/[id]/components/MedicationsTable.tsx
"use client";

import { Medication } from "@/app/pos/types";
import { useState } from "react";
import Icon from "@/components/ui/Icon";

// interface Medication {
//   name: string;
//   form: string;
//   quantity: string;
//   available: string;
//   allocated: string;
//   status: string;
//   statusColor: string;
//   statusTextColor: string;
// }

interface MedicationsTableProps {
  medications: Medication[];
}

export default function MedicationsTable({
  medications,
}: MedicationsTableProps) {
  const [autoAllocate, setAutoAllocate] = useState(false); // toggle for Auto Allocation
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(
    {},
  ); // track selected rows

  // Toggle all checkboxes
  const toggleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSelectedItems: Record<string, boolean> = {};
    if (e.target.checked) {
      medications.forEach((med, index) => {
        newSelectedItems[index] = true;
      });
    }
    setSelectedItems(newSelectedItems);
  };

  // Toggle single row checkbox
  const toggleSelectItem = (index: number) => {
    setSelectedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section>
      {/* Section header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold text-gray-900 text-sm lg:text-base select-none">
          Prescribed Medications
        </h2>
        {/* Auto Allocate Toggle */}
        <div className="flex items-center gap-2 text-gray-600 text-xs select-none">
          <span>Auto Allocation</span>
          <button
            onClick={() => setAutoAllocate(!autoAllocate)}
            className={`relative inline-flex items-center h-5 rounded-full w-9 transition-colors cursor-pointer ${
              autoAllocate ? "bg-blue-600" : "bg-gray-200"
            }`}
            aria-label={
              autoAllocate
                ? "Disable auto allocation"
                : "Enable auto allocation"
            }
          >
            <span
              className={`inline-block w-4 h-4 transform transition-transform ${
                autoAllocate ? "translate-x-4" : "translate-x-0.5"
              } rounded-full bg-white shadow`}
            />
          </button>
        </div>
      </div>

      {/* Medication table */}
      <table className="w-full text-xs text-left text-gray-500 border border-gray-200 rounded-md overflow-hidden">
        <thead className="text-gray-400 bg-gray-50 uppercase text-[10px] select-none">
          <tr>
            <th className="px-3 py-2 w-6" scope="col">
              <input
                type="checkbox"
                className="cursor-pointer"
                aria-label="Select all products"
                onChange={toggleSelectAll}
                checked={
                  Object.keys(selectedItems).length === medications.length &&
                  medications.length > 0
                }
              />
            </th>
            <th className="px-3 py-2 lg:text-[12px]" scope="col">
              Product Name
            </th>
            <th className="px-3 py-2 lg:text-[12px]" scope="col">
              Quantity Prescribed
            </th>
            <th className="px-3 py-2 lg:text-[12px]" scope="col">
              Available in Inventory
            </th>
            <th className="px-3 py-2 lg:text-[12px]" scope="col">
              Allocated
            </th>
            <th className="px-3 py-2 lg:text-[12px]" scope="col">
              Status
            </th>
            <th className="px-3 py-2 text-center lg:text-[12px]" scope="col">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 bg-white">
          {medications.map((med, index) => (
            <tr key={index}>
              <td className="px-3 py-3">
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  aria-label={`Select ${med.name}`}
                  checked={!!selectedItems[index]}
                  onChange={() => toggleSelectItem(index)}
                />
              </td>
              <td className="px-3 py-3 min-w-[140px]">
                <p className="font-semibold text-gray-900 lg:text-[12px]">
                  {med.name}
                </p>
                <p className="text-[11px] text-gray-400 select-none">
                  {med.form}
                </p>
              </td>
              <td className="px-3 py-3 font-semibold text-gray-900">
                {med.quantity}
              </td>
              <td className="px-3 py-3 font-semibold text-gray-900">
                {med.available}
              </td>
              <td
                className={`px-3 py-3 font-semibold ${
                  med.allocated === "Yes"
                    ? "text-green-600"
                    : med.allocated === "No"
                      ? "text-red-600"
                      : "text-gray-500"
                }`}
              >
                {med.allocated}
              </td>
              <td className="px-3 py-3">
                <span
                  className={`${med.statusColor} ${med.statusTextColor} text-[10px] font-semibold px-2 py-1 rounded-full select-none`}
                >
                  {med.status}
                </span>
              </td>
              <td className="px-3 py-3 text-center text-blue-600 cursor-pointer hover:text-blue-800">
                <Icon name="external-link-alt" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer actions */}
      <div className="mt-3 flex justify-end gap-2">
        <button
          className="flex items-center gap-2 border border-gray-300 rounded px-4 py-2 font-medium text-xs lg:text-sm text-gray-700 hover:bg-gray-100 transition cursor-pointer"
          type="button"
          disabled={Object.values(selectedItems).filter(Boolean).length === 0}
        >
          <Icon name="cog" />
          Allocate Selected
        </button>
        <button
          className="bg-teal-600 hover:bg-teal-500 text-white rounded px-4 py-1 text-xs lg:text-sm font-semibold transition cursor-pointer"
          type="button"
          disabled={medications.length === 0}
        >
          <Icon name="check" />
          Allocate All
        </button>
      </div>
    </section>
  );
}
