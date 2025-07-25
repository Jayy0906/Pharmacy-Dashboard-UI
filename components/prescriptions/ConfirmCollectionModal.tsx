// components/prescriptions/ConfirmCollectionModal.tsx
"use client";

import { useState } from "react";
import ProductDetailsModal from "./ProductDetailsModal";

interface ConfirmCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  patient: {
    name: string;
    email: string;
    phone: string;
    prescriptionId: string;
  };
  prescriptions: Array<{
    name: string;
    form: string;
    quantity: string;
    status: string;
  }>;
  onConfirm: (staffName: string) => void;
}

export default function ConfirmCollectionModal({
  isOpen,
  onClose,
  patient,
  prescriptions,
  onConfirm,
}: ConfirmCollectionModalProps) {
  const [staffName, setStaffName] = useState("");
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({
    name: "",
    form: "",
    description: "",
    availableStock: "",
    allocatedStock: "",
    costPrice: "",
    vat: "",
    sellingPrice: "",
    lastUpdated: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (staffName.trim()) {
      onConfirm(staffName);
      // Reset form after submission
      setStaffName("");
    }
  };

  const handleViewProductDetails = (prescription: {
    name: string;
    form: string;
  }) => {
    setSelectedProduct({
      name: prescription.name,
      form: prescription.form,
      description:
        "Lisinopril is an ACE inhibitor used to treat high blood pressure, heart failure, and after heart attacks. It works by relaxing blood vessels to lower blood pressure.",
      availableStock: "45 tablets",
      allocatedStock: "30 tablets",
      costPrice: "$10.50",
      vat: "$0.63",
      sellingPrice: "$15.00",
      lastUpdated: "June 12, 2023",
    });
    setShowProductDetails(true);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div
          className="bg-white rounded-lg shadow-md p-6 w-full max-w-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <form onSubmit={handleSubmit}>
            <h3
              id="modal-title"
              className="text-gray-900 font-semibold text-base mb-4"
            >
              Confirm Collection?
            </h3>

            <div className="flex items-start space-x-4 mb-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500"
                aria-hidden="true"
              >
                <i className="fas fa-user"></i>
              </div>
              <div className="text-gray-700 text-sm leading-tight">
                <p className="font-semibold text-gray-900">{patient.name}</p>
                <p>{patient.email}</p>
                <p>{patient.phone}</p>
                <p className="mt-1">
                  <span className="inline-block bg-gray-200 text-gray-600 text-[10px] font-mono px-2 py-[2px] rounded">
                    Prescription ID: {patient.prescriptionId}
                  </span>
                </p>
              </div>
            </div>

            <p className="text-gray-700 text-xs mb-2">Prescription Summary</p>

            <table className="w-full text-left text-xs border border-gray-200 rounded-sm mb-4">
              <thead className="bg-gray-100 text-gray-500 font-semibold">
                <tr>
                  <th className="py-2 px-3 w-1/2 uppercase">Medication</th>
                  <th className="py-2 px-3 w-1/4 uppercase">Quantity</th>
                  <th className="py-2 px-3 w-1/4 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {prescriptions.map((prescription, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="py-2 px-3">
                      <button
                        type="button"
                        className="font-semibold hover:text-blue-600 hover:underline text-left"
                        onClick={() => handleViewProductDetails(prescription)}
                      >
                        {prescription.name}
                      </button>
                      <p className="text-[10px] text-gray-500">
                        {prescription.form}
                      </p>
                    </td>
                    <td className="py-2 px-3 font-semibold">
                      {prescription.quantity}
                    </td>
                    <td className="py-2 px-3">
                      <span className="inline-block bg-green-100 text-green-700 text-[10px] font-semibold px-2 py-[2px] rounded">
                        {prescription.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mb-4">
              <label
                htmlFor="staffName"
                className="block text-gray-700 text-xs mb-1"
              >
                Staff Name (who handed over medicine)
              </label>
              <input
                id="staffName"
                type="text"
                value={staffName}
                onChange={(e) => setStaffName(e.target.value)}
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                required
              />
            </div>

            <div className="bg-blue-100 border border-blue-300 rounded-md p-3 text-xs text-blue-900 flex items-start space-x-2 mb-6">
              <i className="fas fa-info-circle mt-[3px]"></i>
              <p>
                <strong>After confirming collection,</strong> this prescription
                will be marked as <strong>&quot;Collected&quot;</strong> and
                further edits will be locked.
              </p>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded border border-gray-300 text-gray-700 text-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded bg-teal-600 text-white text-sm font-semibold flex items-center space-x-2 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 cursor-pointer"
                disabled={!staffName.trim()}
              >
                <i className="fas fa-check"></i>
                <span>Mark as Collected</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <ProductDetailsModal
        isOpen={showProductDetails}
        onClose={() => setShowProductDetails(false)}
        product={selectedProduct}
      />
    </>
  );
}
