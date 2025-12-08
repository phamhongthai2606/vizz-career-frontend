"use client";

import React from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import JobFilterBar from "@/components/pages/jobs-manager/components/JobFilterBar";
import JobListTable from "@/components/pages/jobs-manager/components/JobListTable";
import NewJobButton from "@/components/pages/jobs-manager/components/NewJobButton";
import { useJobsManager } from "@/components/pages/jobs-manager/useJobsManager";

export default function JobsManagerPage() {
  const {
    filteredJobs,
    sortOptions,
    statusOptions,
    selectedSort,
    selectedStatus,
    handleSortChange,
    handleStatusChange,
  } = useJobsManager();

  return (
    <>
      {/* Breadcrumb: full width, aligned with header */}
      <Breadcrumb
        items={[{ label: "TOP", href: "/" }, { label: "求人一覧" }]}
      />

      {/* Page content container */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        {/* Title and creation button */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">求人一覧</h1>
          <NewJobButton />
        </div>

        {/* Filter bar and count */}
        <div className="mb-8 flex items-center gap-4">
          <JobFilterBar
            sortOptions={sortOptions}
            statusOptions={statusOptions}
            selectedSort={selectedSort}
            selectedStatus={selectedStatus}
            onSortChange={handleSortChange}
            onStatusChange={handleStatusChange}
          />
          <div className="text-base font-semibold text-[#D92D20]">
            {filteredJobs.length}件
          </div>
        </div>

        {/* Job list table */}
        <JobListTable jobs={filteredJobs} />
      </section>
    </>
  );
}
