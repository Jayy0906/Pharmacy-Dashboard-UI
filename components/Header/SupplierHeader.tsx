import {
  FaEnvelope,
  FaPhoneAlt,
  FaGlobe,
  FaMapMarkerAlt,
  FaEdit,
} from "react-icons/fa";
import { StatusBadge } from "../../components/supplier-details/StatusBadge";
import Image from "next/image";

interface SupplierHeaderProps {
  name: string;
  status: "Active" | "Inactive";
  email: string;
  phone: string;
  website: string;
  address: string;
  logo: string;
  onEdit: () => void;
}

export const SupplierHeader = ({
  name,
  status,
  email,
  phone,
  website,
  address,
  logo,
  onEdit,
}: SupplierHeaderProps) => {
  return (
    <section className="bg-white rounded-lg p-6 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between border border-[#E5E7EB]">
      <div className="flex items-center space-x-4 mb-4 sm:mb-0">
        <div className="bg-[#D9F2E9] rounded-lg p-4 flex items-center justify-center w-14 h-14">
          <Image
            alt={`Logo of ${name}`}
            className="block"
            height="24"
            src={logo}
            width="24"
          />
        </div>
        <div>
          <h1 className="font-extrabold text-lg text-[#111827] flex items-center space-x-2">
            <span>{name}</span>
            <StatusBadge status={status} />
          </h1>
          <ul className="mt-1 text-sm text-[#374151] space-y-1">
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-[#6B7280]" />
              <span>{email}</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhoneAlt className="text-[#6B7280]" />
              <span>{phone}</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaGlobe className="text-[#6B7280]" />
              <span>{website}</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-[#6B7280]" />
              <span>{address}</span>
            </li>
          </ul>
        </div>
      </div>
      <button
        onClick={onEdit}
        className="bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-md px-4 py-2 flex items-center space-x-2 w-full sm:w-auto justify-center sm:justify-start cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#059669] focus:ring-offset-2"
        type="button"
      >
        <FaEdit />
        <span>Edit Supplier</span>
      </button>
    </section>
  );
};
