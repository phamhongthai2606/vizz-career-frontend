"use client";

import Link from "next/link";
import TextInput from "@/components/common/form/TextInput";
import AnimatedPage from "@/components/common/AnimatedPage";
import { useLogin } from "@/components/pages/coco-login/useCocoLogin";

export default function CocoLoginForm() {
  const { register, handleSubmit, errors, isSubmitting, onSubmit } = useLogin();

  return (
    <AnimatedPage>
      <div className="min-h-screen bg-[#F9FAFB]">
        {/* Main Content */}
        <div className="flex items-center justify-center px-4 pt-[108px]">
          <div className="w-full max-w-[480px]">
            {/* Title */}
            <h1 className="mb-6 text-center font-['Hiragino_Sans'] text-base font-bold leading-normal tracking-[0.64px] text-[#2D2D2D]">
              ログイン
            </h1>

            {/* Login Form Container */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center gap-10 rounded-t border border-[#B9B9B9] bg-white px-6 py-12"
            >
              {/* Form Fields Container */}
              <div className="flex w-full flex-col items-center gap-6">
                {/* Input Fields */}
                <div className="flex w-full flex-col items-start gap-5">
                  {/* Email Field */}
                  <div className="flex w-full flex-col items-start gap-2">
                    <label
                      htmlFor="email"
                      className="font-['Hiragino_Sans'] text-sm font-bold leading-normal tracking-[1.4px] text-[#2D2D2D]"
                    >
                      メールアドレス
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="blueai@mail.com"
                      className="flex h-9 w-full items-center gap-3 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 font-['Hiragino_Sans'] text-sm font-normal leading-normal tracking-[1.4px] text-[#2D2D2D] outline-none transition focus:ring-2 focus:ring-[#111958]/20"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Password Field */}
                  <div className="flex w-full flex-col items-start gap-2">
                    <label
                      htmlFor="password"
                      className="font-['Hiragino_Sans'] text-sm font-bold leading-normal tracking-[1.4px] text-[#2D2D2D]"
                    >
                      パスワード
                    </label>
                    <input
                      id="password"
                      type="password"
                      placeholder="************"
                      className="flex h-9 w-full items-center gap-3 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 font-['Hiragino_Sans'] text-sm font-normal leading-normal tracking-[1.4px] text-[#2D2D2D] outline-none transition focus:ring-2 focus:ring-[#111958]/20"
                      {...register("password")}
                    />
                    {errors.password && (
                      <p className="text-xs text-red-500">{errors.password.message}</p>
                    )}
                  </div>
                </div>

                {/* Forgot Password Link */}
                <Link
                  href="/forgot-password"
                  className="flex items-center gap-2 font-['Hiragino_Sans'] text-sm font-medium leading-normal tracking-[1.4px] text-[#111958] underline transition-opacity hover:opacity-80"
                >
                  パスワードを忘れた方
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex h-10 w-60 items-center justify-center gap-3 rounded-[34px] bg-[#FF5252] px-4 py-2 font-['Hiragino_Sans'] text-sm font-normal capitalize leading-normal tracking-[1.4px] text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                ログイン
              </button>
            </form>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
