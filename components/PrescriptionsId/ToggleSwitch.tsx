export default function ToggleSwitch({ id }: { id: string }) {
  return (
    <label
      className="relative inline-flex items-center cursor-pointer"
      htmlFor={id}
    >
      <input className="sr-only peer" id={id} type="checkbox" />
      <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 peer-checked:bg-blue-600 transition-colors"></div>
      <div className="absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full shadow transform peer-checked:translate-x-4 transition-transform"></div>
    </label>
  );
}
