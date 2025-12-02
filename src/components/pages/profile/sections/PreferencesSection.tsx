"use client";

export default function PreferencesSection() {
  return (
    <section className="flex flex-col items-start gap-6 rounded border border-[#B9B9B9] bg-white p-10">
      <h2 className="text-base font-bold tracking-[0.64px] text-[#2D2D2D]">
        希望条件
      </h2>

      <div className="flex w-[424px] flex-col gap-2">
        <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
          希望業界
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
        <button className="flex items-center gap-2 text-sm tracking-[0.56px] text-[#111958]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
          >
            <circle cx="12" cy="12" r="12" fill="#0A0F49" />
          </svg>
          <span>希望業界を追加する</span>
        </button>
      </div>

      <div className="flex w-[424px] flex-col gap-2">
        <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
          希望職種
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
        <button className="flex items-center gap-2 text-sm tracking-[0.56px] text-[#111958]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
          >
            <circle cx="12" cy="12" r="12" fill="#0A0F49" />
          </svg>
          <span>希望職種を追加する</span>
        </button>
      </div>

      <div className="flex w-[424px] flex-col gap-2">
        <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
          希望勤務地
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
        <button className="flex items-center gap-2 text-sm tracking-[0.56px] text-[#111958]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
          >
            <circle cx="12" cy="12" r="12" fill="#0A0F49" />
          </svg>
          <span>希望勤務地を追加する</span>
        </button>
      </div>

      <div className="flex w-[200px] flex-col gap-2">
        <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
          希望勤務日数
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
        <button className="flex items-center gap-2 text-sm tracking-[0.56px] text-[#111958]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
          >
            <circle cx="12" cy="12" r="12" fill="#0A0F49" />
          </svg>
          <span>希望勤務日数を追加する</span>
        </button>
      </div>
    </section>
  );
}
