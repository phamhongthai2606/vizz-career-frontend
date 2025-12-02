"use client";
import React from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import JobFavouriteCard from "@/components/pages/favourite/components/JobFavouriteCard";
import { useFavouritePage } from "@/components/pages/favourite/useFavouritePage";
import Pagination from "@/components/pages/favourite/components/Pagination";
import Dropdown from "@/components/pages/favourite/components/Dropdown";

export default function FavouritePage() {
  const {
    // handle sort job favourite and pagination job favourite
    sortOptions,
    sortValue,
    sortedJobs,
    itemsPerPage,
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedJobs,
    handleSortChange,
    // handle apply job
    handleApply,
    // handle delete job favourite
    handleDelete,
  } = useFavouritePage();

  return (
    <React.Fragment>
      <section className="min-h-screen bg-gray-50">
        <Breadcrumb
          items={[{ label: "求人TOP", href: "/" }, { label: "お気に入り一覧" }]}
        />

        <div className="mx-auto max-w-6xl px-6 py-10">
          <h1 className="mb-6 text-2xl font-bold">お気に入り</h1>

          {/* FILTER BAR */}
          <div className="mb-6 flex items-center justify-between">
            <Dropdown
              options={sortOptions}
              value={sortValue}
              onChange={handleSortChange}
              width={240}
            />

            {/* Result text */}
            <div className="text-base tracking-[0.1em]">
              {sortedJobs.length > 0
                ? `${(currentPage - 1) * itemsPerPage + 1}-${Math.min(
                    currentPage * itemsPerPage,
                    sortedJobs.length,
                  )}/${sortedJobs.length}件`
                : "0件"}
            </div>
          </div>

          {/* LIST */}
          <div className="space-y-6">
            {paginatedJobs.map((job) => (
              <JobFavouriteCard
                key={job.id}
                image={job.image}
                companyName={job.companyName}
                companyWebsite={job.companyWebsite}
                position={job.position}
                jobTitle={job.jobTitle}
                jobType={job.jobType}
                grade={job.grade}
                workDays={job.workDays}
                location={job.location}
                salary={job.salary}
                salaryNote={job.salaryNote}
                onApply={() => handleApply(job.id)}
                onDelete={() => handleDelete(job.id)}
              />
            ))}

            {sortedJobs.length === 0 && (
              <div className="flex flex-col items-center justify-center py-28">
                <p className="text-sm tracking-[0.1em]">
                  保存されている求人はまだありません
                </p>
              </div>
            )}
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onChangePage={setCurrentPage}
            />
          )}
        </div>
      </section>
    </React.Fragment>
  );
}
