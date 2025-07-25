// components/access-control/RoleBadge.tsx
import { FaCrown, FaUserNurse, FaReceipt, FaSitemap } from "react-icons/fa";

interface RoleBadgeProps {
  icon: string;
  iconColor: string;
  textColor: string;
}

const iconComponents: Record<string, React.ElementType> = {
  crown: FaCrown,
  "user-nurse": FaUserNurse,
  receipt: FaReceipt,
  sitemap: FaSitemap,
};

export default function RoleBadge({
  icon,
  iconColor,
  textColor,
}: RoleBadgeProps) {
  const IconComponent = iconComponents[icon] || FaCrown;

  return (
    <div
      className={`bg-${iconColor} text-${textColor} rounded-md p-2 flex items-center justify-center w-8 h-8`}
    >
      <IconComponent className="text-sm" />
    </div>
  );
}
