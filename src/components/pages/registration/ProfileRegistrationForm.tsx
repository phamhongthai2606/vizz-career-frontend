"use client";

import TextInput from "@/components/common/form/TextInput";
import Dropdown from "@/components/common/form/Dropdown";
import { useProfileRegistration } from "@/components/pages/registration/useProfileRegistration";
import { useRouter } from "next/navigation";
import AnimatedPage from "@/components/common/AnimatedPage";

export default function ProfileRegistrationForm() {
  const {
    register,
    handleSubmit,
    errors,
    isFormValid,
    isSubmitting,
    watchAllFields,
    onSubmit,
  } = useProfileRegistration();

  type TypeFormData = {
    last_name: string;
    first_name: string;
    last_name_kana: string;
    first_name_kana: string;
    school_name: string;
    department_name: string;
    subject_system: string;
    grade: string;
  };

  const formItems: {
    form: keyof TypeFormData;
    label: string;
    type: "text" | "dropdown";
    isRequired: boolean;
    placeholder?: string;
    options?: string[];
  }[] = [
    {
      form: "last_name",
      label: "氏名（姓）",
      type: "text",
      isRequired: true,
      placeholder: "山田",
    },
    {
      form: "first_name",
      label: "氏名（名）",
      type: "text",
      isRequired: true,
      placeholder: "太郎",
    },
    {
      form: "last_name_kana",
      label: "氏名（セイ）",
      type: "text",
      isRequired: true,
      placeholder: "ヤマダ",
    },
    {
      form: "first_name_kana",
      label: "氏名（メイ）",
      type: "text",
      isRequired: true,
      placeholder: "タロウ",
    },
    {
      form: "school_name",
      label: "学校名",
      type: "text",
      isRequired: true,
      placeholder: "タレント大学",
    },
    {
      form: "department_name",
      label: "学部・学科名",
      type: "text",
      isRequired: true,
      placeholder: "経営学部",
    },
    {
      form: "subject_system",
      label: "学科系統",
      type: "dropdown",
      isRequired: true,
      placeholder: "選択してください",
      options: ["理系", "文系", "その他"],
    },
    {
      form: "grade",
      label: "学年",
      type: "dropdown",
      isRequired: true,
      placeholder: "選択してください",
      options: ["1年生", "2年生", "3年生", "4年生", "5年生以上"],
    },
  ];

  const formGroups = [
    formItems.slice(0, 2),
    formItems.slice(2, 4),
    formItems.slice(4, 5),
    formItems.slice(5, 7),
    formItems.slice(7, 8),
  ];

  const getGridClass = (groupIdx: number) => {
    const colCounts = [2, 2, 1, 2, 1];
    const cols = colCounts[groupIdx];
    return cols === 1
      ? "grid-cols-1"
      : cols === 2
        ? "grid-cols-2"
        : "grid-cols-1";
  };

  return (
    <AnimatedPage>
      <div className="flex min-h-screen flex-col items-center justify-center border border-gray-300 bg-gray-50">
        <h1 className="mb-6 text-center text-base font-semibold text-black">
          プロフィール登録
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md rounded-xl border border-gray-300 bg-white px-6 py-12 shadow-md"
        >
          <h2 className="mb-6 text-left text-sm font-semibold text-black">
            基本情報
          </h2>

          <div className="space-y-4">
            {formGroups.map((group, groupIdx) => (
              <div
                key={groupIdx}
                className={`grid ${getGridClass(groupIdx)} gap-4`}
              >
                {group.map((item) =>
                  item.type === "dropdown" && item.options ? (
                    <Dropdown
                      key={item.form}
                      id={item.form}
                      label={item.label}
                      value={watchAllFields[item.form] || ""}
                      required={item.isRequired}
                      options={item.options}
                      placeholder={item.placeholder}
                      error={errors[item.form]?.message}
                      {...register(item.form)}
                    />
                  ) : (
                    <TextInput
                      key={item.form}
                      id={item.form}
                      label={item.label}
                      type={item.type}
                      required={item.isRequired}
                      placeholder={item.placeholder}
                      error={errors[item.form]?.message}
                      {...register(item.form)}
                    />
                  ),
                )}
              </div>
            ))}
          </div>

          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="mx-auto mt-6 block w-full max-w-[240px] rounded-lg bg-red-600 py-2 font-medium text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-[#ffe5e5] disabled:text-red-300"
          >
            次へ
          </button>
        </form>
      </div>
    </AnimatedPage>
  );
}
