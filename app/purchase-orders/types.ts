// types/purchase-orders.ts
export type PurchaseOrder = {
  id: string;
  supplier: string;
  createdDate: string; // ISO format: "YYYY-MM-DD"
  expectedDelivery: string; // ISO format: "YYYY-MM-DD"
  items: number;
  totalCost: number;
  status: string;
  statusColor: "purple" | "orange" | "green" | "yellow" | "red";
  actions: ("view" | "refresh" | "edit" | "cancel")[];
};

export type StatusColor = PurchaseOrder["statusColor"];
export type OrderAction = PurchaseOrder["actions"][number];
