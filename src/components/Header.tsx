"use client";
import Image from "next/image";
import Link from "next/link";
import { AppPrimaryLinkButton } from "@/components/common/button/AppPrimaryLinkButton";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathCurrent = usePathname();
  const isPrimaryHeader = ![
    "/login",
    "/registration",
    "/start",
    "/additional-profile",
  ].includes(pathCurrent);

  return (
    <header
      className={`${
        isPrimaryHeader ? "border-b border-b-gray-200 bg-white" : "bg-[#f9fafb]"
      } flex justify-between px-12 py-5`}
    >
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

      {isPrimaryHeader && (
        <div className="flex items-center justify-center gap-x-10">
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
              href="#"
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
              href="#"
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

          <AppPrimaryLinkButton label="ログイン" href="/login" />
        </div>
      )}
    </header>
  );
}
