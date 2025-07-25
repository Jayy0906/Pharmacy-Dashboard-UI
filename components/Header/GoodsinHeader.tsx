// Page header for the Goods In section
// Includes a title with icon and a short description of the page's purpose

export default function GoodsinHeader() {
  return (
    <header className="mb-6">
      <h1 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight mb-1">
        {/* Header icon and title */}
        <i className="fas fa-box-open text-teal-600 mr-2"></i>
        Goods In – Purchase Order Receiving
      </h1>

      {/* Subheading */}
      <p className="text-gray-600 text-xs md:text-sm lg:text-base font-medium">
        Manage incoming stock against previously sent purchase orders
      </p>
    </header>
  );
}
