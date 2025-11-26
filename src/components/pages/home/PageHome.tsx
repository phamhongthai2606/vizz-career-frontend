"use client";
import React from "react";
import SearchHome from "@/components/pages/home/SearchHome";

export default function PageHome() {
  return (
    <React.Fragment>
      <div
        className="relative mb-[90px] aspect-[1280/625] w-full bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: 'url("/home/banner-bg.png")' }}
      >
        <div className="absolute bottom-[-68px] left-1/2 h-[180px] w-full -translate-x-1/2">
          <SearchHome />
        </div>
      </div>
    </React.Fragment>
  );
}
