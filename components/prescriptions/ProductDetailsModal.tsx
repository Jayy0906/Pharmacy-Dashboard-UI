// components/prescriptions/ProductDetailsModal.tsx

"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ProductDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    form: string;
    description: string;
    availableStock: string;
    allocatedStock: string;
    costPrice: string;
    vat: string;
    sellingPrice: string;
    lastUpdated: string;
  };
}

export default function ProductDetailsModal({
  isOpen,
  onClose,
  product,
}: ProductDetailsModalProps) {
  const [mounted, setMounted] = useState(false);

  // Ensure modal renders only on client side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] bg-black/10 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md w-full max-w-md mx-auto relative font-sans">
        <header className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900 text-sm leading-5">
            Product Details
          </h3>
          <button
            aria-label="Close"
            className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded"
            onClick={onClose}
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </header>

        <section className="px-6 pt-4 pb-6 text-gray-900 text-sm leading-5">
          <h4 className="font-semibold text-base leading-6 mb-0.5">
            {product.name}
          </h4>
          <p className="text-xs text-gray-600 mb-4">{product.form}</p>

          <div className="mb-4">
            <p className="text-xs font-semibold mb-1">Description</p>
            <p className="text-xs leading-5 font-normal text-gray-900">
              {product.description}
            </p>
          </div>

          <div className="flex justify-between bg-gray-50 rounded-md px-4 py-3 mb-4 text-xs text-gray-500 font-normal">
            <div>
              <p className="text-gray-400 mb-0.5">Available Stock</p>
              <p className="text-gray-900 font-semibold">
                {product.availableStock}
              </p>
            </div>
            <div className="text-right">
              <p className="mb-0.5">Allocated Stock</p>
              <p className="text-blue-600 font-semibold cursor-pointer hover:underline">
                {product.allocatedStock}
              </p>
            </div>
          </div>

          <div className="flex justify-between text-xs text-gray-700 font-normal mb-4">
            <div>
              <p className="mb-0.5">Cost Price</p>
              <p className="font-semibold text-gray-900">{product.costPrice}</p>
            </div>
            <div>
              <p className="mb-0.5">VAT (6%)</p>
              <p className="font-semibold text-gray-900">{product.vat}</p>
            </div>
            <div>
              <p className="mb-0.5">Selling Price</p>
              <p className="font-semibold text-gray-900">
                {product.sellingPrice}
              </p>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-xs text-gray-700 font-normal mb-1">
              POS Restrictions
            </p>
            <span className="inline-block bg-orange-200 text-orange-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">
              Prescription Required
            </span>
          </div>
        </section>

        <footer className="flex justify-between items-center px-6 py-3 border-t border-gray-200 text-xs text-gray-500">
          <p className="leading-4">Last updated: {product.lastUpdated}</p>
          <a
            href="#"
            className="flex items-center text-blue-600 font-semibold hover:underline"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            View in Inventory
          </a>
        </footer>
      </div>
    </div>,
    document.body,
  );
}
