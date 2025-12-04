"use client";
import { useState, useRef, useEffect } from "react";

export type MessageStatus = "APPROVED" | "REJECTED" | null;

export type MessageItem = {
  id: number;
  companyName: string;
  badge: number;
  title: string;
  preview: string;
  status?: MessageStatus;
};

export type ChatMessage = {
  id: number;
  content: string;
  fromUser: boolean;
  time: string;
};

export default function useChatPage() {
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  // Sidebar: item đang chọn
  const [selectedMessage, setSelectedMessage] = useState<MessageItem | null>(
    null,
  );

  // Show button scroll down
  const [showScrollDown, setShowScrollDown] = useState(false);

  const handleScroll = () => {
    const el = chatContainerRef.current;
    if (!el) return;

    const isAtBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 10;

    setShowScrollDown(!isAtBottom);
  };

  // Scroll xuống cuối khi đổi selectedMessage
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [selectedMessage]);

  // DATA FILTER
  const sortOptions = [
    { label: "最新順", value: "newest" },
    { label: "古い順", value: "oldest" },
  ];
  const filterOptions = [{ label: "すべて", value: "all" }];
  const [sortValue, setSortValue] = useState("newest");
  const [filterValue, setFilterValue] = useState("all");

  // DATA LIST
  const messageList: MessageItem[] = [
    {
      id: 0,
      companyName: "株式会社GOAL-1",
      badge: 1,
      title:
        "経験者募集！一緒に会社の未来を創っていく！イイスタリール動画作成者！！",
      preview:
        "お世話になっております。今回の面接は8月12日13時30分オンラインでお願いします。",
      status: "APPROVED",
    },
    {
      id: 1,
      companyName: "株式会社GOAL-2",
      badge: 0,
      title: "新卒歓迎！フロントエンドエンジニア募集",
      preview: "よろしくお願いします。応募ありがとうございます。",
      status: null,
    },
    {
      id: 2,
      companyName: "株式会社GOAL-3",
      badge: 2,
      title: "バックエンドエンジニア急募",
      preview: "面接の日程を確認してください。",
      status: "REJECTED",
    },
    {
      id: 3,
      companyName: "株式会社GOAL-4",
      badge: 1,
      title: "デザイナー募集中！",
      preview: "ポートフォリオを送っていただけますか？",
      status: "APPROVED",
    },
    {
      id: 4,
      companyName: "株式会社GOAL-5",
      badge: 0,
      title: "マーケティング担当者募集",
      preview: "質問がありますので返信お願いします。",
    },
  ];

  const chatList: ChatMessage[] = [
    {
      id: 1,
      content: "はじめまして。この度はご応募ありがとうございます。",
      fromUser: false,
      time: "2025/12/09 12:00",
    },
    {
      id: 2,
      content: "はじめまして。メッセージありがとうございます。",
      fromUser: true,
      time: "2025/12/09 12:05",
    },
    {
      id: 3,
      content:
        "ご返信ありがとうございます。ぜひ一度カジュアル面談をさせていただきたいです。\n下記の日程からご希望の日程を選択していいただけると助かります。",
      fromUser: false,
      time: "2025/12/09 12:10",
    },
    {
      id: 4,
      content:
        "202X年〇月◯日◯曜日 18:00〜\n202X年〇月◯日◯曜日 18:00〜\n202X年〇月◯日◯曜日 18:00〜\n202X年〇月◯日◯曜日 18:00〜",
      fromUser: false,
      time: "2025/12/09 12:12",
    },
    {
      id: 5,
      content:
        "日程のご提案ありがとうございます。\n202X年〇月◯日◯曜日 18:00〜\n上記の日程でお願いします。",
      fromUser: true,
      time: "2025/12/09 12:13",
    },
    {
      id: 6,
      content:
        "確認ありがとうございます。\n9/12 18:00~でお願いいたします。\n当日は下記のURLからご参加をお願い致します。\nhttps://meet.google.com/gjh-amch-cvx",
      fromUser: false,
      time: "2025/12/09 12:15",
    },
    {
      id: 7,
      content: "内定を送ります。\n確定をお願いします。",
      fromUser: false,
      time: "2025/12/09 12:18",
    },
  ];

  return {
    // state
    selectedMessage,
    setSelectedMessage,

    sortValue,
    setSortValue,

    filterValue,
    setFilterValue,

    showScrollDown,
    chatContainerRef,

    // options & data
    sortOptions,
    filterOptions,
    messageList,
    chatList,

    // handlers
    handleScroll,
  };
}
