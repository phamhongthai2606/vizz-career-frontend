import { AppPrimaryLinkButton } from "@/components/common/button/AppPrimaryLinkButton";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function JobCard({
  job,
  toggleLike,
  likedIds,
}: {
  job: {
    id: number | string;
    title: string;
    jobType: string;
    preferredGradeYear: string;
    workdays: string;
    location: string;
    locationEn: string;
    nearestStations: string;
    salary: string;
    commitment: string;
  };
  toggleLike: (id: number | string) => void;
  likedIds: (number | string)[];
}) {
  const isLiked = likedIds.includes(job.id);

  return (
    <div className="flex flex-col rounded-sm border border-[#d0d0d0] bg-white">
      <div className="flex items-start justify-between border-b border-[#d0d0d0] p-6 text-base">
        {/* LEFT */}
        <div className="flex-1">
          <div className="flex items-center">
            <span className="mb-1 text-sm text-gray-700">株式会社BlueAI</span>
          </div>
          <h2 className="mb-4 text-sm text-[17px] leading-[24px] font-bold">
            {job.title}
          </h2>
        </div>
        {/* RIGHT */}
        {job.location && (
          <div>
            <span className="mb-3 inline-block rounded-md border border-[#1F2A70] bg-[rgba(31,42,112,0.06)] px-3 py-1 text-xs text-[#1F2A70]">
              {job.location}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-y-[12px] border-b border-[#d0d0d0] p-6 text-sm">
        <div className="flex items-center">
          <span className="w-[120px] flex-shrink-0">職種</span>
          <span className="ml-[12px] flex-1 truncate">{job.jobType}</span>
        </div>
        <div className="flex items-center">
          <span className="w-[120px] flex-shrink-0">採用希望学年</span>
          <span className="ml-[12px] flex-1 truncate">
            {job.preferredGradeYear}
          </span>
        </div>
        <div className="flex items-center">
          <span className="w-[120px] flex-shrink-0">勤務日数</span>
          <span className="ml-[12px] flex-1 truncate">{job.workdays}</span>
        </div>
        <div className="flex items-center">
          <span className="w-[120px] flex-shrink-0">勤務地</span>
          <span className="ml-[12px] flex-1 truncate">
            {job.nearestStations}
          </span>
        </div>
        <div className="flex items-center">
          <span className="w-[120px] flex-shrink-0">給与</span>
          <span className="ml-[12px] flex-1 truncate">{job.salary}</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-x-3 p-6 text-base">
        <button
          onClick={() => toggleLike(job.id)}
          aria-pressed={isLiked}
          className={
            "relative min-h-[40px] rounded-full border border-[#d0d0d0] bg-white px-8 py-2 pl-12 text-sm tracking-[0.1em] text-black"
          }
        >
          <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2">
            {isLiked ? (
              <AiFillHeart className="text-2xl text-red-500" />
            ) : (
              <AiOutlineHeart className="text-2xl text-gray-400" />
            )}
          </span>
          <span>お気に入り追加</span>
        </button>
        <AppPrimaryLinkButton
          label="この求人を詳しく見る"
          href={`/jobs/${job.id}`}
        />
      </div>
    </div>
  );
}
