"use client";
import React, { useState } from "react";
import SearchHome from "@/components/pages/home/SearchHome";
import Image from "next/image";
import { usePageHome } from "@/components/pages/home/usePageHome";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { AppPrimaryButton } from "@/components/common/button/AppPrimaryButton";
import Link from "next/link";

export default function PageHome() {
  const { repeatedLogos } = usePageHome();

  const jobsRecommend = [
    {
      id: 1,
      title:
        "【東大早慶8割｜MBB等大手内定多数】未経験から裁量大きく自分の適正と希望に合った職種に挑戦！",
      location: "東京23区",
      category: "教育",
      schedule: "週1~3日以上",
      company: "株式会社BlueAI",
      companyLogo: "/home/logo-company.png",
      image: "/home/job/job1.png",
    },
    {
      id: 2,
      title: "Job 2 title",
      location: "大阪市",
      category: "IT",
      schedule: "週5日",
      company: "株式会社Tech",
      companyLogo: "/home/logo-company.png",
      image: "/home/job/job1.png",
    },
    {
      id: 3,
      title: "Job 3 title",
      location: "大阪市",
      category: "IT",
      schedule: "週5日",
      company: "株式会社Tech",
      companyLogo: "/home/logo-company.png",
      image: "/home/job/job1.png",
    },
  ];

  const jobsFeatured = [
    {
      id: 4,
      title:
        "【東大早慶8割｜MBB等大手内定多数】未経験から裁量大きく自分の適正と希望に合った職種に挑戦！",
      location: "東京23区",
      category: "教育",
      schedule: "週1~3日以上",
      company: "株式会社BlueAI",
      companyLogo: "/home/logo-company.png",
      image: "/home/job/job1.png",
    },
    {
      id: 5,
      title: "Job 2 title",
      location: "大阪市",
      category: "IT",
      schedule: "週5日",
      company: "株式会社Tech",
      companyLogo: "/home/logo-company.png",
      image: "/home/job/job1.png",
    },
    {
      id: 6,
      title: "Job 3 title",
      location: "大阪市",
      category: "IT",
      schedule: "週5日",
      company: "株式会社Tech",
      companyLogo: "/home/logo-company.png",
      image: "/home/job/job1.png",
    },
    // thêm job khác
  ];

  const jobs = [
    {
      id: 7,
      title:
        "【東大早慶8割｜MBB等大手内定多数】未経験から裁量大きく自分の適正と希望に合った職種に挑戦！",
      location: "東京23区",
      category: "教育",
      schedule: "週1~3日以上",
      company: "株式会社BlueAI",
      companyLogo: "/home/logo-company.png",
      image: "/home/job/job1.png",
    },
    {
      id: 8,
      title: "Job 2 title",
      location: "大阪市",
      category: "IT",
      schedule: "週5日",
      company: "株式会社Tech",
      companyLogo: "/home/logo-company.png",
      image: "/home/job/job1.png",
    },
    {
      id: 9,
      title: "Job 3 title",
      location: "大阪市",
      category: "IT",
      schedule: "週5日",
      company: "株式会社Tech",
      companyLogo: "/home/logo-company.png",
      image: "/home/job/job1.png",
    },
    // thêm job khác
  ];

  const [likedIds, setLikedIds] = useState<number[]>([]);
  const toggleLike = (id: number) => {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const links = [
    { text: "#週3日以下でもOK😶", href: "#" },
    { text: "##週4日以上歓迎👍", href: "#" },
    { text: "##フラットな組織🏢", href: "#" },
    { text: "##社員の成長を応援😄👊", href: "#" },
    { text: "##リモートワーク支援💻", href: "#" },
    { text: "##会社内間接喫煙対策中🚭", href: "#" },
    { text: "##会社部活あり🏃‍♀️", href: "#" },
  ];
  // Hàm chia mảng thành các nhóm
  const chunkArray = <T,>(arr: T[], size: number): T[][] => {
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };
  const rows = chunkArray(links, 3);

  return (
    <React.Fragment>
      {/* Banner + Search */}
      <section
        className="relative mb-[80px] aspect-[1280/625] w-full bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: 'url("/home/banner-bg.png")' }}
      >
        <div className="absolute bottom-[-68px] left-1/2 h-[180px] w-full -translate-x-1/2">
          <SearchHome />
        </div>
      </section>

      {/* Slider Logo */}
      <section className="mb-20 overflow-hidden py-4">
        <div className="animate-slide flex gap-x-20 whitespace-nowrap">
          {repeatedLogos.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`Logo branch ${idx + 1}`}
              width={168}
              height={68}
              className="flex-shrink-0"
              style={{ width: "168px", height: "68px", objectFit: "contain" }}
            />
          ))}
        </div>
      </section>

      {/* Recommended Jobs */}
      <section className="bg-white px-[120px] py-20">
        <div className="flex flex-col items-center">
          {/* Title section */}
          <h1 className="mb-6 text-center text-3xl leading-[1.405] font-black tracking-[0.1em]">
            <span className="block text-base font-semibold tracking-[0.05em]">
              あなたの自己分析結果からの
            </span>
            おすすめ求人
          </h1>

          {/* Content section */}
          <div className="mb-12 flex w-full justify-between gap-x-10">
            {jobsRecommend.map((job) => (
              <div
                key={job.id}
                className="relative flex flex-1 flex-col border border-gray-900 shadow-[0_4px_8px_rgba(0,0,0,0.25)]"
              >
                {/* Image + Like */}
                <div className="relative h-[240px] w-full">
                  <Image
                    src={job.image}
                    alt={`Job ${job.id}`}
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute top-4 right-4 flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full border-[2px] border-gray-200 bg-white/80 backdrop-blur-sm"
                    onClick={() => toggleLike(job.id)}
                  >
                    {likedIds.includes(job.id) ? (
                      <AiFillHeart className="text-3xl text-red-500" />
                    ) : (
                      <AiOutlineHeart className="text-3xl text-gray-400" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 px-5 py-6">
                  <h2 className="line-clamp-2 min-h-[calc(2*1.405rem)] text-justify text-base font-bold tracking-[0.1em] break-words">
                    {job.title}
                  </h2>

                  <div className="space-y-2 text-xs tracking-[0.1em]">
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/home/location.png"
                        alt="location Icon"
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                      <span>{job.location}</span>
                    </div>

                    <div className="flex items-center space-x-1">
                      <Image
                        src="/home/briefcase.png"
                        alt="Briefcase Icon"
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                      <span>{job.category}</span>
                    </div>

                    <div className="flex items-center space-x-1">
                      <Image
                        src="/home/briefcase.png"
                        alt="Briefcase Icon"
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                      <span>{job.schedule}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Image
                      src={job.companyLogo}
                      alt="Company Logo"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                    <span className="text-sm font-semibold tracking-[0.1em] text-gray-500">
                      {job.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Button section */}
          <AppPrimaryButton label="求人をもっと見る" />
        </div>
      </section>

      {/* Jobs */}
      <section className="bg-gray-100 px-[120px] py-20">
        <div className="flex flex-col items-center">
          {/* Title section */}
          <h1 className="mb-6 text-center text-3xl leading-[1.405] font-black tracking-[0.1em]">
            新着求人
          </h1>

          {/* Content section */}
          <div className="mb-12 flex w-full justify-between gap-x-10">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="flex flex-1 flex-col border border-gray-900 shadow-[0_4px_8px_rgba(0,0,0,0.25)]"
              >
                {/* Image + Like */}
                <div className="relative h-[240px] w-full">
                  <Image
                    src={job.image}
                    alt={`Job ${job.id}`}
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute top-4 right-4 flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full border-[2px] border-gray-200 bg-white/80 backdrop-blur-sm"
                    onClick={() => toggleLike(job.id)}
                  >
                    {likedIds.includes(job.id) ? (
                      <AiFillHeart className="text-3xl text-red-500" />
                    ) : (
                      <AiOutlineHeart className="text-3xl text-gray-400" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 px-5 py-6">
                  <h2 className="line-clamp-2 min-h-[calc(2*1.405rem)] text-justify text-base font-bold tracking-[0.1em] break-words">
                    {job.title}
                  </h2>

                  <div className="space-y-2 text-xs tracking-[0.1em]">
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/home/location.png"
                        alt="location Icon"
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                      <span>{job.location}</span>
                    </div>

                    <div className="flex items-center space-x-1">
                      <Image
                        src="/home/briefcase.png"
                        alt="Briefcase Icon"
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                      <span>{job.category}</span>
                    </div>

                    <div className="flex items-center space-x-1">
                      <Image
                        src="/home/briefcase.png"
                        alt="Briefcase Icon"
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                      <span>{job.schedule}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Image
                      src={job.companyLogo}
                      alt="Company Logo"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                    <span className="text-sm font-semibold tracking-[0.1em] text-gray-500">
                      {job.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Button section */}
          <AppPrimaryButton label="求人をもっと見る" />
        </div>
      </section>

      {/* Hagtag */}
      <section className="bg-white px-[120px] py-20">
        <div className="flex flex-col items-center">
          {/* Title section */}
          <h1 className="mb-6 text-center text-3xl leading-[1.405] font-black tracking-[0.1em]">
            おすすめタグ
          </h1>

          {/* Content section */}
          <div className="flex flex-col gap-y-4">
            {rows.map((row, rowIdx) => (
              <div
                key={rowIdx}
                className="flex items-center justify-center gap-x-4"
              >
                {row.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="relative inline-block"
                  >
                    {/* Shadow đỏ */}
                    <div className="absolute top-[3px] left-[3px] h-full w-full border border-gray-900 bg-red-500"></div>

                    {/* Div chính */}
                    <div className="relative border border-black bg-white px-6 py-3 text-center text-sm font-black tracking-[0.1em]">
                      {link.text}
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="bg-gray-100 px-[120px] py-20">
        <div className="flex flex-col items-center">
          {/* Title section */}
          <h1 className="mb-6 text-center text-3xl leading-[1.405] font-black tracking-[0.1em]">
            応募が多い求人
          </h1>

          {/* Content section */}
          <div className="mb-12 flex w-full justify-between gap-x-10">
            {jobsFeatured.map((job) => (
              <div
                key={job.id}
                className="flex flex-1 flex-col border border-gray-900 shadow-[0_4px_8px_rgba(0,0,0,0.25)]"
              >
                {/* Image + Like */}
                <div className="relative h-[240px] w-full">
                  <Image
                    src={job.image}
                    alt={`Job ${job.id}`}
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute top-4 right-4 flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full border-[2px] border-gray-200 bg-white/80 backdrop-blur-sm"
                    onClick={() => toggleLike(job.id)}
                  >
                    {likedIds.includes(job.id) ? (
                      <AiFillHeart className="text-3xl text-red-500" />
                    ) : (
                      <AiOutlineHeart className="text-3xl text-gray-400" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 px-5 py-6">
                  <h2 className="line-clamp-2 min-h-[calc(2*1.405rem)] text-justify text-base font-bold tracking-[0.1em] break-words">
                    {job.title}
                  </h2>

                  <div className="space-y-2 text-xs tracking-[0.1em]">
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/home/location.png"
                        alt="location Icon"
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                      <span>{job.location}</span>
                    </div>

                    <div className="flex items-center space-x-1">
                      <Image
                        src="/home/briefcase.png"
                        alt="Briefcase Icon"
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                      <span>{job.category}</span>
                    </div>

                    <div className="flex items-center space-x-1">
                      <Image
                        src="/home/briefcase.png"
                        alt="Briefcase Icon"
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                      <span>{job.schedule}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Image
                      src={job.companyLogo}
                      alt="Company Logo"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                    <span className="text-sm font-semibold tracking-[0.1em] text-gray-500">
                      {job.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Button section */}
          <AppPrimaryButton label="求人をもっと見る" />
        </div>
      </section>
    </React.Fragment>
  );
}
