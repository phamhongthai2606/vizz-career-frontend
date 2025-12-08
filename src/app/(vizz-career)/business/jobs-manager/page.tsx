import { Metadata } from "next";
import JobsManagerPage from "@/components/pages/jobs-manager/JobsManagerPage";

export const metadata: Metadata = {
  title: "TOP_求人管理_求人一覧",
};

export default function Page() {
  return <JobsManagerPage />;
}
