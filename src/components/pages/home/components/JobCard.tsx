import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface JobCardProps {
  job: {
    id: number | string;
    image?: string;
    title: string;
    location: string;
    category: string;
    position: string;
    schedule: string;
    salary: string;
    company: string;
    companyLogo: string;
  };
  toggleLike: (id: number | string) => void;
  likedIds: (number | string)[];
}

const JobCard: React.FC<JobCardProps> = ({ job, toggleLike, likedIds }) => {
  const isLiked = likedIds.includes(job.id);

  return (
    <div className="relative flex w-full flex-shrink-0 flex-col border border-gray-900 bg-white shadow-[0_4px_8px_rgba(0,0,0,0.25)] lg:w-[300px] xl:w-[320px]">
      {/* Shadow background */}
      <div className="pointer-events-none absolute top-[12px] left-[12px] z-0 h-full w-full bg-[#1119581A]"></div>

      {/* Job content */}
      <div className="relative z-1 bg-white">
        {/* Image + Like button */}
        <div className="relative h-[240px] w-full bg-[#FEEB94]">
          {job.image && (
            <Image
              src={job.image}
              alt={`Job ${job.id}`}
              fill
              className="object-cover"
            />
          )}
          <div
            className="absolute top-4 right-4 flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full border-[2px] border-gray-200 bg-white backdrop-blur-sm"
            onClick={() => toggleLike(job.id)}
          >
            {isLiked ? (
              <AiFillHeart className="text-3xl text-red-500" />
            ) : (
              <AiOutlineHeart className="text-3xl text-gray-400" />
            )}
          </div>
        </div>

        {/* Job details */}
        <div className="space-y-3 px-5 py-6">
          <h2 className="line-clamp-2 min-h-[calc(2*1.405rem)] text-justify text-base font-bold tracking-[0.1em] break-words">
            {job.title}
          </h2>

          <div className="space-y-2 text-xs tracking-[0.1em]">
            {/* Location */}
            <div className="flex items-center space-x-1">
              <Image
                src="/home/location.png"
                alt="location Icon"
                width={16}
                height={16}
              />
              <span>{job.location}</span>
            </div>

            {/* Category + Position */}
            <div className="flex space-x-2">
              <div className="min-w-0 flex-1">
                <div className="flex items-center space-x-1">
                  <Image
                    src="/home/briefcase.png"
                    alt="Briefcase Icon"
                    width={16}
                    height={16}
                  />
                  <span className="truncate overflow-hidden whitespace-nowrap">
                    {job.category}
                  </span>
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center space-x-1">
                  <Image
                    src="/home/briefcase.png"
                    alt="Briefcase Icon"
                    width={16}
                    height={16}
                  />
                  <span className="max-w-full truncate overflow-hidden whitespace-nowrap">
                    {job.position}
                  </span>
                </div>
              </div>
            </div>

            {/* Schedule + Salary */}
            <div className="flex space-x-2">
              <div className="flex-1">
                <div className="flex items-center space-x-1">
                  <Image
                    src="/home/briefcase.png"
                    alt="Briefcase Icon"
                    width={16}
                    height={16}
                  />
                  <span>{job.schedule}</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-1">
                  <Image
                    src="/home/briefcase.png"
                    alt="Briefcase Icon"
                    width={16}
                    height={16}
                  />
                  <span>{job.salary}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="flex items-center space-x-3">
            <Image
              src={job.companyLogo}
              alt="Company Logo"
              width={28}
              height={28}
            />
            <span className="text-sm font-semibold tracking-[0.1em] text-gray-500">
              {job.company}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
