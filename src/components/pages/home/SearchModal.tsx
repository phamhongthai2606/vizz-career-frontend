"use client";

import Modal from "@/components/common/Modal";
import { useState } from "react";

type SearchModalProps = {
  open: boolean;
  onClose: () => void;
};

const OPTIONS = [
  "エンジニア",
  "デザイナー",
  "営業",
  "企画",
  "マーケティング",
  "編集・ライター",
  "その他",
];

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (value: string) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const confirm = () => {
    console.log("Selected options:", selected);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={<span id="search-modal-home">職種・業界を選択</span>}
      ariaLabelledBy="search-modal-home"
      footer={
        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer text-sm text-gray-600"
          >
            キャンセル
          </button>
          <button
            type="button"
            onClick={confirm}
            className="flex h-[36px] w-[120px] cursor-pointer items-center justify-center rounded-full bg-[#111958] text-white"
          >
            確定する
          </button>
        </div>
      }
      size="lg"
    >
      <div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-6">
          {OPTIONS.map((opt) => (
            <label key={opt} className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={selected.includes(opt)}
                onChange={() => toggle(opt)}
                className="h-5 w-5 border border-[#111958] accent-[#111958]"
              />
              <span className="text-sm text-gray-800">{opt}</span>
            </label>
          ))}
        </div>
      </div>
    </Modal>
  );
}
