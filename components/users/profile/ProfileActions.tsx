// components/users/profile/ProfileActions.tsx
import { User } from "../../../app/user-management/[id]/profile";
import Button from "../Button";
import { FaEdit, FaEnvelope, FaUserSlash } from "react-icons/fa";
import Badge from "../../../components/users/Badge";
import StatusBadge from "../../../components/users/StatusBadge";
import Image from "next/image";

interface ProfileActionsProps {
  user: User;
}

export default function ProfileActions({ user }: ProfileActionsProps) {
  return (
    <section className="bg-white rounded-lg shadow p-6 mb-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      {/* User Info Block */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <Image
          alt={`Profile image of ${user.name}`}
          className="rounded-full object-cover"
          src={user.avatar}
          width={60}
          height={60}
          quality={100}
        />
        <div>
          <h2 className="font-extrabold text-lg leading-tight text-gray-900">
            {user.name}
          </h2>
          <p className="text-gray-700 text-sm">{user.email}</p>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            <Badge color="blue">{user.role}</Badge>
            <StatusBadge status={user.status}>{user.status}</StatusBadge>
          </div>
          {user.lastLogin && (
            <p className="text-gray-600 text-xs mt-1">
              Last login: {user.lastLogin}
            </p>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full md:w-auto justify-start md:justify-end">
        <Button variant="primary" icon={<FaEdit />} fullWidthOnMobile>
          Edit User
        </Button>
        <Button variant="secondary" icon={<FaEnvelope />} fullWidthOnMobile>
          Resend Invite
        </Button>
        {user.status === "Active" ? (
          <Button variant="danger" icon={<FaUserSlash />} fullWidthOnMobile>
            Deactivate
          </Button>
        ) : (
          <Button variant="success" icon={<FaUserSlash />} fullWidthOnMobile>
            Activate
          </Button>
        )}
      </div>
    </section>
  );
}
