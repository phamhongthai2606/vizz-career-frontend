"use client";

import JobListRow from "./JobListRow";
import type { Job } from "../useJobsManager";

interface JobListTableProps {
  jobs: Job[];
}

export default function JobListTable({ jobs }: JobListTableProps) {
  return (
    <div className="overflow-hidden rounded-md border border-[#B9B9B9] bg-white">
      {/* HEADER */}
      <div className="grid grid-cols-[3fr_1fr_1fr_1fr] border-b border-[#B9B9B9] bg-[#F2F4F7] px-6 py-3 text-sm font-medium text-[#344054] tracking-wide">
        <div>募集記事名</div>
        <div>求人状況</div>
        <div>更新日</div>
        <div></div>
      </div>

      {/* ROWS */}
      {jobs.map((job) => (
        <JobListRow key={job.id} job={job} />
      ))}
    </div>
  );
}
