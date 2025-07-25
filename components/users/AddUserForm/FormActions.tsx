// components/users/AddUserForm/FormActions.tsx
import Link from "next/link";
import { FaTimes, FaSave } from "react-icons/fa";

export default function FormActions() {
  return (
    <section className="bg-white rounded-lg p-6 flex justify-end space-x-4 shadow-sm">
      <Link
        href="/user-management"
        className="flex items-center space-x-2 border border-gray-300 rounded-md px-5 py-2 text-gray-700 text-sm font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      >
        <FaTimes />
        <span>Cancel</span>
      </Link>
      <button
        type="submit"
        className="flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 rounded-md px-5 py-2 text-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FaSave />
        <span>Create User</span>
      </button>
    </section>
  );
}
