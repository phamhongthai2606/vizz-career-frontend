import { Metadata } from "next";
import PageHome from "@/components/pages/home/PageHome";

export const metadata: Metadata = {
  title: "TOP_ログイン前",
};

export default function Home() {
  return <PageHome />;
}
