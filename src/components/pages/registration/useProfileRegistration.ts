"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  profileRegistrationSchema,
  type ProfileRegistrationSchema,
} from "@/lib/ProfileRegistrationSchema";

export const useProfileRegistration = () => {
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

  const onSubmit = (data: ProfileRegistrationSchema) => {
    console.log("Profile Registration data:", data);
  };

  const watchAllFields = watch();
  const isFormValid = Object.values(watchAllFields).every(
    (v) => v !== "" && v !== undefined && v !== null,
  );

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isFormValid,
    watchAllFields,
    onSubmit,
  };
};
