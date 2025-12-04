"use client";

import type { JobStatus } from "../useJobsManager";

interface Props {
  status: JobStatus;
}

const styleMap: Record<JobStatus, string> = {
  公開中: "bg-[#ECFDF3] text-[#027A48] border-[#A6F4C5]",
  公開停止中: "bg-[#FFF6ED] text-[#B54708] border-[#FEC84B]",
  下書き: "bg-[#F2F4F7] text-[#344054] border-[#D0D5DD]",
  応募終了: "bg-[#FEF3F2] text-[#B42318] border-[#FDA29B]",
};

export default function JobStatusBadge({ status }: Props) {
  const style =
    styleMap[status] || "bg-gray-100 text-gray-600 border-gray-200";

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2 py-1 text-xs font-medium ${style}`}
    >
      {status}
    </span>
  );
}
