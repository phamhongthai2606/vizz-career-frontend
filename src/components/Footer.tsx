"use client";

import { ChevronUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MobileFooter = () => {
  const pathCurrent = usePathname();
  const showFooter = ![
    "/login",
    "/registration",
    "/start",
    "/additional-profile",
  ].includes(pathCurrent);
  const showButtonScrollTop = !pathCurrent?.startsWith("/chat");
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <React.Fragment>
      {showFooter && (
        <footer className="bg-blue-primary space-y-[27px] pt-6 pb-9 text-center text-white">
          {/* Link footer */}
          <div className="font-noto-jp flex justify-center gap-x-9 text-xs leading-[1.2] font-normal">
            <Link href="#">ご利用ガイド</Link>
            <Link href="#">よくある質問</Link>
            <Link href="#">プライバシーポリシー</Link>
            <Link href="#">サイトマップ</Link>
          </div>

          {/* Logo */}
          <div className="flex justify-center">
            <Link href="/" className="relative block cursor-pointer">
              <Image
                alt="Logo Coco Career Footer"
                src="/logo-footer.png"
                priority
                sizes="169px"
                width={169}
                height={57}
                className="object-cover"
              />
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-xs leading-[1.2]">
            ©coco motion, inc. All rights reserved.
          </div>
        </footer>
      )}

      {/* Button Scroll Top */}
      {showButtonScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-4 bottom-[90px] z-[1000] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-yellow-400 text-white shadow-lg transition-colors duration-300 hover:bg-yellow-500"
        >
          <ChevronUpIcon className="h-5 w-5" />
        </button>
      )}
    </React.Fragment>
  );
};

export default MobileFooter;
