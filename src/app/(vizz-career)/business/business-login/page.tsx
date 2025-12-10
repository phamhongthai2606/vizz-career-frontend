import BusinessLoginPage from "@/components/pages/business-login/BusinessLoginPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ログイン",
};

export default function BusinessLogin() {
  return (
    <>
      <BusinessLoginPage />
    </>
  );
}
