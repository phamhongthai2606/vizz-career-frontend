import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Pagination({
  totalPages,
  currentPage,
  onChangePage,
}: {
  totalPages: number;
  currentPage: number;
  onChangePage: (page: number) => void;
}) {
  return (
    <div className="mt-10 flex justify-center">
      <div className="flex items-center gap-2">
        {/* Previous */}
        <button
          disabled={currentPage === 1}
          onClick={() => onChangePage(currentPage - 1)}
          className="cursor-pointer rounded bg-white px-3 py-1 disabled:opacity-40"
        >
          <IoIosArrowBack className="text-blue-primary h-4 w-4" />
        </button>

        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          const isActive = page === currentPage;

          return (
            <button
              key={page}
              onClick={() => onChangePage(page)}
              className={`cursor-pointer rounded-[2px] border px-[15px] pt-[10px] pb-[8px] text-xs tracking-[0.1em] ${
                isActive
                  ? "bg-blue-primary border-blue-primary text-white"
                  : "bg-gray-primary-light hover:bg-blue-primary/90 border-gray-300 text-gray-700 hover:text-white"
              }`}
            >
              <div className="m-0 leading-none">{page}</div>
            </button>
          );
        })}

        {/* Next */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => onChangePage(currentPage + 1)}
          className="cursor-pointer rounded bg-white px-3 py-1 disabled:opacity-40"
        >
          <IoIosArrowForward className="text-blue-primary h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
