// components/inventory/BulkImportExport.tsx
import BackLink from "../bulk-import-export/BackLink";
import ImportForm from "./ImportForm";
import ExportForm from "./ExportForm";

export default function BulkImportExport() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <BackLink />
      <ImportForm />
      <ExportForm />
    </div>
  );
}
