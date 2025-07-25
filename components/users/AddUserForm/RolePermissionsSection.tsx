import { UseFormRegister, FieldErrors } from "react-hook-form";
import { NewUserFormData } from "../../../app/user-management/user";
import ToggleSwitch from "./ToggleSwitch";

interface RolePermissionsSectionProps {
  register: UseFormRegister<NewUserFormData>;
  errors: FieldErrors<NewUserFormData>;
  // control: Control<NewUserFormData>; // Uncomment when needed
}

export default function RolePermissionsSection({
  register,
  errors,
}: RolePermissionsSectionProps) {
  return (
    <section className="bg-white rounded-lg p-6 space-y-6 shadow-sm">
      <div className="flex items-center space-x-2 mb-4">
        <i className="fas fa-shield-alt text-emerald-600 text-lg"></i>
        <h2 className="font-semibold text-gray-900 text-base">
          Role & Permissions
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        <div>
          <label
            htmlFor="role"
            className="block text-xs font-semibold text-gray-700 mb-1"
          >
            User Role <span className="text-gray-900">*</span>
          </label>
          <select
            id="role"
            className={`w-full rounded-md border cursor-pointer ${
              errors.role ? "border-red-500" : "border-gray-300"
            } bg-gray-50 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent`}
            {...register("role", { required: true })}
          >
            <option value="">Select role</option>
            <option value="Admin">Admin</option>
            <option value="Pharmacist">Pharmacist</option>
            <option value="Inventory Manager">Inventory Manager</option>
            <option value="POS Operator">POS Operator</option>
          </select>
          {errors.role && (
            <p className="text-red-500 text-xs mt-1">Role is required</p>
          )}
          <p className="text-[10px] text-gray-500 mt-1">
            This determines user access levels and permissions
          </p>
        </div>
        <ToggleSwitch
          label="Active"
          description="Active users can log in and access the system"
        />
      </div>
    </section>
  );
}
