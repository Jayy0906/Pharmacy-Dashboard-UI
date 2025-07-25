// components/users/profile/ProfileHeader.tsx
import Link from "next/link";

export default function ProfileHeader() {
  return (
    <section className="mb-6">
      <div className="flex items-center space-x-3 text-gray-800 mb-1">
        <Link href="/user-management">
          <button
            aria-label="Back"
            className="text-gray-700 hover:text-gray-900 focus:outline-none cursor-pointer"
          >
            <i className="fas fa-arrow-left text-lg"></i>
          </button>
        </Link>
        <h1 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight mb-1">
          User Profile
        </h1>
      </div>
      <p className="text-gray-600 text-xs md:text-sm lg:text-base font-medium">
        View and manage user account details and permissions.
      </p>
    </section>
  );
}
