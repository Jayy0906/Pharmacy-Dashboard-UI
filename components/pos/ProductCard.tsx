import { FaPlus } from "react-icons/fa";

interface ProductCardProps {
  name: string;
  description: string;
  stock: number;
  price: number;
  ageRestricted: boolean;
  onAdd: () => void;
}

export default function ProductCard({
  name,
  description,
  stock,
  price,
  ageRestricted,
  onAdd,
}: ProductCardProps) {
  return (
    <div className="relative bg-white rounded-xl shadow p-4 w-full flex flex-col gap-2">
      {/* Product Name and Stock in one line */}
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-gray-900 leading-tight">
          {name}
        </h3>
        <div className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
          Stock: {stock}
        </div>
      </div>

      {/* Product Description */}
      <p className="text-xs text-gray-500">{description}</p>

      {/* Price & Add Button Section */}
      <div className="flex items-center justify-between mt-auto pt-2">
        {/* Price */}
        <span className="text-sm font-bold text-gray-900">
          ${price.toFixed(2)}
        </span>

        {/* Add to Cart + Age Restriction */}
        <div className="flex items-center gap-2">
          {ageRestricted && (
            <span className="text-[10px] font-semibold text-red-500 bg-red-100 px-2 py-0.5 rounded-full">
              18+
            </span>
          )}
          <button
            onClick={onAdd}
            className="bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold px-4 py-1.5 rounded-md flex items-center gap-1 cursor-pointer transition-colors duration-200"
          >
            <FaPlus className="text-xs" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
