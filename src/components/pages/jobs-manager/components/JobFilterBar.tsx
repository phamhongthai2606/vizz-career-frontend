"use client";

import Dropdown from "@/components/pages/favourite/components/Dropdown";

interface Props {
  sortOptions: { label: string; value: string }[];
  statusOptions: { label: string; value: string }[];
  selectedSort: string;
  selectedStatus: string;
  onSortChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

export default function JobFilterBar({
  sortOptions,
  statusOptions,
  selectedSort,
  selectedStatus,
  onSortChange,
  onStatusChange,
}: Props) {
  return (
    <div className="flex items-center gap-4">
      {/* STATUS FILTER */}
      <Dropdown
        options={statusOptions}
        value={selectedStatus}
        onChange={onStatusChange}
        width={180}
      />

      {/* SORT FILTER */}
      <Dropdown
        options={sortOptions}
        value={selectedSort}
        onChange={onSortChange}
        width={180}
      />
    </div>
  );
}
