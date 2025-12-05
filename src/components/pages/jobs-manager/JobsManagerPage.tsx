"use client";

import React from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import JobFilterBar from "@/components/pages/jobs-manager/components/JobFilterBar";
import JobListTable from "@/components/pages/jobs-manager/components/JobListTable";
import NewJobButton from "@/components/pages/jobs-manager/components/NewJobButton";
import { useJobsManager } from "@/components/pages/jobs-manager/useJobsManager";

export default function JobsManagerPage() {
  const {
    // giữ nguyên đúng những gì hook đang trả về
    filteredJobs,
    sortOptions,
    statusOptions,
    selectedSort,
    selectedStatus,
    handleSortChange,
    handleStatusChange,
  } = useJobsManager();

  return (
    // giảm khoảng trắng dưới footer: pb-20 -> pb-10
    <section className="min-h-[60vh] bg-gray-50 pb-4">
      {/* BREADCRUMB */}
      <Breadcrumb
        items={[{ label: "TOP", href: "/" }, { label: "求人一覧" }]}
      />

      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* TITLE + 新規作成: nằm cùng 1 hàng */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">求人一覧</h1>
          <NewJobButton />
        </div>

        {/* FILTER BAR: 2 select box cách table xa hơn 1 chút */}
        <div className="mb-8 flex items-center gap-4">
          <JobFilterBar
            sortOptions={sortOptions}
            statusOptions={statusOptions}
            selectedSort={selectedSort}
            selectedStatus={selectedStatus}
            onSortChange={handleSortChange}
            onStatusChange={handleStatusChange}
          />

          {/* COUNT */}
          <div className="text-base font-semibold text-[#D92D20]">
            {filteredJobs.length}件
          </div>
        </div>

        {/* TABLE LIST */}
        <JobListTable jobs={filteredJobs} />
      </div>
    </section>
  );
}
