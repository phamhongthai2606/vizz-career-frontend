"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function EmailSentPage() {
  const searchParams = useSearchParams();
  const emailPrefill = searchParams.get("email") ?? "";

  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-[#f9fafb] px-4 pt-2.5">
      <div className="flex w-full max-w-[480px] flex-col items-center">
        <h1 className="mb-6 text-center text-base font-bold tracking-[0.04em] text-[#2d2d2d]">
          メールをを送信しました
        </h1>

        <p className="mb-6 self-stretch text-center text-sm leading-5 font-medium tracking-[0.1em] text-[#2d2d2d]">
          ご入力いただいたメールアドレス宛に、パスワード設定用のリンクをお送りしました。メール内のリンクをクリックして、アカウント作成を完了してください。
        </p>

        <div className="flex w-full flex-col">
          <div className="flex flex-col items-center gap-10 self-stretch rounded-t border border-[#b9b9b9] bg-white px-6 py-12">
            <div className="flex w-full flex-col gap-6">
              <div className="flex flex-col gap-5 self-stretch">
                <div className="flex flex-col gap-2 self-stretch">
                  <label className="text-sm font-bold tracking-[0.1em] text-[#2d2d2d]">
                    メールアドレス
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="placeholder:font-400 flex h-9 items-center gap-3 self-stretch rounded border-[0.5px] border-[#5c62a6] bg-[#e5e7f5] px-3 py-2 placeholder:text-[#2D2D2D]"
                    required
                    value={emailPrefill}
                    readOnly
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6 self-stretch">
              <p className="self-stretch text-center text-sm font-medium tracking-[0.1em] text-[#2d2d2d]">
                メールが届いてない場合
              </p>
              <Link
                href="/business/forgot-password"
                className="flex items-center gap-2 text-sm font-medium tracking-[0.1em] text-[#111958] underline decoration-solid underline-offset-auto"
              >
                メールを再送信
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 self-stretch rounded-b border-x border-b border-[#b9b9b9] bg-white px-6 py-10">
            <Link
              href="/business/business-login"
              className="flex items-center gap-2 text-sm font-medium tracking-[0.1em] text-[#111958] underline decoration-solid underline-offset-auto"
            >
              ログイン画面に戻る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
