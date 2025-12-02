import { Metadata } from "next";
import SetPasswordPage from "@/components/pages/set-password/SetPasswordPage";

export const metadata: Metadata = {
  title: "パスワード設定",
};

export default function SetPassword() {
  return <SetPasswordPage />;
}
