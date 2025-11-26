"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

import FilterBar from "./components/FilterBar";
import JobApplicationCard from "./components/JobApplicationCard";
import Pagination from "./components/Pagination";

// --- SAMPLE DATA (mock) ---
const applications = [
  { id: 1, status: "applied", jobType: "engineer" },
  { id: 2, status: "applied", jobType: "design" },
  { id: 3, status: "rejected", jobType: "engineer" },
  { id: 4, status: "applied", jobType: "sales" },
];

export default function ApplicationsPage() {
  // FILTER STATES
  const [statusFilter, setStatusFilter] = useState("all");
  const [jobTypeFilter, setJobTypeFilter] = useState("none");

  // --- FILTER LOGIC ---
  const filteredList = useMemo(() => {
    return applications.filter((item) => {
      const matchStatus =
        statusFilter === "all" || item.status === statusFilter;

      const matchJobType =
        jobTypeFilter === "none" || item.jobType === jobTypeFilter;

      return matchStatus && matchJobType;
    });
  }, [statusFilter, jobTypeFilter]);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="w-full border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4 text-sm">
          <nav className="flex items-center gap-2">
            <Link href="/" className="text-gray-500 hover:text-gray-600">
              求人TOP
            </Link>
            <span className="text-gray-400">›</span>
            <span className="cursor-default font-semibold text-black">
              応募管理
            </span>
          </nav>
        </div>
      </div>

      {/* Page Content */}
      <div className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="mb-6 text-2xl font-bold">応募管理</h1>

        {/* FILTER BAR */}
        <FilterBar
          status={statusFilter}
          jobType={jobTypeFilter}
          onChangeStatus={setStatusFilter}
          onChangeJobType={setJobTypeFilter}
        />

        {/* LIST */}
        <div className="mt-8 space-y-6">
          {filteredList.map((item) => (
            <JobApplicationCard
              key={item.id}
              status={item.status === "applied" ? "応募済み" : "辞退"}
              jobType={item.jobType}
            />
          ))}

          {filteredList.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16">
              <p className="mb-5 text-sm text-black">
                表示する応募管理がありません
              </p>

              <button
                onClick={() => (window.location.href = "/")}
                className="h-10 w-[240px] cursor-pointer rounded-full bg-[#FF746F] text-sm font-medium text-white transition-all duration-200 hover:bg-[#ff5f5a]"
              >
                求人を探す
              </button>
            </div>
          )}
        </div>

        {/* PAGINATION */}
        {filteredList.length >= 4 && <Pagination totalPages={10} />}
      </div>
    </main>
  );
}
