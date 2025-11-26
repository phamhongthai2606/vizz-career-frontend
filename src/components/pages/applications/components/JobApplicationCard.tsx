import { ChatIcon } from "@/components/common/icons/ChatIcon";

const BUTTON_WIDTH = "w-[150px]";

export default function JobApplicationCard({
  status,
  jobType,
}: {
  status: string;
  jobType?: string;
}) {
  // Tailwind-based status styles
  const statusClass: Record<string, string> = {
    応募済み:
      "text-[#1F2A70] border border-[#1F2A70] bg-[rgba(31,42,112,0.06)]",
    辞退: "text-[#D11D1D] border border-[#F2A8A8] bg-[#FDECEC]",
  };

  // Job types → Japanese label
  const jobTypeLabel: Record<string, string> = {
    engineer: "エンジニア",
    design: "デザイン",
    sales: "営業",
  };

  return (
    <div className="flex rounded-xl border border-gray-200 bg-white p-6">
      {/* LEFT */}
      <div className="flex-1">
        {/* Status tag */}
        <span
          className={`mb-3 inline-block rounded-md px-3 py-1 text-xs ${
            statusClass[status] ?? ""
          }`}
        >
          {status}
        </span>

        {/* Title + job type prefix */}
        <h2 className="mb-4 text-base leading-[24px] font-bold text-[#141461]">
          {/* Nếu có jobType → thêm text ngay đầu */}
          {jobType && jobTypeLabel[jobType] && (
            <span className="mr-2 font-medium text-[#1F2A70]">
              {jobTypeLabel[jobType]}
            </span>
          )}
          【圧倒的な営業力を身に着ける】事業拡大による限定募集！
          社会人に負けない営業力を！ ＃1,2年生歓迎 ＃土日出勤 ＃圧倒的成長
          ＃埼玉県 ＃東京都
        </h2>

        <p className="mb-1 text-sm text-gray-700">株式会社BlueAI</p>

        <div className="text-xs text-gray-500">
          応募日時：2025年7月30日 15:31
        </div>
      </div>

      {/* RIGHT BUTTONS */}
      <div className="ml-6 flex flex-col items-end justify-center gap-3">
        {/* メッセージ */}
        <button
          className={`flex h-9 items-center justify-center gap-2 rounded-full bg-[#141461] px-4 text-sm font-medium text-white transition hover:opacity-90 ${BUTTON_WIDTH}`}
        >
          <ChatIcon size={16} />
          メッセージ
        </button>

        {/* 辞退する */}
        <button
          className={`flex h-9 items-center justify-center rounded-full border border-[#141461] bg-white px-4 text-sm font-medium text-[#141461] transition hover:bg-[#F7F8FD] ${BUTTON_WIDTH}`}
        >
          辞退する
        </button>
      </div>
    </div>
  );
}
