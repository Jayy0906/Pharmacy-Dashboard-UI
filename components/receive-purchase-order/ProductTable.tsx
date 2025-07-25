import { FaListUl } from "react-icons/fa";
import { ProductRow } from "../receive-purchase-order/ProductRow";

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
}

interface ProductTableProps {
  products: Product[];
  onQuantityChange: (id: string, newQuantity: number) => void;
  onLocationChange: (id: string, location: string) => void;
}

// Main table container for all products in a PO
export const ProductTable = ({
  products,
  onQuantityChange,
  onLocationChange,
}: ProductTableProps) => {
  return (
    <section
      aria-label="Items to Receive"
      className="bg-white rounded-lg border border-slate-200 p-4 text-sm text-slate-700 overflow-x-auto"
    >
      {/* Table title */}
      <h3 className="font-semibold mb-4 flex items-center gap-2 text-slate-900">
        <FaListUl className="text-blue-500" />
        Items to Receive
      </h3>

      {/* Responsive table wrapper */}
      <div className="min-w-[700px]">
        <table className="w-full border-collapse text-left text-xs sm:text-sm">
          <thead className="bg-slate-100 text-slate-600 font-semibold border-b border-slate-300">
            <tr>
              <th className="py-3 px-3 sm:px-4 w-1/3">PRODUCT</th>
              <th className="py-3 px-3 sm:px-4 w-1/6">SKU</th>
              <th className="py-3 px-3 sm:px-4 w-1/6">ORDERED</th>
              <th className="py-3 px-3 sm:px-4 w-1/6">RECEIVED</th>
              <th className="py-3 px-3 sm:px-4 w-1/6">LOCATION</th>
              <th className="py-3 px-3 sm:px-4 w-1/6">STATUS</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200">
            {products.map((product) => (
              <ProductRow
                key={product.id}
                product={product}
                onQuantityChange={onQuantityChange}
                onLocationChange={onLocationChange}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
