"use client";

import InventoryHeader from "../../components/Header/InventoryHeader";
import SearchFilter from "../../components/Filters/SearchFilter";
import InventoryTable from "../../components/Tables/InventoryTable";

export default function InventoryPage() {
  return (
    <>
      <InventoryHeader />
      <SearchFilter />
      <InventoryTable />
    </>
  );
}
