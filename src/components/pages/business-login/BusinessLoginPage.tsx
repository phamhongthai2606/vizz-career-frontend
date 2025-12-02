"use client";

import Link from "next/link";

export default function BusinessLoginPage() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-[#f9fafb] px-4 pt-2.5">
      <div className="w-full max-w-[480px] flex-col items-center">
        {/* Title */}
        <h1 className="mb-6 text-center text-base font-bold tracking-[0.64px] text-[#2d2d2d]">
          ログイン
        </h1>

        {/* Form Container */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-10 rounded-t border border-[#b9b9b9] bg-white px-6 py-12"
        >
          <div className="flex w-full flex-col items-center gap-6">
            {/* Form Fields */}
            <div className="flex w-full flex-col gap-5">
              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-bold tracking-[1.4px] text-[#2d2d2d]"
                >
                  メールアドレス
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="blueai@mail.com"
                  autoComplete="off"
                  className="placeholder:font-400 h-9 rounded border border-[#111958] px-3 py-2 text-sm tracking-[1.4px] transition-colors placeholder:text-[#2D2D2D] focus:border-[#111958] focus:outline-none"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="text-sm font-bold tracking-[1.4px] text-[#2d2d2d]"
                >
                  パスワード
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="************"
                  autoComplete="new-password"
                  className="placeholder:font-400 h-9 rounded border border-[#111958] px-3 py-2 text-sm tracking-[1.4px] transition-colors placeholder:text-[#2D2D2D] focus:border-[#111958] focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Forgot Password Link */}
            <Link
              href=""
              className="text-sm font-medium tracking-[1.4px] text-[#111958] underline transition-opacity hover:opacity-80"
            >
              パスワードを忘れた方
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="flex h-10 w-60 items-center justify-center gap-3 rounded-[34px] bg-[#ff5252] px-4 py-2 text-sm font-normal tracking-[1.4px] text-white transition-opacity disabled:opacity-50"
          >
            ログイン
          </button>
        </form>
      </div>
    </div>
  );
}
