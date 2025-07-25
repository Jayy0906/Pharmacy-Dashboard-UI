// components/prescriptions/StatsCard.tsx

interface StatsCardProps {
  title: string;
  value: number;
  color: "blue" | "orange" | "green";
  icon: React.ReactNode;
}

/**
 * StatsCard shows a single statistic with color-coded text and an icon.
 * Used inside the StatsCards dashboard section.
 */
export default function StatsCard({
  title,
  value,
  color,
  icon,
}: StatsCardProps) {
  // Dynamic color classes for text and background
  const colorClasses = {
    blue: {
      text: "text-blue-600",
      bg: "bg-blue-100",
    },
    orange: {
      text: "text-orange-600",
      bg: "bg-orange-100",
    },
    green: {
      text: "text-green-600",
      bg: "bg-green-100",
    },
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
      {/* Text and value */}
      <div>
        <p className="text-gray-700 text-xs font-semibold mb-1">{title}</p>
        <p
          className={`${colorClasses[color].text} font-extrabold text-2xl leading-none`}
        >
          {value}
        </p>
      </div>

      {/* Icon display */}
      <div
        aria-label={`${title} icon`}
        className={`${colorClasses[color].bg} rounded-md p-2 flex items-center justify-center`}
      >
        {icon}
      </div>
    </div>
  );
}
