// app/warehouse/components/WarehouseStats.tsx

import Image from "next/image"; // Import the Image component

export default function WarehouseStats() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
      <StatCard
        icon="https://storage.googleapis.com/a1aa/image/33f0507d-d256-4324-a2b7-c8190c13f207.jpg"
        iconBg="bg-[#DBEAFE]"
        iconColor="text-[#2563EB]"
        value="8"
        label="Total Zones"
      />
      <StatCard
        icon="https://storage.googleapis.com/a1aa/image/870f81ed-d5f8-4c22-281e-825cea147f4d.jpg"
        iconBg="bg-[#DCFCE7]"
        iconColor="text-[#22C55E]"
        value="47"
        label="Active Locations"
      />
      <StatCard
        icon="https://storage.googleapis.com/a1aa/image/b38ca381-9ea1-4bd5-e001-ea954e10ceca.jpg"
        iconBg="bg-[#EDE9FE]"
        iconColor="text-[#8B5CF6]"
        value="3"
        label="Climate Controlled"
      />
      <StatCard
        icon="https://storage.googleapis.com/a1aa/image/fc92ac96-e09a-4c17-50fe-d34aecc315b5.jpg"
        iconBg="bg-[#FFEDD5]"
        iconColor="text-[#F97316]"
        value="89%"
        label="Capacity Used"
      />
    </section>
  );
}

function StatCard({
  icon,
  iconBg,
  iconColor,
  value,
  label,
}: {
  icon: string;
  iconBg: string;
  iconColor: string;
  value: string;
  label: string;
}) {
  return (
    <div className="bg-white rounded-lg p-4 flex items-center gap-4 shadow-sm">
      <div className={`${iconBg} p-3 rounded-md ${iconColor}`}>
        <Image
          alt={`${label} icon`} // More descriptive alt text
          className="w-6 h-6"
          src={icon}
          width={24}
          height={24}
        />
      </div>
      <div>
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
          {value}
        </p>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">{label}</p>
      </div>
    </div>
  );
}
