"use client";

import Link from "next/link";
import { Pencil2Icon } from "@radix-ui/react-icons"; // dùng icon thanh thoát giống figma

export default function NewJobButton() {
  return (
    <Link
      href="#"
      className="inline-flex h-[40px] w-[160px] items-center justify-center gap-[6px] rounded-full bg-[#FF4D57] text-[14px] font-semibold tracking-[0.2px] text-white transition-all duration-200 hover:bg-[#E84149]"
    >
      <Pencil2Icon className="h-[18px] w-[18px]" />
      新規作成
    </Link>
  );
}
