// components/invoices/InvoiceHeader.tsx
interface InvoiceHeaderProps {
  orderId: string;
  onBack: () => void;
}

export default function InvoiceHeader({ orderId, onBack }: InvoiceHeaderProps) {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
      <div className="flex items-center space-x-3 mb-3 sm:mb-0">
        <button
          onClick={onBack}
          aria-label="Back"
          className="text-slate-600 hover:text-slate-900"
        >
          <i className="fas fa-arrow-left text-lg"></i>
        </button>
        <div>
          <h1 className="text-xl font-extrabold text-slate-800 leading-tight">
            Invoice for Order <span className="font-extrabold">#{orderId}</span>
          </h1>
          <p className="text-slate-600 text-sm">
            Detailed invoice view for completed sales order
          </p>
        </div>
      </div>
      <div className="flex space-x-3">
        <button
          className="inline-flex items-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-1"
          type="button"
        >
          <i className="fas fa-download mr-2"></i>
          Download PDF
        </button>
        <button
          className="inline-flex items-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-1"
          type="button"
        >
          <i className="fas fa-print mr-2"></i>
          Print
        </button>
      </div>
    </header>
  );
}
