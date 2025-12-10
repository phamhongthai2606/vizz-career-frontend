"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";

export default function EmailSetPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const isValid = useMemo(() => email.trim().length > 0, [email]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    const encoded = encodeURIComponent(email.trim());
    router.push(`/business/email-sent?email=${encoded}`);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-[#f9fafb] px-4 pt-2.5">
      <div className="flex w-full max-w-[480px] flex-col">
        {/* Title */}
        <h1 className="mb-4 text-center text-base font-bold tracking-[0.64px] text-[#2d2d2d]">
          アカウント作成
        </h1>

        {/* Subtitle */}
        <p className="mb-6 text-center text-sm font-medium tracking-[1.4px] text-[#2d2d2d]">
          メールアドレスを入力してください。入力されたアドレスに
          <br />
          パスワード設定用のリンクをお送りします。
        </p>

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
                  placeholder="mail@example.com"
                  className="h-9 rounded border border-[#111958] px-3 py-2 text-sm tracking-[1.4px] text-[#2d2d2d] placeholder-[#b9b9b9] transition-colors focus:border-[#111958] focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isValid}
            className={`flex h-10 w-60 items-center justify-center gap-3 rounded-[34px] px-4 py-2 text-sm font-normal tracking-[1.4px] transition-opacity ${
              isValid
                ? "bg-[#ff5252] text-white"
                : "bg-[#FFE5E5] text-[#FF9999] disabled:opacity-50"
            }`}
          >
            メールを送信
          </button>
        </form>

        {/* Footer Section */}
        <div className="flex flex-col items-center gap-6 rounded-b border border-t-0 border-[#b9b9b9] bg-white px-6 py-10">
          <Link
            href="/business-login"
            className="text-sm font-medium tracking-[1.4px] text-[#111958] underline transition-opacity hover:opacity-80"
          >
            ログイン画面に戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
