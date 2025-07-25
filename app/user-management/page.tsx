"use client";

import { useState, useMemo } from "react";
import { NextPage } from "next";
import UserHeader from "../../components/Header/UserHeader";
import UserFilters from "../../components/users/UserFilters";
import UserTable from "../../components/users/UserTable";
import Pagination from "../../components/Pagination/Pagination"; // your custom pagination
import { User } from "./types";

const UsersPage: NextPage = () => {
  // Mock data - in a real app, this would come from an API
  const allUsers = useMemo<User[]>(
    () => [
      {
        id: "1",
        name: "Sarah Johnson",
        email: "sarah.johnson@pathly.com",
        role: "Admin",
        status: "Active",
        position: "Senior Pharmacist",
        avatar:
          "https://storage.googleapis.com/a1aa/image/df713995-6f56-4179-d473-affb95814b36.jpg",
        dateCreated: "Jan 15, 2024",
      },
      {
        id: "2",
        name: "Michael Chen",
        email: "michael.chen@pathly.com",
        role: "Pharmacist",
        status: "Active",
        position: "Lead Pharmacist",
        avatar:
          "https://storage.googleapis.com/a1aa/image/55b05ec5-b9ec-4b7a-40e4-74207a7b399c.jpg",
        dateCreated: "Feb 03, 2024",
      },
      {
        id: "3",
        name: "Emma Wilson",
        email: "emma.wilson@pathly.com",
        role: "Inventory Manager",
        status: "Active",
        position: "Inventory Specialist",
        avatar:
          "https://storage.googleapis.com/a1aa/image/15e4eb9e-266a-41a4-f328-e733d8e3c529.jpg",
        dateCreated: "Mar 12, 2024",
      },
      {
        id: "4",
        name: "James Rodriguez",
        email: "james.rodriguez@pathly.com",
        role: "POS Operator",
        status: "Inactive",
        position: "Point of Sale",
        avatar:
          "https://storage.googleapis.com/a1aa/image/4751cd39-2ad1-4318-417c-15a5b9944163.jpg",
        dateCreated: "Apr 08, 2024",
      },
      {
        id: "5",
        name: "Lisa Thompson",
        email: "lisa.thompson@pathly.com",
        role: "Pharmacist",
        status: "Active",
        position: "Pharmacy Assistant",
        avatar:
          "https://storage.googleapis.com/a1aa/image/cd4d47c7-2bd4-4225-fbff-ea8da2706bf8.jpg",
        dateCreated: "May 22, 2024",
      },
      // Add more users as needed for testing pagination
    ],
    [],
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortBy, setSortBy] = useState("Name");
  const [dateRange, setDateRange] = useState("");

  const filteredUsers = useMemo(() => {
    const now = new Date();

    return allUsers
      .filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.role.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      .filter((user) => (roleFilter ? user.role === roleFilter : true))
      .filter((user) => (statusFilter ? user.status === statusFilter : true))
      .filter((user) => {
        if (!dateRange) return true;
        const userDate = new Date(user.dateCreated);
        const daysAgo = parseInt(dateRange);
        const compareDate = new Date(now);
        compareDate.setDate(compareDate.getDate() - daysAgo);
        return userDate >= compareDate;
      })
      .sort((a, b) => {
        if (sortBy === "Name") return a.name.localeCompare(b.name);
        if (sortBy === "Date")
          return (
            new Date(a.dateCreated).getTime() -
            new Date(b.dateCreated).getTime()
          );
        if (sortBy === "Status") return a.status.localeCompare(b.status);
        return 0;
      });
  }, [allUsers, searchTerm, roleFilter, statusFilter, sortBy, dateRange]);

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <div className="mx-auto">
        <UserHeader />
        <UserFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onRoleFilter={setRoleFilter}
          onStatusFilter={setStatusFilter}
          onSortChange={setSortBy}
          onDateRangeChange={setDateRange}
        />
        <UserTable users={currentUsers} />
        <Pagination
          totalItems={filteredUsers.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          itemLabel="users"
        />
      </div>
    </div>
  );
};

export default UsersPage;
