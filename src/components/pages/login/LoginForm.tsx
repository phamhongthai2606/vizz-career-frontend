"use client";

import React from "react";
import { ChevronRight, Check } from "lucide-react";
import Image from "next/image";
import "@/components/pages/login/styles/login.css";

export default function LoginPage() {
  return (
    <div className="login-container bg-[#f9fafb]">
      <header className="header">
        <div className="logo">
          <img src="/logo.png" alt="Coco Logo" />
        </div>
      </header>

      <div className="comment-note">
        <div className="rounded-lg border-2 border-[#4bccbe] bg-[#ffffff] p-4 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="mb-2 inline-block rounded bg-[#4bccbe] px-2 py-1 text-xs font-medium text-[#ffffff]">
                台様
              </div>
              <p className="mb-3 text-sm text-[#2d2d2d] font-bold">
                ラインでログインできる？
              </p>
              <div className="flex items-center gap-2">
                <div className="relative h-6 w-6">
                  <Image
                    src="/diverse-user-avatars.png"
                    alt="Heri, Maya"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                </div>
                <span className="text-xs text-[#2d2d2d] font-bold">
                  Heri, Maya
                </span>
                <span className="text-xs text-[#99a9b0]">
                  2025-11-25 21:17:00
                </span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#59bb0c]">
                <Check className="h-4 w-4 text-[#ffffff]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="login-form">
        <div className="login-block">
          <div className="text-label">ログイン</div>
          <div className="ui-panel">
            <div className="w7-text">coco career</div>
            <button className="line-btn">
              <img src="/line.png" alt="Line Logo" className="line-logo" />
              <div className="text-white-14">LINEで登録・ログイン</div>
            </button>
          </div>

          <div className="primary-base-group">
            <a href="" className="flex items-center gap-1 text-sm text-[#2d2d2d] underline">
              <div className="text-w5-14">企業担当者はこちら</div>
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}