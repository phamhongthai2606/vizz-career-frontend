import ChatPage from "@/components/pages/chat/ChatPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TOP_メッセージ",
};

export default function Chat() {
  return (
    <>
      <ChatPage />
    </>
  );
}
