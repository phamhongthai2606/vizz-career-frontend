"use client";

import { useEffect, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { AppPrimaryButton } from "@/components/common/button/AppPrimaryButton";
import JobCard from "@/components/pages/home/components/JobCard";

interface RecommendedJobsSectionProps {
  jobsRecommend: {
    id: number | string;
    image?: string;
    title: string;
    location: string;
    category: string;
    position: string;
    schedule: string;
    salary: string;
    company: string;
    companyLogo: string;
  }[];
  toggleLike: (id: number | string) => void;
  likedIds: (number | string)[];
}

const RecommendedJobsSection: React.FC<RecommendedJobsSectionProps> = ({
  jobsRecommend,
  toggleLike,
  likedIds,
}) => {
  // === CONFIG ===
  const SLIDER_COUNT = 6; // số job slider tối đa
  const JOBS_PER_SHOW_MORE = 3; // số job mỗi lần click show more

  // === STATE ===
  const [sliderOffset, setSliderOffset] = useState(0);
  const [jobsPerRowResponsive, setJobsPerRowResponsive] =
    useState(getJobsPerRow());
  const [visibleJobsCount, setVisibleJobsCount] = useState(0); // số job show more đã load

  // === FUNCTIONS ===
  function getJobsPerRow() {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth >= 1536) return 4;
    if (window.innerWidth >= 1280) return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  useEffect(() => {
    const handleResize = () => setJobsPerRowResponsive(getJobsPerRow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // === SPLIT LIST ===
  const sliderJobs = jobsRecommend.slice(0, SLIDER_COUNT);
  const remainingJobs = jobsRecommend.slice(SLIDER_COUNT);

  // === FIRST ROW ===
  const firstRowJobs = sliderJobs.slice(0, jobsPerRowResponsive);

  // === SHOW MORE JOBS ===
  let showMoreJobs: typeof jobsRecommend = [];
  if (visibleJobsCount > 0) {
    const sliderRemaining = sliderJobs.slice(jobsPerRowResponsive); // job thừa của slider
    const additionalJobs = remainingJobs.slice(
      0,
      Math.max(0, visibleJobsCount - sliderRemaining.length),
    );
    showMoreJobs = [...sliderRemaining, ...additionalJobs];
  }

  // === HANDLERS ===
  const handleArrowClick = () => {
    if (sliderOffset + jobsPerRowResponsive < sliderJobs.length) {
      setSliderOffset(sliderOffset + 1);
    } else {
      setSliderOffset(0);
    }
  };

  const handleShowMore = () => {
    setSliderOffset(0); // reset slider
    setVisibleJobsCount(visibleJobsCount + JOBS_PER_SHOW_MORE);
  };

  // === JOBS TO RENDER ===
  const jobsToRender =
    visibleJobsCount === 0
      ? sliderJobs.slice(sliderOffset, sliderOffset + jobsPerRowResponsive)
      : [...firstRowJobs, ...showMoreJobs];

  return (
    <section className="bg-white px-[60px] py-20 xl:px-[120px]">
      <div className="flex flex-col items-center">
        {/* Title */}
        <h1 className="mb-6 text-center text-3xl leading-[1.405] font-black tracking-[0.1em]">
          <span className="block text-base font-semibold tracking-[0.05em]">
            あなたの自己分析結果からの
          </span>
          おすすめ求人
        </h1>

        {/* Job Grid */}
        <div className="mx-auto xl:max-w-[calc(320px*3+40px*2)] 2xl:max-w-[calc(320px*4+40px*3)]">
          <div className="relative mx-auto mb-12 grid grid-cols-1 justify-center gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
            {/* Jobs */}
            {jobsToRender.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                toggleLike={toggleLike}
                likedIds={likedIds}
              />
            ))}

            {/* Arrow ONLY for slider (visibleJobsCount === 0) */}
            {visibleJobsCount === 0 &&
              sliderJobs.length > jobsPerRowResponsive && (
                <div
                  className="bg-blue-primary absolute top-[141px] right-[-25px] z-2 flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full border-[2px] border-white text-white transition-all duration-300 hover:brightness-110"
                  onClick={handleArrowClick}
                >
                  <ChevronRightIcon className="h-6 w-6 transition-all duration-300 hover:scale-110" />
                </div>
              )}
          </div>
        </div>

        {/* Show More Button */}
        {firstRowJobs.length + showMoreJobs.length < jobsRecommend.length && (
          <AppPrimaryButton label="求人をもっと見る" onClick={handleShowMore} />
        )}
      </div>
    </section>
  );
};

export default RecommendedJobsSection;
