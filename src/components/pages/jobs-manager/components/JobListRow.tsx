"use client";

import Link from "next/link";
import Image from "next/image";
import type { Job } from "../useJobsManager";

interface JobListRowProps {
  job: Job;
  index: number; // 0-based
}

export default function JobListRow({ job, index }: JobListRowProps) {
  const isLinkRow = index === 1; // chỉ row thứ 2 (index 1) có link

  return (
    <div className="grid grid-cols-[3fr_1fr_1fr_1fr] border-b border-[#E5E7EB] px-6 py-5 text-sm text-[#344054]">
      {/* 募集記事名 */}
      <div className="leading-relaxed">
        {isLinkRow ? (
          <Link
            href="#"
            className="text-[#175CD3] underline underline-offset-2 hover:text-[#0C4A9A]"
          >
            {job.title}
          </Link>
        ) : (
          <span className="text-[#344054]">{job.title}</span>
        )}
      </div>

      {/* 求人状況 */}
      <div className="pl-10 font-medium text-[#344054]">{job.status}</div>

      {/* 更新日 */}
      <div>{job.updatedAt}</div>

      {/* 操作 */}
      <div className="flex items-center gap-5 text-[#1D2939]">
        {job.status === "下書き" ? (
          <>
            {/* 編集する */}
            <button className="flex items-center gap-1 hover:opacity-70">
              <Image
                src="/bussiness/jobs-manager/edit.svg"
                alt="編集する"
                width={16}
                height={16}
              />
              <span>編集する</span>
            </button>

            {/* 削除 */}
            <button className="hover:opacity-70">
              <Image
                src="/bussiness/jobs-manager/delete.svg"
                alt="削除"
                width={16}
                height={16}
              />
            </button>
          </>
        ) : (
          <>
            {/* 公開設定 */}
            <button className="flex items-center gap-1 hover:opacity-70">
              <Image
                src="/bussiness/jobs-manager/setting.svg"
                alt="公開設定"
                width={16}
                height={16}
              />
              <span>公開設定</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
