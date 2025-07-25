import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Imports FontAwesomeIcon for displaying icons.
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // Imports the specific search icon.

/**
 * LocationSearch Component
 *
 * Provides a search interface for warehouse locations. It includes a search input,
 * a search button, an "Add New Location" button (hidden on small screens),
 * and a series of filter dropdowns.
 */

interface Props {
  search: string;
  onSearchChange: (value: string) => void;
  filters: {
    zone: string;
    type: string;
    status: string;
    capacity: string;
  };
  onFilterChange: (key: keyof typeof filters, value: string) => void;
}

export default function LocationSearch({
  search,
  onSearchChange,
  filters,
  onFilterChange,
}: Props) {
  const handleSubmit = (e: React.FormEvent) => e.preventDefault();

  return (
    // Main section container for the search and filter elements.
    // Styled with background, rounded corners, padding, shadow, and responsive grid layout.
    <section className="bg-white rounded-lg p-4 mb-6 shadow-sm grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          <input
            aria-label="Search by Location Code, Zone, or Description"
            className="flex-grow border border-[#CBD5E1] rounded-md px-4 py-3 text-sm text-[#64748B] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#10B981]"
            placeholder="Search by Location Code, Zone, or Description"
            type="search"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <button
            className="bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-md px-6 py-3 flex items-center gap-2 text-sm min-w-[110px] lg:min-w-[250px] justify-center cursor-pointer"
            type="submit"
          >
            <FontAwesomeIcon icon={faSearch} />
            Search
          </button>
        </div>
      </form>

      <div className="bg-white rounded-lg p-4 lg:py-3 lg:px-16 shadow-sm hidden lg:block cursor-pointer">
        <p className="font-bold text-sm leading-tight">Add New Location</p>
      </div>

      <div className="lg:col-span-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-3 w-full">
          <FilterSelect
            label="Filter by Zones"
            options={["All Zones", "Zone A", "Zone B", "Zone C"]}
            value={filters.zone}
            onChange={(value) => onFilterChange("zone", value)}
          />
          <FilterSelect
            label="Filter by Storage Type"
            options={[
              "Storage Type",
              "Standard Shelf",
              "Refrigerated",
              "Controlled Drugs",
            ]}
            value={filters.type}
            onChange={(value) => onFilterChange("type", value)}
          />
          <FilterSelect
            label="Filter by Status"
            options={["Status", "Active", "Inactive"]}
            value={filters.status}
            onChange={(value) => onFilterChange("status", value)}
          />
          <FilterSelect
            label="Filter by Capacity"
            options={["Capacity", "0-50%", "51-75%", "76-100%"]}
            value={filters.capacity}
            onChange={(value) => onFilterChange("capacity", value)}
          />
        </div>
      </div>
    </section>
  );
}

/**
 * FilterSelect Component (Helper component for LocationSearch)
 *
 * Renders a single dropdown select element for filtering purposes.
 *
 * @param {object} props - The component's properties.
 * @param {string} props.label - The accessibility label for the select element.
 * @param {string[]} props.options - An array of strings to be used as options in the dropdown.
 */
function FilterSelect({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <select
      aria-label={label} // Accessibility label for the select element.
      // Tailwind CSS classes for styling: border, rounded, padding, text, font, focus states.
      className="w-full border border-[#CBD5E1] rounded-md px-4 py-2 text-sm font-semibold text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#10B981]"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {/* Map over the options array to render each <option> element */}
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
}
