"use client";

import Link from "next/link";
import AnimatedPage from "@/components/common/AnimatedPage";

export default function StartPage() {
  return (
    <AnimatedPage>
      <div className="flex min-h-screen flex-col items-center bg-gray-50 px-4 py-32">
        {/* TITLE */}
        <h1 className="mb-3 text-center text-2xl font-bold text-indigo-800">
          さあ、始めましょう！
        </h1>

        <p className="mb-8 text-center text-sm leading-relaxed text-gray-600">
          タレントパスポートインターンを始める準備ができました！
          <br />
          求人を見つけましょう！
        </p>

        <Link
          href="/mypage"
          className="mb-8 text-sm font-medium text-indigo-700 underline"
        >
          マイページへ
        </Link>

        {/* CONTENT BOX */}
        <div className="w-full max-w-[560px] rounded-xl border border-gray-300 bg-white px-6 py-10 shadow-sm">
          <h2 className="mb-6 pl-1 text-base font-semibold text-black">
            希望の条件から探す
          </h2>

          {/* 職種 */}
          <p className="mb-3 pl-1 text-sm font-semibold text-black">
            職種から探す
          </p>
          <CategoryRow items={["エンジニア職", "デザイナー職", "ビジネス職"]} />

          {/* 特徴 */}
          <p className="mb-3 pl-1 text-sm font-semibold text-black">
            特徴から探す
          </p>
          <CategoryRow
            items={["週3日以下でもOK", "フルリモート可", "1・2年生歓迎"]}
          />

          {/* エリア */}
          <p className="mb-3 pl-1 text-sm font-semibold text-black">
            エリアから
          </p>
          <CategoryRow items={["東京都全域", "関西", "その他"]} />
        </div>
      </div>
    </AnimatedPage>
  );
}

function CategoryRow({ items }: { items: string[] }) {
  return (
    <div className="mb-6 grid grid-cols-3 justify-items-center gap-4">
      {items.map((item) => (
        <TagButton key={item} label={item} />
      ))}
    </div>
  );
}

function TagButton({ label }: { label: string }) {
  return (
    <button className="flex h-[40px] w-[150px] items-center justify-center rounded-full border border-indigo-800 text-sm font-medium whitespace-nowrap text-indigo-800 transition hover:bg-indigo-50">
      {label}
    </button>
  );
}
