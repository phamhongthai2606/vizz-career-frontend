"use client";

import React from "react";
import TextInput from "@/components/common/form/TextInput";
import { useLogin } from "@/components/pages/login/useLogin";

export default function LoginForm() {
  const { register, handleSubmit, errors, onSubmit, isSubmitting } = useLogin();

  type TypeFormData = {
    email: string;
    password: string;
  };

  const formItems: {
    form: keyof TypeFormData;
    label: string;
    type: "text" | "password";
    isRequired: boolean;
    placeholder?: string;
  }[] = [
    {
      form: "email",
      label: "Email",
      type: "text",
      isRequired: true,
      placeholder: "Nhập email",
    },
    {
      form: "password",
      label: "Mật khẩu",
      type: "password",
      isRequired: true,
      placeholder: "Nhập mật khẩu",
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm rounded-xl bg-white p-8 shadow-md"
      >
        <h1 className="mb-6 text-center text-2xl font-semibold text-gray-800">
          Đăng nhập
        </h1>

        <div className="space-y-4">
          {formItems.map((item) => (
            <TextInput
              key={item.form}
              id={item.form}
              label={item.label}
              type={item.type}
              required={item.isRequired}
              placeholder={item.placeholder}
              error={errors[item.form]?.message}
              {...register(item.form)}
            />
          ))}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-6 w-full rounded-lg bg-blue-600 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-60"
        >
          {isSubmitting ? "Đang xử lý..." : "Đăng nhập"}
        </button>
      </form>
    </div>
  );
}