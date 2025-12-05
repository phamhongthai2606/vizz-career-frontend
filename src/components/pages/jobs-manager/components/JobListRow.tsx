"use client";

import Link from "next/link";
import EditIcon from "./icons/EditIcon";
import PublishIcon from "./icons/PublishIcon";
import TrashIcon from "./icons/TrashIcon";
import type { Job } from "../useJobsManager";

interface JobListRowProps {
  job: Job;
}

export default function JobListRow({ job }: JobListRowProps) {
  return (
    <div className="
      grid grid-cols-[5.15fr_1.45fr_1.45fr_1.2fr]
      border-b border-[#E4E7EC]
      px-5 py-4 text-[14px]
    ">

      {/* 募集記事名 */}
      <Link
        href="#"
        className="text-[#175CD3] font-[500] underline underline-offset-2 hover:text-[#0C4A9A]">
        {job.title}
      </Link>

      {/* 求人状況 */}
      <div className="font-[500] text-[#344054] whitespace-nowrap">
        {job.status}
      </div>

      {/* 更新日 */}
      <div className="text-[#344054] whitespace-nowrap">
        {job.updatedAt}
      </div>

      {/* 操作 */}
      <div className="flex items-center gap-5 min-w-[61px] whitespace-nowrap">
        {job.status === "下書き" ? (
          <>
            <button className="flex items-center gap-[4px] hover:text-[#1D4ED8]">
              <EditIcon /> 編集する
            </button>
            <button className="hover:opacity-70">
              <TrashIcon />
            </button>
          </>
        ) : (
          <button className="flex items-center gap-[4px] hover:text-[#1D4ED8]">
            <PublishIcon /> 公開設定
          </button>
        )}
      </div>
    </div>
  );
}
