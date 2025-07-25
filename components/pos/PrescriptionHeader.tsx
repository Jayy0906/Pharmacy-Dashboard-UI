// This is the header section of the Prescription Management page.
// It includes the page title and action buttons (e.g. Add new, Export).

export default function PrescriptionHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
      {/* Page Title */}
      <h2 className="text-xl md:text-2xl font-bold leading-tight text-gray-900">
        Prescription Management
      </h2>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-4 sm:mt-0">
        <button
          className="inline-flex items-center gap-1 bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold rounded-md px-4 py-2 cursor-pointer"
          type="button"
        >
          <i className="fas fa-plus"></i>
          New Prescription
        </button>

        <button
          className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 text-sm font-normal rounded-md px-4 py-2 cursor-pointer"
          type="button"
        >
          <i className="fas fa-download"></i>
          Export
        </button>
      </div>
    </div>
  );
}
