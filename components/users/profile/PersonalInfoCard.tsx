// components/users/profile/PersonalInfoCard.tsx
import { User } from "../../../app/user-management/[id]/profile";

interface PersonalInfoCardProps {
  user: User;
}

export default function PersonalInfoCard({ user }: PersonalInfoCardProps) {
  return (
    <article className="bg-white rounded-lg p-6 shadow">
      <h3 className="flex items-center gap-2 font-semibold text-gray-900 mb-4">
        <i className="fas fa-user text-emerald-600"></i>
        Personal Information
      </h3>
      <dl className="text-gray-700 text-sm space-y-3">
        <div>
          <dt className="text-gray-500 text-xs font-semibold mb-0.5">
            Full Name
          </dt>
          <dd className="font-semibold">{user.name}</dd>
        </div>
        <div>
          <dt className="text-gray-500 text-xs font-semibold mb-0.5">
            Email Address
          </dt>
          <dd className="font-semibold">{user.email}</dd>
        </div>
        {user.mobile && (
          <div>
            <dt className="text-gray-500 text-xs font-semibold mb-0.5">
              Mobile Number
            </dt>
            <dd className="font-semibold">{user.mobile}</dd>
          </div>
        )}
        {user.location && (
          <div>
            <dt className="text-gray-500 text-xs font-semibold mb-0.5">
              Location/Branch
            </dt>
            <dd className="font-semibold">{user.location}</dd>
          </div>
        )}
      </dl>
    </article>
  );
}
