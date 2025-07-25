// types/user.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Pharmacist" | "Inventory Manager" | "POS Operator";
  status: "Active" | "Inactive";
  position: string;
  avatar: string;
  dateCreated: string;
}
