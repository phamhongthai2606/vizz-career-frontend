"use client";

import Link from "next/link";

export default function AccountCreatedPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-[#f9fafb] px-4 pt-2.5">
      <div className="flex w-full max-w-[480px] flex-col items-start gap-20">
        <div className="flex flex-col items-center gap-20 self-stretch">
          <div className="flex flex-col items-center gap-6 self-stretch">
            <h1 className="text-center text-base font-bold tracking-[0.04em] text-[#2d2d2d]">
              アカウント作成が完了しました！
            </h1>

            <p className="self-stretch text-center text-sm font-medium tracking-[0.1em] text-[#2d2d2d]">
              パスワードの設定が完了し、アカウントが作成されました。
              <br />
              ログインをして、プロフィール登録を始めましょう！
            </p>
          </div>

          <Link
            href="/registration"
            className="flex h-10 w-60 items-center justify-center gap-3 rounded-[34px] bg-[#ff5252] px-4 py-2 text-center text-sm font-normal tracking-[0.1em] text-white capitalize transition-opacity"
          >
            プロフィール登録へ
          </Link>
        </div>
      </div>
    </div>
  );
}
