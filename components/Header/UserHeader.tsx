// components/users/UserHeader.tsx
import Link from "next/link";
import Button from "../users/Button";
import { FaPlus } from "react-icons/fa";

export default function UserHeader() {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
      <div>
        <h1 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight mb-1">
          Users
        </h1>
        <p className="text-gray-600 text-xs md:text-sm lg:text-base font-medium">
          Manage all system users. View, search, and control user access across
          the pharmacy portal.
        </p>
      </div>
      <Link href="/user-management/add" passHref>
        <Button variant="primary" icon={<FaPlus />}>
          Add New User
        </Button>
      </Link>
    </header>
  );
}
