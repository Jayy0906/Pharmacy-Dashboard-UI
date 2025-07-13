import StatsCard from "../components/Cards/StatsCard";
import SalesChart from "../components/Charts/SalesChart";
import PrescriptionsTable from "../components/Tables/PrescriptionsTable";
import LowStockItems from "../components/Tables/LowStockItems";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Dashboard Overview Title */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          Dashboard Overview
        </h2>
        <p className="mt-1 text-gray-600 text-xs md:text-sm lg:text-base font-medium">
          Manage your pharmacy operations efficiently
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <StatsCard
          value="2,847"
          label="Total Medicines in Stock"
          trend="+5.2%"
          trendPositive
          icon="box"
          color="blue"
        />
        <StatsCard
          value="143"
          label="Prescriptions Today"
          trend="+12"
          trendPositive
          icon="file-prescription"
          color="green"
        />
        <StatsCard
          value="ON"
          label="Auto Allocation Status"
          isToggle
          icon="calculator"
          color="orange"
        />
        <StatsCard
          value="8"
          label="Low Stock Alerts"
          trend="Critical"
          trendPositive={false}
          icon="exclamation-triangle"
          color="red"
        />
      </div>

      {/* Charts and Low Stock */}
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
        <div className="flex-1">
          <SalesChart />
        </div>
        <div className="w-full lg:w-96">
          <LowStockItems />
        </div>
      </div>

      {/* Prescriptions Table */}
      <PrescriptionsTable />
    </div>
  );
}
