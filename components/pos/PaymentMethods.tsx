// components/pos/PaymentMethods.tsx

export default function PaymentMethods() {
  return (
    <fieldset className="mb-6 space-y-3 sm:space-y-4">
      <legend className="font-semibold text-gray-900 mb-3">
        Payment Method
      </legend>
      <label
        htmlFor="payment-cash"
        className="flex items-center border border-gray-300 rounded-lg p-3 cursor-pointer"
      >
        <input
          type="radio"
          id="payment-cash"
          name="payment"
          defaultChecked
          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
        />
        <span className="ml-3 font-semibold text-gray-900 text-sm">Cash</span>
      </label>
      <label
        htmlFor="payment-card"
        className="flex items-center border border-gray-300 rounded-lg p-3 cursor-pointer"
      >
        <input
          type="radio"
          id="payment-card"
          name="payment"
          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
        />
        <span className="ml-3 font-semibold text-gray-900 text-sm">Card</span>
      </label>
      <label
        htmlFor="payment-other"
        className="flex items-center border border-gray-300 rounded-lg p-3 cursor-pointer"
      >
        <input
          type="radio"
          id="payment-other"
          name="payment"
          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
        />
        <span className="ml-3 font-semibold text-gray-900 text-sm">Other</span>
      </label>
    </fieldset>
  );
}
