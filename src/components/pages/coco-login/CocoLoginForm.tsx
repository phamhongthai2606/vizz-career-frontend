"use client";

import Link from "next/link";
import TextInput from "@/components/common/form/TextInput";
import AnimatedPage from "@/components/common/AnimatedPage";
import { useLogin } from "@/components/pages/coco-login/useCocoLogin";

export default function CocoLoginForm() {
  const { register, handleSubmit, errors, isSubmitting, onSubmit } = useLogin();

  return (
    <AnimatedPage>
      <div className="flex min-h-screen flex-col items-center justify-start bg-gray-50 px-4 py-12 sm:py-16">
        {/* Title */}
        <h1 className="mb-6 text-center text-base font-bold tracking-wider text-coco-black">
          ログイン
        </h1>

        {/* Login Form Container */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-[480px] rounded-lg border border-coco-gray bg-white px-6 py-12 sm:px-8 shadow-sm"
        >
          {/* Form Fields */}
          <div className="space-y-6">
            {/* Email Field */}
            <TextInput
              id="email"
              label="メールアドレス"
              type="email"
              placeholder="blueai@mail.com"
              error={errors.email?.message}
              {...register("email")}
            />

            {/* Password Field */}
            <TextInput
              id="password"
              label="パスワード"
              type="password"
              placeholder="************"
              error={errors.password?.message}
              {...register("password")}
            />
          </div>

          {/* Forgot Password Link */}
          <div className="mt-6 mb-8">
            <Link
              href="/forgot-password"
              className="text-sm font-medium tracking-wider text-coco-primary underline hover:opacity-80 transition-opacity"
            >
              パスワードを忘れた方
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mx-auto block w-full max-w-[240px] rounded-full bg-coco-point py-2 text-center text-sm font-normal tracking-wider text-white transition-colors hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            ログイン
          </button>
        </form>
      </div>
    </AnimatedPage>
  );
}
