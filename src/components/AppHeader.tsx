"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import BusinessHeader from "@/components/BusinessHeader";

export default function AppHeader() {
  const pathname = usePathname();
  const isBusinessPage = pathname.startsWith("/business");
  return isBusinessPage ? <BusinessHeader /> : <Header />;
}
