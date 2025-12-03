import EmailSentPage from "@/components/pages/email-sent/EmailSentPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "メール送信完了",
};

export default function EmailSent() {
  return <EmailSentPage />;
}
