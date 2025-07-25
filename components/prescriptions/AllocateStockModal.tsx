// components/prescriptions/AllocateStockModal.tsx

"use client";

import { useState } from "react";
import ReadyForPickupModal from "./ReadyForPickupModal";

interface AllocateStockModalProps {
  isOpen: boolean;
  onClose: () => void;
  patient: {
    name: string;
    email: string;
    phone: string;
    prescriptionId: string;
  };
  medication: {
    name: string;
    form: string;
    prescribedQuantity: string;
    stockAvailable: string;
    maxAllocation: number;
    status: "In Stock" | "Out of Stock";
  };
  onAllocate: (quantity: number, notes: string) => void; // Added onAllocate prop
}

export default function AllocateStockModal({
  isOpen: externalIsOpen,
  onClose: externalOnClose,
  patient,
  medication,
  onAllocate, // Destructure the new prop
}: AllocateStockModalProps) {
  const [quantity, setQuantity] = useState(medication.maxAllocation);
  const [notes, setNotes] = useState("");
  const [isReadyForPickupModalOpen, setIsReadyForPickupModalOpen] =
    useState(false);

  // This data will be passed to ReadyForPickupModal
  const prescriptionsData = [
    {
      name: medication.name,
      dosage: medication.form.split(" ")[0], // e.g., "Tablets"
      quantity: `${quantity} ${medication.form.split(" ")[1] || "units"}`, // e.g., "20 Tablets"
      status: "Allocated", // Initial status for ReadyForPickupModal summary
    },
  ];

  if (!externalIsOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAllocate(quantity, notes); // Call the onAllocate prop (from PrescriptionRow)
    console.log(
      `Allocating ${quantity} of ${medication.name}. Notes: ${notes}`,
    );
    setIsReadyForPickupModalOpen(true); // Open the ReadyForPickupModal
    // externalOnClose(); // Do NOT close AllocateStockModal here immediately
  };

  // This is the onConfirm handler for ReadyForPickupModal.
  // It handles the "Ready for Pickup" confirmation but does NOT close the modals.
  const handleReadyForPickupConfirm = (
    notifyPatient: boolean,
    pickupNotes: string,
  ) => {
    console.log(
      `Prescription marked as ready. Notify: ${notifyPatient}, Notes: ${pickupNotes}`,
    );
    // No state updates to close modals here. That's handled by ReadyForPickupModal's
    // own internal flow after ConfirmCollectionModal.
  };

  // This is the onClose handler for ReadyForPickupModal,
  // called when ReadyForPickupModal wants to close itself.
  const handleReadyForPickupClose = () => {
    setIsReadyForPickupModalOpen(false); // Close ReadyForPickupModal
    externalOnClose(); // Then close AllocateStockModal
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
          <div className="flex justify-between items-center border-b border-gray-200 px-6 py-4">
            <h3 className="text-sm font-semibold text-gray-900">
              Allocate Stock – Manual
            </h3>
            <button
              onClick={externalOnClose}
              aria-label="Close"
              className="text-gray-400 hover:text-gray-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400 rounded"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="px-6 py-4">
            <div className="mb-4">
              <p className="text-gray-900 font-semibold text-sm">
                {medication.name}
              </p>
              <p className="text-gray-600 text-xs mt-0.5">{medication.form}</p>
            </div>

            <div className="mb-4">
              <label className="block text-xs font-semibold text-gray-900 mb-1">
                Prescribed Quantity
              </label>
              <input
                type="text"
                readOnly
                value={medication.prescribedQuantity}
                className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 px-3 text-xs text-gray-900 cursor-not-allowed"
              />
            </div>

            <div className="mb-4">
              <label className="block text-xs font-semibold text-gray-900 mb-1">
                Stock Available
              </label>
              <input
                type="text"
                readOnly
                value={medication.stockAvailable}
                className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 px-3 text-xs text-gray-900 cursor-not-allowed"
              />
            </div>

            <div className="mb-1">
              <label className="block text-xs font-semibold text-gray-900 mb-1">
                Quantity to Allocate
              </label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min="0"
                max={medication.maxAllocation}
                className="w-full border border-gray-300 rounded-md py-2 px-3 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <p className="text-[10px] text-gray-400 mb-4">
              Maximum:{" "}
              <span className="font-semibold text-gray-600">
                {medication.maxAllocation} tablets
              </span>
            </p>

            <div className="mb-4">
              <label className="block text-xs font-semibold text-gray-900 mb-1">
                Notes (Optional)
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add any remarks about this allocation..."
                className="w-full border border-gray-300 rounded-md py-2 px-3 text-xs text-gray-900 placeholder-gray-400 resize-y focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <div className="mb-6">
              <span
                className={`inline-flex items-center rounded-full ${
                  medication.status === "In Stock"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                } text-[10px] font-semibold px-2 py-0.5`}
              >
                <i
                  className={`fas ${
                    medication.status === "In Stock"
                      ? "fa-check-circle"
                      : "fa-exclamation-circle"
                  } mr-1 text-[10px]`}
                ></i>
                {medication.status}
              </span>
            </div>

            <div className="flex justify-end space-x-3 pb-4">
              <button
                type="button"
                onClick={externalOnClose}
                className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-semibold text-white bg-teal-600 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 cursor-pointer"
              >
                Confirm Allocation
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ReadyForPickupModal is rendered conditionally as a child of AllocateStockModal */}
      <ReadyForPickupModal
        isOpen={isReadyForPickupModalOpen}
        onClose={handleReadyForPickupClose} // This will close both ReadyForPickupModal and AllocateStockModal
        patient={patient}
        prescriptions={prescriptionsData}
        onConfirm={handleReadyForPickupConfirm} // This onConfirm simply logs, doesn't close modals
      />
    </>
  );
}
