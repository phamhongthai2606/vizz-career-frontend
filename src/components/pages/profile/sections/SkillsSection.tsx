"use client";

export default function SkillsSection() {
  return (
    <section className="flex flex-col items-start gap-6 rounded border border-[#B9B9B9] bg-white p-10">
      <h2 className="text-base font-bold tracking-[0.64px] text-[#2D2D2D]">
        スキル・経験
      </h2>

      <div className="flex w-[424px] flex-col gap-2">
        <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
          プログラミング言語
        </label>
        <button className="flex items-center gap-2 text-sm tracking-[0.56px] text-[#111958]">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
            <circle cx="12" cy="12" r="12" fill="#0A0F49" />
          </svg>
          <span>プログラミング言語を追加する</span>
        </button>
      </div>

      <div className="flex w-[424px] flex-col gap-2">
        <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
          フレームワーク・ライブラリ
        </label>
        <button className="flex items-center gap-2 text-sm tracking-[0.56px] text-[#111958]">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
            <circle cx="12" cy="12" r="12" fill="#0A0F49" />
          </svg>
          <span>フレームワーク・ライブラリを追加する</span>
        </button>
      </div>

      <div className="flex w-[424px] flex-col gap-2">
        <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
          インフラ・クラウド
        </label>
        <button className="flex items-center gap-2 text-sm tracking-[0.56px] text-[#111958]">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
            <circle cx="12" cy="12" r="12" fill="#0A0F49" />
          </svg>
          <span>インフラ・クラウドを追加する</span>
        </button>
      </div>

      <div className="flex w-[424px] flex-col gap-2">
        <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
          デザインツール
        </label>
        <button className="flex items-center gap-2 text-sm tracking-[0.56px] text-[#111958]">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
            <circle cx="12" cy="12" r="12" fill="#0A0F49" />
          </svg>
          <span>デザインツールを追加する</span>
        </button>
      </div>

      <div className="h-px w-[600px] bg-[#B9B9B9]"></div>

      <div className="flex w-[200px] flex-col gap-2">
        <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
          語学力（英語）
        </label>
        <div className="relative">
          <select className="h-9 w-full appearance-none rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 pr-10 text-sm tracking-[1.4px] text-[#B9B9B9]">
            <option value="">選択したください</option>
          </select>
          <svg
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 stroke-gray-500"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>

      <div className="flex w-[424px] flex-col gap-2">
        <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
          その他語学力
        </label>
        <input
          type="text"
          placeholder="〇〇語ビジネスレベル、〇〇語日常会話レベル"
          className="h-9 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 text-sm tracking-[1.4px] text-[#B9B9B9] placeholder:text-[#B9B9B9]"
        />
      </div>

      <div className="h-px w-[600px] bg-[#B9B9B9]"></div>

      <div className="flex w-[424px] flex-col gap-2">
        <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
          保有資格・検定
        </label>
        <input
          type="text"
          placeholder="入力してください"
          className="h-9 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 text-sm tracking-[1.4px] text-[#B9B9B9] placeholder:text-[#B9B9B9]"
        />
      </div>

      <div className="h-px w-[600px] bg-[#B9B9B9]"></div>

      <div className="flex w-[200px] flex-col gap-2">
        <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
          インターン経験
        </label>
        <div className="relative">
          <select className="h-9 w-full appearance-none rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 pr-10 text-sm tracking-[1.4px] text-[#B9B9B9]">
            <option value="">選択したください</option>
          </select>
          <svg
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 stroke-gray-500"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>

      <div className="flex w-full flex-col gap-2">
        <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
          インターン経験詳細
        </label>
        <input
          type="text"
          placeholder="インターン経験を自由形式で記入してください"
          className="h-9 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 text-sm tracking-[1.4px] text-[#B9B9B9] placeholder:text-[#B9B9B9]"
        />
      </div>

      <div className="flex w-full flex-col gap-2">
        <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
          アルバイト経験
        </label>
        <input
          type="text"
          placeholder="アルバイト経験を自由形式で記入してください"
          className="h-9 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 text-sm tracking-[1.4px] text-[#B9B9B9] placeholder:text-[#B9B9B9]"
        />
      </div>
    </section>
  );
}
