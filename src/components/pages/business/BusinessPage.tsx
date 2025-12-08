"use client";

import Breadcrumb from "@/components/common/Breadcrumb";
import Image from "next/image";

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <Breadcrumb
        items={[{ label: "TOP", href: "/" }, { label: "会社管理" }]}
        itemClassName="tracking-[0.1em]"
      />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="mb-6 text-2xl font-bold">会社管理</h1>
      </div>

      <div className="flex flex-1 items-center justify-center px-6 py-16 sm:py-20 md:py-24">
        <div className="w-full max-w-2xl space-y-8">
          <div className="flex flex-col items-center justify-center gap-6 rounded-lg py-12 text-center">
            <p className="text-base tracking-[0.14em] text-black sm:text-lg">
              会社の情報がまだ記載されていません。
            </p>
            <button
              type="button"
              onClick={() =>
                (window.location.href = "/business/create-business")
              }
              className="bg-red-primary font-hiragino inline-flex h-[40px] w-[240px] items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-normal tracking-[0.14em] whitespace-nowrap text-white transition-all duration-300 sm:px-10 sm:py-3.5 sm:text-base"
            >
              <Image
                src="/business/edit.png"
                alt="Export Icon"
                width={16}
                height={16}
                className="h-4 w-4 brightness-0 invert filter sm:h-5 sm:w-5"
              />
              <span>会社情報を作成する</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
