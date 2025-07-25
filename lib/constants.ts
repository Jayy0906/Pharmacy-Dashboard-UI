// --- Constants for Dropdown/Select Options ---

/**
 * PRODUCT_GROUPS
 *
 * An array of objects representing different product groups.
 * Used for dropdown selections in forms or filters.
 */
export const PRODUCT_GROUPS = [
  { value: "", label: "Select group", disabled: true }, // Default disabled option
  { value: "group1", label: "Group 1" },
  { value: "group2", label: "Group 2" },
  { value: "group3", label: "Group 3" },
];

/**
 * SUBGROUPS
 *
 * An array of objects representing different product subgroups.
 * Used for dropdown selections, typically nested under product groups.
 */
export const SUBGROUPS = [
  { value: "", label: "Select subgroup", disabled: true }, // Default disabled option
  { value: "subgroup1", label: "Subgroup 1" },
  { value: "subgroup2", label: "Subgroup 2" },
  { value: "subgroup3", label: "Subgroup 3" },
];

/**
 * TAX_RATES
 *
 * An array of objects representing different tax rate options.
 * Used for dropdown selections in pricing or product detail forms.
 */
export const TAX_RATES = [
  { value: "standard", label: "Standard Rate (20%)" },
  { value: "reduced", label: "Reduced Rate (5%)" },
  { value: "zero", label: "Zero Rate (0%)" },
];

/**
 * WAREHOUSE_LOCATIONS
 *
 * An array of objects representing different warehouse storage locations.
 * Used for dropdown selections when specifying product location.
 */
export const WAREHOUSE_LOCATIONS = [
  { value: "", label: "Select location", disabled: true }, // Default disabled option
  { value: "location1", label: "Location 1" },
  { value: "location2", label: "Location 2" },
  { value: "location3", label: "Location 3" },
];

/**
 * SUPPLIERS
 *
 * An array of objects representing different product suppliers.
 * Used for dropdown selections when assigning a supplier to a product.
 */
export const SUPPLIERS = [
  { value: "", label: "Select supplier", disabled: true }, // Default disabled option
  { value: "supplier1", label: "Supplier 1" },
  { value: "supplier2", label: "Supplier 2" },
  { value: "supplier3", label: "Supplier 3" },
];
