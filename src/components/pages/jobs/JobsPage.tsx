"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/JobCard";
import { useJobsPage } from "./useJobsPage";
import React from "react";
import Dropdown from "./components/Dropdown";

export default function JobsPage() {
  // FILTER STATES
  const [jobTypeSelect, setJobTypeSelect] = useState("none");
  const [locationSelect, setLocationSelect] = useState("none");
  const [commitmentSelect, setCommitmentSelect] = useState("none");
  const [sort, setChangeSort] = useState("none");
  const {
    // handle like job
    likedIds,
    toggleLike,
    jobsList,
  } = useJobsPage();

  // --- FILTER LOGIC ---
  const filteredList = useMemo(() => {
    return jobsList.filter((item) => {
      const matchJobType =
        jobTypeSelect === "none" || item.jobTypeMainCode === jobTypeSelect;

      const matchLocation =
        locationSelect === "none" || item.locationEn === locationSelect;

      const matchCommitment =
        commitmentSelect === "none" || item.commitment === commitmentSelect;

      return matchJobType && matchLocation && matchCommitment;
    });
  }, [jobTypeSelect, locationSelect, commitmentSelect, jobsList]);

  const sortedList = useMemo(() => {
    if (sort === "newest") {
      return [...filteredList].sort((a, b) => Number(b.id) - Number(a.id));
    }
    if (sort === "popular") {
      return [...filteredList].sort((a, b) => Number(a.id) - Number(b.id));
    }
    return filteredList;
  }, [filteredList, sort]);

  const sortOptions = [
    { label: "おすすめ順", value: "none" },
    { label: "新着順", value: "newest" },
    { label: "人気順", value: "popular" },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="border-b-natural-gray-200 w-full border-b bg-white">
        <div className="mx-auto h-[48px] w-[880px] py-[15px] text-sm">
          <nav className="flex items-center gap-2">
            <Link href="/" className="text-gray-500 hover:text-gray-600">
              求人TOP
            </Link>
            <span className="text-gray-400">›</span>
            <span className="cursor-default font-semibold text-black">
              エンジニア、デザイナー求人募集一覧
            </span>
          </nav>
        </div>
      </div>

      {/* Page Content */}
      <div className="mx-auto w-[880px] py-10">
        <h1 className="mb-6 text-2xl font-bold">求人募集一覧</h1>

        <SearchBar
          jobType={jobTypeSelect}
          onChangeJobType={setJobTypeSelect}
          location={locationSelect}
          onChangeLocation={setLocationSelect}
          commitment={commitmentSelect}
          onChangeCommitment={setCommitmentSelect}
        />

        {/* LIST */}
        <div className="mt-8 space-y-6 px-10">
          <div className="flex items-center">
            <Dropdown
              options={sortOptions}
              value={sort}
              onChange={setChangeSort}
              width={180}
              className="border-blue-primary border"
            />
            <span className="px-2 text-lg font-bold text-[#FF3B3B]">
              {sortedList.length}件
            </span>
          </div>
          {sortedList.map((item) => (
            <JobCard
              key={item.id}
              job={item}
              toggleLike={toggleLike}
              likedIds={likedIds}
            />
          ))}

          {filteredList.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16">
              <p className="mb-5 text-sm text-black">
                表示できる求人募集がありません。
              </p>
            </div>
          )}
        </div>

        {/* PAGINATION */}
        {filteredList.length >= 4 && <Pagination totalPages={10} />}
      </div>
    </main>
  );
}
