"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function SetPasswordPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const passwordsMatch = useMemo(
    () => password.length > 0 && confirm.length > 0 && password === confirm,
    [password, confirm],
  );
  const showMismatch = useMemo(
    () => password.length > 0 && confirm.length > 0 && password !== confirm,
    [password, confirm],
  );
  const isValid = useMemo(
    () => password.length > 0 && confirm.length > 0 && passwordsMatch,
    [passwordsMatch, password, confirm],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    router.push("/account-created");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-[#f9fafb] px-4 pt-2.5">
      <div className="w-full max-w-[480px]">
        <div className="mb-6 flex flex-col items-center gap-6">
          <h1 className="text-center text-base font-bold tracking-[0.64px] text-[#2d2d2d]">
            パスワード設定
          </h1>
          <p className="w-full text-center text-sm font-medium tracking-[1.4px] text-[#2d2d2d]">
            アカウント作成を完了するため、パスワードを設定してください。
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-t border border-[#b9b9b9] bg-white px-6 py-12"
        >
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold tracking-[1.4px] text-[#2d2d2d]">
                        パスワード
                      </label>
                      <div className="flex h-9 items-center gap-3 rounded border-[0.5px] px-2.5 py-2">
                        <input
                          id="password"
                          type="password"
                          placeholder="8文字以上の英数字"
                          className="w-full bg-transparent text-sm text-[#2d2d2d] outline-none"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold tracking-[1.4px] text-[#2d2d2d]">
                        パスワード（確認用）
                      </label>
                      <div className="flex h-9 items-center gap-3 rounded border-[0.5px] px-2.5 py-2">
                        <input
                          id="confirm"
                          type="password"
                          placeholder="上記と同じパスワードを入力"
                          className="w-full bg-transparent text-sm text-[#2d2d2d] outline-none"
                          value={confirm}
                          onChange={(e) => setConfirm(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {showMismatch && (
                <p className="text-sm font-normal tracking-[1.4px] text-[#FF3B3B]">
                  入力されたパスワードが一致しません。もう一度確認してください。
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={!isValid}
              className={`mx-auto flex h-10 w-60 items-center justify-center gap-3 rounded-full px-4 py-2 text-sm tracking-[1.4px] ${
                isValid
                  ? "bg-[#ff5252] text-white"
                  : "cursor-not-allowed bg-[#ffe5e5] text-[#f99]"
              }`}
            >
              アカウント作成を完了
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
