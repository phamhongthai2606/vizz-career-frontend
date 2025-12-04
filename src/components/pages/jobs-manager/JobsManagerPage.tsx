"use client";

import React from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import JobFilterBar from "@/components/pages/jobs-manager/components/JobFilterBar";
import JobListTable from "@/components/pages/jobs-manager/components/JobListTable";
import NewJobButton from "@/components/pages/jobs-manager/components/NewJobButton";
import { useJobsManager } from "@/components/pages/jobs-manager/useJobsManager";

export default function JobsManagerPage() {
  const {
    jobs,
    filteredJobs,
    sortOptions,
    statusOptions,
    selectedSort,
    selectedStatus,
    handleSortChange,
    handleStatusChange,
  } = useJobsManager();

  return (
    <section className="min-h-screen bg-gray-50 pb-20">
      {/* BREADCRUMB */}
      <Breadcrumb
        items={[
          { label: "TOP", href: "/" },
          { label: "求人一覧" },
        ]}
      />

      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* TITLE */}
        <h1 className="mb-8 text-2xl font-bold tracking-wide">求人一覧</h1>

        {/* FILTER BAR */}
        <div className="mb-6 flex items-center gap-4">
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

        {/* NEW JOB BUTTON */}
        <div className="mb-6 flex justify-end">
          <NewJobButton />
        </div>

        {/* TABLE LIST */}
        <JobListTable jobs={filteredJobs} />
      </div>
    </section>
  );
}
