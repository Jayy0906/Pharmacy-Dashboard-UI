// components/Header/ReceivePurchaseOrderHeader.tsx

import { FaBoxOpen } from "react-icons/fa";

interface HeaderProps {
  grnId: string;
  poNumber: string;
  supplierName: string;
}

export const Header = ({ grnId, poNumber, supplierName }: HeaderProps) => {
  return (
    <>
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <FaBoxOpen className="text-2xl text-slate-800" />
          <h1 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight mb-1">
            Receive Purchase Order
          </h1>
        </div>
        <div className="text-gray-600 text-xs md:text-sm lg:text-base font-medium">
          <div>GRN ID will be generated</div>
          <a className="font-semibold text-blue-600 hover:underline" href="#">
            {grnId}
          </a>
        </div>
      </header>
      <p className="text-sm text-slate-700 mb-4">
        {poNumber} - {supplierName}
      </p>
    </>
  );
};
