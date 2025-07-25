// components/invoices/ItemizedProducts.tsx
interface ProductItem {
  name: string;
  description: string;
  quantity: number;
  unitPrice: number;
  vatRate: number;
  lineTotal: number;
}

interface ItemizedProductsProps {
  items: ProductItem[];
  subtotal: number;
  vatTotal: number;
  prescriptionCharge: number;
  grandTotal: number;
}

export default function ItemizedProducts({
  items,
  subtotal,
  vatTotal,
  prescriptionCharge,
  grandTotal,
}: ItemizedProductsProps) {
  return (
    <section className="bg-white rounded-lg p-6 mb-6 shadow-sm">
      <h3 className="font-semibold text-slate-800 mb-4">Itemized Products</h3>
      <div className="overflow-x-auto scrollbar-thin">
        <table className="w-full text-sm text-left text-slate-700 border-collapse">
          <thead className="bg-slate-100 text-slate-600 font-semibold">
            <tr>
              <th className="py-3 px-4 min-w-[180px]" scope="col">
                Product Name
              </th>
              <th className="py-3 px-4 text-center min-w-[60px]" scope="col">
                Quantity
              </th>
              <th className="py-3 px-4 text-right min-w-[80px]" scope="col">
                Unit Price
              </th>
              <th className="py-3 px-4 text-center min-w-[60px]" scope="col">
                VAT %
              </th>
              <th className="py-3 px-4 text-right min-w-[80px]" scope="col">
                Line Total
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {items.map((item, index) => (
              <tr key={index}>
                <td className="py-3 px-4 align-top">
                  <p className="font-semibold text-slate-800">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.description}</p>
                </td>
                <td className="py-3 px-4 text-center align-top">
                  {item.quantity}
                </td>
                <td className="py-3 px-4 text-right align-top">
                  £{item.unitPrice.toFixed(2)}
                </td>
                <td className="py-3 px-4 text-center align-top">
                  <span className="inline-block rounded px-2 py-0.5 text-xs font-semibold text-slate-600 bg-slate-200">
                    {item.vatRate}%
                  </span>
                </td>
                <td className="py-3 px-4 text-right align-top font-semibold">
                  £{item.lineTotal.toFixed(2)}
                </td>
              </tr>
            ))}

            {/* Summary rows */}
            <tr>
              <td colSpan={3}></td>
              <td className="py-3 px-4 text-right font-semibold">Subtotal:</td>
              <td className="py-3 px-4 text-right font-semibold">
                £{subtotal.toFixed(2)}
              </td>
            </tr>
            <tr>
              <td colSpan={3}></td>
              <td className="py-3 px-4 text-right font-semibold">VAT Total:</td>
              <td className="py-3 px-4 text-right font-semibold">
                £{vatTotal.toFixed(2)}
              </td>
            </tr>
            <tr>
              <td colSpan={3}></td>
              <td className="py-3 px-4 text-right font-semibold">
                Prescription Charge:
              </td>
              <td className="py-3 px-4 text-right font-semibold">
                £{prescriptionCharge.toFixed(2)}
              </td>
            </tr>
            <tr>
              <td colSpan={3}></td>
              <td className="py-3 px-4 text-right font-extrabold">
                Grand Total:
              </td>
              <td className="py-3 px-4 text-right font-extrabold text-emerald-600">
                £{grandTotal.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
