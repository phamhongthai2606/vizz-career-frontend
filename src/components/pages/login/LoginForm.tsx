"use client";

import Link from "next/link";
import Header from '../../Header';

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-[#f9fafb]">
      <Header />

      <div className="fixed top-4 right-4 md:top-6 md:right-8 max-w-[340px] md:max-w-sm z-50">
        <img src="/comment.png" alt=""/>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12 pl-[170px]">
      <div className="w-full max-w-[480px]">
          <h1 className="text-center text-base font-bold text-gray-900 mb-8">
            ログイン
          </h1>

          <div className="bg-white shadow-sm border border-gray-200 p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-xl font-normal tracking-wide text-gray-900">
                coco career
              </h2>
            </div>
            <button
              className="bg-[#06C755] text-white h-[36px] w-[240px]
             rounded-full flex items-center justify-center gap-2
             transition-colors px-4 mx-auto text-[14px] font-bold"
            >
              <img
                src="/line.png"
                alt="Line Logo"
                className="w-5 h-5"
              />
              LINEで登録・ログイン
            </button>

          </div>
          <div className="mt-8 text-center">
            <Link
              href=""
              className="text-sm text-[#111958] inline-flex items-center gap-1 transition-colors"
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