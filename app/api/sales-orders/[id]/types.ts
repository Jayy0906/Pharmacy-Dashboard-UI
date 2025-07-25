// [id]/types.ts
export interface InvoiceData {
  orderId: string;
  orderType: string;
  orderDate: string;
  completionDate: string;
  paymentMethod: string;
  status: string;
  customer: {
    id: string;
    name: string;
    image: string;
    email: string;
    phone: string;
    address: string;
  };
  items: {
    name: string;
    description: string;
    quantity: number;
    unitPrice: number;
    vatRate: number;
    lineTotal: number;
  }[];
  subtotal: number;
  vatTotal: number;
  prescriptionCharge: number;
  grandTotal: number;
  notes: string;
  pharmacy: {
    name: string;
    tagline: string;
    address: string;
    phone: string;
    email: string;
    gphcRegistration: string;
    vatNumber: string;
  };
}
