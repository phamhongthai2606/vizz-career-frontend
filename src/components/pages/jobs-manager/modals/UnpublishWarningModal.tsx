"use client";

import Image from "next/image";

interface UnpublishWarningModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function UnpublishWarningModal({ open, onClose, onConfirm }: UnpublishWarningModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[rgba(0,0,0,0.40)]">
      <div className="w-[600px] rounded-[8px] bg-white px-[48px] pt-[32px] pb-[36px] shadow-[0_4px_24px_rgba(0,0,0,0.18)]">

        {/* header with icon */}
        <div className="flex items-center gap-3 mb-[18px]">
          <Image
            src="/bussiness/jobs-manager/WarningIcon.svg"
            alt="warning"
            width={22}
            height={22}
            className="object-contain"
          />
          <h2 className="text-[20px] font-bold text-[#1A1A1A] leading-[26px]">
            求人を非公開する
          </h2>
        </div>

        {/* description */}
        <p className="text-[14px] text-[#4B5563] leading-[22px] mb-[38px]">
          求人を公開停止にします。<br/>
          公開停止後には学生に求人が表示できなくなります。
        </p>

        <div className="flex justify-center gap-[24px]">
          <button
            onClick={onClose}
            className="w-[160px] h-[42px] rounded-[30px] bg-[#6B6B6B] text-white text-[14px] font-semibold hover:opacity-90"
          >
            キャンセル
          </button>

          <button
            onClick={onConfirm}
            className="w-[160px] h-[42px] rounded-[30px] bg-[#E73D33] text-white text-[14px] font-semibold hover:opacity-90"
          >
            公開停止する
          </button>
        </div>
      </div>
    </div>
  );
}
