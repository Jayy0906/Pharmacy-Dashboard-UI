// app/user-management/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProfileHeader from "../../../components/Header/ProfileHeader";
import ProfileActions from "../../../components/users/profile/ProfileActions";
import ProfileTabs from "../../../components/users/profile/ProfileTabs";
import PersonalInfoCard from "../../../components/users/profile/PersonalInfoCard";
import AccountDetailsCard from "../../../components/users/profile/AccountDetailsCard";
import { User } from "../../../app/user-management/[id]/profile";

const fetchUser = async (id: string): Promise<User> => {
  // Replace with your actual data fetching logic
  // This could be:
  // 1. Direct database call (if using server components)
  // 2. API call to your backend
  // 3. Fetch from your state management

  // For now, we'll simulate fetching different users
  const users: Record<string, User> = {
    "1": {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah.johnson@pathly.com",
      role: "Pharmacist",
      status: "Active",
      position: "Senior Pharmacist",
      avatar:
        "https://storage.googleapis.com/a1aa/image/7363788d-c64c-4fbb-bbe8-032295a3bb0a.jpg",
      dateCreated: "March 15, 2024",
      mobile: "+1 (555) 987-6543",
      location: "Downtown Branch",
      notes:
        "Senior pharmacist with 8+ years experience. Handles prescription verification and patient consultations.",
      lastLogin: "Today at 9:24 AM",
    },
    "2": {
      id: "2",
      name: "Michael Chen",
      email: "michael.chen@pathly.com",
      role: "Admin",
      status: "Active",
      position: "System Administrator",
      avatar:
        "https://storage.googleapis.com/a1aa/image/55b05ec5-b9ec-4b7a-40e4-74207a7b399c.jpg",
      dateCreated: "February 3, 2024",
      mobile: "+1 (555) 123-4567",
      location: "Headquarters",
      notes:
        "System administrator with full access rights. Manages user permissions and system configurations.",
      lastLogin: "Today at 8:15 AM",
    },
    "3": {
      id: "3",
      name: "Emma Wilson",
      email: "emma.wilson@pathly.com",
      role: "Inventory Manager",
      status: "Active",
      position: "Inventory Specialist",
      avatar:
        "https://storage.googleapis.com/a1aa/image/15e4eb9e-266a-41a4-f328-e733d8e3c529.jpg",
      dateCreated: "March 12, 2024",
      mobile: "+1 (555) 456-7890",
      location: "Westside Branch",
      notes:
        "Specializes in inventory optimization and supply chain management. Oversees stock levels and reordering.",
      lastLogin: "Today at 10:30 AM",
    },
    "4": {
      id: "4",
      name: "James Rodriguez",
      email: "james.rodriguez@pathly.com",
      role: "POS Operator",
      status: "Inactive",
      position: "Point of Sale",
      avatar:
        "https://storage.googleapis.com/a1aa/image/4751cd39-2ad1-4318-417c-15a5b9944163.jpg",
      dateCreated: "April 8, 2024",
      mobile: "+1 (555) 789-0123",
      location: "Eastside Branch",
      notes:
        "Handles customer transactions and front desk operations. Currently on leave.",
      lastLogin: "April 28, 2024",
    },
    "5": {
      id: "5",
      name: "Lisa Thompson",
      email: "lisa.thompson@pathly.com",
      role: "Pharmacist",
      status: "Active",
      position: "Pharmacy Assistant",
      avatar:
        "https://storage.googleapis.com/a1aa/image/cd4d47c7-2bd4-4225-fbff-ea8da2706bf8.jpg",
      dateCreated: "May 22, 2024",
      mobile: "+1 (555) 321-6547",
      location: "Downtown Branch",
      notes:
        "Junior pharmacist assisting with prescriptions and customer service. In training for senior role.",
      lastLogin: "Today at 11:45 AM",
    },
  };

  if (!users[id]) {
    throw new Error("User not found");
  }

  return users[id];
};

const UserProfilePage = () => {
  const params = useParams();
  const id = params?.id as string;

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const loadUser = async () => {
        try {
          const data = await fetchUser(id);
          setUser(data);
        } catch (err) {
          setError(err instanceof Error ? err.message : "Failed to load user");
        } finally {
          setLoading(false);
        }
      };
      loadUser();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen p-6 sm:p-10 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-50 min-h-screen p-6 sm:p-10 flex justify-center items-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="bg-gray-50 min-h-screen p-6 sm:p-10 flex justify-center items-center">
        <div className="text-gray-600">User not found</div>
      </div>
    );
  }

  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen">
      <div className="mx-auto">
        <ProfileHeader user={user} />
        <ProfileActions user={user} />
        <ProfileTabs />
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PersonalInfoCard user={user} />
          <AccountDetailsCard user={user} />
        </section>
      </div>
    </main>
  );
};

export default UserProfilePage;
