"use client";

import Image from "next/image";

interface PublishSettingModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function PublishSettingModal({
  open,
  onClose,
  onConfirm,
}: PublishSettingModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[rgba(0,0,0,0.40)]">
      <div className="w-[600px] rounded-[8px] bg-white px-[48px] pt-[32px] pb-[36px] shadow-[0_4px_24px_rgba(0,0,0,0.18)]">
        {/* Header row with image icon */}
        <div className="mb-[18px] flex items-center gap-3">
          <Image
            src="/business/jobs-manager/InfoIcon.svg"
            alt="info"
            width={22}
            height={22}
            className="object-contain"
          />

          <h2 className="text-[20px] leading-[26px] font-bold text-[#1A1A1A]">
            求人を公開する
          </h2>
        </div>

        <p className="mb-[38px] text-[14px] leading-[22px] text-[#4B5563]">
          公開した内容は変更することができません。
          <br />
          内容をご確認のうえ、「公開する」を押してください。
        </p>

        <div className="flex justify-center gap-[24px]">
          <button
            onClick={onClose}
            className="h-[42px] w-[160px] rounded-[30px] bg-[#6B6B6B] text-[14px] font-semibold text-white transition hover:opacity-90"
          >
            キャンセル
          </button>

          <button
            onClick={onConfirm}
            className="h-[42px] w-[160px] rounded-[30px] bg-[#E73D33] text-[14px] font-semibold text-white transition hover:opacity-90"
          >
            公開する
          </button>
        </div>
      </div>
    </div>
  );
}
