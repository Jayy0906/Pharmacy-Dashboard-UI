"use client";

import { useMemo, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import ReceiptModal from "./ReceiptModal";
import { CartItem } from "@/app/pos/types";

interface CardPaymentModalProps {
  cartItems?: CartItem[]; // Optional to prevent crash
  customerName: string;
  onClose: () => void;
}

export default function CardPaymentModal({
  cartItems = [], // Default to empty array
  customerName,
  onClose,
}: CardPaymentModalProps) {
  const [showReceipt, setShowReceipt] = useState(false);

  const subtotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  if (showReceipt) {
    return (
      <ReceiptModal
        cartItems={cartItems}
        customerName={customerName}
        subtotal={subtotal}
        tax={tax}
        total={total}
        onClose={() => setShowReceipt(false)}
      />
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-sm text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9h2v4h-2V9zm0-4h2v2h-2V5z" />
            </svg>
          </div>
        </div>

        <h2 className="text-lg font-semibold mb-1">Card Payment</h2>
        <p className="text-sm text-gray-600 mb-4">
          Please ask the customer to tap or insert their card into the card
          machine.
        </p>

        {/* Simulated Card Machine */}
        <div className="bg-gray-100 rounded-lg py-6 px-4 mb-4">
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2 w-3/4 mx-auto"></div>
          <div className="flex justify-center space-x-2 mt-4">
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Payment Info */}
        <div className="bg-gray-50 rounded-lg px-4 py-3 mb-4">
          <div className="flex justify-center mb-2">
            <div className="w-10 h-6 bg-blue-600 rounded-sm relative">
              <div className="w-2 h-2 bg-yellow-300 rounded-full absolute top-1 left-1"></div>
            </div>
          </div>
          <p className="text-sm font-medium">
            Amount:{" "}
            <span className="text-green-600 font-bold">
              ${total.toFixed(2)}
            </span>
          </p>
          <div className="flex items-center justify-center text-green-600 mt-1 text-sm">
            <FaCheckCircle className="mr-1" />
            Payment approved
          </div>
        </div>

        {/* Buttons */}
        <button
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded mb-2 cursor-pointer"
          onClick={() => setShowReceipt(true)}
        >
          ✓ Continue
        </button>
        <button
          className="text-blue-600 text-sm hover:underline cursor-pointer"
          onClick={onClose}
        >
          Cancel Payment
        </button>
      </div>
    </div>
  );
}
