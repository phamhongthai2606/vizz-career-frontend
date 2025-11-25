"use client";

import { Mail, Calendar, Heart } from "lucide-react";

export default function ProfileHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-[89px] items-center justify-between border-b border-[#D0D0D0] bg-white px-8 py-5 shadow-[0_4px_4px_0_rgba(103,103,103,0.10)]">
      <img
        src="/logo.svg"
        alt="Coco Career"
        className="h-[41px] w-[121px]"
      />

      <div className="flex items-center gap-10">
        <nav className="flex items-center gap-3">
          <a
            href="/messages"
            className="flex w-20 flex-col items-center gap-1 px-1"
          >
            <Mail className="h-4 w-4 text-[#111958]" strokeWidth={1.5} />
            <span className="h-[21px] w-[70px] text-center text-sm font-normal text-[#2D2D2D]">
              メッセージ
            </span>
          </a>

          <div className="h-[41px] w-px bg-[#B9B9B9]"></div>

          <a
            href="/applications"
            className="flex w-20 flex-col items-center gap-1 px-1"
          >
            <Calendar className="h-4 w-4 text-[#111958]" strokeWidth={1.5} />
            <span className="h-[21px] w-[70px] text-center text-sm font-normal text-[#2D2D2D] tracking-[1.4px]">
              応募管理
            </span>
          </a>

          <div className="h-[41px] w-px bg-[#B9B9B9]"></div>

          <a
            href="/favorites"
            className="flex w-20 flex-col items-center gap-1 px-1"
          >
            <Heart className="h-4 w-4 text-[#111958]" strokeWidth={1.5} />
            <span className="h-[21px] w-[70px] text-center text-sm font-normal text-[#2D2D2D]">
              お気に入り
            </span>
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-center text-sm font-bold tracking-[1.4px] text-[#2D2D2D]">
              {/* eslint-disable-next-line no-irregular-whitespace */}
              山田　太郎
            </span>
            <span className="text-center text-sm font-normal tracking-[1.4px] text-[#2D2D2D]">
              様
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
