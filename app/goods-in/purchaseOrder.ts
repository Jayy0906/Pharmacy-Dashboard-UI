// TypeScript interface to strongly type a purchase order
// Used for props and API data mapping across the Goods In module

export interface PurchaseOrder {
  poNumber: string;
  supplier: {
    name: string;
    email: string;
  };
  createdDate: string;
  status: "Sent" | "Incomplete" | "Complete";
  expectedDelivery: string;
  completed: boolean;
}
