"use client";

import { useState } from "react";
import ProfileSidebar from "@/components/pages/profile/ProfileSidebar";
import BasicInfoSection from "./sections/BasicInfoSection";
import EducationSection from "./sections/EducationSection";
import PreferencesSection from "./sections/PreferencesSection";
import SkillsSection from "./sections/SkillsSection";
import SelfPRSection from "./sections/SelfPRSection";
import PortfolioSection from "./sections/PortfolioSection";

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState("basic");

  return (
    <div className="relative flex min-h-screen flex-col bg-[#F9FAFB]">
      {/* MAIN CONTENT */}
      <div className="flex w-full flex-1 flex-col pl-[100px]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-10 md:px-[100px]">
          <h1 className="mb-10 text-2xl font-bold text-[#2D2D2D]">
            プロフィール
          </h1>

          <div className="flex gap-5">
            {/* 👆 thêm padding-bottom để tạo khoảng cách với footer */}

            <ProfileSidebar
              activeSection={activeSection}
              onSectionChange={setActiveSection}
            />

            <div className="flex w-full max-w-[680px] flex-col gap-10">
              <BasicInfoSection />
              <EducationSection />
              <PreferencesSection />
              <SkillsSection />
              <SelfPRSection />
              <PortfolioSection />
            </div>
          </div>
        </div>
      </div>

      {/* SAVE BUTTON WRAPPER (STICKY) */}
      <div className="sticky right-0 bottom-0 left-0 z-50 border-t border-[#D0D0D0] bg-white shadow-lg">
        <div className="flex items-center justify-center py-4">
          <button className="h-10 w-60 rounded-full bg-[#111958] px-4 text-sm tracking-wider text-white">
            保存する
          </button>
        </div>
      </div>
    </div>
  );
}
