import React from "react";
import StockBadge from "../Badges/StockBadge";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  category: string;
  sku: string;
  stock: number;
  allocated: number;
  costPrice: string;
  sellingPrice: string;
  expiry: string;
  supplier: string;
  location: string;
  stockStatus: "good" | "warning" | "critical";
}

export default function ProductCard({ product }: { product: Product }) {
  // const statusClasses = {
  //   good: 'bg-green-100 text-green-900',
  //   warning: 'bg-yellow-100 text-yellow-900',
  //   critical: 'bg-red-100 text-red-900',
  // };

  const statusIcon = {
    good: (
      <div className="flex items-center justify-center w-10 h-10 rounded-md bg-blue-100 text-blue-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
    ),
    warning: (
      <div className="flex items-center justify-center w-10 h-10 rounded-md bg-yellow-200 text-yellow-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01M5.07 20h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 17c-.77 1.33.19 3 1.73 3z"
          />
        </svg>
      </div>
    ),
    critical: (
      <div className="flex items-center justify-center w-10 h-10 rounded-md bg-red-200 text-red-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    ),
  };

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          {statusIcon[product.stockStatus]}
          <div>
            <p className="font-medium leading-tight text-gray-800">
              {product.name}
            </p>
            <p className="text-base text-gray-500 leading-tight">
              {product.category}
            </p>
          </div>
        </div>
      </td>

      <td className="px-4 py-4 font-medium text-base text-gray-700">
        {product.sku}
      </td>

      <td className="px-4 py-4">
        <StockBadge stock={product.stock} status={product.stockStatus} />
      </td>

      <td className="px-6 py-4 font-medium text-gray-700">
        {product.allocated}
      </td>

      <td className="px-6 py-4 font-medium text-gray-700">
        {product.costPrice}
      </td>

      <td className="px-6 py-4 font-medium text-gray-700">
        {product.sellingPrice}
      </td>

      <td className="px-6 py-4 text-center text-base font-medium">
        <div
          className={`inline-block rounded px-2 py-1 ${product.stockStatus === "warning" ? "bg-orange-100 text-orange-700" : "text-gray-700"}`}
        >
          {product.expiry}
        </div>
      </td>

      <td className="px-1 py-4 whitespace-nowrap">{product.supplier}</td>

      <td className="px-6 py-4">
        {product.location === "Cold Storage" ? (
          <span className="inline-flex flex-col items-center justify-center bg-blue-100 text-blue-700 text-xs rounded-md px-4 py-1 font-medium leading-tight text-center">
            {product.location.split(" ").map((word, idx) => (
              <span key={idx}>{word}</span>
            ))}
          </span>
        ) : (
          <span className="inline-block bg-gray-100 text-gray-800 text-xs rounded-full px-3 py-1 font-medium">
            {product.location}
          </span>
        )}
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center gap-3 text-sm">
          <Link href={`/inventory/products/${product.id}`}>
            <button
              aria-label="View product"
              className="text-teal-600 hover:text-teal-700 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
          </Link>

          <button
            aria-label="Edit product"
            className="text-blue-600 hover:text-blue-700 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
          <button
            aria-label="Delete product"
            className="text-red-600 hover:text-red-700 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
}
