"use client";

import JobListRow from "./JobListRow";
import type { Job } from "../useJobsManager";

export default function JobListTable({ jobs }: { jobs: Job[] }) {
  return (
    <div
      className="
        overflow-hidden w-full rounded-[8px]
        bg-white border border-[#D0D5DD]
        shadow-[0px_1px_2px_rgba(16,24,40,0.05)]
      "
    >
      {/* TABLE HEADER */}
      <div
        className="
        grid grid-cols-[5.1fr_1.45fr_1.45fr_1.2fr]
        bg-[#F2F4F7]
        px-6 py-[11px]
        border-b border-[#D0D5DD]
        text-[14px] font-semibold tracking-wide text-[#344054]
      "
      >
        <div>募集記事名</div>
        <div>求人状況</div>
        <div>更新日</div>
        <div className="min-w-[61px]">操作</div>
      </div>

      {/* ROWS */}
      {jobs.map((job) => (
        <JobListRow key={job.id} job={job} />
      ))}
    </div>
  );
}
