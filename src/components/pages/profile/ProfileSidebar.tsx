"use client";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function ProfileSidebar({
  activeSection,
  onSectionChange,
}: SidebarProps) {
  const sections = [
    { id: "basic", label: "基本情報" },
    { id: "education", label: "学歴情報" },
    { id: "preferences", label: "希望条件" },
    { id: "skills", label: "スキル・経験" },
    { id: "selfpr", label: "自己PR" },
    { id: "portfolio", label: "ポートフォリオ" },
  ];

  return (
    <aside className="flex w-[180px] flex-col gap-1 rounded p-3">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onSectionChange(section.id)}
          className={`flex items-center px-3 py-2 text-left text-sm tracking-[0.56px] text-[#2D2D2D] transition-all ${
            activeSection === section.id
              ? "border-l-2 border-[#111958]"
              : "border-l-2 border-transparent hover:bg-gray-50"
          }`}
        >
          {section.label}
        </button>
      ))}
    </aside>
  );
}
