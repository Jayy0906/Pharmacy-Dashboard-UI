// components/warehouse/LocationsTable.tsx

"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Pagination from "../Pagination/Pagination";

// Define the structure for location data
interface Location {
  code: string;
  description: string;
  zone: string;
  zoneColor: string;
  zoneTextColor: string;
  type: string;
  subtype: string;
  capacity: number;
  capacityColor: string;
  items: number;
  temperature: string;
  status: string;
  statusColor: string;
  statusTextColor: string;
  icon: string;
  iconBg: string;
}

interface Props {
  search: string;
  filters: {
    zone: string;
    type: string;
    status: string;
    capacity: string;
  };
}

export default function LocationsTable({ search, filters }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const locations: Location[] = [
    {
      code: "A1-001",
      description: "Shelf A1, Level 1",
      zone: "Zone A",
      zoneColor: "bg-[#BFDBFE]",
      zoneTextColor: "text-[#2563EB]",
      type: "Standard",
      subtype: "Shelf",
      capacity: 75,
      capacityColor: "bg-[#10B981]",
      items: 12,
      temperature: "Room Temp",
      status: "Active",
      statusColor: "bg-teal-600",
      statusTextColor: "text-white",
      icon: "https://storage.googleapis.com/a1aa/image/a1abd3cf-37f4-484b-41bb-82ea453a2913.jpg",
      iconBg: "bg-[#DBEAFE]",
    },
    {
      code: "CS-001",
      description: "Cold Storage Unit 1",
      zone: "Cold Zone",
      zoneColor: "bg-[#A5F3FC]",
      zoneTextColor: "text-[#0E7490]",
      type: "Refrigerated",
      subtype: "",
      capacity: 92,
      capacityColor: "bg-[#F97316]",
      items: 8,
      temperature: "2-8°C",
      status: "Active",
      statusColor: "bg-teal-600",
      statusTextColor: "text-white",
      icon: "https://storage.googleapis.com/a1aa/image/05d26175-d146-490d-2288-f2849509f6d3.jpg",
      iconBg: "bg-[#CFFAFE]",
    },
    {
      code: "CD-001",
      description: "Controlled Drugs Safe",
      zone: "Secure Zone",
      zoneColor: "bg-[#FCA5A5]",
      zoneTextColor: "text-[#B91C1C]",
      type: "Controlled",
      subtype: "Drugs",
      capacity: 45,
      capacityColor: "bg-[#FBBF24]",
      items: 15,
      temperature: "Room Temp",
      status: "Active",
      statusColor: "bg-teal-600",
      statusTextColor: "text-white",
      icon: "https://storage.googleapis.com/a1aa/image/0c907fb6-5b9c-43be-108a-c6f7be3f50fb.jpg",
      iconBg: "bg-[#FCA5A5]",
    },
    // Add more locations here...
  ];

  const filtered = locations.filter((loc) => {
    const matchesSearch =
      loc.code.toLowerCase().includes(search.toLowerCase()) ||
      loc.description.toLowerCase().includes(search.toLowerCase()) ||
      loc.zone.toLowerCase().includes(search.toLowerCase());

    const matchesZone =
      filters.zone === "All Zones" || loc.zone === filters.zone;

    const matchesType =
      filters.type === "Storage Type" ||
      loc.type + " " + loc.subtype === filters.type;

    const matchesStatus =
      filters.status === "Status" || loc.status === filters.status;

    const matchesCapacity =
      filters.capacity === "Capacity" ||
      (filters.capacity === "0-50%" && loc.capacity <= 50) ||
      (filters.capacity === "51-75%" &&
        loc.capacity > 50 &&
        loc.capacity <= 75) ||
      (filters.capacity === "76-100%" && loc.capacity > 75);

    return (
      matchesSearch &&
      matchesZone &&
      matchesType &&
      matchesStatus &&
      matchesCapacity
    );
  });

  const totalItems = filtered.length;
  const paginatedLocations = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <section className="bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center border-b border-[#E2E8F0] px-6 py-3">
        <h2 className="font-semibold text-[#1E293B] text-lg">
          Storage Locations ({totalItems} locations)
        </h2>
        <div className="flex items-center gap-2 text-sm text-[#475569]">
          <span>Show:</span>
          <select
            aria-label="Select number of items to show"
            className="border border-[#CBD5E1] rounded-md px-2 py-1 text-sm font-semibold text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#10B981] cursor-pointer"
            value={itemsPerPage}
            disabled
          >
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
        </div>
      </div>

      {/* Table content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-[#475569]">
          <thead className="bg-[#F1F5F9] text-[#475569]">
            <tr>
              <th className="px-6 py-3 font-semibold">Location Code</th>
              <th className="px-6 py-3 font-semibold">Zone</th>
              <th className="px-6 py-3 font-semibold">Type</th>
              <th className="px-6 py-3 font-semibold">Capacity</th>
              <th className="px-6 py-3 font-semibold">Products</th>
              <th className="px-6 py-3 font-semibold">Temperature</th>
              <th className="px-6 py-3 font-semibold">Status</th>
              <th className="px-6 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedLocations.map((location) => (
              <LocationRow key={location.code} location={location} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination component with label */}
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        itemLabel="locations"
      />
    </section>
  );
}

// Reusable row component
function LocationRow({ location }: { location: Location }) {
  return (
    <tr className="border-b border-[#E2E8F0]">
      <td className="px-6 py-4 font-semibold text-[#1E293B] flex items-center gap-3">
        <div className={`${location.iconBg} rounded-md p-2`}>
          <Image
            alt=""
            src={location.icon}
            width={20}
            height={20}
            className="w-5 h-5 object-contain"
          />
        </div>
        <div className="leading-tight">
          <div>{location.code}</div>
          <div className="text-xs font-normal text-[#475569] whitespace-nowrap">
            {location.description}
          </div>
        </div>
      </td>

      <td className="px-6 py-4">
        <span
          className={`${location.zoneColor} ${location.zoneTextColor} text-xs font-semibold px-2 py-1 rounded-md`}
        >
          {location.zone}
        </span>
      </td>

      <td className="px-6 py-4 font-semibold text-[#1E293B]">
        {location.type}
        {location.subtype && (
          <div className="text-sm text-gray-500">{location.subtype}</div>
        )}
      </td>

      <td className="px-6 py-4 flex items-center gap-2">
        <div className="w-14 h-2 rounded-full bg-[#D1FAE5] relative overflow-hidden">
          <div
            className={`h-2 rounded-full ${location.capacityColor}`}
            style={{ width: `${location.capacity}%` }}
          />
        </div>
        <span className="font-semibold">{location.capacity}%</span>
      </td>

      <td className="px-6 py-4 font-semibold text-[#1E293B]">
        {location.items} items
      </td>

      <td className="px-6 py-4 font-semibold text-[#1E293B]">
        {location.temperature}
      </td>

      <td className="px-6 py-4">
        <span
          className={`${location.statusColor} ${location.statusTextColor} text-xs font-semibold px-2 py-1 rounded-full`}
        >
          {location.status}
        </span>
      </td>

      <td className="px-6 py-4 flex items-center gap-3 text-sm">
        <button className="text-teal-600 hover:text-teal-500" type="button">
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button className="text-[#2563EB] hover:text-[#1e40af]" type="button">
          <FontAwesomeIcon icon={faEye} />
        </button>
        <button className="text-[#DC2626] hover:text-[#991B1B]" type="button">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
}
