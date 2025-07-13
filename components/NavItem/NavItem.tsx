// app/dashboard/components/NavItem/NavItem.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { getIconPath } from "./Icons"; // Create this helper

export default function NavItem({
  children,
  icon,
  href,
  active = false,
}: {
  children: React.ReactNode;
  icon: string;
  href: string;
  active?: boolean;
}) {
  const pathname = usePathname();
  const isActive = active || pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors",
        isActive ? "bg-teal-600 text-white" : "text-gray-700 hover:bg-gray-100",
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={clsx("h-5 w-5", isActive ? "text-white" : "text-current")}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={getIconPath(icon)}
        />
      </svg>
      {children}
    </Link>
  );
}
