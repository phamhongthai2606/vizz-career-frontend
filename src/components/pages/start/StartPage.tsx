"use client";

import Link from "next/link";
import AnimatedPage from "@/components/common/AnimatedPage";

export default function StartPage() {
  return (
    <AnimatedPage>
      <div className="flex min-h-screen flex-col items-center bg-gray-50 px-4 py-32">

        {/* TITLE */}
        <h1 className="text-2xl font-bold text-indigo-800 mb-3 text-center">
          さあ、始めましょう！
        </h1>

        <p className="text-sm text-gray-600 text-center mb-8 leading-relaxed">
          タレントパスポートインターンを始める準備ができました！
          <br />
          求人を見つけましょう！
        </p>

        <Link
          href="/mypage"
          className="mb-8 text-indigo-700 underline text-sm font-medium"
        >
          マイページへ
        </Link>

        {/* CONTENT BOX */}
        <div className="w-full max-w-[560px] bg-white rounded-xl shadow-sm border border-gray-300 px-6 py-10">

          <h2 className="text-base font-semibold mb-6 text-black pl-1">
            希望の条件から探す
          </h2>

          {/* 職種 */}
          <p className="text-sm font-semibold mb-3 pl-1 text-black">
            職種から探す
          </p>
          <CategoryRow
            items={["エンジニア職", "デザイナー職", "ビジネス職"]}
          />

          {/* 特徴 */}
          <p className="text-sm font-semibold mb-3 pl-1 text-black">
            特徴から探す
          </p>
          <CategoryRow
            items={["週3日以下でもOK", "フルリモート可", "1・2年生歓迎"]}
          />

          {/* エリア */}
          <p className="text-sm font-semibold mb-3 pl-1 text-black">
            エリアから
          </p>
          <CategoryRow
            items={["東京都全域", "関西", "その他"]}
          />
        </div>
      </div>
    </AnimatedPage>
  );
}

function CategoryRow({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6 justify-items-center">
      {items.map((item) => (
        <TagButton key={item} label={item} />
      ))}
    </div>
  );
}

function TagButton({ label }: { label: string }) {
  return (
    <button
      className="
        w-[150px] h-[40px]
        flex items-center justify-center
        rounded-full border border-indigo-800
        text-sm font-medium text-indigo-800
        hover:bg-indigo-50 transition
        whitespace-nowrap
      "
    >
      {label}
    </button>
  );
}
