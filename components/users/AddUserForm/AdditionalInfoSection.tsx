// components/users/AddUserForm/AdditionalInfoSection.tsx
import { UseFormRegister } from "react-hook-form";
import { NewUserFormData } from "../../../app/user-management/user";

interface AdditionalInfoSectionProps {
  register: UseFormRegister<NewUserFormData>;
}

export default function AdditionalInfoSection({
  register,
}: AdditionalInfoSectionProps) {
  return (
    <section className="bg-white rounded-lg p-6 space-y-6 shadow-sm">
      <div className="flex items-center space-x-2 mb-4">
        <i className="fas fa-clipboard text-emerald-600 text-lg"></i>
        <h2 className="font-semibold text-gray-900 text-base">
          Additional Information
        </h2>
      </div>
      <div>
        <label
          htmlFor="notes"
          className="block text-xs font-semibold text-gray-700 mb-1"
        >
          Notes
        </label>
        <textarea
          id="notes"
          rows={4}
          placeholder="Add any additional notes about this user (optional)"
          className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          {...register("notes")}
        ></textarea>
      </div>
    </section>
  );
}
