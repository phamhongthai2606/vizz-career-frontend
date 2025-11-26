"use client";

export default function PortfolioSection() {
  return (
    <section className="flex flex-col items-start gap-6 rounded border border-[#B9B9B9] bg-white p-10">
      <h2 className="text-base font-bold tracking-[0.64px] text-[#2D2D2D]">
        ポートフォリオ
      </h2>

      <div className="flex w-full flex-col gap-2">
        <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
          GitHub URL
        </label>
        <input
          type="text"
          placeholder="GitHub URLを入力してください"
          className="h-9 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 text-sm tracking-[1.4px] text-[#B9B9B9] placeholder:text-[#B9B9B9]"
        />
      </div>

      <div className="flex w-full flex-col gap-2">
        <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
          ポートフォリオサイトURL
        </label>
        <input
          type="text"
          placeholder="ポートフォリオサイトURLを入力してください"
          className="h-9 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 text-sm tracking-[1.4px] text-[#B9B9B9] placeholder:text-[#B9B9B9]"
        />
      </div>

      <div className="flex w-[424px] flex-col gap-2">
        <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
          作品ファイル
        </label>
        <button className="flex items-center gap-2 text-sm tracking-[0.56px] text-[#111958]">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
            <circle cx="12" cy="12" r="12" fill="#0A0F49" />
          </svg>
          <span>作品ファイルをアップロードする</span>
        </button>
      </div>
    </section>
  );
}