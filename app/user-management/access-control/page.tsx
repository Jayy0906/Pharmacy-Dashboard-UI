// pages/user-management/access-control.tsx
import { NextPage } from "next";
import AccessControlHeader from "../../../components/Header/AccessControlHeader";
import RoleTable from "../../../components/users/AccessControl/RoleTable";
import { Role } from "../../../app/user-management/access-control/role";

const AccessControlPage: NextPage = () => {
  // Mock data - replace with API call in a real app
  const roles: Role[] = [
    {
      id: "1",
      name: "Admin",
      description: "Full system access with all permissions",
      usersAssigned: 3,
      icon: "crown",
      iconColor: "red-100",
      textColor: "red-600",
    },
    {
      id: "2",
      name: "Pharmacist",
      description: "Prescription management and patient consultation",
      usersAssigned: 8,
      icon: "user-nurse",
      iconColor: "blue-100",
      textColor: "blue-600",
    },
    {
      id: "3",
      name: "POS Operator",
      description: "Sales transactions and customer service",
      usersAssigned: 12,
      icon: "receipt",
      iconColor: "green-100",
      textColor: "green-600",
    },
    {
      id: "4",
      name: "Inventory Manager",
      description: "Stock management and supplier coordination",
      usersAssigned: 5,
      icon: "sitemap",
      iconColor: "purple-100",
      textColor: "purple-600",
      deletable: true,
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <div className="mx-auto">
        <AccessControlHeader />
        <RoleTable roles={roles} />
      </div>
    </div>
  );
};

export default AccessControlPage;
