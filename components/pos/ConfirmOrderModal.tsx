"use client";

import { FaCheck, FaArrowLeft, FaInfoCircle } from "react-icons/fa";
import { CartItem } from "@/app/pos/types";

export interface ConfirmOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  orderItems: CartItem[];
  paymentMethod: "card" | "cash" | "upi" | "other";

  customerName: string;
  // initialCustomerName: string;
  onCustomerNameChange: (name: string) => void;
  onPaymentMethodChange: (method: "card" | "cash" | "upi" | "other") => void;
}

export default function ConfirmOrderModal({
  isOpen,
  onClose,
  onConfirm,
  orderItems,
  paymentMethod,
  customerName,
  onCustomerNameChange,
  onPaymentMethodChange,
}: ConfirmOrderModalProps) {
  if (!isOpen) return null;

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm p-2 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-lg w-full max-w-lg p-4 sm:p-6 drop-shadow-lg">
        {/* Header */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center">
            <FaCheck className="text-green-600 text-lg" />
          </div>
        </div>

        <h2 className="text-center text-gray-900 font-semibold text-lg mb-1">
          Confirm Order & Payment
        </h2>
        <p className="text-center text-gray-700 text-sm mb-6">
          Please review your order details before finalizing
        </p>

        {/* Order Details */}
        <section className="bg-gray-50 rounded-md p-4 mb-6 border border-gray-200">
          <h3 className="text-gray-500 text-xs font-semibold mb-2 uppercase tracking-wide">
            Order Details
          </h3>

          <div className="overflow-x-auto">
            <table className="min-w-full text-xs text-gray-700">
              <thead className="bg-gray-200 text-gray-600 font-semibold">
                <tr>
                  <th className="py-2 px-3">Item</th>
                  <th className="py-2 px-3 text-center">Qty</th>
                  <th className="py-2 px-3 text-right">Price</th>
                  <th className="py-2 px-3 text-right">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {orderItems.map((item) => (
                  <tr key={item.sku} className="border-t border-gray-200">
                    <td className="py-3 px-3 font-semibold text-gray-900">
                      {item.name}
                      {item.ageRestricted && (
                        <span className="ml-2 text-[10px] text-red-600 bg-red-100 font-semibold rounded-full px-1.5 py-0.5">
                          18+
                        </span>
                      )}
                      <p className="text-gray-500 text-[11px] mt-0.5">
                        SKU: {item.sku}
                      </p>
                    </td>
                    <td className="py-3 px-3 text-center align-top">
                      {item.quantity}
                    </td>
                    <td className="py-3 px-3 text-right align-top">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="py-3 px-3 text-right align-top">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div className="border border-gray-200 rounded-md p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
                Summary
              </p>
              <dl className="text-sm font-semibold space-y-1">
                <div className="flex justify-between">
                  <dt>
                    Items (
                    {orderItems.reduce((sum, item) => sum + item.quantity, 0)})
                  </dt>
                  <dd>${subtotal.toFixed(2)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Tax (7%)</dt>
                  <dd>${tax.toFixed(2)}</dd>
                </div>
                <div className="flex justify-between border-t pt-1">
                  <dt>Total</dt>
                  <dd>${total.toFixed(2)}</dd>
                </div>
              </dl>
            </div>

            {/* Customer Info */}
            <div className="border border-gray-200 rounded-md p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
                Customer Info
              </p>
              <label
                htmlFor="customerName"
                className="block text-xs font-semibold text-gray-700 mb-1"
              >
                Customer Name
              </label>
              <input
                id="customerName"
                type="text"
                value={customerName}
                onChange={(e) => onCustomerNameChange(e.target.value)}
                placeholder="Enter customer name"
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 mb-3"
              />

              <label
                htmlFor="paymentMethod"
                className="block text-xs font-semibold text-gray-700 mb-1"
              >
                Payment Method
              </label>
              <select
                id="paymentMethod"
                value={paymentMethod}
                onChange={(e) =>
                  onPaymentMethodChange(
                    e.target.value as "card" | "cash" | "upi" | "other",
                  )
                }
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm"
              >
                <option value="card">Card</option>
                <option value="cash">Cash</option>
                <option value="upi">UPI</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-4 flex items-center gap-2">
            <FaInfoCircle className="text-gray-400" />
            Confirming this sale will update inventory and generate invoice
          </p>
        </section>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center justify-center gap-2 text-gray-800 bg-gray-200 rounded-md px-5 py-2 text-sm font-semibold hover:bg-gray-300 cursor-pointer"
          >
            <FaArrowLeft /> Go Back
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-600 text-white rounded-md px-6 py-2 text-sm font-semibold cursor-pointer"
          >
            <FaCheck /> Confirm & Complete Sale
          </button>
        </div>
      </div>
    </div>
  );
}
