import JobsDetailPage from "@/components/pages/jobs/JobsDetailPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "検索結果詳細",
};
export default function Page() {
  return <JobsDetailPage />;
}
