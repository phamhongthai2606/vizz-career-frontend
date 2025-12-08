import { Metadata } from "next";
import BusinessPage from "@/components/pages/business/BusinessPage";

export const metadata: Metadata = {
  title: "会社管理",
};

export default function Business() {
  return <BusinessPage />;
}
