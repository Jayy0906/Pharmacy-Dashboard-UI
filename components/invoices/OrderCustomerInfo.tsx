// components/invoices/OrderCustomerInfo.tsx
import Image from "next/image";

interface OrderInfo {
  id: string;
  type: string;
  date: string;
  completionDate: string;
  paymentMethod: string;
  status: string;
}

interface CustomerInfo {
  id: string;
  name: string;
  image: string;
  email: string;
  phone: string;
  address: string;
}

interface OrderCustomerInfoProps {
  orderInfo: OrderInfo;
  customerInfo: CustomerInfo;
}

export default function OrderCustomerInfo({
  orderInfo,
  customerInfo,
}: OrderCustomerInfoProps) {
  return (
    <section className="bg-white rounded-lg p-6 mb-6 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Order Information */}
      <div>
        <h2 className="font-semibold text-slate-800 mb-4">Order Information</h2>
        <dl className="text-sm text-slate-700 space-y-3">
          <div className="flex justify-between">
            <dt className="font-semibold">Order ID:</dt>
            <dd>#{orderInfo.id}</dd>
          </div>
          <div className="flex justify-between items-center">
            <dt className="font-semibold">Order Type:</dt>
            <dd>
              <span className="inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold text-indigo-800 bg-indigo-200">
                {orderInfo.type}
              </span>
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="font-semibold">Order Date:</dt>
            <dd>
              {new Date(orderInfo.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="font-semibold">Completion Date:</dt>
            <dd>
              {new Date(orderInfo.completionDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </dd>
          </div>
          <div className="flex justify-between items-center">
            <dt className="font-semibold">Payment Method:</dt>
            <dd>
              <span className="inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold text-purple-800 bg-purple-200">
                {orderInfo.paymentMethod}
              </span>
            </dd>
          </div>
          <div className="flex justify-between items-center">
            <dt className="font-semibold">Status:</dt>
            <dd>
              <span className="inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold text-emerald-800 bg-emerald-200">
                <i className="fas fa-check-circle mr-1"></i>
                {orderInfo.status}
              </span>
            </dd>
          </div>
        </dl>
      </div>

      {/* Customer Information */}
      <div>
        <h2 className="font-semibold text-slate-800 mb-4">
          Customer Information
        </h2>
        <div className="flex items-center space-x-3 mb-3">
          <Image
            alt={`Portrait photo of ${customerInfo.name}`}
            className="w-10 h-10 rounded-full object-cover"
            src={customerInfo.image}
          />
          <div>
            <p className="font-semibold text-slate-800 leading-tight">
              {customerInfo.name}
            </p>
            <p className="text-xs text-slate-600 leading-tight">
              Patient ID: {customerInfo.id}
            </p>
          </div>
        </div>
        <dl className="text-sm text-slate-700 space-y-3">
          <div className="flex justify-between">
            <dt className="font-semibold">Email:</dt>
            <dd className="text-right">{customerInfo.email}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="font-semibold">Phone:</dt>
            <dd className="text-right">{customerInfo.phone}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="font-semibold">Address:</dt>
            <dd className="text-right whitespace-pre-line">
              {customerInfo.address}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
