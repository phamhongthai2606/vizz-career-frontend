import { Metadata } from "next";
import CreateBusinessPage from "@/components/pages/create-business/CreateBusinessPage";

export const metadata: Metadata = {
  title: "会社管理",
};

export default function CreateBusiness() {
  return <CreateBusinessPage />;
}
