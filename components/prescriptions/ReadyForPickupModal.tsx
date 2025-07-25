// components/prescriptions/ReadyForPickupModal.tsx

"use client";

import { useState } from "react";
import ConfirmCollectionModal from "./ConfirmCollectionModal";

interface ReadyForPickupModalProps {
  isOpen: boolean;
  onClose: () => void; // This onClose will now trigger closing chain of modals
  patient: {
    name: string;
    email: string;
    phone: string;
    prescriptionId: string;
  };
  prescriptions: Array<{
    name: string;
    dosage: string;
    quantity: string;
    status: string;
  }>;
  onConfirm: (notifyPatient: boolean, notes: string) => void; // This signals "ready" action complete
}

export default function ReadyForPickupModal({
  isOpen,
  onClose,
  patient,
  prescriptions,
  onConfirm,
}: ReadyForPickupModalProps) {
  const [notifyPatient, setNotifyPatient] = useState(true);
  const [notes, setNotes] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(notifyPatient, notes); // Signal to parent that "ready" action is done
    setShowConfirmModal(true); // Open the ConfirmCollectionModal
    // Important: Do NOT call onClose() here. onClose will be called after ConfirmCollectionModal is handled.
  };

  const handleCollectionConfirm = (staffName: string) => {
    console.log(`Prescription collected by ${staffName}`);
    setShowConfirmModal(false); // Close the ConfirmCollectionModal
    onClose(); // <--- Now, this is the correct place to close the ReadyForPickupModal,
    // which in turn will trigger the closing of AllocateStockModal.
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div
            className="bg-white rounded-md shadow-md border border-gray-200 p-6 w-full max-w-lg"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header */}
            <header className="flex items-center justify-between mb-6">
              <h2
                id="modal-title"
                className="text-gray-900 font-semibold text-base flex items-center gap-2"
              >
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600">
                  <i className="fas fa-check"></i>
                </span>
                Mark as Ready for Pickup?
              </h2>
              <button
                type="button"
                onClick={onClose} // This onClose would close ReadyForPickupModal directly
                className="text-gray-400 hover:text-gray-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400 rounded"
              >
                <i className="fas fa-times"></i>
              </button>
            </header>

            {/* Patient Info */}
            <section className="mb-6">
              <p className="text-gray-600 text-sm mb-2">Patient Information</p>
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 text-gray-600 shrink-0">
                  <i className="fas fa-user"></i>
                </div>
                <div className="text-gray-900 text-sm leading-tight">
                  <p className="font-semibold">{patient.name}</p>
                  <p className="text-gray-500 text-xs">{patient.email}</p>
                  <p className="text-gray-500 text-xs">{patient.phone}</p>
                </div>
              </div>
            </section>

            {/* Prescription Summary */}
            <section className="bg-gray-50 rounded-md p-4 mb-6 text-sm text-gray-900 space-y-3">
              <p className="mb-2 text-gray-700">Prescription Summary</p>
              <ul className="space-y-2">
                {prescriptions.map((prescription, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-gray-900">
                      <i className="fas fa-check text-green-600"></i>
                      <span>
                        {prescription.name} {prescription.dosage} (
                        {prescription.quantity})
                      </span>
                    </div>
                    <span className="bg-green-100 text-green-600 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                      {prescription.status}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Notify Switch */}
            <section className="bg-blue-50 rounded-md p-4 mb-6 flex items-center justify-between">
              <div>
                <p className="text-gray-900 text-sm font-semibold">
                  Send notification to patient
                </p>
                <p className="text-gray-600 text-xs">
                  Patient will receive an email/SMS with pickup instructions
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={notifyPatient}
                  onChange={() => setNotifyPatient(!notifyPatient)}
                />
                <div
                  className={`w-11 h-6 rounded-full peer ${
                    notifyPatient ? "bg-green-600" : "bg-gray-200"
                  } transition-colors`}
                ></div>
                <div
                  className={`absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow transform transition-transform ${
                    notifyPatient ? "translate-x-5" : ""
                  }`}
                ></div>
              </label>
            </section>

            {/* Notes */}
            <section className="mb-6">
              <label
                htmlFor="additional-notes"
                className="block text-gray-900 text-xs font-semibold mb-1"
              >
                Additional Notes (Optional)
              </label>
              <textarea
                id="additional-notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add any special instructions for the patient..."
                className="w-full text-xs text-gray-900 placeholder-gray-300 border border-gray-200 rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 p-2"
              ></textarea>
            </section>

            {/* Info Note */}
            <section className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 text-xs p-3 rounded-md mb-6">
              <i className="fas fa-info-circle mr-2"></i>
              After confirmation, the prescription status will change to{" "}
              <strong>&quot;Ready for Pickup&quot;</strong> and the patient will
              be notified if enabled.
            </section>

            {/* Footer */}
            <footer className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="text-gray-700 bg-white border border-gray-300 rounded-md px-4 py-2 text-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-green-500 cursor-pointer"
              >
                <i className="fas fa-check"></i> Mark as Ready &amp; Notify
              </button>
            </footer>
          </div>
        </div>
      )}

      {/* Confirm Collection Modal – Rendered as a child of ReadyForPickupModal */}
      <ConfirmCollectionModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={handleCollectionConfirm}
        patient={patient}
        prescriptions={prescriptions.map((p) => ({
          name: p.name,
          form: p.dosage,
          quantity: p.quantity,
          status: "Ready", // Status for collection summary
        }))}
      />
    </>
  );
}
