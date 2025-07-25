// components/Header/SalesOrdersHeader.tsx
interface SalesOrdersHeaderProps {
  onExport: () => void;
}

export default function SalesOrdersHeader({
  onExport,
}: SalesOrdersHeaderProps) {
  return (
    <header className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
      <div>
        <h1 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight mb-1">
          Completed Sales Orders
        </h1>
        <p className="text-gray-600 text-xs md:text-sm lg:text-base font-medium">
          View and manage all completed sales orders from prescriptions and POS
          transactions.
        </p>
      </div>
      <button
        type="button"
        onClick={onExport}
        className="inline-flex items-center gap-2 border border-[#CBD5E1] rounded-md bg-white px-4 py-2 text-[#475569] text-sm hover:bg-[#F1F5F9] transition cursor-pointer"
      >
        <i className="fas fa-download"></i>
        Export
        <i className="fas fa-chevron-down text-xs"></i>
      </button>
    </header>
  );
}
