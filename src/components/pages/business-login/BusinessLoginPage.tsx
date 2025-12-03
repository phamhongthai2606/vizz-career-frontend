"use client";

import Link from "next/link";
import { useState, useMemo } from "react";

export default function BusinessLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const isValid = useMemo(
    () => email.trim().length > 0 && password.trim().length > 0,
    [email, password],
  );

  const isEmailValid = useMemo(() => {
    const value = email.trim();
    if (!value) return false;
    // basic email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }, [email]);
  const isPasswordValid = useMemo(
    () => password.trim().length >= 8,
    [password],
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isEmailValid || !isPasswordValid) {
      setShowError(true);
      return;
    }
    setShowError(false);
  };

  const emailInputClass = `placeholder:font-400 h-9 rounded border px-3 py-2 text-sm tracking-[1.4px] transition-colors focus:outline-none ${
    showError ? "border-[#ff3b3b] bg-[#ffefef]" : "border-[#111958]"
  }`;

  const passwordInputClass = `placeholder:font-400 h-9 rounded border px-3 py-2 text-sm tracking-[1.4px] transition-colors focus:outline-none text-[#2D2D2D] ${
    showError ? "border-[#ff3b3b] bg-[#ffefef]" : "border-[#111958]"
  }`;

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
          className="flex flex-col items-center gap-6 rounded-t border border-[#b9b9b9] bg-white px-6 py-8"
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
                  autoComplete="off"
                  className={emailInputClass}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  autoComplete="new-password"
                  className={passwordInputClass}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Error Message */}
            {showError && (
              <p
                className="w-full"
                style={{
                  fontWeight: 400,
                  fontSize: 14,
                  letterSpacing: "0.1em",
                  color: "#FF3B3B",
                }}
              >
                メールアドレスまたはパスワードが間違っています。
              </p>
            )}

            {/* Forgot Password Link */}
            <Link
              href="/forgot-password"
              className="text-sm font-medium tracking-[1.4px] text-[#111958] underline transition-opacity hover:opacity-80"
            >
              パスワードを忘れた方
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={!isValid}
            className={`${isValid ? "bg-[#ff5252]" : "bg-[#ff5252]"} flex h-10 w-60 items-center justify-center gap-3 rounded-[34px] px-4 py-2 text-sm font-normal tracking-[1.4px] text-white transition-opacity disabled:opacity-50`}
          >
            ログイン
          </button>
        </form>
      </div>
    </div>
  );
}
