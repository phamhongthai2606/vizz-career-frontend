"use client";

import React from "react";
import Image from "next/image";
import Dropdown, { DropdownOption } from "./Dropdown";

type JobsSearchProps = {
  jobType: string;
  location: string;
  commitment: string;
  onChangeJobType: (value: string) => void;
  onChangeLocation: (value: string) => void;
  onChangeCommitment: (value: string) => void;
};

export default function JobsSearch({
  jobType,
  location,
  commitment,
  onChangeJobType,
  onChangeLocation,
  onChangeCommitment,
}: JobsSearchProps) {
  const jobTypeOptions: DropdownOption[] = [
    { label: "指定なし", value: "none" },
    { label: "エンジニア", value: "engineering" },
    { label: "デザイン", value: "design" },
    { label: "マーケティング", value: "marketing" },
  ];

  const locationOptions: DropdownOption[] = [
    { label: "都道府県", value: "none" },
    { label: "東京都", value: "tokyo" },
    { label: "大阪府", value: "osaka" },
    { label: "愛知県", value: "aichi" },
  ];

  const commitmentOptions: DropdownOption[] = [
    { label: "こだわり", value: "none" },
    { label: "フルタイム", value: "full-time" },
    { label: "パートタイム", value: "part-time" },
    { label: "契約", value: "contract" },
  ];

  return (
    <React.Fragment>
      <div className="h-full">
        <div className="flex h-[96px] h-full items-center rounded-full">
          <div className="flex items-center">
            {/* Career */}
            <div className="flex h-[56px] w-[200px] items-center rounded bg-white pr-3 pl-8">
              <Image
                src="/home/briefcase.png"
                alt="Briefcase Icon"
                width={24}
                height={24}
                className="object-contain"
              />
              <Dropdown
                options={jobTypeOptions}
                value={jobType}
                onChange={onChangeJobType}
                width={220}
              />
            </div>

            {/* location */}
            <div className="flex h-[56px] w-[200px] items-center rounded bg-white pr-3 pl-[24px]">
              <Image
                src="/home/location.png"
                alt="location Icon"
                width={24}
                height={24}
                className="object-contain"
              />
              <Dropdown
                options={locationOptions}
                value={location}
                onChange={onChangeLocation}
                width={220}
              />
            </div>

            {/* Commitment */}
            <div className="flex h-[56px] w-[200px] items-center rounded bg-white pr-3 pl-[24px]">
              <Image
                src="/home/clipboard-tick.png"
                alt="Clipboard-tick Icon"
                width={24}
                height={24}
                className="object-contain"
              />
              <Dropdown
                options={commitmentOptions}
                value={commitment}
                onChange={onChangeCommitment}
                width={220}
              />
            </div>

            {/* Search */}
            <div className="flex h-[56px] w-[196px] items-center rounded bg-white pr-3 pl-[24px]">
              <input
                type="text"
                placeholder="フリーワード"
                className="h-full w-full text-base tracking-[0.1em] text-[#0D1828] outline-none"
              />
            </div>
            <button className="flex h-[56px] w-[84px] items-center justify-center rounded-r-full bg-red-500">
              <Image
                src="/home/search-normal-white.png"
                alt="Search-normal-white Icon"
                width={24}
                height={24}
                className="object-contain"
              />
            </button>
          </div>
        </div>
        <span className="mt-2 ml-4 text-sm text-gray-500">
          検索条件：エンジニア、デザイナー
        </span>
      </div>
    </React.Fragment>
  );
}
