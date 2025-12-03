"use client";

import { useState } from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { FiUpload, FiSend } from "react-icons/fi";
import { FiShare } from "react-icons/fi";
import Link from "next/link";

type MessageItem = {
  id: number;
  companyName: string;
  badge: number;
  title: string;
  preview: string;
};

type ChatMessage = {
  id: number;
  content: string;
  fromUser: boolean; // true = người dùng, false = công ty
  time: string; // 2025/12/09 12:00
};

export default function ChatPage() {
  const [selectedMessage, setSelectedMessage] = useState<MessageItem | null>(
    null,
  );

  const messageList: MessageItem[] = [
    {
      id: 0,
      companyName: "株式会社GOAL-1",
      badge: 1,
      title:
        "経験者募集！一緒に会社の未来を創っていく！イイスタリール動画作成者！！",
      preview:
        "お世話になっております。今回の面接は8月12日13時30分オンラインでお願いします。",
    },
    {
      id: 1,
      companyName: "株式会社GOAL-2",
      badge: 0, // sẽ ẩn badge
      title: "新卒歓迎！フロントエンドエンジニア募集",
      preview: "よろしくお願いします。応募ありがとうございます。",
    },
    {
      id: 2,
      companyName: "株式会社GOAL-3",
      badge: 2,
      title: "バックエンドエンジニア急募",
      preview: "面接の日程を確認してください。",
    },
    {
      id: 3,
      companyName: "株式会社GOAL-4",
      badge: 1,
      title: "デザイナー募集中！",
      preview: "ポートフォリオを送っていただけますか？",
    },
    {
      id: 4,
      companyName: "株式会社GOAL-5",
      badge: 0, // sẽ ẩn badge
      title: "マーケティング担当者募集",
      preview: "質問がありますので返信お願いします。",
    },
  ];

  const chatList: ChatMessage[] = [
    {
      id: 1,
      content: "こんにちは、応募ありがとうございます。",
      fromUser: false,
      time: "2025/12/09 12:00",
    },
    {
      id: 2,
      content: "はじめまして。よろしくお願いします。",
      fromUser: true,
      time: "2025/12/09 12:05",
    },
    {
      id: 3,
      content: selectedMessage?.preview || "",
      fromUser: false,
      time: "2025/12/09 12:10",
    },
  ];

  return (
    <div
      className="flex w-full bg-white"
      style={{ height: "calc(100vh - 80px)" }}
    >
      {/* Sidebar messages */}
      <div className="flex w-1/3 flex-col gap-6 border-r border-gray-300 p-6">
        {/* Header */}
        <div className="flex-shrink-0 space-y-3">
          <h1 className="text-xl font-bold tracking-[0.04em]">
            企業からメッセージ
          </h1>

          <div className="flex flex-row gap-3">
            <select className="flex-1 cursor-pointer rounded border px-3 py-2 text-sm xl:max-w-[160px]">
              <option>最新順</option>
              <option>古い順</option>
            </select>
            <select className="flex-1 cursor-pointer rounded border px-3 py-2 text-sm xl:max-w-[160px]">
              <option>すべて</option>
            </select>
          </div>
        </div>

        {/* Message list */}
        <div className="flex-1 space-y-6 overflow-y-auto">
          {messageList.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedMessage(item)}
              className="flex cursor-pointer items-start gap-2 rounded p-3 hover:bg-[#F3F3F3]"
            >
              <img
                src="/home/banner-bg.png"
                alt="avatar"
                className="h-20 w-20 rounded-full object-cover"
              />

              <div className="flex-1 space-y-2">
                <div className="flex w-full items-center justify-between gap-x-2">
                  <div className="flex min-w-0 flex-1 items-center gap-x-2">
                    <p className="truncate text-base font-bold tracking-[0.1em]">
                      {item.companyName}
                    </p>
                    {item.badge >= 1 && (
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#F56C6C] text-sm tracking-[0.1em] text-white">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <LiaBarsSolid className="h-6 w-6 flex-shrink-0 text-gray-700" />
                </div>

                <p className="line-clamp-2 text-sm tracking-[0.1em] text-gray-700">
                  {item.title}
                </p>

                <div className="bg-gray-primary-light rounded-sm p-2">
                  <p className="line-clamp-2 text-sm tracking-[0.1em] text-gray-700">
                    {item.preview}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat content */}
      <div className="flex flex-1 flex-col p-6">
        {!selectedMessage ? (
          <div className="flex flex-1 items-center justify-center">
            <p className="text-2xl tracking-[0.1em] text-gray-700">
              メッセージを選択してください
            </p>
          </div>
        ) : (
          <div className="flex h-full w-full flex-col">
            {/* Header bên phải */}
            <div className="-mx-6 mb-6 flex items-center justify-between gap-x-10 border-b border-gray-300 px-6 pb-6">
              <div className="flex flex-shrink-0 items-center gap-3">
                <img
                  src="/home/banner-bg.png"
                  className="h-13 w-13 rounded-full object-cover"
                />
                <div className="space-y-2">
                  <p className="truncate text-base font-bold tracking-[0.1em]">
                    {selectedMessage.companyName}
                  </p>
                  <p className="line-clamp-2 text-sm tracking-[0.1em] text-gray-700">
                    {selectedMessage.title}
                  </p>
                </div>
              </div>
              <Link
                href="#"
                className="text-blue-primary border-blue-primary flex h-[40px] w-[140px] items-center justify-center gap-2 rounded-full border"
              >
                <FiShare className="h-4 w-4" />
                募集を確認
              </Link>
            </div>

            {/* Nội dung chat scroll được */}
            <div className="flex-1 space-y-4 overflow-y-auto">
              {chatList.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-end gap-x-2 ${msg.fromUser ? "justify-end" : ""}`}
                >
                  {/* Tin nhắn công ty (trái) */}
                  {!msg.fromUser && (
                    <>
                      <p className="w-fit rounded-lg bg-gray-100 p-3 tracking-[0.1em] text-gray-700">
                        {msg.content}
                      </p>
                      <span className="text-xs text-gray-500">{msg.time}</span>
                    </>
                  )}

                  {/* Tin nhắn người dùng (phải) */}
                  {msg.fromUser && (
                    <>
                      <span className="text-xs text-gray-500">{msg.time}</span>
                      <p className="w-fit rounded-lg bg-blue-600 p-3 tracking-[0.1em] text-white">
                        {msg.content}
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Send Box cố định */}
            <div className="-mx-6 mt-6 flex-shrink-0 border-t border-gray-300 bg-white px-6 pt-6">
              <div className="flex items-center gap-3">
                <button className="text-blue-900">
                  <FiUpload className="h-6 w-6" />
                </button>

                <input
                  type="text"
                  placeholder="メッセージを入力"
                  className="flex-1 rounded-lg border border-blue-900 px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none"
                />

                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E9EBF8] text-blue-800">
                  <FiSend className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
