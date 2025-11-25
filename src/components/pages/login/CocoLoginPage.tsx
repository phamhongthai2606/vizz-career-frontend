"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CocoLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col">
      {/* Header */}
      <header className="w-full px-4 sm:px-8 py-6">
        <Image
          src="/logo.svg"
          alt="COCO CAREER"
          width={121}
          height={41}
          priority
          className="w-[121px] h-[41px]"
        />
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-start justify-center px-4 pt-8 sm:pt-16 pb-12">
        <div className="w-full max-w-[480px]">
          {/* Title */}
          <h1 className="text-center text-[16px] font-bold tracking-[0.64px] text-[#2D2D2D] mb-6">
            ログイン
          </h1>

          {/* Login Form */}
          <div className="bg-white border border-[#B9B9B9] rounded-t px-6 py-12">
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              {/* Form Fields */}
              <div className="flex flex-col gap-6">
                {/* Email Field */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-[14px] font-bold tracking-[1.4px] text-[#2D2D2D]"
                  >
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="blueai@mail.com"
                    className="h-9 px-3 py-2 border-[0.5px] border-[#111958] rounded bg-white text-[14px] tracking-[1.4px] text-[#2D2D2D] placeholder:text-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-[#111958] focus:border-transparent transition-all"
                  />
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="password"
                    className="text-[14px] font-bold tracking-[1.4px] text-[#2D2D2D]"
                  >
                    パスワード
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="************"
                    className="h-9 px-3 py-2 border-[0.5px] border-[#111958] rounded bg-white text-[14px] tracking-[1.4px] text-[#2D2D2D] placeholder:text-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-[#111958] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Forgot Password Link */}
              <Link
                href="/forgot-password"
                className="text-[14px] font-medium tracking-[1.4px] text-[#111958] underline hover:text-[#0D1240] transition-colors self-start"
              >
                パスワードを忘れた方
              </Link>

              {/* Login Button */}
              <button
                type="submit"
                className="w-[240px] h-10 mx-auto bg-[#FF5252] hover:bg-[#E64848] active:bg-[#CC3F3F] text-white text-[14px] tracking-[1.4px] rounded-[34px] transition-all duration-200 font-normal capitalize focus:outline-none focus:ring-2 focus:ring-[#FF5252] focus:ring-offset-2"
              >
                ログイン
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
