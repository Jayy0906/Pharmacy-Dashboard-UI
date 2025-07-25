// [id]/profile.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Pharmacist" | "Inventory Manager" | "POS Operator";
  status: "Active" | "Inactive";
  position: string;
  avatar: string;
  dateCreated: string;
  mobile?: string;
  location?: string;
  notes?: string;
  lastLogin?: string;
}
