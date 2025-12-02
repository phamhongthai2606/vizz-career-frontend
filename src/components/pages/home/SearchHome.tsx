"use client";

import React, { useState } from "react";
import Image from "next/image";
import SearchModal from "@/components/pages/home/SearchModal";

export default function SearchHome() {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <SearchModal open={isOpen} onClose={() => setOpen(false)} />
      <div className="h-full px-20 py-6">
        <div className="bg-blue-primary flex h-full items-center justify-center rounded-full px-[120px] py-6">
          <div className="flex items-center justify-center gap-x-6">
            {/* Career */}
            <div className="flex h-[64px] flex-1 items-center gap-x-3 rounded bg-white px-6">
              <Image
                src="/home/briefcase.png"
                alt="Briefcase Icon"
                width={24}
                height={24}
                className="object-contain"
              />
              <input
                type="text"
                placeholder="職種"
                className="h-full w-full text-base tracking-[0.1em] text-[#0D1828] outline-none placeholder:text-[#0D1828]"
              />
            </div>

            {/* location */}
            <div className="flex h-[64px] flex-1 items-center gap-x-3 rounded bg-white px-6">
              <Image
                src="/home/location.png"
                alt="location Icon"
                width={24}
                height={24}
                className="object-contain"
              />
              <input
                type="text"
                placeholder="エリア"
                className="h-full w-full text-base tracking-[0.1em] text-[#0D1828] outline-none placeholder:text-[#0D1828]"
              />
            </div>

            {/* Commitment */}
            <div className="flex h-[64px] flex-1 items-center gap-x-3 rounded bg-white px-6">
              <Image
                src="/home/clipboard-tick.png"
                alt="Clipboard-tick Icon"
                width={24}
                height={24}
                className="object-contain"
              />
              <input
                type="text"
                placeholder="こだわり"
                className="h-full w-full text-base tracking-[0.1em] text-[#0D1828] outline-none placeholder:text-[#0D1828]"
              />
            </div>

            {/* Search */}
            <div className="flex h-[64px] flex-2 items-center gap-x-3 rounded bg-white px-6">
              <Image
                src="/home/search-normal.png"
                alt="Search-normal Icon"
                width={24}
                height={24}
                className="object-contain"
              />
              <input
                type="text"
                placeholder="フリーワード検索"
                readOnly
                onPointerDown={() => setOpen(true)}
                onClick={() => setOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setOpen(true);
                }}
                aria-haspopup="dialog"
                aria-expanded={isOpen}
                role="button"
                tabIndex={0}
                className="pointer-events-auto z-10 h-full w-full cursor-pointer text-base tracking-[0.1em] text-[#0D1828] outline-none placeholder:text-[#0D1828]"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
