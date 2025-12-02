import React from "react";
import EmailSetPasswordPage from "@/components/pages/email-set-password/EmailSetPasswordPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "アカウント作成",
};

export default function EmailSetPassword() {
  return (
    <>
      <EmailSetPasswordPage />
    </>
  );
}
