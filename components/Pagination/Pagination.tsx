"use client";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange?: (value: number) => void;
  itemLabel: string;
}

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  onItemsPerPageChange,
  itemLabel,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // Don't show pagination if there's only one page
  if (totalPages <= 1) return null;

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    // const maxVisiblePages = 5;

    // Always show first page
    pages.push(1);

    // Show current page and surrounding pages
    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);

    // Adjust if we're near the start or end
    if (currentPage <= 3) {
      end = Math.min(4, totalPages - 1);
    } else if (currentPage >= totalPages - 2) {
      start = Math.max(totalPages - 3, 2);
    }

    // Add ellipsis if needed after first page
    if (start > 2) pages.push(-1);
    for (let i = start; i <= end; i++) pages.push(i);
    if (end < totalPages - 1) pages.push(-1);
    if (totalPages > 1) pages.push(totalPages);
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="px-6 py-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      {/* Items info + page size selector */}
      <div className="flex items-center space-x-4">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{startItem}</span> -{" "}
          <span className="font-medium">{endItem}</span> of{" "}
          <span className="font-medium">{totalItems}</span> {itemLabel}
        </p>

        {/* ✅ Items per page dropdown */}
        {onItemsPerPageChange && (
          <select
            className="border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={itemsPerPage}
            onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          >
            {[3, 5, 10, 25, 50].map((count) => (
              <option key={count} value={count}>
                Show {count}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Pagination buttons */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50 ${
            currentPage === 1
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer"
          }`}
        >
          Previous
        </button>

        {pageNumbers.map((page, index) => (
          <button
            key={index}
            onClick={() =>
              typeof page === "number" && page > 0 ? onPageChange(page) : null
            }
            className={`px-3 py-1 border rounded-md text-sm ${
              page === currentPage
                ? "font-medium text-white bg-[#16a085] cursor-default"
                : "border-gray-300 hover:bg-gray-50 cursor-pointer"
            } ${page === -1 ? "cursor-default border-transparent" : ""}`}
            disabled={page === -1 || page === currentPage}
          >
            {page === -1 ? "..." : page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50 ${
            currentPage === totalPages
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
