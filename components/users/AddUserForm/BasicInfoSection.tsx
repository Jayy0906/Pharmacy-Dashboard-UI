// components/users/AddUserForm/BasicInfoSection.tsx
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { NewUserFormData } from "../../../app/user-management/user";

interface BasicInfoSectionProps {
  register: UseFormRegister<NewUserFormData>;
  errors: FieldErrors<NewUserFormData>;
}

export default function BasicInfoSection({
  register,
  errors,
}: BasicInfoSectionProps) {
  return (
    <section className="bg-white rounded-lg p-6 space-y-6 shadow-sm">
      <div className="flex items-center space-x-2 mb-4">
        <i className="fas fa-user text-emerald-600 text-lg"></i>
        <h2 className="font-semibold text-gray-900 text-base">
          Basic Information
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-semibold text-gray-700 mb-1"
          >
            Full Name <span className="text-gray-900">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Enter full name"
            className={`w-full rounded-md border ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            } px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent`}
            {...register("fullName", { required: true })}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">Full name is required</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold text-gray-700 mb-1"
          >
            Email Address <span className="text-gray-900">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="user@pathly.com"
            className={`w-full rounded-md border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent`}
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">
              {errors.email.type === "required"
                ? "Email is required"
                : "Please enter a valid email"}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="mobile"
            className="block text-xs font-semibold text-gray-700 mb-1"
          >
            Mobile Number
          </label>
          <input
            id="mobile"
            type="tel"
            placeholder="+1 (555) 123-4567"
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            {...register("mobile")}
          />
        </div>
        <div>
          <label
            htmlFor="location"
            className="block text-xs font-semibold text-gray-700 mb-1"
          >
            Location/Branch
          </label>
          <select
            id="location"
            className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            {...register("location")}
          >
            <option value="">Select location</option>
            <option value="Location 1">Location 1</option>
            <option value="Location 2">Location 2</option>
            <option value="Location 3">Location 3</option>
          </select>
        </div>
      </div>
    </section>
  );
}
