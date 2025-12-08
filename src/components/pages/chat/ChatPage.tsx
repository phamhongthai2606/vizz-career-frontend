"use client";
import { LiaBarsSolid } from "react-icons/lia";
import { FiSend } from "react-icons/fi";
import Link from "next/link";
import { AppPrimaryButton } from "@/components/common/button/AppPrimaryButton";
import { FaStar } from "react-icons/fa";
import SafeHTML from "@/components/common/SafeHTML";
import { FaArrowDown } from "react-icons/fa";
import Dropdown from "@/components/pages/chat/components/Dropdown";
import useChatPage from "@/components/pages/chat/useChatPage";

export default function ChatPage() {
  const {
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
  } = useChatPage();

  return (
    <div
      className="flex w-full bg-white"
      style={{ height: "calc(100vh - 80px)" }}
    >
      {/* Sidebar messages */}
      <section className="flex w-1/3 flex-col gap-6 border-r border-gray-300 p-6">
        {/* Header */}
        <div className="flex-shrink-0 space-y-3">
          <h1 className="text-xl font-bold tracking-[0.04em]">
            企業からメッセージ
          </h1>

          {/* FILTER BAR */}
          <div className="flex flex-row gap-3">
            <Dropdown
              options={sortOptions}
              value={sortValue}
              onChange={setSortValue}
              className="flex-1 xl:max-w-[160px]"
            />

            <Dropdown
              options={filterOptions}
              value={filterValue}
              onChange={setFilterValue}
              className="flex-1 xl:max-w-[160px]"
            />
          </div>
        </div>

        {/* Message list */}
        <div className="flex-1 space-y-6 overflow-y-auto">
          {messageList.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedMessage(item)}
              className={`flex cursor-pointer items-start gap-2 rounded p-3 ${selectedMessage?.id === item.id ? "bg-[#F3F3F3]" : "hover:bg-[#F3F3F3]"}`}
            >
              <img
                src="/home/banner-bg.png"
                alt="avatar"
                className="h-20 w-20 rounded-full object-cover"
              />

              <div className="flex-1 space-y-2">
                {/* Check trạng thái */}
                {item.status === "APPROVED" && (
                  <div className="border-green-light bg-green-extra-light text-txt-green inline-block rounded-sm border px-2 py-[5px] text-xs tracking-[0.1em]">
                    内定
                  </div>
                )}
                {item.status === "REJECTED" && (
                  <div className="border-red-light bg-red-extra-light text-txt-red inline-block rounded-sm border px-2 py-[5px] text-xs tracking-[0.1em]">
                    辞退
                  </div>
                )}

                {/* Nội dung item of list */}
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
      </section>

      {/* Chat content */}
      <section className="flex flex-1 flex-col p-6">
        {!selectedMessage ? (
          <div className="flex flex-1 items-center justify-center">
            <p className="text-2xl tracking-[0.1em] text-gray-700">
              メッセージを選択してください
            </p>
          </div>
        ) : (
          <div className="flex h-full w-full flex-col">
            {/* Header nội dung chat */}
            <div className="-mx-6 mb-6 flex items-center justify-between gap-x-10 border-b border-gray-300 px-6 pb-6 shadow-[0_4px_4px_0_rgba(103,103,103,0.1)]">
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <img
                  src="/home/banner-bg.png"
                  className="h-13 w-13 rounded-full object-cover"
                />
                <div className="min-w-0 flex-1 space-y-2">
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
                className="text-blue-primary border-blue-primary flex h-[40px] w-[140px] flex-shrink-0 items-center justify-center gap-2 rounded-full border whitespace-nowrap"
              >
                <img
                  className="h-4 w-4"
                  src="/chat/share.png"
                  alt="Share Icon"
                />
                募集を確認
              </Link>
            </div>

            {/* Nội dung chat scroll được */}
            <div
              ref={chatContainerRef}
              onScroll={handleScroll}
              className="relative flex-1 space-y-4 overflow-y-auto"
            >
              {chatList.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-end gap-x-3 ${msg.fromUser ? "justify-end" : ""}`}
                >
                  {/* Tin nhắn công ty (trái) */}
                  {!msg.fromUser && (
                    <>
                      <p className="w-fit rounded-lg rounded-tl-none bg-gray-100 p-3 text-sm tracking-[0.1em]">
                        <SafeHTML html={msg.content} />
                      </p>
                      <span className="text-[10px] tracking-[0.1em] text-gray-500">
                        {msg.time}
                      </span>
                    </>
                  )}

                  {/* Tin nhắn người dùng (phải) */}
                  {msg.fromUser && (
                    <>
                      <span className="text-[10px] tracking-[0.1em] text-gray-500">
                        {msg.time}
                      </span>
                      <p className="bg-blue-primary w-fit rounded-lg rounded-tr-none p-3 text-sm tracking-[0.1em] text-white">
                        <SafeHTML html={msg.content} />
                      </p>
                    </>
                  )}
                </div>
              ))}

              {/* Button xác nhận lịch */}
              <div className="flex w-full justify-center p-6">
                <AppPrimaryButton
                  label="内定を確定する"
                  iconBeforeLabel={<FaStar className="h-4 w-4 text-white" />}
                  className="h-10 w-60"
                  classNameLabel="tracking-[0.1em]"
                />
              </div>

              {/* Button Scroll Down */}
              {showScrollDown && (
                <button
                  onClick={() => {
                    chatContainerRef.current!.scrollTop =
                      chatContainerRef.current!.scrollHeight;
                  }}
                  className="bg-blue-primary/40 absolute bottom-4 left-1/2 flex h-10 w-10 -translate-x-1/2 transform cursor-pointer items-center justify-center rounded-full text-white shadow-lg"
                >
                  <FaArrowDown className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Send Box cố định */}
            <div className="-mx-6 mt-6 flex-shrink-0 border-t border-gray-300 bg-white px-6 pt-6">
              <div className="flex items-center gap-2.5">
                <button className="cursor-pointer text-blue-900">
                  <img
                    className="h-6 w-6"
                    src="/chat/upload.png"
                    alt="Upload Icon"
                  />
                </button>

                <input
                  type="text"
                  placeholder="メッセージを入力"
                  className="border-blue-primary text-txt-default h-10 w-full flex-1 rounded-sm border px-3 py-2 text-sm tracking-[0.1em] placeholder-gray-400 focus:outline-none"
                />

                <button className="bg-gray-primary-light flex h-10 w-10 cursor-pointer items-center justify-center rounded-full">
                  <FiSend className="h-5 w-5 text-white hover:text-blue-800" />
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
