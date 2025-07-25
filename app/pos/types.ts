// Represents a product available for purchase
export interface Product {
  id: string;
  name: string;
  price: number;
  sku: string;
  description: string;
  stock: number;
  ageRestricted: boolean;
}

// Represents an item in the shopping cart
export interface CartItem {
  id: string;
  name: string;
  sku: string;
  price: number;
  quantity: number;
  subtotal: number;
  ageRestricted?: boolean;
}

// Represents a customer's order
export interface Order {
  id: string; // Order ID from backend
  items: CartItem[]; // Products in the order
  total: number; // Final amount
  tax: number; // Tax applied
  paymentMethod: "cash" | "card" | "other";
  customerNotes?: string; // Optional notes
  customerName?: string; // Optional customer name
  createdAt: string; // ISO date string
}

// Represents a prescription for reuse (if needed)
export interface Prescription {
  id: string;
  patient: {
    name: string;
    image: string;
  };
  clinic: string;
  dateReceived: string;
  totalItems: number;
  status: string;
  statusColor: string;
  statusTextColor: string;
}
