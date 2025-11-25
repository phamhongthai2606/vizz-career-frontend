"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-[#f9fafb]">
      <div className="fixed top-4 right-4 z-50 max-w-[340px] md:top-6 md:right-8 md:max-w-sm">
        <img src="/comment.png" alt="" />
      </div>

      <div className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-[480px]">
          <h1 className="mb-8 text-center text-base font-bold text-gray-900">
            ログイン
          </h1>

          <div className="border border-gray-200 bg-white p-8 shadow-sm md:p-12">
            <div className="mb-8 text-center">
              <h2 className="text-xl font-normal tracking-wide text-gray-900">
                coco career
              </h2>
            </div>
            <button className="mx-auto flex h-[36px] w-[240px] items-center justify-center gap-2 rounded-full bg-[#06C755] px-4 text-[14px] font-bold text-white transition-colors">
              <img src="/line.png" alt="Line Logo" className="h-5 w-5" />
              LINEで登録・ログイン
            </button>
          </div>
          <div className="mt-8 text-center">
            <Link
              href=""
              className="inline-flex items-center gap-1 text-sm text-[#111958] transition-colors"
            >
              企業担当者はこちら
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 2L8 6L4 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
