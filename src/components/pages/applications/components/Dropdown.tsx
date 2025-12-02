"use client";

import { useState, useRef, useEffect } from "react";

// Kiểu cho mỗi option
export type DropdownOption = {
  label: string;
  value: string;
};

type DropdownProps = {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  width?: number;
};

export default function Dropdown({
  options,
  value,
  onChange,
  width = 200,
}: DropdownProps) {
  const [open, setOpen] = useState(false);

  // ref chính xác kiểu HTMLDivElement hoặc null
  const ref = useRef<HTMLDivElement | null>(null);

  // selected option
  const selected = options.find((o) => o.value === value) ?? options[0];

  // close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative" style={{ width }}>
      {/* Selected button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full cursor-pointer items-center justify-between rounded-md bg-white px-4 text-sm"
        style={{
          height: 40,
          border: "1px solid #1F2A70",
        }}
        type="button"
      >
        <span className="text-gray-800">{selected.label}</span>
        <span className="text-xs leading-none text-gray-500">▼</span>
      </button>

      {/* Dropdown menu */}
      {open && (
        <div
          className="absolute left-0 z-20 bg-white py-1 shadow-md"
          style={{
            marginTop: 6,
            width,
            border: "1px solid #D1D5DB",
            borderRadius: 6,
          }}
        >
          {options.map((item: DropdownOption) => (
            <div
              key={item.value}
              onClick={() => {
                onChange(item.value);
                setOpen(false);
              }}
              className="cursor-pointer px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
