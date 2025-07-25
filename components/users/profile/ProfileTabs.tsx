// components/users/profile/ProfileTabs.tsx
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

export default function ProfileTabs() {
  const pathname = usePathname();
  const { id } = useParams(); // comes from /user-management/[id]

  const currentTab = pathname?.split("/").pop() || "";

  const tabs = [
    {
      name: "Account Info",
      icon: "user",
      path: `/user-management/${id}`,
    },
    {
      name: "Permissions",
      icon: "shield-alt",
      path: `/user-management/${id}/permissions`,
    },
    {
      name: "Recent Activity",
      icon: "history",
      path: `/user-management/${id}/activity`,
    },
    {
      name: "Security Info",
      icon: "lock",
      path: `/user-management/${id}/security`,
    },
  ];

  return (
    <nav className="flex space-x-6 border-b border-gray-200 mb-6 text-gray-600 text-sm font-medium select-none">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          href={tab.path}
          className={`flex items-center gap-2 pb-2 hover:text-gray-900 ${
            currentTab === id
              ? "border-b-4 border-emerald-600 text-emerald-700 font-semibold"
              : ""
          }`}
        >
          <i className={`fas fa-${tab.icon}`}></i>
          {tab.name}
        </Link>
      ))}
    </nav>
  );
}
