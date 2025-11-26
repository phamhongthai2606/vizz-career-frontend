"use client";

import React, { useState, FocusEvent } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import { ja } from "date-fns/locale";

// Convert full-width to half-width (safe, ESLint-friendly)
const toHalfWidth = (str?: string | null): string => {
  if (!str) return "";
  return str
    // Full-width ASCII range: U+FF01 - U+FF5E
    .replace(/[\uFF01-\uFF5E]/g, (c) =>
      String.fromCharCode(c.charCodeAt(0) - 0xFEE0)
    )
    // Full-width space: U+3000
    .replace(/\u3000/g, " ");
};

// Normalize + validate when user finishes typing
const normalizeOnBlur = (
  rawInput: string,
  setBirthDate: (d: Date | null) => void,
  setInputValue: (v: string) => void,
  setError: (v: string) => void
) => {
  const raw = toHalfWidth(rawInput).trim();

  if (!raw) {
    setBirthDate(null);
    setError("");
    return;
  }

  const digits = raw.replace(/\D/g, "");

  // Case: 20241012 → 2024-10-12
  if (digits.length === 8) {
    const y = digits.slice(0, 4);
    const m = digits.slice(4, 6);
    const d = digits.slice(6, 8);
    const iso = `${y}-${m}-${d}`;
    const parsed = dayjs(iso);

    // Only accept if formatting back is exactly the same
    if (parsed.isValid() && parsed.format("YYYY-MM-DD") === iso) {
      setInputValue(iso);
      setBirthDate(parsed.toDate());
      setError("");
      return;
    }
  }

  // Case: 2024-10-12
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) {
    const parsed = dayjs(raw);
    if (parsed.isValid() && parsed.format("YYYY-MM-DD") === raw) {
      setInputValue(raw);
      setBirthDate(parsed.toDate());
      setError("");
      return;
    }
  }

  // Invalid date
  setError(
    "正しい日付形式（YYYY-MM-DD または YYYYMMDD）で入力してください。"
  );
};

export default function BasicInfoSection() {
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  return (
    <section className="flex flex-col items-start gap-6 rounded border border-[#B9B9B9] bg-white p-10">
      <h2 className="text-base font-bold tracking-[0.64px] text-[#2D2D2D]">
        基本情報
      </h2>

      <div className="flex flex-col items-start gap-6 rounded bg-[#E5E7F5] p-6 w-[600px]">

        {/* --------------------- プロフィール画像 --------------------- */}
        <div className="flex w-[424px] flex-col gap-2">
          <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
            プロフィール画像
          </label>

          <div className="flex items-center gap-6">
            <div className="h-[120px] w-[120px] rounded border border-[#111958] bg-white" />

            <button className="flex items-center gap-2 text-sm tracking-[0.56px] text-[#111958]">
              <svg width="24" height="24" viewBox="0 0 24 24" className="h-4 w-4">
                <circle cx="12" cy="12" r="12" fill="#0A0F49" />
              </svg>
              <span>画像をアップロード</span>
            </button>
          </div>
        </div>

        {/* --------------------- 氏名 --------------------- */}
        <div className="flex gap-6">
          <div className="flex w-[200px] flex-col gap-2">
            <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
              氏名（姓）
            </label>
            <input
              type="text"
              placeholder="山田"
              className="h-9 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 text-sm tracking-[1.4px]"
            />
          </div>

          <div className="flex w-[200px] flex-col gap-2">
            <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
              氏名（名）
            </label>
            <input
              type="text"
              placeholder="太郎"
              className="h-9 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 text-sm tracking-[1.4px]"
            />
          </div>
        </div>

        {/* --------------------- セイ・メイ --------------------- */}
        <div className="flex gap-6">
          <div className="flex w-[200px] flex-col gap-2">
            <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
              氏名（セイ）
            </label>
            <input
              type="text"
              placeholder="ヤマダ"
              className="h-9 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 text-sm"
            />
          </div>

          <div className="flex w-[200px] flex-col gap-2">
            <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
              氏名（メイ）
            </label>
            <input
              type="text"
              placeholder="タロウ"
              className="h-9 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 text-sm"
            />
          </div>
        </div>

        {/* --------------------- 生年月日 --------------------- */}
        <div className="flex w-[424px] flex-col gap-2">
          <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
            生年月日
          </label>

          <DatePicker
            selected={birthDate}
            dateFormat="yyyy-MM-dd"
            locale={ja}
            placeholderText="YYYY-MM-DD"
            value={inputValue}
            className={`h-9 w-full rounded border-[0.5px] px-3 py-2 text-sm tracking-[1.4px] ${
              error ? "border-red-500 text-red-500" : "border-[#111958] text-[#111958]"
            } placeholder:text-[#B9B9B9]`}

            // Pick from calendar
            onChange={(date: Date | null) => {
              if (date) {
                const formatted = dayjs(date).format("YYYY-MM-DD");
                setBirthDate(date);
                setInputValue(formatted);
                setError("");
              } else {
                setBirthDate(null);
                setInputValue("");
              }
            }}

            // User typing: block internal parsing to avoid auto "01", "02", ...
            onChangeRaw={(e) => {
              if (!e) return; // type guard for SyntheticEvent | undefined
              e.preventDefault(); // stop react-datepicker from modifying the value

              const target = e.target as HTMLInputElement;
              const raw = target.value ?? "";
              const half = toHalfWidth(raw);
              setInputValue(half);
            }}

            // Validate & normalize on blur
            onBlur={(e: FocusEvent<HTMLInputElement>) => {
              normalizeOnBlur(e.target.value, setBirthDate, setInputValue, setError);
            }}
          />

          {error && <p className="text-xs text-red-500">{error}</p>}

          {birthDate && !error && (
            <input
              type="hidden"
              name="birthdate"
              value={dayjs(birthDate).format("YYYY-MM-DD")}
            />
          )}
        </div>

        {/* --------------------- 性別 --------------------- */}
        <div className="flex w-[200px] gap-6">
          <div className="flex flex-1 flex-col gap-2">
            <label className="text-sm font-bold tracking-[0.56px]">性別</label>

            <div className="flex justify-between">
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="radio" name="gender" value="male" className="peer hidden" />
                <div className="h-5 w-5 rounded-full border border-[#111958] peer-checked:bg-[#111958]" />
                <span>男性</span>
              </label>

              <label className="flex items-center gap-1 cursor-pointer">
                <input type="radio" name="gender" value="female" className="peer hidden" />
                <div className="h-5 w-5 rounded-full border border-[#111958] peer-checked:bg-[#111958]" />
                <span>女性</span>
              </label>

              <label className="flex items-center gap-1 cursor-pointer">
                <input type="radio" name="gender" value="none" className="peer hidden" />
                <div className="h-5 w-5 rounded-full border border-[#111958] peer-checked:bg-[#111958]" />
                <span>無回答</span>
              </label>
            </div>
          </div>
        </div>

        {/* --------------------- 電話番号 --------------------- */}
        <div className="flex w-[424px] flex-col gap-2">
          <label className="text-sm font-bold tracking-[0.56px] text-[#2D2D2D]">
            電話番号
          </label>
          <input
            type="text"
            placeholder="半額数字（ハイフンなし）"
            className="h-9 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 text-sm"
          />
        </div>

        {/* --------------------- 都道府県 & 住所 --------------------- */}
        <div className="flex w-full gap-6">
          <div className="flex w-[200px] flex-col gap-2">
            <label className="text-sm font-bold">都道府県</label>
            <select className="h-9 rounded border-[0.5px] border-[#111958] bg-white px-3 text-sm">
              <option value="">選択したください</option>
            </select>
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <label className="text-sm font-bold">住所</label>
            <input
              type="text"
              placeholder="町、マンション"
              className="h-9 rounded border-[0.5px] border-[#111958] bg-white px-3 py-2 text-sm"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
