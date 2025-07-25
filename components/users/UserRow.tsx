// components/users/UserRow.tsx
import Link from "next/link";
import { User } from "../../app/user-management/types";
import Avatar from "../users/Avatar";
import Badge from "../users/Badge";
import StatusBadge from "../users/StatusBadge";
import { FaEye, FaEdit, FaUserSlash, FaUserCheck } from "react-icons/fa";

interface UserRowProps {
  user: User;
}

const roleColors = {
  Admin: "purple",
  Pharmacist: "blue",
  "Inventory Manager": "orange",
  "POS Operator": "teal",
} as const;

export default function UserRow({ user }: UserRowProps) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 flex items-center gap-3">
        <Avatar src={user.avatar} alt={`Portrait of ${user.name}`} />
        <div>
          <p className="font-semibold text-gray-900 text-sm md:text-base leading-tight">
            {user.name}
          </p>
          <p className="text-xs text-gray-500 leading-tight">{user.position}</p>
        </div>
      </td>
      <td className="px-6 py-4 text-gray-700 font-normal text-sm md:text-base">
        {user.email}
      </td>
      <td className="px-6 py-4">
        <Badge color={roleColors[user.role]}>{user.role}</Badge>
      </td>
      <td className="px-6 py-4">
        <StatusBadge status={user.status}>{user.status}</StatusBadge>
      </td>
      <td className="px-6 py-4 text-gray-700 font-normal text-sm md:text-base">
        {user.dateCreated}
      </td>
      <td className="px-6 py-4 flex items-center gap-4 text-lg">
        <Link href={`/user-management/${user.id}`}>
          <button
            aria-label={`View ${user.name}`}
            className="text-emerald-600 hover:text-emerald-700 cursor-pointer"
            type="button"
          >
            <FaEye />
          </button>
        </Link>
        <Link href="/user-management/access-control">
          <button
            aria-label={`Edit ${user.name}`}
            className="text-blue-600 hover:text-blue-700 cursor-pointer"
            type="button"
          >
            <FaEdit />
          </button>
        </Link>
        {user.status === "Active" ? (
          <button
            aria-label={`Deactivate ${user.name}`}
            className="text-red-600 hover:text-red-700 cursor-pointer"
            type="button"
          >
            <FaUserSlash />
          </button>
        ) : (
          <button
            aria-label={`Activate ${user.name}`}
            className="text-green-700 hover:text-green-800 cursor-pointer"
            type="button"
          >
            <FaUserCheck />
          </button>
        )}
      </td>
    </tr>
  );
}
