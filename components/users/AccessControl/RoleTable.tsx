// components/access-control/RoleTable.tsx
import RoleRow from "./RoleRow";
import { Role } from "../../../app/user-management/access-control/role";
import Link from "next/link";
import { FaCog, FaCopy, FaTrashAlt } from "react-icons/fa";
import RoleBadge from "./RoleBadge";

interface RoleTableProps {
  roles: Role[];
}

export default function RoleTable({ roles }: RoleTableProps) {
  return (
    <section className="bg-white rounded-lg shadow-sm overflow-hidden">
      <h2 className="font-semibold text-sm text-gray-900 border-b border-gray-200 px-4 sm:px-6 py-3">
        System Roles
      </h2>

      {/* Desktop Table */}
      <div className="hidden md:block">
        <table className="w-full text-left text-gray-500 text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="font-semibold uppercase px-4 sm:px-6 py-3 w-[20%]">
                Role Name
              </th>
              <th className="font-semibold uppercase px-4 sm:px-6 py-3 w-[50%]">
                Description
              </th>
              <th className="font-semibold uppercase px-4 sm:px-6 py-3 w-[15%]">
                Users Assigned
              </th>
              <th className="font-semibold uppercase px-4 sm:px-6 py-3 w-[15%]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role, index) => (
              <RoleRow
                key={role.id}
                role={role}
                isLast={index === roles.length - 1}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-2 p-2">
        {roles.map((role) => (
          <div key={role.id} className="border border-gray-200 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <RoleBadge
                  icon={role.icon}
                  iconColor={role.iconColor}
                  textColor={role.textColor}
                />
                <span className="font-semibold text-gray-900 text-sm">
                  {role.name}
                </span>
              </div>
              <div className="flex space-x-3 text-gray-500">
                <button
                  aria-label={`Edit ${role.name} Role`}
                  className="hover:text-gray-900"
                >
                  <FaCog className="text-lg" />
                </button>
                <button
                  aria-label={`Duplicate ${role.name} Role`}
                  className="hover:text-gray-900"
                >
                  <FaCopy className="text-lg" />
                </button>
                {role.deletable && (
                  <button
                    aria-label={`Delete ${role.name} Role`}
                    className="hover:text-gray-900 text-red-600"
                  >
                    <FaTrashAlt className="text-lg" />
                  </button>
                )}
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-700">{role.description}</div>
            <div className="mt-2">
              <Link
                href="#"
                className="text-emerald-600 font-semibold text-sm hover:underline"
              >
                {role.usersAssigned} users
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
