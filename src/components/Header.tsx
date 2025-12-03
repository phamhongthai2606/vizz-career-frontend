"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppPrimaryLinkButton } from "@/components/common/button/AppPrimaryLinkButton";
import { usePathname } from "next/navigation";
import { useRouter } from "next-nprogress-bar";

export default function Header() {
  const router = useRouter();
  const pathCurrent = usePathname();

  // Login?
  const notLoginPages = [
    "/login",
    "/registration",
    "/start",
    "/additional-profile",
  ];
  const isLoggedIn = !notLoginPages.includes(pathCurrent);

  // Show Content Header?
  const isPrimaryHeader = ![
    "/login",
    "/registration",
    "/start",
    "/additional-profile",
  ].includes(pathCurrent);

  // Show Dropdown Menu
  const [isOpenDropDownMenu, setIsOpenDropDownMenu] = useState(false);
  const handleToggleDropDownMenu = () =>
    setIsOpenDropDownMenu(!isOpenDropDownMenu);
  const handleCloseDropdown = () => {
    setIsOpenDropDownMenu(false);
  };

  // Close dropdown menu when clicking out
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        handleCloseDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Logout
  const handleLogout = async () => {
    router.push("/login");
  };

  return (
    <header
      className={`${
        isPrimaryHeader
          ? "border-b-natural-gray-200 border-b bg-white shadow-[0_4px_4px_0_rgba(103,103,103,0.1)]"
          : "bg-[#f9fafb]"
      } flex justify-between px-12 py-5`}
    >
      {/* Logo Header */}
      <Link href="/" className="relative block cursor-pointer">
        <Image
          alt="Logo Coco Career Header"
          src="/logo-header.png"
          priority
          sizes="121px"
          width={121}
          height={41}
          className="object-cover"
        />
      </Link>

      {/* Content Header */}
      {isPrimaryHeader && (
        <div className="relative flex items-center justify-center gap-x-10">
          <div className="flex justify-center gap-x-5">
            <Link
              href="#"
              className="flex flex-col items-center justify-between gap-1.5 border-r border-gray-300 pr-5"
            >
              <Image
                alt="Mail Header"
                src="/mail-header.png"
                priority
                sizes="16px"
                width={16}
                height={16}
                className="object-cover"
              />
              <p className="text-sm tracking-[0.1em]">メッセージ</p>
            </Link>

            <Link
              href="/applications"
              className="flex flex-col items-center justify-between gap-1.5 border-r border-gray-300 pr-5"
            >
              <Image
                alt="Calendar Header"
                src="/calendar-header.png"
                priority
                sizes="16px"
                width={16}
                height={16}
                className="object-cover"
              />
              <p className="text-sm tracking-[0.1em]">応募管理</p>
            </Link>

            <Link
              href="/favourite"
              className="flex flex-col items-center justify-between gap-1.5"
            >
              <Image
                alt="Heart Header"
                src="/heart-header.png"
                priority
                sizes="16px"
                width={15.89}
                height={13.45}
                className="object-cover"
              />
              <p className="text-sm tracking-[0.1em]">お気に入り</p>
            </Link>
          </div>

          {!isLoggedIn ? (
            <AppPrimaryLinkButton label="ログイン" href="/login" />
          ) : (
            <div ref={dropdownRef} className="relative">
              {/* Name User */}
              <div
                onClick={handleToggleDropDownMenu}
                className={`cursor-pointer gap-2.5 text-sm font-semibold tracking-[0.1em] text-black`}
              >
                {"山田\u3000太郎\u3000様"}
              </div>

              {/* Dropdown Menu */}
              {isOpenDropDownMenu && (
                <div className="absolute top-full right-0 z-50 mt-[9px] rounded border border-gray-300 bg-white p-3">
                  <Link
                    href="/profile"
                    className="hover:bg-gray-primary-light block h-[37px] w-[176px] px-3 py-2 text-sm tracking-[0.1em] text-black"
                    onClick={() => handleCloseDropdown()}
                  >
                    プロフィール
                  </Link>
                  <Link
                    href="#"
                    className="hover:bg-gray-primary-light block h-[37px] w-[176px] border-b border-b-gray-300 px-3 py-2 text-sm tracking-[0.1em] text-black"
                    onClick={() => handleCloseDropdown()}
                  >
                    アカウント設定
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="hover:bg-gray-primary-light h-[37px] w-[176px] px-3 py-2 text-left text-sm tracking-[0.1em] text-black"
                  >
                    ログアウト
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </header>
  );
}
