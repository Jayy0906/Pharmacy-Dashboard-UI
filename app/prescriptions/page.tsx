import StatsCards from "@/components/prescriptions/StatsCards";
import FilterSection from "@/components/prescriptions/FilterSection";
import PrescriptionsTable from "@/components/prescriptions/PrescriptionsTable";
import PrescriptionsHeader from "@/components/Header/PrescriptionsHeader";

export default function PrescriptionsPage() {
  return (
    <div className="mx-auto">
      <PrescriptionsHeader />
      <StatsCards />
      <FilterSection />
      <PrescriptionsTable />
    </div>
  );
}
