// components/sales-orders/Pagination.tsx
export default function Pagination() {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center px-6 py-3 text-xs text-[#64748B] border-t border-[#E2E8F0] gap-3">
      <div>Showing 1 to 10 of 143 results</div>
      <nav className="flex items-center gap-2">
        <button
          aria-label="Previous page"
          className="border border-[#CBD5E1] rounded-md px-3 py-1 text-sm text-[#475569] hover:bg-[#F1F5F9] transition"
        >
          Previous
        </button>
        <button
          aria-current="page"
          className="bg-[#10B981] text-white rounded-md px-3 py-1 text-sm font-semibold"
        >
          1
        </button>
        <button className="border border-[#CBD5E1] rounded-md px-3 py-1 text-sm text-[#475569] hover:bg-[#F1F5F9] transition">
          2
        </button>
        <button className="border border-[#CBD5E1] rounded-md px-3 py-1 text-sm text-[#475569] hover:bg-[#F1F5F9] transition">
          3
        </button>
      </nav>
    </footer>
  );
}
