import CocoLoginPage from "@/components/pages/login/CocoLoginPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ログイン - COCO CAREER",
  description: "COCO CAREERへログイン",
};

export default function CocoLogin() {
  return <CocoLoginPage />;
}
