// app/sales-orders/types.ts
export interface SalesOrder {
  id: string;
  customerName: string;
  customerImage: string;
  source: "Prescription" | "POS";
  completionDate: string;
  totalPrice: number;
  paymentMethod: "Card" | "Cash" | "Other";
  status: "Completed";
}
