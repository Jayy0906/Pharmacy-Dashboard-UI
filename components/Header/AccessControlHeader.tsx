// components/access-control/AccessControlHeader.tsx
import Link from "next/link";
import Button from "../../components/users/Badge";
import { FaArrowLeft, FaPlus } from "react-icons/fa";

export default function AccessControlHeader() {
  return (
    <header className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-3">
        <Link href="/user-management">
          <button
            aria-label="Back"
            className="text-gray-500 hover:text-gray-900 cursor-pointer focus:outline-none"
          >
            <FaArrowLeft className="text-lg" />
          </button>
        </Link>
        <div>
          <h1 className="text-xl font-extrabold leading-tight text-gray-900">
            Access Control
          </h1>
          <p className="text-sm text-gray-500 font-normal leading-tight">
            Manage user roles and permissions across the system.
          </p>
        </div>
      </div>
      <Button variant="primary" icon={<FaPlus />}>
        Add Role
      </Button>
    </header>
  );
}
