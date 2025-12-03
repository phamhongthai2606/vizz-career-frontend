import ForgotPasswordPage from "@/components/pages/forgot-password/ForgotPasswordPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "アカウント作成",
};

export default function ForgotPassword() {
  return (
    <>
      <ForgotPasswordPage />
    </>
  );
}
