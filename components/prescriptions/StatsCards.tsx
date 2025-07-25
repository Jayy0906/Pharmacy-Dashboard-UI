// components/prescriptions/StatsCards.tsx

import StatsCard from "../prescriptions/StatsCard";

/**
 * StatsCards component renders a grid of multiple StatsCard components.
 * Each card shows a summary metric such as total, pending, or completed prescriptions.
 */
const stats = [
  {
    title: "Total Prescriptions",
    value: 24,
    color: "blue",
    icon: (
      <svg
        aria-hidden="true"
        className="h-6 w-6 text-blue-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 12h6m-3-3v6m-6 3h12a2 2 0 002-2v-1a2 2 0 00-2-2h-1l-3-3-3 3H7a2 2 0 00-2 2v1a2 2 0 002 2z"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
  },
  {
    title: "Pending",
    value: 8,
    color: "orange",
    icon: (
      <svg
        aria-hidden="true"
        className="h-6 w-6 text-orange-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 6v6l4 2m6 4a9 9 0 11-18 0 9 9 0 0118 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
  },
  {
    title: "Ready for Pickup",
    value: 7,
    color: "blue",
    icon: (
      <svg
        aria-hidden="true"
        className="h-6 w-6 text-blue-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8m0 0l-4-4m4 4l4-4M12 4v8"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
  },
  {
    title: "Completed Today",
    value: 12,
    color: "green",
    icon: (
      <svg
        aria-hidden="true"
        className="h-6 w-6 text-green-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 13l4 4L19 7"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
  },
];

export default function StatsCards() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </section>
  );
}
