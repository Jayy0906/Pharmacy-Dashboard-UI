// This component displays a static pagination UI for navigating prescription pages.
// Currently, it shows hardcoded data but is prepared to accept props for dynamic use.

interface PaginationProps {
  totalItems: number; // Total number of items (e.g., prescriptions)
  itemsPerPage: number; // How many items to show per page
  currentPage: number; // Current active page number

  // Uncomment if pagination needs to be dynamic later
  // onPageChange: (page: number) => void;
}

export default function Pagination(
  {
    // Props are commented out for now since this version is static
    // totalItems,
    // itemsPerPage,
    // currentPage
  }: PaginationProps,
) {
  // Future-ready logic for real pagination (currently unused)
  // const totalPages = Math.ceil(totalItems / itemsPerPage);
  // const startItem = (currentPage - 1) * itemsPerPage + 1;
  // const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="px-6 py-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      {/* Info line about current records shown */}
      <p className="text-sm text-gray-700">
        Showing <span>1</span> - <span>3</span> of <span>24</span> prescriptions
      </p>

      {/* Page navigation buttons */}
      <div className="flex items-center space-x-2">
        <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50 cursor-pointer">
          Previous
        </button>
        <button className="px-3 py-1 border rounded-md text-sm font-medium text-white bg-[#16a085] cursor-pointer">
          1
        </button>
        <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50 cursor-pointer">
          2
        </button>
        <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50 cursor-pointer">
          Next
        </button>
      </div>
    </div>
  );
}
