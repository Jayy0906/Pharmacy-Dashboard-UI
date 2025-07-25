// components/pos1/Header.tsx

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
      <div>
        <h1 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight mb-1">
          POS – Direct Sale
        </h1>
        <p className="text-gray-600 text-xs md:text-sm lg:text-base font-medium">
          Sell medicines to walk-in customers and adjust stock accordingly.
        </p>
      </div>
    </header>
  );
}
