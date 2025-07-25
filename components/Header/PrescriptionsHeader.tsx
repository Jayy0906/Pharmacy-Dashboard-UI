// components/Header/PrescriptionsHeader.tsx

/**
 * Header component for the prescriptions page.
 * Displays page title, a short description, notification button, and a "New Prescription" button.
 */
/**
 * Header component for the prescriptions page.
 * Displays page title, a short description, notification button, and a "New Prescription" button.
 */
export default function Header() {
  return (
    <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
      {/* Title + description */}
      <div>
        <h1 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight mb-1">
          Prescriptions
        </h1>
        <p className="text-gray-600 text-xs md:text-sm lg:text-base font-medium">
          View and fulfill prescriptions sent from clinics via Pathly.
        </p>

        {/* Action buttons on small to medium screens (below lg) */}
        <div className="flex flex-row sm:items-center sm:gap-4 lg:hidden mt-4 gap-3">
          <button
            className="flex items-center gap-2 bg-gray-100 text-gray-700 text-[12px] md:text-sm rounded-lg px-4 md:px-24 py-2 cursor-pointer hover:bg-gray-200 transition-colors duration-200"
            type="button"
          >
            <i className="fas fa-bell text-gray-500"></i>
            <span>3 pending notifications</span>
          </button>
          <button
            className="bg-teal-600 hover:bg-teal-500 text-white text-[12px] md:text-sm font-semibold rounded-lg px-4 md:px-24 py-2 cursor-pointer transition-colors duration-200"
            type="button"
          >
            + New Prescription
          </button>
        </div>
      </div>

      {/* Action buttons on large screens (desktop only) */}
      <div className="hidden lg:flex items-center gap-4">
        <button
          className="flex items-center gap-2 bg-gray-100 text-gray-700 text-sm rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-200 transition-colors duration-200"
          type="button"
        >
          <i className="fas fa-bell text-gray-500"></i>
          <span>3 pending notifications</span>
        </button>
        <button
          className="bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold rounded-lg px-4 py-2 cursor-pointer transition-colors duration-200"
          type="button"
        >
          + New Prescription
        </button>
      </div>
    </header>
  );
}
