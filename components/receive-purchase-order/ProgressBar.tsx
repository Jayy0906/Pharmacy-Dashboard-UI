interface ProgressBarProps {
  received: number; // Number of products received so far
  total: number; // Total number of products in the PO
}

// Visual indicator for how many items have been received out of the total
export const ProgressBar = ({ received, total }: ProgressBarProps) => {
  const percentage = Math.round((received / total) * 100); // Calculate progress as a percentage

  return (
    <section
      aria-label="Receiving Progress"
      className="bg-white rounded-lg border border-slate-200 p-3 mb-6 text-xs text-slate-600 flex justify-between items-center relative"
    >
      {/* Title */}
      <span className="font-semibold">Receiving Progress</span>

      {/* Text summary */}
      <span>
        {received} of {total} items received
      </span>

      {/* Progress bar container (absolute positioned) */}
      <div className="w-full absolute left-0 top-full mt-1 h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          aria-hidden="true"
          className="h-2 bg-slate-400 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }} // Dynamic width based on % received
        ></div>
      </div>
    </section>
  );
};
