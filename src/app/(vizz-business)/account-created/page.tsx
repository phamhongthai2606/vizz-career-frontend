import AccountCreatedPage from "@/components/pages/account-created/AccountCreatedPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "アカウント作成_完了画面",
};

export default function AccountCreated() {
  return <AccountCreatedPage />;
}
