"use client";

import Link from "next/link";
import { Pencil2Icon } from "@radix-ui/react-icons"; // dùng icon thanh thoát giống figma

export default function NewJobButton() {
  return (
    <Link
      href="#"
      className="
        inline-flex items-center justify-center
        h-[40px] w-[160px]
        rounded-full
        bg-[#FF4D57]
        text-white text-[14px] font-semibold
        tracking-[0.2px]
        hover:bg-[#E84149]
        transition-all duration-200
        gap-[6px]
      "
    >
      <Pencil2Icon className="w-[18px] h-[18px]" />
      新規作成
    </Link>
  );
}
