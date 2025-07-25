// components/users/profile/AccountDetailsCard.tsx
import { User } from "../../../app/user-management/[id]/profile";
import StatusBadge from "../StatusBadge";

interface AccountDetailsCardProps {
  user: User;
}

export default function AccountDetailsCard({ user }: AccountDetailsCardProps) {
  return (
    <article className="bg-white rounded-lg p-6 shadow">
      <h3 className="flex items-center gap-2 font-semibold text-gray-900 mb-4">
        <i className="fas fa-id-card text-emerald-600"></i>
        Account Details
      </h3>
      <dl className="text-gray-700 text-sm space-y-3">
        <div>
          <dt className="text-gray-500 text-xs font-semibold mb-0.5">
            User Role
          </dt>
          <dd className="font-semibold">{user.role}</dd>
        </div>
        <div>
          <dt className="text-gray-500 text-xs font-semibold mb-0.5">
            Account Status
          </dt>
          <dd>
            <StatusBadge status={user.status}>{user.status}</StatusBadge>
          </dd>
        </div>
        <div>
          <dt className="text-gray-500 text-xs font-semibold mb-0.5">
            Date Created
          </dt>
          <dd className="font-semibold">{user.dateCreated}</dd>
        </div>
        {user.notes && (
          <div>
            <dt className="text-gray-500 text-xs font-semibold mb-0.5">
              Notes
            </dt>
            <dd className="font-semibold">{user.notes}</dd>
          </div>
        )}
      </dl>
    </article>
  );
}
