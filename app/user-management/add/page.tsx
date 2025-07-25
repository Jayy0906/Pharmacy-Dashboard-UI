"use client";

import { useRouter } from "next/navigation"; // Correct import for App Router
import { useForm } from "react-hook-form";
import BasicInfoSection from "../../../components/users/AddUserForm/BasicInfoSection";
import RolePermissionsSection from "../../../components/users/AddUserForm/RolePermissionsSection";
import AdditionalInfoSection from "../../../components/users/AddUserForm/AdditionalInfoSection";
import FormActions from "../../../components/users/AddUserForm/FormActions";
import { NewUserFormData } from "../user";

export default function AddUserPage() {
  const router = useRouter(); // App Router hook

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<NewUserFormData>();

  const onSubmit = (data: NewUserFormData) => {
    console.log("Form submitted:", data);
    // Simulate API call then navigate
    router.push("/user-management"); // Adjusted to App Router path
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="mx-auto">
        <section>
          <div className="flex items-center space-x-3 mb-1">
            <button
              onClick={() => router.back()}
              aria-label="Go back"
              className="text-gray-700 hover:text-gray-900 focus:outline-none cursor-pointer"
            >
              <i className="fas fa-arrow-left text-lg"></i>
            </button>
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight mb-1">
              Add New User
            </h1>
          </div>
          <p className="text-gray-600 text-xs md:text-sm lg:text-base font-medium">
            Create a new user account and send an invitation to join the
            pharmacy portal.
          </p>
        </section>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <BasicInfoSection register={register} errors={errors} />
          <RolePermissionsSection
            register={register}
            errors={errors}
            control={control}
          />
          <AdditionalInfoSection register={register} />
          <FormActions />
        </form>
      </div>
    </main>
  );
}
