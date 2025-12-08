"use client";

import { useState, useRef } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CreateBusinessPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    companySize: "",
    companyAttraction: "",
    internGraduates: "",
    representativeMessage: "",
    homepageUrl: "",
    companyAddress: "",
    employeeCount: "",
    establishmentYear: "",
    capital: "",
  });
  const router = useRouter();

  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);

  const logoInputRef = useRef<HTMLInputElement | null>(null);
  const coverInputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const openLogoPicker = () => logoInputRef.current?.click();
  const openCoverPicker = () => coverInputRef.current?.click();

  const onLogoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setLogoFile(file);
  };
  const onCoverSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setCoverFile(file);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb
        items={[{ label: "TOP", href: "/" }, { label: "会社管理" }]}
        itemClassName="tracking-[0.1em]"
      />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="mb-6 text-2xl font-bold">
          会社管理
        </h1>
      </div>

      <div className="mx-auto mb-[72px] flex w-full max-w-[1140px] flex-col items-start gap-10 px-4">
        <div className="flex w-full flex-col items-start gap-6 rounded-t border border-[#B9B9B9] bg-white p-10">
          <div className="flex w-full flex-col items-center gap-2">
            <div className="text-sm font-bold tracking-[0.04em] text-black">
              会社ロゴ
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-6">
              <div className="h-[120px] w-[120px] overflow-hidden rounded border border-[#111958] bg-white">
                {logoFile ? (
                  <img
                    src={URL.createObjectURL(logoFile)}
                    alt="Logo preview"
                    className="h-full w-full object-cover"
                  />
                ) : null}
              </div>
              <div className="flex items-start gap-3">
                <button type="button" onClick={openLogoPicker} className="flex items-center gap-2">
                  <Image
                    src="/business/upload.png"
                    alt="Upload Icon"
                    width={16}
                    height={16}
                    className="flex aspect-square h-4 w-4 items-center justify-center"
                  />
                  <span className="text-sm tracking-[0.04em] text-[#111958]">
                    画像をアップロード
                  </span>
                </button>
                <input
                  ref={logoInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/jpg"
                  className="hidden"
                  onChange={onLogoSelected}
                />
                <div className="text-xs tracking-[0.1em] text-[#5C5C5C]">
                  画像サイズは800*800です。jpg、png
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full items-start gap-6">
            <div className="flex items-center">
              <div className="w-40 text-sm font-bold tracking-[0.04em] text-[#2D2D2D]">
                会社名
              </div>
              <div className="flex items-center justify-center gap-3 rounded-full bg-[#EF4444] px-2 py-0.5">
                <div className="text-center text-xs font-normal tracking-[0.1em] text-white">
                  必須
                </div>
              </div>
            </div>
            <input
              type="text"
              name="homepageUrl"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="会社名を入力してください"
              className="flex h-9 flex-1 items-center gap-3 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 text-sm tracking-[0.1em] text-[#2D2D2D] placeholder:text-[#B9B9B9] focus:outline-none focus:ring-1 focus:ring-[#111958]"
            />
          </div>

          <div className="flex w-full items-start gap-6">
            <div className="flex items-center">
              <div className="w-40 text-sm font-bold tracking-[0.04em] text-[#2D2D2D]">
                カバー画像
              </div>
              <div className="flex items-center justify-center gap-3 rounded-full bg-[#EF4444] px-2 py-0.5">
                <div className="text-center text-xs font-normal tracking-[0.1em] text-white">
                  必須
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start gap-3">
              <div className="flex w-full items-start gap-6">
                <div className="flex h-[100px] flex-1 flex-col items-start gap-2.5 overflow-hidden rounded border border-[#111958] bg-white p-0">
                  {coverFile ? (
                    <img
                      src={URL.createObjectURL(coverFile)}
                      alt="Cover preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full p-6"></div>
                  )}
                </div>
              </div>
              <div className="flex w-full items-start gap-3">
                <button type="button" onClick={openCoverPicker} className="flex items-center gap-2">
                  <Image
                    src="/business/upload.png"
                    alt="Export Icon"
                    width={16}
                    height={16}
                    className="flex aspect-square h-4 w-4 items-center justify-center"
                  />
                  <span className="text-sm tracking-[0.04em] text-[#111958]">
                    画像をアップロード
                  </span>
                </button>
                <input
                  ref={coverInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/jpg"
                  className="hidden"
                  onChange={onCoverSelected}
                />
                <div className="text-xs tracking-[0.1em] text-[#5C5C5C]">
                  画像サイズは800*800です。jpg、png
                </div>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-[#B9B9B9]"></div>

          <div className="flex w-full items-start gap-6">
            <div className="flex items-center">
              <div className="w-40 text-sm font-bold tracking-[0.04em] text-[#2D2D2D]">
                業界
              </div>
              <div className="flex items-center justify-center gap-3 rounded-full bg-[#EF4444] px-2 py-0.5">
                <div className="text-center text-xs font-normal tracking-[0.1em] text-white">
                  必須
                </div>
              </div>
            </div>
            <div className="relative flex h-9 flex-1 items-center justify-between rounded border-[0.5px] border-[#111958] bg-white px-3">
              <select
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
                className={`w-full appearance-none bg-transparent text-sm tracking-[0.1em] ${formData.industry ? 'text-[#2D2D2D]' : 'text-[#B9B9B9]'} placeholder:text-[#B9B9B9] focus:outline-none`}
              >
                <option value="" disabled>
                  職種を選択してください
                </option>
                <option value="IT">IT・通信</option>
                <option value="製造">製造</option>
                <option value="サービス">サービス</option>
              </select>
              <Image
                src="/business/arrow_down.png"
                alt="Dropdown arrow"
                width={24}
                height={24}
                className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2"
              />
            </div>
          </div>

          <div className="flex w-full items-start gap-6">
            <div className="flex items-center">
              <div className="w-40 text-sm font-bold tracking-[0.04em] text-[#2D2D2D]">
                企業規模
              </div>
              <div className="flex items-center justify-center gap-3 rounded-full bg-[#EF4444] px-2 py-0.5">
                <div className="text-center text-xs font-normal tracking-[0.1em] text-white">
                  必須
                </div>
              </div>
            </div>
            <div className="relative flex h-9 flex-1 items-center justify-between rounded border-[0.5px] border-[#111958] bg-white px-3">
              <select
                name="companySize"
                value={formData.companySize}
                onChange={handleInputChange}
                className={`w-full appearance-none bg-transparent text-sm tracking-[0.1em] ${formData.companySize ? 'text-[#2D2D2D]' : 'text-[#B9B9B9]'} placeholder:text-[#B9B9B9] focus:outline-none`}
              >
                <option value="" disabled>
                  企業規模を選択してください
                </option>
                <option value="1-10">1-10人</option>
                <option value="11-50">11-50人</option>
                <option value="51-200">51-200人</option>
                <option value="201-500">201-500人</option>
                <option value="501+">501人以上</option>
              </select>
              <Image
                src="/business/arrow_down.png"
                alt="Dropdown arrow"
                width={24}
                height={24}
                className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2"
              />
            </div>
          </div>

          <div className="h-px w-full bg-[#B9B9B9]"></div>

          <div className="flex w-full items-start gap-6">
            <div className="flex items-center">
              <div className="w-40 text-sm font-bold tracking-[0.04em] text-[#2D2D2D]">
                企業の魅力・特徴
              </div>
              <div className="flex items-center justify-center gap-3 rounded-full bg-[#EF4444] px-2 py-0.5">
                <div className="text-center text-xs font-normal tracking-[0.1em] text-white">
                  必須
                </div>
              </div>
            </div>
            <textarea
              name="companyAttraction"
              value={formData.companyAttraction}
              onChange={handleInputChange}
              placeholder="企業の魅力・特徴を自由形式で記入してください"
              rows={3}
              className="flex flex-1 items-start gap-3 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 text-sm tracking-[0.1em] text-[#2D2D2D] placeholder:text-[#B9B9B9] focus:outline-none focus:ring-1 focus:ring-[#111958] resize-none"
            />
          </div>

          <div className="flex w-full items-start gap-6">
            <div className="flex items-center">
              <div className="w-40 text-sm font-bold tracking-[0.04em] text-[#2D2D2D] leading-normal">
                インターン卒業生の
                <br />
                主な就職先
              </div>
              <div className="flex items-center justify-center gap-3 rounded-full bg-[#EF4444] px-2 py-0.5">
                <div className="text-center text-xs font-normal tracking-[0.1em] text-white">
                  必須
                </div>
              </div>
            </div>
            <textarea
              name="internGraduates"
              value={formData.internGraduates}
              onChange={handleInputChange}
              placeholder="インターン卒業生の主な就職先を自由形式で記入してください"
              rows={3}
              className="flex flex-1 items-start gap-3 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 text-sm tracking-[0.1em] text-[#2D2D2D] placeholder:text-[#B9B9B9] focus:outline-none focus:ring-1 focus:ring-[#111958] resize-none"
            />
          </div>

          <div className="flex w-full items-start gap-6">
            <div className="flex items-center">
              <div className="w-40 text-sm font-bold tracking-[0.04em] text-[#2D2D2D]">
                代表メッセージ
              </div>
              <div className="flex items-center justify-center gap-3 rounded-full bg-[#EF4444] px-2 py-0.5">
                <div className="text-center text-xs font-normal tracking-[0.1em] text-white">
                  必須
                </div>
              </div>
            </div>
            <textarea
              name="representativeMessage"
              value={formData.representativeMessage}
              onChange={handleInputChange}
              placeholder="代表メッセージを自由形式で記入してください"
              rows={3}
              className="flex flex-1 items-start gap-3 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 text-sm tracking-[0.1em] text-[#2D2D2D] placeholder:text-[#B9B9B9] focus:outline-none focus:ring-1 focus:ring-[#111958] resize-none"
            />
          </div>

          <div className="h-px w-full bg-[#B9B9B9]"></div>

          <div className="flex w-full items-start gap-6">
            <div className="flex items-center">
              <div className="w-40 text-sm font-bold tracking-[0.04em] text-[#2D2D2D]">
                ホームページURL
              </div>
              <div className="flex items-center justify-center gap-3 rounded-full bg-[#EF4444] px-2 py-0.5">
                <div className="text-center text-xs font-normal tracking-[0.1em] text-white">
                  必須
                </div>
              </div>
            </div>
            <input
              type="text"
              name="homepageUrl"
              value={formData.homepageUrl}
              onChange={handleInputChange}
              placeholder="ホームページURLを入力してください"
              className="flex h-9 flex-1 items-center gap-3 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 text-sm tracking-[0.1em] text-[#2D2D2D] placeholder:text-[#B9B9B9] focus:outline-none focus:ring-1 focus:ring-[#111958]"
            />
          </div>

          <div className="flex w-full items-start gap-6">
            <div className="flex items-center">
              <div className="w-40 text-sm font-bold tracking-[0.04em] text-[#2D2D2D]">
                会社住所
              </div>
              <div className="flex items-center justify-center gap-3 rounded-full bg-[#EF4444] px-2 py-0.5">
                <div className="text-center text-xs font-normal tracking-[0.1em] text-white">
                  必須
                </div>
              </div>
            </div>
            <input
              type="text"
              name="companyAddress"
              value={formData.companyAddress}
              onChange={handleInputChange}
              placeholder="会社住所を入力してください"
              className="flex h-9 flex-1 items-center gap-3 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 text-sm tracking-[0.1em] text-[#2D2D2D] placeholder:text-[#B9B9B9] focus:outline-none focus:ring-1 focus:ring-[#111958]"
            />
          </div>

          <div className="flex w-full items-start gap-6">
            <div className="flex items-center">
              <div className="w-40 text-sm font-bold tracking-[0.04em] text-[#2D2D2D]">
                社員数
              </div>
              <div className="flex items-center justify-center gap-3 rounded-full bg-[#EF4444] px-2 py-0.5">
                <div className="text-center text-xs font-normal tracking-[0.1em] text-white">
                  必須
                </div>
              </div>
            </div>
            <div className="flex w-40 items-center gap-3">
              <input
                type="text"
                name="employeeCount"
                value={formData.employeeCount}
                onChange={handleInputChange}
                placeholder="半額数字"
                className="flex h-9 flex-1 items-center gap-3 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 text-sm tracking-[0.1em] text-[#2D2D2D] placeholder:text-[#B9B9B9] focus:outline-none focus:ring-1 focus:ring-[#111958]"
              />
              <div className="text-sm tracking-[0.04em] text-[#2D2D2D]">人</div>
            </div>
          </div>

          <div className="flex w-full items-start gap-6">
            <div className="flex items-center">
              <div className="w-40 text-sm font-bold tracking-[0.04em] text-[#2D2D2D]">
                設立年
              </div>
              <div className="flex items-center justify-center gap-3 rounded-full bg-[#EF4444] px-2 py-0.5">
                <div className="text-center text-xs font-normal tracking-[0.1em] text-white">
                  必須
                </div>
              </div>
            </div>
            <div className="relative flex h-9 w-80 items-center justify-between rounded border-[0.5px] border-[#111958] bg-white px-3">
              <select
                name="establishmentYear"
                value={formData.establishmentYear}
                onChange={handleInputChange}
                className={`w-full appearance-none bg-transparent text-sm tracking-[0.1em] ${formData.establishmentYear ? 'text-[#2D2D2D]' : 'text-[#B9B9B9]'} placeholder:text-[#B9B9B9] focus:outline-none`}
              >
                <option value="" disabled>
                  設立年を選択してください
                </option>
                {Array.from({ length: 100 }, (_, i) => 2024 - i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <Image
                src="/business/arrow_down.png"
                alt="Dropdown arrow"
                width={24}
                height={24}
                className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2"
              />
            </div>
          </div>

          <div className="flex w-full items-start gap-6">
            <div className="flex items-center">
              <div className="w-40 text-sm font-bold tracking-[0.04em] text-[#2D2D2D]">
                資本金
              </div>
              <div className="flex items-center justify-center gap-3 rounded-full bg-[#EF4444] px-2 py-0.5">
                <div className="text-center text-xs font-normal tracking-[0.1em] text-white">
                  必須
                </div>
              </div>
            </div>
            <div className="flex w-40 items-center gap-3">
              <input
                type="text"
                name="capital"
                value={formData.capital}
                onChange={handleInputChange}
                placeholder="半額数字"
                className="flex h-9 flex-1 items-center gap-3 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 text-sm tracking-[0.1em] text-[#2D2D2D] placeholder:text-[#B9B9B9] focus:outline-none focus:ring-1 focus:ring-[#111958]"
              />
              <div className="text-sm tracking-[0.04em] text-[#2D2D2D]">円</div>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky right-0 bottom-0 left-0 z-50 border-t border-[#D0D0D0] bg-white shadow-lg">
        <div className="flex items-center justify-center py-4">
          <button
            className="h-10 w-60 rounded-full bg-[#111958] px-4 text-sm tracking-wider text-white"
            onClick={() => router.push("/business/business-information")}
          >
            保存する
          </button>
        </div>
      </div>
    </div>
  );
}
