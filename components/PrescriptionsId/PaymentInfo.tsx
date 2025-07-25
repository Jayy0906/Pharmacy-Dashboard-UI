// components/PrescriptionsId/PaymentInfo.tsx
import React from "react";
import { Medication, Payment } from "@/app/pos/types";

export default function PaymentInfo({
  medications,
  payment,
}: {
  medications: Medication[];
  payment: Payment;
}) {
  return (
    <section>
      {/* Section title */}
      <h3 className="font-semibold text-gray-900 text-sm lg:text-base mb-3 select-none">
        Payment Information
      </h3>
      <div className="rounded-md p-4 text-xs lg:text-sm text-gray-700">
        {/* List all medications with price */}
        <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 w-full">
          {medications.map((med, index) => (
            <React.Fragment key={index}>
              <span>
                {med.name} ({med.quantity} {med.form})
              </span>
              <span className="font-semibold text-right">
                ${med.price.toFixed(2)} {/* Format as currency */}
              </span>
            </React.Fragment>
          ))}

          {/* Divider */}
          <span className="border-t border-gray-300 col-span-full"></span>

          {/* For payment summary */}
          {/* Totals */}
          <span>Subtotal</span>
          <span className="font-semibold text-right">
            ${payment.subtotal.toFixed(2)}
          </span>
          <span>Tax (6%)</span>
          <span className="font-semibold text-right">
            ${payment.tax.toFixed(2)}
          </span>
          <span className="font-semibold">Total</span>
          <span className="font-semibold text-right">
            ${payment.total.toFixed(2)}
          </span>
        </div>

        {/* Dropdown for payment method */}
        <div className="mt-4">
          <label
            className="block text-xs lg:text-sm font-semibold mb-1 select-none"
            htmlFor="paymentMethod"
          >
            Payment Method
          </label>
          <select
            className="w-full rounded bg-gray-200 text-xs lg:text-sm font-semibold text-gray-900 px-3 py-2 cursor-pointer"
            id="paymentMethod"
          >
            <option selected>Insurance</option>
            <option>Credit Card</option>
            <option>Cash</option>
          </select>
        </div>
      </div>
    </section>
  );
}
