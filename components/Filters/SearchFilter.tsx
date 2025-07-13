import React from "react";

export default function SearchFilter() {
  return (
    <section className="bg-white rounded-lg p-5 mb-6 shadow-sm">
      {/* Search Input */}
      <form className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <label className="sr-only" htmlFor="search">
            Search
          </label>
          <div className="relative text-gray-400 focus-within:text-gray-600">
            <span className="absolute inset-y-0 left-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              className="w-full border border-gray-300 rounded-md py-3 pl-10 pr-4 text-base font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 bg-white text-gray-900"
              id="search"
              placeholder="Search by Product Name, SKU, Barcode, Brand, or PNO"
              type="text"
            />
          </div>
        </div>
        <button
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm rounded-md px-6 py-3 flex items-center justify-center gap-2 min-w-[120px] sm:min-w-[160px] md:min-w-[200px] lg:min-w-[300px] cursor-pointer"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          Search
        </button>
      </form>

      {/* Filter Dropdowns */}

      <form className="mt-4 grid grid-cols-1 sm:grid-cols-6 gap-3">
        {/* Product Type */}
        <select
          aria-label="Product Type"
          defaultValue=""
          className="border border-gray-200 rounded-md py-2 px-3 text-sm font-medium bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 cursor-pointer"
        >
          <option value="" disabled hidden>
            Product Type
          </option>
          <option value="type-3">Type 3</option>
          <option value="type-4">Type 4</option>
        </select>

        {/* Brand */}
        <select
          aria-label="Brand"
          defaultValue=""
          className="border border-gray-200 rounded-md py-2 px-3 text-sm font-medium bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 cursor-pointer"
        >
          <option value="" disabled hidden>
            Brand
          </option>
          <option value="pfizer">Pfizer</option>
          <option value="gsk">GSK</option>
          <option value="novartis">Novartis</option>
        </select>

        {/* Product Group */}
        <select
          aria-label="Product Group"
          defaultValue=""
          className="border border-gray-200 rounded-md py-2 px-3 text-sm font-medium bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 cursor-pointer"
        >
          <option value="" disabled hidden>
            Product Group
          </option>
          <option value="antibiotics">Anti Biotics</option>
          <option value="pain-reliefs">Pain Reliefs</option>
          <option value="vitamins">Vitamins</option>
        </select>

        {/* Location */}
        <select
          aria-label="Location"
          defaultValue=""
          className="border border-gray-200 rounded-md py-2 px-3 text-sm font-medium bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 cursor-pointer"
        >
          <option value="" disabled hidden>
            Location
          </option>
          <option value="shelf-a1">Shelf A1</option>
          <option value="shelf-b2">Shelf B2</option>
          <option value="cold-storage">Cold Storage</option>
        </select>

        {/* Status */}
        <select
          aria-label="Status"
          defaultValue=""
          className="border border-gray-200 rounded-md py-2 px-3 text-sm font-medium bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 cursor-pointer"
        >
          <option value="" disabled hidden>
            Status
          </option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        {/* Age Restrictions */}
        <select
          aria-label="Age Restrictions"
          defaultValue=""
          className="border border-gray-200 rounded-md py-2 px-3 text-sm font-medium bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 cursor-pointer"
        >
          <option value="" disabled hidden>
            Age Restrictions
          </option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </form>
    </section>
  );
}
