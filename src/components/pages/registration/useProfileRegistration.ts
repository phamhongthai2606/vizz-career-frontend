"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  profileRegistrationSchema,
  type ProfileRegistrationSchema,
} from "@/lib/ProfileRegistrationSchema";
import { useRouter } from "next/navigation";

export const useProfileRegistration = () => {
  const requiredFields = [
    "last_name",
    "first_name",
    "last_name_kana",
    "first_name_kana",
    "school_name",
    "department_name",
    "subject_system",
    "grade",
  ] as const;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ProfileRegistrationSchema>({
    resolver: zodResolver(profileRegistrationSchema),
    mode: "onChange",
    defaultValues: {
      last_name: "",
      first_name: "",
      last_name_kana: "",
      first_name_kana: "",
      school_name: "",
      department_name: "",
      subject_system: "",
      grade: "",
    },
  });

  const watched = watch(requiredFields);

  const isFormValid = watched.every(
    (v) => v !== "" && v !== undefined && v !== null
  );

  const router = useRouter();

  const onSubmit = (data: ProfileRegistrationSchema) => {
    console.log("Profile Registration data:", data);
    router.push("/additional-profile");
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isFormValid,
    watchAllFields: watch(),
    onSubmit,
  };
};
