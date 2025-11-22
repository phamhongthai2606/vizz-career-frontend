import StartPage from "@/components/pages/start/StartPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "スタートページ",
};

export default function Start() {
  return <StartPage />;
}
