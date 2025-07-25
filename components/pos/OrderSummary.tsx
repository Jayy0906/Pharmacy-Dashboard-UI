"use client";

import { CartItem } from "@/app/pos/types";
import { useState } from "react";
import PaymentMethods from "./PaymentMethods";
import ConfirmOrderModal from "./ConfirmOrderModal";

interface OrderSummaryProps {
  cartItems: CartItem[];
  onCheckoutComplete: () => void;
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
  customerNotes: string;
  setCustomerNotes: (value: string) => void;
}

export default function OrderSummary({
  cartItems,
  onCheckoutComplete,
  paymentMethod,
  setPaymentMethod,
  customerNotes,
  setCustomerNotes,
}: OrderSummaryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.subtotal, 0);
  const taxAmount = +(cartSubtotal * 0.07).toFixed(2);
  const total = +(cartSubtotal + taxAmount).toFixed(2);

  const handleConfirmOrder = () => {
    setIsModalOpen(false);
    onCheckoutComplete(); // Notify parent
  };

  return (
    <>
      <aside className="w-full bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between">
        <div>
          <h2 className="font-semibold text-gray-900 text-lg mb-4">
            Order Summary
          </h2>

          <dl className="text-gray-900 text-sm mb-4">
            <div className="flex justify-between mb-2">
              <dt className="font-semibold">Items ({cartItems.length})</dt>
              <dd className="font-bold">${cartSubtotal.toFixed(2)}</dd>
            </div>
            <div className="flex justify-between mb-4 border-b border-gray-200 pb-4">
              <dt className="font-semibold">Tax (7%)</dt>
              <dd className="font-bold">${taxAmount.toFixed(2)}</dd>
            </div>
            <div className="flex justify-between mb-6">
              <dt className="font-bold text-green-600 text-lg">Total</dt>
              <dd className="font-bold text-green-600 text-lg">
                ${total.toFixed(2)}
              </dd>
            </div>
          </dl>

          {/* Payment Selection */}
          <PaymentMethods
            selected={paymentMethod}
            onChange={(method) => setPaymentMethod(method)}
          />

          {/* Notes */}
          <div className="mb-6">
            <label
              htmlFor="customer-notes"
              className="block text-xs font-semibold text-gray-700 mb-2"
            >
              Customer Notes (Optional)
            </label>
            <textarea
              id="customer-notes"
              rows={4}
              placeholder="Add any special instructions"
              value={customerNotes}
              onChange={(e) => setCustomerNotes(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 text-sm placeholder:text-gray-400 resize-none focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
            ></textarea>
          </div>
        </div>

        {/* Button */}
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg py-4 w-full flex items-center justify-center gap-2 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <i className="fas fa-check"></i> Confirm & Complete Sale
        </button>
      </aside>

      <ConfirmOrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmOrder}
        orderItems={cartItems}
        paymentMethod={paymentMethod}
        initialCustomerName={customerNotes}
      />
    </>
  );
}
