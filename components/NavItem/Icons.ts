/**
 * Helper function to retrieve SVG path data for various icons used in navigation or other parts of the app.
 * This function is exported to be used by other components (e.g., NavItem).
 *
 * @param {string} icon - The name of the icon (e.g., 'chart-line', 'boxes').
 * @returns {string} The SVG path data string.
 */
export function getIconPath(icon: string) {
  const icons: Record<string, string> = {
    "chart-line":
      "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", // Chart line icon path
    boxes:
      "M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zm0 2v3H4V9h16zM4 19v-6h16v6H4z", // Boxes icon path
    "file-prescription":
      "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2zM10 9h4m-4 3h4m-4 3h4", // File prescription icon path
    "user-friends":
      "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", // User friends icon path
    truck:
      "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM12 16h6M5 16h6m-1-6h1m4 0h1m-9 0h1m-1 6h5m1-6v6m0-6l-2-4h-6l-2 4v6", // Truck icon path
    "chart-bar":
      "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", // Chart bar icon path
    home: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", // Home icon path
    warehouse:
      "M22 8.4V4a1 1 0 00-1-1h-3.4A2 2 0 0015 2H9a2 2 0 00-1.6.8H4a1 1 0 00-1 1v4.4a2 2 0 00.8 1.6L12 18l8.2-7.8a2 2 0 00.8-1.6zM7 9v11a1 1 0 001 1h8a1 1 0 001-1V9M5 5h14v2H5V5z", // Placeholder path for warehouse
  };

  return icons[icon] || icons["chart-line"]; // Returns the path for the requested icon or a default 'chart-line' icon if not found
}
