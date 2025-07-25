// app/prescriptions/[id]/components/FooterActions.tsx
"use client";

import Icon from "@/components/ui/Icon";

export default function FooterActions() {
  return (
    <footer className="flex flex-wrap gap-3 justify-between mt-6">
      {/* Left group: basic actions */}
      <div className="flex gap-3 flex-wrap">
        <button
          className="flex items-center gap-2 border border-gray-300 rounded px-4 py-2 text-xs lg:text-sm font-medium text-gray-700 hover:bg-gray-100 transition cursor-pointer"
          type="button"
        >
          <Icon name="print" />
          Print Summary
        </button>
        <button
          className="flex items-center gap-2 border border-gray-300 rounded px-4 py-2 text-xs lg:text-sm font-medium text-gray-700 hover:bg-gray-100 transition cursor-pointer"
          type="button"
        >
          <Icon name="envelope" />
          Send Notification
        </button>
      </div>

      {/* Right group: status update actions */}
      <div className="flex gap-3 flex-wrap">
        <button
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded px-5 py-3 text-xs lg:text-sm font-semibold transition cursor-pointer"
          type="button"
        >
          <Icon name="check-circle" />
          Mark as Ready
        </button>
        <button
          className="flex items-center gap-2 bg-teal-700 hover:bg-teal-600 text-white rounded px-5 py-3 text-xs lg:text-sm font-semibold transition cursor-pointer"
          type="button"
        >
          <Icon name="check" />
          Mark as Collected
        </button>
      </div>
    </footer>
  );
}
