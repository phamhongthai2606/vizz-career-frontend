"use client";

import { useMemo, useState } from "react";

// ====== TYPES ======
export type JobStatus = "公開中" | "公開停止中" | "下書き" | "応募終了";

export interface Job {
  id: number;
  title: string;
  status: JobStatus;
  updatedAt: string; // "2024/08/05" hoặc "2024-08-05"
}

// ===============================
// Mock JOB LIST (theo đúng UI Figma)
// ===============================
const mockJobs: Job[] = [
  {
    id: 1,
    title:
      "【圧倒的な営業力を身に着ける】事業拡大による限定募集！社会人に負けない営業力を！#1,2年生歓迎 #土日出勤 #圧倒的成長 #埼玉県 #東京都",
    status: "下書き",
    updatedAt: "2025/08/05",
  },
  {
    id: 2,
    title:
      "【圧倒的な営業力を身に着ける】事業拡大による限定募集！社会人に負けない営業力を！#1,2年生歓迎 #土日出勤 #圧倒的成長 #埼玉県 #東京都",
    status: "公開中",
    updatedAt: "2025/08/05",
  },
  {
    id: 3,
    title:
      "【圧倒的な営業力を身に着ける】事業拡大による限定募集！社会人に負けない営業力を！#1,2年生歓迎 #土日出勤 #圧倒的成長 #埼玉県 #東京都",
    status: "公開停止中",
    updatedAt: "2025/08/05",
  },
  {
    id: 4,
    title:
      "【圧倒的な営業力を身に着ける】事業拡大による限定募集！社会人に負けない営業力を！#1,2年生歓迎 #土日出勤 #圧倒的成長 #埼玉県 #東京都",
    status: "応募終了",
    updatedAt: "2024/12/20",
  },
];

// ===============================
// Filter + Sort Logic
// ===============================
export function useJobsManager() {
  // SORT → 最新順 / 古い順
  const sortOptions = [
    { label: "設定なし", value: "none" },
    { label: "更新日が新しい順", value: "newest" },
    { label: "更新日が古い順", value: "oldest" },
  ];

  // STATUS FILTER
  const statusOptions = [
    { label: "すべて", value: "all" },
    { label: "公開中", value: "公開中" },
    { label: "公開停止中", value: "公開停止中" },
    { label: "下書き", value: "下書き" },
    { label: "応募終了", value: "応募終了" },
  ];

  const [selectedSort, setSelectedSort] = useState("none");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredJobs = useMemo(() => {
    let list = [...mockJobs];

    if (selectedStatus !== "all") {
      list = list.filter((job) => job.status === selectedStatus);
    }

    if (selectedSort === "newest") {
      list.sort(
        (a, b) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
      );
    } else if (selectedSort === "oldest") {
      list.sort(
        (a, b) =>
          new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime(),
      );
    }

    return list;
  }, [selectedSort, selectedStatus]);

  return {
    jobs: mockJobs,
    filteredJobs,
    sortOptions,
    statusOptions,
    selectedSort,
    selectedStatus,
    handleSortChange: (value: string) => setSelectedSort(value),
    handleStatusChange: (value: string) => setSelectedStatus(value),
  };
}
