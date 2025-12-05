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

      <div className="mx-auto max-w-6xl px-8 pt-10">

        {/* ====== TITLE + CREATE BUTTON in ONE ROW ====== */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold tracking-wide">求人一覧</h1>
          <NewJobButton />  {/* đổi vị trí lên đây => cao ngang với tiêu đề */}
        </div>

        {/* ====== FILTER + COUNT under title ====== */}
        <div className="flex items-center gap-4 mb-6">

          {/* 2 selectbox (filter bar) */}
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
