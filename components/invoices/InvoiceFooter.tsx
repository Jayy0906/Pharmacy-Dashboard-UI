// components/invoices/InvoiceFooter.tsx
interface PharmacyInfo {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  gphcRegistration: string;
  vatNumber: string;
}

interface InvoiceFooterProps {
  pharmacy: PharmacyInfo;
}

export default function InvoiceFooter({ pharmacy }: InvoiceFooterProps) {
  return (
    <footer className="bg-white rounded-lg p-6 shadow-sm text-center sm:text-left text-sm text-slate-700">
      <p className="font-extrabold text-emerald-600 text-lg mb-1">
        {pharmacy.name}
      </p>
      <p className="text-slate-600 mb-4">{pharmacy.tagline}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-xs">
        <div>
          <p className="font-semibold mb-1">Address</p>
          <p className="whitespace-pre-line">{pharmacy.address}</p>
        </div>
        <div>
          <p className="font-semibold mb-1">Contact</p>
          <p>
            Phone: {pharmacy.phone}
            <br />
            Email: {pharmacy.email}
          </p>
        </div>
        <div>
          <p className="font-semibold mb-1">Registration</p>
          <p>
            GPhC Registration: {pharmacy.gphcRegistration}
            <br />
            VAT Number: {pharmacy.vatNumber}
          </p>
        </div>
      </div>
    </footer>
  );
}
