"use client";

import { useState } from "react";
import ProfileHeader from "@/components/common/ProfileHeader";
import ProfileSidebar from "@/components/pages/profile/ProfileSidebar";
import Footer from "@/components/common/Footer";
import BasicInfoSection from "./sections/BasicInfoSection";
import EducationSection from "./sections/EducationSection";
import PreferencesSection from "./sections/PreferencesSection";
import SkillsSection from "./sections/SkillsSection";
import SelfPRSection from "./sections/SelfPRSection";
import PortfolioSection from "./sections/PortfolioSection";

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState("basic");
  return (
    <div className="flex min-h-screen flex-col bg-[#F9FAFB] overflow-hidden">
      <ProfileHeader />

      <div className="mt-[81px] pl-[100px] flex w-full flex-1 flex-col">
        <div className="mx-auto w-full max-w-[1280px] px-[100px] py-10">
          <h1 className="mb-10 text-2xl font-bold tracking-[0.96px] text-[#2D2D2D]">
            プロフィール
          </h1>

          <div className="flex gap-5">
            <ProfileSidebar
              activeSection={activeSection}
              onSectionChange={setActiveSection}
            />

            <div className="flex w-[680px] flex-col gap-10">
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

      <Footer />
    </div>
  );
}
