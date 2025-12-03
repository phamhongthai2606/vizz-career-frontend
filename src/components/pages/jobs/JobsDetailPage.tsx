"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { useJobsPage } from "./useJobsPage";
import Image from "next/image";
import { AppPrimaryLinkButton } from "@/components/common/button/AppPrimaryLinkButton";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function JobsDetailPage() {
  const {
    // handle like job
    likedIds,
    toggleLike,
    jobsList,
  } = useJobsPage();

  const params = useParams();
  const id = params?.id;

  const job = jobsList.find((j) => String(j.id) === String(id));
  const router = useRouter();

  useEffect(() => {
    if (id && !job) {
      // navigate to 404 when id is present but no matching job
      router.replace("/404");
    }
  }, [id, job, router]);
  const isLiked = job ? likedIds.includes(job.id) : false;

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
            <Link href="/jobs" className="text-gray-500 hover:text-gray-600">
              エンジニア、デザイナー求人募集一覧
            </Link>
            <span className="text-gray-400">›</span>
            <span className="inline-block max-w-[300px] cursor-default truncate font-semibold text-black">
              {job?.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Page Content */}
      <div className="mx-auto w-[880px] py-10">
        {/* Scheduled publication period and update date */}
        <div className="flex items-start justify-between pb-4 text-sm">
          {/* LEFT */}
          <div className="flex-1">
            {job?.location ? (
              <div>
                <span className="mb-3 inline-block rounded-md border border-[#1F2A70] bg-[rgba(31,42,112,0.06)] px-3 py-1 text-xs text-[#1F2A70]">
                  {job.location}
                </span>
              </div>
            ) : (
              <div className="flex-1" />
            )}
          </div>
          {/* RIGHT */}
          <div>
            <span> 掲載予定期間：{job?.schedulePublicationPeriod} </span>
            <span>更新日：{job?.updatedAt}</span>
          </div>
        </div>

        {/* Company Info and Action Buttons */}
        <div className="flex items-center justify-center pb-10 text-sm">
          <div className="flex flex-1 items-start gap-3">
            <Image
              src="/logo-v.png"
              alt="Logo V"
              width={60}
              height={60}
              className="object-contain"
            />
            <div className="flex flex-col">
              <span className="mb-1 text-xl font-bold text-[#111958]">
                株式会社BlueAI
              </span>
              <span className="truncate text-sm text-gray-500">
                www.blueai.jp
              </span>
              <span className="truncate text-sm text-gray-900">{job?.tag}</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-3">
            <button
              onClick={() => job && toggleLike(job.id)}
              aria-pressed={isLiked}
              className={
                "relative min-h-[40px] cursor-pointer rounded-full bg-white px-8 py-2 pl-12 text-sm tracking-[0.1em] text-black"
              }
            >
              <span className="pointer-events-none absolute top-1/2 left-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#111958] bg-white">
                {isLiked ? (
                  <AiFillHeart className="text-base text-red-500" />
                ) : (
                  <AiOutlineHeart className="text-base text-gray-400" />
                )}
              </span>
            </button>
            <div className="flex justify-center">
              <AppPrimaryLinkButton label="応募する" href={`#`} className="" />
            </div>
          </div>
        </div>

        {/* Job Detail Section */}
        <div className="flex flex-col rounded-sm border border-[#d0d0d0] bg-white">
          {/* Job Title */}
          <div className="border-b border-[#d0d0d0] pb-[24px]">
            <div className="pb-5">
              <Image
                src="/job/job-detail-1.png"
                alt="Job Detail 1"
                width={880}
                height={600}
                className="object-contain"
              />
            </div>
            <h2 className="mb-4 text-2xl leading-tight font-bold text-[#111958]">
              {job?.titleFull}
            </h2>
          </div>

          {/* Recruitment Conditions */}
          <div className="px-10 pt-8 pb-10">
            <div className="border-b border-[#d0d0d0] pb-2 text-base leading-tight font-bold text-[#111958]">
              採用条件
            </div>
            <div className="flex flex-col gap-y-[12px] pt-6 text-lg">
              <div className="flex items-center">
                <span className="w-[240px] flex-shrink-0">採用希望学年</span>
                <span className="ml-[12px] flex-1">
                  {job?.preferredGradeYear}
                </span>
              </div>
              <div className="flex items-center">
                <span className="w-[240px] flex-shrink-0">必須要件</span>
                <span className="ml-[12px] flex-1">
                  {job?.requiredQualifications}
                </span>
              </div>
              <div className="flex items-center">
                <span className="w-[240px] flex-shrink-0">歓迎要件</span>
                <span className="ml-[12px] flex-1">
                  {job?.preferredQualifications}
                </span>
              </div>
              <div className="flex items-center">
                <span className="w-[240px] flex-shrink-0">勤務形態</span>
                <span className="ml-[3px] flex-1">{job?.employmentType}</span>
              </div>
              <div className="flex items-center">
                <span className="w-[240px] flex-shrink-0">勤務曜日</span>
                <span className="ml-[3px] flex-1">{job?.workDaysFull}</span>
              </div>
              <div className="flex items-center">
                <span className="w-[240px] flex-shrink-0">勤務時間</span>
                <span className="ml-[3px] flex-1">{job?.workHours}</span>
              </div>
              <div className="flex items-center">
                <span className="w-[240px] flex-shrink-0">勤務地</span>
                <span className="ml-[3px] flex-1">{job?.workLocation}</span>
              </div>
              <div className="flex items-center">
                <span className="w-[240px] flex-shrink-0">リモート対応</span>
                <span className="ml-[3px] flex-1">
                  {job?.remoteWorkAvailable}
                </span>
              </div>
            </div>
          </div>

          {/* Application Requirements */}
          <div className="px-10 pt-8 pb-10">
            <div className="border-b border-[#d0d0d0] pb-2 text-base leading-tight font-bold text-[#111958]">
              募集要項
            </div>
            <div className="flex flex-col gap-y-[12px] pt-6 text-lg">
              <div className="flex">
                <span className="w-[240px] flex-shrink-0">業務内容</span>
                <span className="ml-[12px] flex-1 whitespace-pre-wrap">
                  {job?.description}
                </span>
              </div>
              <div className="flex">
                <span className="w-[240px] flex-shrink-0">成長環境</span>
                <span className="ml-[12px] flex-1 whitespace-pre-wrap">
                  {job?.careerGrowthEnvironment}
                </span>
              </div>
              <div className="flex">
                <span className="w-[240px] flex-shrink-0">身につくスキル</span>
                <span className="ml-[12px] flex-1 whitespace-pre-wrap">
                  {job?.skillsYouWillGain}
                </span>
              </div>
              <div className="flex">
                <span className="w-[240px] flex-shrink-0">職種</span>
                <span className="ml-[12px] flex-1">{job?.jobTypeFull}</span>
              </div>
            </div>
          </div>

          {/* Salary Conditions */}
          <div className="px-10 pt-8 pb-10">
            <div className="border-b border-[#d0d0d0] pb-2 text-base leading-tight font-bold text-[#111958]">
              給与条件
            </div>
            <div className="flex flex-col gap-y-[12px] pt-6 text-lg">
              <div className="flex items-center">
                <span className="w-[240px] flex-shrink-0">給与</span>
                <span className="ml-[12px] flex-1">{job?.salaryFull}</span>
              </div>
              <div className="flex items-center">
                <span className="w-[240px] flex-shrink-0">交通費支給</span>
                <span className="ml-[12px] flex-1">
                  {job?.transportationExpensesProvided}
                </span>
              </div>
              <div className="flex items-center">
                <span className="w-[240px] flex-shrink-0">その他手当</span>
                <span className="ml-[12px] flex-1">{job?.workdays}</span>
              </div>
            </div>
          </div>

          {/* Application Steps */}
          <div className="px-10 pt-8 pb-10">
            <div className="border-b border-[#d0d0d0] pb-2 text-base leading-tight font-bold text-[#111958]">
              応募後のステップ
            </div>
            <div className="flex flex-col gap-y-[12px] pt-6 text-lg">
              <div className="flex">
                <span className="w-[240px] flex-shrink-0">選考ステップ</span>
                <span className="ml-[12px] flex-1 whitespace-pre-wrap">
                  {job?.selectionProcess}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 z-50 flex h-[72px] w-full items-center justify-center gap-4 bg-white p-4">
        <button
          onClick={() => job && toggleLike(job.id)}
          aria-pressed={isLiked}
          className={
            "relative min-h-[40px] rounded-full border border-[#d0d0d0] bg-white px-8 py-2 pl-12 text-sm tracking-[0.1em] text-black"
          }
        >
          <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2">
            {isLiked ? (
              <AiFillHeart className="text-2xl text-red-500" />
            ) : (
              <AiOutlineHeart className="text-2xl text-gray-400" />
            )}
          </span>
          <span>お気にしいり</span>
        </button>
        <div className="flex justify-center">
          <AppPrimaryLinkButton label="応募する" href={`#`} className="" />
        </div>
      </div>
    </main>
  );
}
