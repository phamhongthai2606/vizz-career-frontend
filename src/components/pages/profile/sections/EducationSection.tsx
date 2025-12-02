"use client";

export default function EducationSection() {
  return (
    <section className="flex flex-col items-start gap-6 rounded border border-[#B9B9B9] bg-white p-10">
      <h2 className="text-base font-bold tracking-[0.64px] text-[#2D2D2D]">
        学歴情報
      </h2>

      <div className="flex gap-6">
        <div className="flex w-[200px] flex-col gap-2">
          <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
            学校名
          </label>
          <input
            type="text"
            placeholder="〇〇大学"
            className="h-9 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 text-sm tracking-[1.4px] text-[#B9B9B9] placeholder:text-[#B9B9B9]"
          />
        </div>
        <div className="flex gap-6">
          <div className="flex w-[200px] flex-col gap-2">
            <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
              学校種別
            </label>
            <div className="relative">
              <select className="h-9 w-full appearance-none rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 pr-10 text-sm tracking-[1.4px] text-[#B9B9B9]">
                <option value="">選択したください</option>
              </select>
              <svg
                className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 stroke-gray-500"
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
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex w-[200px] flex-col gap-2">
          <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
            学部・学科
          </label>
          <input
            type="text"
            placeholder="〇〇学部"
            className="h-9 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 text-sm tracking-[1.4px] text-[#B9B9B9] placeholder:text-[#B9B9B9]"
          />
        </div>
        <div className="flex gap-6">
          <div className="flex w-[200px] flex-col gap-2">
            <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
              学年
            </label>
            <div className="relative">
              <select className="h-9 w-full appearance-none rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 pr-10 text-sm tracking-[1.4px] text-[#B9B9B9]">
                <option value="">選択したください</option>
              </select>
              <svg
                className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 stroke-gray-500"
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
        </div>
      </div>
    </section>
  );
}
