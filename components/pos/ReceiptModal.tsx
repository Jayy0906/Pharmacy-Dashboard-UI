"use client";

import Image from "next/image";
import { FaEnvelope, FaPrint, FaSyncAlt } from "react-icons/fa";
import { CartItem } from "@/app/pos/types";

interface ReceiptModalProps {
  cartItems: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  customerName: string;
  onClose: () => void;
}

export default function ReceiptModal({
  cartItems,
  subtotal,
  tax,
  total,
  //   customerName,
  onClose,
}: ReceiptModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="w-full max-w-md bg-white rounded-lg p-6 drop-shadow-sm">
        {/* Header */}
        <div className="text-center mb-3">
          <div className="flex justify-center items-center gap-2 mb-1">
            <Image
              src="https://storage.googleapis.com/a1aa/image/f9915294-573e-4b9b-4005-0d4c12d7bde6.jpg"
              alt="Pharmacy logo"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <h1 className="font-extrabold text-gray-900 text-base leading-5">
              Pathly Pharmacy
            </h1>
          </div>
          <p className="text-xs text-gray-600">
            123 Health Street, Wellness City
          </p>
          <p className="text-xs text-gray-600">Tel: (555) 123-4567</p>
        </div>

        {/* Receipt Info */}
        <div className="flex justify-between text-xs font-mono mb-3">
          <div>
            <p>
              <span className="font-bold">Order #:</span> POS-20230617-0042
            </p>
            <p>
              <span className="font-bold">Cashier:</span> JOHN-P
            </p>
          </div>
          <div className="text-right">
            <p>
              <span className="font-bold">Date:</span>{" "}
              {new Date().toLocaleDateString()}
            </p>
            <p>
              <span className="font-bold">Time:</span>{" "}
              {new Date().toLocaleTimeString()}
            </p>
          </div>
        </div>

        <hr className="border-slate-300 mb-4" />

        {/* Items Purchased */}
        <p className="text-xs text-slate-500 font-semibold mb-2 tracking-wide">
          ITEMS PURCHASED
        </p>

        {/* Table Head */}
        <div className="grid grid-cols-12 text-xs text-slate-500 font-mono mb-2">
          <div className="col-span-6 font-bold">ITEM</div>
          <div className="col-span-2 font-bold text-center">QTY</div>
          <div className="col-span-2 font-bold text-right">UNIT</div>
          <div className="col-span-2 font-bold text-right">TOTAL</div>
        </div>

        {/* Items */}
        {cartItems.map((item) => (
          <div
            key={item.sku}
            className="grid grid-cols-12 text-xs font-mono mb-2 border-b border-slate-200 pb-2"
          >
            <div className="col-span-6">{item.name}</div>
            <div className="col-span-2 text-center">{item.quantity}</div>
            <div className="col-span-2 text-right">
              ${item.price.toFixed(2)}
            </div>
            <div className="col-span-2 text-right">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}

        {/* Totals */}
        <div className="ml-auto max-w-md text-xs font-mono mb-4">
          <div className="flex justify-between border-b border-slate-200 py-1">
            <span>Subtotal:</span>
            <span className="font-bold">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 py-1">
            <span>Tax (7%):</span>
            <span className="font-bold">${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 py-1 font-bold">
            <span>TOTAL:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Payment Info */}
        <div className="flex justify-between items-center mb-4 border-b border-slate-200 pb-4">
          <div>
            <p className="font-bold text-sm mb-1">Payment Method:</p>
            <p className="text-xs font-mono text-slate-700">
              Card Type: VISA ending in 4242
              <br />
              Auth Code: 123456
            </p>
          </div>
          <span className="bg-green-100 text-green-700 font-mono text-xs px-3 py-1 rounded-md">
            Paid via Card
          </span>
        </div>

        {/* Thank you note */}
        <div className="text-center text-xs text-slate-500 font-mono mb-2">
          <p>Thank you for shopping at Pathly Pharmacy!</p>
          <p>For any questions about your purchase, please contact us.</p>
        </div>

        <div className="text-center text-xs text-slate-600 font-mono border-t border-slate-200 pt-2">
          Pharmacist: John Doe, RPh • License #: PH12345
        </div>
      </div>

      {/* Action Buttons */}
      <div className="max-w-md w-full mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
        <button className="flex items-center justify-center gap-2 border border-slate-300 rounded-md px-6 py-3 text-slate-700 text-sm font-semibold hover:bg-slate-100 transition cursor-pointer">
          <FaPrint />
          Print Receipt
        </button>
        <button className="flex items-center justify-center gap-2 border border-slate-300 rounded-md px-6 py-3 text-slate-700 text-sm font-semibold hover:bg-slate-100 transition cursor-pointer">
          <FaEnvelope />
          Email Receipt
        </button>
        <button
          onClick={onClose}
          className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md px-6 py-3 text-sm font-semibold transition cursor-pointer"
        >
          <FaSyncAlt />
          New Sale
        </button>
      </div>
    </div>
  );
}
