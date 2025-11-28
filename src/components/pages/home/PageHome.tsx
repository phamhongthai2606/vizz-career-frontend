"use client";
import React from "react";
import SearchHome from "@/components/pages/home/SearchHome";
import { usePageHome } from "@/components/pages/home/usePageHome";
import SliderLogoSection from "@/components/pages/home/sections/SliderLogoSection";
import RecommendedJobsSection from "@/components/pages/home/sections/RecommendedJobsSection";
import JobsSection from "@/components/pages/home/sections/JobsSection";
import HagTagsSection from "@/components/pages/home/sections/HagtagsSection";
import FeaturedJobsSection from "@/components/pages/home/sections/FeaturedJobsSection";

export default function PageHome() {
  const {
    // handle like job
    likedIds,
    toggleLike,
    // call API
    jobsRecommend,
    jobs,
    jobsFeatured,
  } = usePageHome();

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
      <SliderLogoSection />

      {/* Recommended Jobs */}
      <RecommendedJobsSection
        jobsRecommend={jobsRecommend}
        toggleLike={toggleLike}
        likedIds={likedIds}
      />

      {/* Jobs */}
      <JobsSection jobs={jobs} toggleLike={toggleLike} likedIds={likedIds} />

      {/* Hagtag */}
      <HagTagsSection />

      {/* Featured Jobs */}
      <FeaturedJobsSection
        jobsFeatured={jobsFeatured}
        toggleLike={toggleLike}
        likedIds={likedIds}
      />
    </React.Fragment>
  );
}
