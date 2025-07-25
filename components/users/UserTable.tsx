// components/users/UserTable.tsx
import { User } from "../../app/user-management/types";
import UserRow from "./UserRow";

interface UserTableProps {
  users: User[];
}

export default function UserTable({ users }: UserTableProps) {
  return (
    <section className="bg-white rounded-lg shadow-sm overflow-x-auto">
      <div className="flex justify-between items-center border-b border-gray-200 px-6 py-3">
        <h2 className="font-semibold text-gray-700 text-sm md:text-base">
          System Users ({users.length} users)
        </h2>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Show:</span>
          <select
            aria-label="Rows per page"
            className="border border-gray-300 rounded-md py-1 px-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent cursor-pointer"
          >
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
        </div>
      </div>
      <table className="min-w-full text-left text-sm md:text-base">
        <thead className="bg-gray-50 text-gray-500 font-semibold border-b border-gray-200">
          <tr>
            <th className="px-6 py-3 min-w-[160px]" scope="col">
              Name
            </th>
            <th className="px-6 py-3 min-w-[220px]" scope="col">
              Email
            </th>
            <th className="px-6 py-3 min-w-[140px]" scope="col">
              Role
            </th>
            <th className="px-6 py-3 min-w-[100px]" scope="col">
              Status
            </th>
            <th className="px-6 py-3 min-w-[120px]" scope="col">
              Date Created
            </th>
            <th className="px-6 py-3 min-w-[120px]" scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
