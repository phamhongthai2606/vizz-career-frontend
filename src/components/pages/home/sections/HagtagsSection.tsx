"use client";
import Link from "next/link";

const HagTagsSection = () => {
  // Danh sách tag
  const links = [
    { text: "#週3日以下でもOK😶", href: "#" },
    { text: "##週4日以上歓迎👍", href: "#" },
    { text: "##フラットな組織🏢", href: "#" },
    { text: "##社員の成長を応援😄👊", href: "#" },
    { text: "##リモートワーク支援💻", href: "#" },
    { text: "##会社内間接喫煙対策中🚭", href: "#" },
    { text: "##会社部活あり🏃‍♀️", href: "#" },
    { text: "###個性を重視した私服可👚👕", href: "#" },
    { text: "###社員の成長を応援", href: "#" },
  ];

  // Hàm chia mảng thành nhóm size bất kỳ
  const chunkArray = <T,>(arr: T[], size: number): T[][] => {
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  // 3 item mỗi row
  const rows = chunkArray(links, 3);

  return (
    <section className="bg-white px-[120px] py-20">
      <div className="flex flex-col items-center">
        {/* Title */}
        <h1 className="mb-6 text-center text-3xl leading-[1.405] font-black tracking-[0.1em]">
          おすすめタグ
        </h1>

        {/* Content */}
        <div className="flex flex-col gap-y-4">
          {rows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="flex items-center justify-center gap-x-4"
            >
              {row.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="relative inline-block"
                >
                  {/* Shadow đỏ */}
                  <div className="absolute top-[3px] left-[3px] h-full w-full border border-gray-900 bg-red-500"></div>

                  {/* Button chính */}
                  <div className="relative border border-black bg-white px-6 py-3 text-center text-sm font-black tracking-[0.1em]">
                    {link.text}
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HagTagsSection;
