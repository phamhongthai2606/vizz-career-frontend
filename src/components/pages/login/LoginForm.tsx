"use client";
import Link from "next/link";
import Image from "next/image";
import Header from '../../Header';

export default function LoginPage() {
  return (
    <div className="bg-[#f9fafb]">
      <Header />

      <div className="fixed top-4 right-4 md:top-6 md:right-8 max-w-[340px] md:max-w-sm z-50">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-3 md:p-4">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium text-white bg-line rounded bg-blue-400">
                質問
              </span>
                <div className="ml-auto">
                  <div className="w-5 h-5 rounded-full bg-line flex items-center justify-center">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-sm font-medium text-gray-900 mb-2">
                ラインでログインできる？
              </p>
              <div className="flex items-center gap-2">
                <div className="relative h-6 w-6">
                  <Image
                    src="/diverse-user-avatars.png"
                    alt="Heri, Maya"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                </div>
                <span className="text-xs text-gray-500">
                  Heri, Maya
                </span>
                <span className="text-xs text-gray-400">
                  2025-11-15 21:17:00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-[480px]">
          <h1 className="text-center text-base font-normal text-gray-900 mb-8">
            ログイン
          </h1>

          <div className="bg-white shadow-sm border border-gray-200 p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-xl font-normal tracking-wide text-gray-900">
                coco career
              </h2>
            </div>
            <button className="bg-[#06C755] hover:bg-[#05b34c] text-white font-medium py-3 px-6 rounded-md flex items-center justify-center gap-2 transition-colors h-[36px] w-[240px] text-sm mx-auto">
              <img src="/line.png" alt="Line Logo"/>
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
      </main>



    </div>
  );
}