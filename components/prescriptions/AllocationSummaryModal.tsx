// components/prescriptions/AllocationSummaryModal.tsx
"use client";

interface AllocationSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AllocationSummaryModal({
  isOpen,
  onClose,
}: AllocationSummaryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/10 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
        onClick={onClose}
      ></div>

      <div
        className="relative bg-white rounded-lg max-w-md w-full mx-auto p-6 z-10"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <header className="flex justify-between items-center mb-4">
          <h2
            id="modal-title"
            className="font-semibold text-gray-900 text-base leading-6"
          >
            Allocation Summary
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="text-gray-400 hover:text-gray-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400 rounded"
          >
            <i className="fas fa-times"></i>
          </button>
        </header>

        <section className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600">
              <i className="fas fa-check"></i>
            </div>
            <h3 className="font-semibold text-gray-800 text-sm">
              Allocated Items
              <span className="ml-1 inline-block rounded-full bg-green-100 text-green-600 text-xs font-semibold px-2 py-0.5">
                3
              </span>
            </h3>
          </div>
          <ul className="space-y-2">
            <li className="bg-green-50 rounded-md p-3 flex justify-between items-start">
              <div>
                <p className="font-semibold text-gray-800 text-sm leading-5">
                  Lisinopril 10mg
                </p>
                <p className="text-xs text-gray-500 leading-4">Tablets</p>
              </div>
              <div className="text-right text-green-600 text-xs font-semibold leading-4">
                <p>30 of 30 allocated</p>
                <p className="text-green-700 text-[10px] font-normal leading-3">
                  From Inventory: Main Store
                </p>
              </div>
            </li>
            <li className="bg-green-50 rounded-md p-3 flex justify-between items-start">
              <div>
                <p className="font-semibold text-gray-800 text-sm leading-5">
                  Atorvastatin 20mg
                </p>
                <p className="text-xs text-gray-500 leading-4">Tablets</p>
              </div>
              <div className="text-right text-green-600 text-xs font-semibold leading-4">
                <p>30 of 30 allocated</p>
                <p className="text-green-700 text-[10px] font-normal leading-3">
                  From Inventory: Main Store
                </p>
              </div>
            </li>
            <li className="bg-green-50 rounded-md p-3 flex justify-between items-start">
              <div>
                <p className="font-semibold text-gray-800 text-sm leading-5">
                  Aspirin 81mg
                </p>
                <p className="text-xs text-gray-500 leading-4">Tablets</p>
              </div>
              <div className="text-right text-green-600 text-xs font-semibold leading-4">
                <p>90 of 90 allocated</p>
                <p className="text-green-700 text-[10px] font-normal leading-3">
                  From Inventory: Secondary Store
                </p>
              </div>
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-red-100 text-red-600">
              <i className="fas fa-times"></i>
            </div>
            <h3 className="font-semibold text-gray-800 text-sm">
              Unavailable Items
              <span className="ml-1 inline-block rounded-full bg-red-100 text-red-600 text-xs font-semibold px-2 py-0.5">
                2
              </span>
            </h3>
          </div>
          <ul className="space-y-2">
            <li className="bg-red-50 rounded-md p-3 flex justify-between items-start">
              <div>
                <p className="font-semibold text-gray-900 text-sm leading-5">
                  Metformin 500mg
                </p>
                <p className="text-xs text-gray-600 leading-4">Tablets</p>
                <p className="text-xs text-red-600 font-semibold mt-1 flex items-center gap-1">
                  <i className="fas fa-info-circle text-[10px]"></i>
                  Insufficient quantity in inventory
                </p>
              </div>
              <div className="text-right text-red-600 text-xs font-semibold leading-4">
                <p>0 of 60 allocated</p>
                <p className="text-red-700 text-[10px] font-normal leading-3">
                  Available: 20 tablets
                </p>
              </div>
            </li>
            <li className="bg-red-50 rounded-md p-3 flex justify-between items-start">
              <div>
                <p className="font-semibold text-gray-900 text-sm leading-5">
                  Hydrochlorothiazide 25mg
                </p>
                <p className="text-xs text-gray-600 leading-4">Tablets</p>
                <p className="text-xs text-red-600 font-semibold mt-1 flex items-center gap-1">
                  <i className="fas fa-info-circle text-[10px]"></i> Out of
                  stock
                </p>
              </div>
              <div className="text-right text-red-600 text-xs font-semibold leading-4">
                <p>0 of 30 allocated</p>
                <p className="text-red-700 text-[10px] font-normal leading-3">
                  Available: 0 tablets
                </p>
              </div>
            </li>
          </ul>
        </section>

        <section className="bg-gray-50 rounded-md p-4 text-center text-gray-800 text-xs font-semibold">
          <p className="text-lg font-bold leading-6 mb-1">3 of 5</p>
          <p className="mb-3 text-xs font-normal">
            items successfully allocated
          </p>
          <div className="flex justify-center gap-12 border-t border-gray-300 pt-3">
            <div className="text-green-600">
              <p className="font-bold text-sm">60%</p>
              <p className="text-xs font-normal">Allocation rate</p>
            </div>
            <div>
              <p className="font-bold text-sm">2</p>
              <p className="text-xs font-normal">Items require attention</p>
            </div>
          </div>
        </section>

        <footer className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold rounded-md px-4 py-2 cursor-pointer"
          >
            Continue to Prescription
          </button>
        </footer>
      </div>
    </div>
  );
}
