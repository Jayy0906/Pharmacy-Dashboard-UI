// components/pos/ProductSearch.tsx

interface ProductSearchProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export default function ProductSearch({
  searchQuery,
  onSearchChange,
}: ProductSearchProps) {
  return (
    <section className="mb-6">
      <form className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Enter product name, SKU, or scan barcode"
          className="w-full border border-gray-200 rounded-lg py-3 pl-12 pr-16 text-black-400 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
        />
        <button
          type="button"
          aria-label="Scan barcode"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-100 rounded-md p-2"
        >
          <i className="fas fa-barcode text-blue-600 text-lg"></i>
        </button>
      </form>
    </section>
  );
}
