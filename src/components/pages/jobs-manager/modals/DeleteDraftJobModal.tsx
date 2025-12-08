"use client";

import Image from "next/image";

interface DeleteDraftJobModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteDraftJobModal({ open, onClose, onConfirm }: DeleteDraftJobModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[rgba(0,0,0,0.40)]">
      <div className="w-[600px] rounded-[10px] bg-white px-[48px] pt-[30px] pb-[34px] shadow-[0_4px_24px_rgba(0,0,0,0.18)]">

        <div className="flex items-center gap-3 mb-[18px]">
          <Image
            src="/bussiness/jobs-manager/DeleteIcon.svg"
            alt="delete warning"
            width={22}
            height={22}
          />
          <h2 className="text-[20px] font-bold text-[#1A1A1A] leading-[26px]">
            下書き求人を削除する
          </h2>
        </div>

        <p className="text-[14px] text-[#4B5563] leading-[22px] mb-[35px]">
          この下書き求人を削除すると、復元できません。<br/>
          削除してもよろしいですか？
        </p>

        <div className="flex justify-center gap-[24px]">
          <button
            onClick={onClose}
            className="w-[160px] h-[42px] rounded-[30px] bg-[#6B6B6B] text-white text-[14px] font-semibold hover:opacity-90 transition"
          >
            キャンセル
          </button>

          <button
            onClick={onConfirm}
            className="w-[160px] h-[42px] rounded-[30px] bg-[#E73D33] text-white text-[14px] font-semibold hover:opacity-90 transition"
          >
            削除する
          </button>
        </div>

      </div>
    </div>
  );
}
