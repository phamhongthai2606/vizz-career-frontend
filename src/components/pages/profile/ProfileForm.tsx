"use client";

import { useState, useEffect, useRef } from "react";
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

  const footerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [buttonTop, setButtonTop] = useState<number | null>(null);

  useEffect(() => {
    if (isFooterVisible && footerRef.current && contentRef.current) {
      const contentRect = contentRef.current.getBoundingClientRect();
      const footerRect = footerRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;

      const contentBottom = contentRect.bottom + scrollY;
      const footerTop = footerRect.top + scrollY;

      const top = contentBottom + (footerTop - contentBottom - 80) / 2;
      setButtonTop(top);
    }
  }, [isFooterVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
    );
    if (footerRef.current) observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#F9FAFB] overflow-hidden relative">
      <ProfileHeader />

      <div ref={contentRef} className="mt-[81px] pl-[100px] flex w-full flex-1 flex-col">
        <div className="mx-auto w-full max-w-[1280px] px-4 md:px-[100px] py-10">
          <h1 className="mb-10 text-2xl font-bold tracking-[0.96px] text-[#2D2D2D]">
            プロフィール
          </h1>

          <div className="flex gap-5">
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

      <div className={` ${isFooterVisible ? "absolute" : "fixed"}
        left-0 right-0 z-50 
        border-t border-[#D0D0D0] bg-white shadow-lg
      `}
       style={{
         bottom: isFooterVisible ? undefined : 0,
         top: isFooterVisible ? buttonTop ?? undefined : undefined,
       }}
      >
        <div className="flex items-center justify-center py-4">
          <button className="h-10 w-60 rounded-full bg-[#111958] px-4 text-sm tracking-wider text-white transition">
            保存する
          </button>
        </div>
      </div>

      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}
