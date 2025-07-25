import { FaMinus, FaPlus } from "react-icons/fa";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  description: string;
  sku: string;
  ordered: number;
  received: number;
  status: string;
  color: string;
  icon: string;
  location?: string;
}

interface ProductRowProps {
  product: Product;
  onQuantityChange: (id: string, newQuantity: number) => void;
  onLocationChange: (id: string, location: string) => void;
}

// Row in the product table for one item in the PO
export const ProductRow = ({
  product,
  onQuantityChange,
  onLocationChange,
}: ProductRowProps) => {
  // Called when user manually types a number
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10) || 0;
    onQuantityChange(product.id, newQuantity);
  };

  // Called when user clicks "+"
  const handleIncrement = () => {
    if (product.received < product.ordered) {
      onQuantityChange(product.id, product.received + 1);
    }
  };

  // Called when user clicks "-"
  const handleDecrement = () => {
    if (product.received > 0) {
      onQuantityChange(product.id, product.received - 1);
    }
  };

  // Called when user selects a warehouse location
  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onLocationChange(product.id, e.target.value);
  };

  return (
    <tr className="hover:bg-slate-50">
      {/* Product icon and name */}
      <td className="py-4 px-3 sm:px-4 flex items-center gap-3">
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-lg bg-${product.color}-200 flex items-center justify-center text-${product.color}-700`}
        >
          <Image
            alt={`Icon representing ${product.name}`}
            className="w-6 h-6"
            height="24"
            loading="lazy"
            src={product.icon}
            width="24"
          />
        </div>
        <div>
          <div className="font-semibold text-slate-900 leading-tight">
            {product.name}
          </div>
          <div className="text-slate-500 text-xs sm:text-sm leading-tight">
            {product.description}
          </div>
        </div>
      </td>

      {/* SKU */}
      <td className="py-4 px-3 sm:px-4 text-slate-600">{product.sku}</td>

      {/* Ordered quantity */}
      <td className="py-4 px-3 sm:px-4 font-semibold text-slate-900">
        {product.ordered} units
      </td>

      {/* Quantity Input with + and - buttons */}
      <td className="py-4 px-3 sm:px-4">
        <div className="flex items-center gap-2">
          <button
            aria-label={`Decrease quantity for ${product.name}`}
            className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center disabled:opacity-50 cursor-pointer"
            disabled={product.received <= 0}
            onClick={handleDecrement}
            type="button"
          >
            <FaMinus />
          </button>
          <input
            aria-label={`Quantity received for ${product.name}`}
            className="w-16 text-center rounded-md border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            max={product.ordered}
            min="0"
            onChange={handleQuantityChange}
            type="number"
            value={product.received}
          />
          <button
            aria-label={`Increase quantity for ${product.name}`}
            className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center disabled:opacity-50 cursor-pointer"
            disabled={product.received >= product.ordered}
            onClick={handleIncrement}
            type="button"
          >
            <FaPlus />
          </button>
        </div>
        <p className="text-[9px] text-slate-400 mt-0.5 select-none">
          Max: {product.ordered}
        </p>
      </td>

      {/* Location dropdown */}
      <td className="py-4 px-3 sm:px-4">
        <select
          aria-label={`Select location for ${product.name}`}
          className="rounded-md border border-slate-300 text-slate-900 text-xs sm:text-sm py-1 px-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
          onChange={handleLocationChange}
          value={product.location || ""}
        >
          <option disabled value="">
            Select Location
          </option>
          <option value="Warehouse A">Warehouse A</option>
          <option value="Warehouse B">Warehouse B</option>
          <option value="Warehouse C">Warehouse C</option>
        </select>
      </td>

      {/* Status badge */}
      <td className="py-4 px-3 sm:px-4">
        <span className="inline-block bg-slate-300 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full select-none">
          {product.status}
        </span>
      </td>
    </tr>
  );
};
