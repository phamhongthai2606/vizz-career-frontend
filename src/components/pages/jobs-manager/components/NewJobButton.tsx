"use client";

export default function NewJobButton() {
  return (
    <button
      className="
        flex items-center justify-center gap-2
        rounded-md bg-[#D92D20] px-5 py-2
        text-sm font-medium text-white
        shadow-sm
        hover:bg-[#B42318]
        transition
      "
    >
      <span className="text-lg leading-none">＋</span>
      <span>新規作成</span>
    </button>
  );
}
