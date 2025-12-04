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
    <div className="grid grid-cols-[3fr_1fr_1fr_1fr] border-b border-[#E5E7EB] px-6 py-5 text-sm">
      {/* 募集記事名 */}
      <div className="leading-relaxed text-[#344054]">
        <Link
          href="#"
          className="text-[#175CD3] underline underline-offset-2 hover:text-[#0C4A9A]"
        >
          {job.title}
        </Link>
      </div>

      {/* 求人状況 */}
      <div className="text-[#344054] font-medium">{job.status}</div>

      {/* 更新日 */}
      <div className="text-[#344054]">{job.updatedAt}</div>

      {/* 操作 */}
      <div className="flex items-center gap-4 text-[#344054]">
        {job.status === "下書き" ? (
          <>
            {/* 編集する */}
            <button className="flex items-center gap-1 hover:opacity-70">
              <EditIcon />
              <span className="text-sm">編集する</span>
            </button>

            {/* 削除 */}
            <button className="hover:opacity-70">
              <TrashIcon />
            </button>
          </>
        ) : (
          <>
            {/* 公開設定 */}
            <button className="flex items-center gap-1 hover:opacity-70">
              <PublishIcon />
              <span className="text-sm">公開設定</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
