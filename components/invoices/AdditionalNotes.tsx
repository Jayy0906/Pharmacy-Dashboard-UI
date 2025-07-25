// components/invoices/AdditionalNotes.tsx
interface AdditionalNotesProps {
  notes: string;
}

export default function AdditionalNotes({ notes }: AdditionalNotesProps) {
  return (
    <section className="bg-white rounded-lg p-6 mb-6 shadow-sm">
      <h4 className="font-semibold text-slate-800 mb-3">Additional Notes</h4>
      <div className="bg-yellow-50 border border-yellow-200 rounded p-4 text-sm text-yellow-900 whitespace-pre-line">
        {notes}
      </div>
    </section>
  );
}
