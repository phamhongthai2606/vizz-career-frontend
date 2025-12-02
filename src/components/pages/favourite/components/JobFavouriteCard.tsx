"use client";

import React from "react";
import { FiUsers } from "react-icons/fi";
import { PiTrash } from "react-icons/pi";

interface JobFavouriteCardProps {
  image?: string;
  companyName: string;
  companyWebsite?: string;
  position?: string;
  jobTitle: string;
  jobType?: string;
  grade?: string;
  workDays?: string;
  location?: string;
  salary?: string;
  salaryNote?: string;
  onApply?: () => void;
  onDelete?: () => void;
}

const JobFavouriteCard: React.FC<JobFavouriteCardProps> = ({
  image,
  companyName,
  companyWebsite,
  position,
  jobTitle,
  jobType,
  grade,
  workDays,
  location,
  salary,
  salaryNote,
  onApply,
  onDelete,
}) => {
  return (
    <div className="w-full rounded border border-gray-300 bg-white p-6">
      {/* Header Top */}
      <div className="flex items-center justify-between">
        {/* Left: Logo + Title + Sub info */}
        <div className="mr-2.5 flex gap-6">
          {/* Logo box */}
          <div className="bg-gray-primary-light flex h-20 w-20 items-center justify-center overflow-hidden rounded-[2px]">
            {image ? (
              <img
                src={image}
                alt={`${companyName} logo`}
                className="h-full w-full object-contain"
              />
            ) : (
              <FiUsers className="text-blue-primary h-6 w-6" />
            )}
          </div>

          {/* Text info */}
          <div className="space-y-2">
            <h2 className="text-blue-primary text-xl font-extrabold tracking-[0.1em]">
              {companyName}
            </h2>

            {companyWebsite && (
              <p className="text-xs tracking-[0.1em] text-gray-500">
                {companyWebsite}
              </p>
            )}

            <p className="text-txt-default text-xs tracking-[0.1em]">
              {position}
            </p>
          </div>
        </div>

        {/* Right: Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onDelete}
            className="border-blue-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border"
          >
            <PiTrash className="text-blue-primary h-5 w-5" />
          </button>

          <button
            onClick={onApply}
            className="bg-blue-primary h-10 w-[120px] cursor-pointer rounded-full text-sm tracking-[0.1em] text-white"
          >
            応募する
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="-mx-6 my-6 border-b border-gray-300"></div>

      {/* Content */}
      <div>
        {/* Job Title */}
        <p className="mb-6 text-base font-bold tracking-[0.1em]">{jobTitle}</p>

        {/* Job Details Grid */}
        <div className="grid grid-cols-[120px_1fr] gap-x-6 gap-y-3 text-sm tracking-[0.1em]">
          <div>職種</div>
          <div>{jobType}</div>

          <div>採用希望学年</div>
          <div>{grade}</div>

          <div>勤務日数</div>
          <div>{workDays}</div>

          <div>勤務地</div>
          <div>{location}</div>

          <div>給与</div>
          <div>
            {salary}
            {salaryNote && <span className="text-gray-600">{salaryNote}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFavouriteCard;
