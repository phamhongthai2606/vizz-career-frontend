"use client";

export default function BasicInfoSection() {
  return (
    <section className="flex flex-col items-start gap-6 rounded border border-[#B9B9B9] bg-white p-10">
      <h2 className="text-base font-bold tracking-[0.64px] text-[#2D2D2D]">
        基本情報
      </h2>

      <div className="flex flex-col items-start gap-6 rounded bg-[#E5E7F5] p-6 w-[600px]">
        <div className="flex w-[424px] flex-col gap-2">
          <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
            プロフィール画像
          </label>
          <div className="flex items-center gap-6">
            <div className="h-[120px] w-[120px] rounded border border-[#111958] bg-white"></div>
            <button className="flex items-center gap-2 text-sm tracking-[0.56px] text-[#111958]">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                <circle cx="12" cy="12" r="12" fill="#0A0F49" />
              </svg>
              <span>画像をアップロード</span>
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="flex w-[200px] flex-col gap-2">
            <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
              氏名（姓）
            </label>
            <input
              type="text"
              placeholder="山田"
              className="h-9 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 text-sm tracking-[1.4px] text-[#2D2D2D] placeholder:font-400 placeholder:text-[#2D2D2D]"
            />
          </div>

          <div className="flex w-[200px] flex-col gap-2">
            <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
              氏名（名）
            </label>
            <input
              type="text"
              placeholder="太郎"
              className="h-9 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 text-sm tracking-[1.4px] text-[#2D2D2D] placeholder:font-400 placeholder:text-[#2D2D2D]"
            />
          </div>
        </div>

        <div className="flex gap-6">
          <div className="flex w-[200px] flex-col gap-2">
            <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
              氏名（セイ）
            </label>
            <input
              type="text"
              placeholder="ヤマダ"
              className="h-9 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 text-sm tracking-[1.4px] text-[#2D2D2D] placeholder:font-400 placeholder:text-[#2D2D2D]"
            />
          </div>
          <div className="flex w-[200px] flex-col gap-2">
            <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
              氏名（メイ）
            </label>
            <input
              type="text"
              placeholder="タロウ"
              className="h-9 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 text-sm tracking-[1.4px] text-[#2D2D2D] placeholder:font-400 placeholder:text-[#2D2D2D]"
            />
          </div>
        </div>

        <div className="flex w-[424px] gap-6">
          <div className="flex flex-1 flex-col gap-2">
            <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
              生年月日
            </label>
            <input
              type="text"
              placeholder="1999/01/01"
              className="h-9 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 text-sm tracking-[1.4px] text-[#B9B9B9] placeholder:text-[#B9B9B9]"
            />
          </div>
        </div>

        <div className="flex w-[200px] gap-6">
          <div className="flex flex-1 flex-col gap-2">
            <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
              性別
            </label>
            <div className="flex justify-between">
              {/* 男性 */}
              <label className="flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="peer hidden"
                />
                <div className="h-5 w-5 rounded-full border border-[#111958] bg-white peer-checked:bg-[#111958]"></div>
                <span className="text-sm tracking-[0.56px] text-[#2D2D2D]">男性</span>
              </label>

              {/* 女性 */}
              <label className="flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="peer hidden"
                />
                <div className="h-5 w-5 rounded-full border border-[#111958] bg-white peer-checked:bg-[#111958]"></div>
                <span className="text-sm tracking-[0.56px] text-[#2D2D2D]">女性</span>
              </label>

              {/* 無回答 */}
              <label className="flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="none"
                  className="peer hidden"
                />
                <div className="h-5 w-5 rounded-full border border-[#111958] bg-white peer-checked:bg-[#111958]"></div>
                <span className="text-sm tracking-[0.56px] text-[#2D2D2D]">無回答</span>
              </label>
            </div>

          </div>
        </div>

        <div className="flex w-[424px] gap-6">
          <div className="flex flex-1 flex-col gap-2">
            <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
              電話番号
            </label>
            <input
              type="text"
              placeholder="半額数字（ハイフンなし）"
              className="h-9 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 text-sm tracking-[1.4px] text-[#B9B9B9] placeholder:text-[#B9B9B9]"
            />
          </div>
        </div>

        <div className="flex w-full gap-6">
          <div className="flex w-[200px] gap-6">
            <div className="flex flex-1 flex-col gap-2">
              <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
                都道府県
              </label>

              <div className="relative">
                <select className="h-9 w-full appearance-none rounded border-[0.5px] border-[#111958] bg-white px-3 pr-10 text-sm tracking-[1.4px] text-[#B9B9B9]">
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
          </div>

          <div className="flex flex-1 gap-6">
            <div className="flex flex-1 flex-col gap-2">
              <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
                住所
              </label>
              <input
                type="text"
                placeholder="町、マンション"
                className="h-9 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 text-sm tracking-[1.4px] text-[#B9B9B9] placeholder:text-[#B9B9B9]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}