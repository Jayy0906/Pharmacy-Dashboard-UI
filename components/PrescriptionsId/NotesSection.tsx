export default function NotesSection({ notes }: { notes: string }) {
  return (
    <section>
      {/* Section label */}
      <p className="text-xs font-semibold text-gray-500 mb-1 select-none">
        Notes
      </p>
      {/* Read-only note area */}
      <div
        className="bg-gray-100 text-xs text-gray-700 rounded-md p-2 select-text"
        role="note"
      >
        {notes}
      </div>
    </section>
  );
}
