import JobsPage from "@/components/pages/jobs/JobsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "検索結果",
};

export default function Page() {
  return <JobsPage />;
}
