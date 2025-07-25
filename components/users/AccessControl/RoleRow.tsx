// components/access-control/RoleRow.tsx
import Link from "next/link";
import RoleBadge from "./RoleBadge";
import { Role } from "../../../app/user-management/access-control/role";
import { FaCog, FaCopy, FaTrashAlt } from "react-icons/fa";

interface RoleRowProps {
  role: Role;
  isLast?: boolean;
}

export default function RoleRow({ role, isLast = false }: RoleRowProps) {
  const rowClasses = `border-b border-gray-200 ${isLast ? "bg-gray-50 rounded-b-lg" : ""}`;
  const cellClasses = `px-4 sm:px-6 py-4 ${isLast ? "bg-gray-50 rounded-b-lg" : ""}`;

  return (
    <tr className={rowClasses}>
      <td className={`${cellClasses} flex items-center space-x-3`}>
        <RoleBadge
          icon={role.icon}
          iconColor={role.iconColor}
          textColor={role.textColor}
        />
        <span className="font-semibold text-gray-900 text-sm">{role.name}</span>
      </td>
      <td className={`${cellClasses} text-sm`}>
        <div className="line-clamp-2">{role.description}</div>
      </td>
      <td className={`${cellClasses}`}>
        <Link
          href="#"
          className="text-emerald-600 font-semibold text-sm hover:underline"
        >
          {role.usersAssigned} users
        </Link>
      </td>
      <td
        className={`${cellClasses} text-gray-500 text-lg flex items-center space-x-2 sm:space-x-4`}
      >
        <button
          aria-label={`Edit ${role.name} Role`}
          className="hover:text-gray-900 focus:outline-none p-1"
        >
          <FaCog />
        </button>
        <button
          aria-label={`Duplicate ${role.name} Role`}
          className="hover:text-gray-900 focus:outline-none p-1"
        >
          <FaCopy />
        </button>
        {role.deletable && (
          <button
            aria-label={`Delete ${role.name} Role`}
            className="hover:text-gray-900 focus:outline-none p-1 text-red-600"
          >
            <FaTrashAlt />
          </button>
        )}
      </td>
    </tr>
  );
}
