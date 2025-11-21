"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AnimatedPage from "@/components/common/AnimatedPage";
import TextInput from "@/components/common/form/TextInput";
import Dropdown from "@/components/common/form/Dropdown";
import { useRouter } from "next/navigation";

import {
  additionalProfileSchema,
  type AdditionalProfileSchema,
} from "@/lib/AdditionalProfileSchema";

export default function AdditionalProfilePage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<AdditionalProfileSchema>({
    resolver: zodResolver(additionalProfileSchema),
    mode: "onChange",
  });

  const router = useRouter();
  const watched = watch(["phone_number", "gender"]);
  const isFormValid = watched.every((v) => !!v);

  const onSubmit = (data: AdditionalProfileSchema) => {
    console.log("Additional profile data:", data);
    alert("保存されました！");
  };

  return (
    <AnimatedPage>
      <div className="flex min-h-screen flex-col items-center justify-start bg-gray-50 px-4 pt-32">
        <h1 className="mb-2 text-center text-base font-semibold text-black">
          プロフィールが登録できました！
        </h1>
        <p className="mb-8 text-center text-sm text-gray-500">
          追加プロフィールを登録して、
          <br />
          プロフィールを完成しましょう！
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md rounded-xl border border-gray-300 bg-white px-6 py-10 shadow-sm"
        >
          <h2 className="mb-6 text-left text-sm font-semibold text-black">
            追加プロフィール情報
          </h2>

          <TextInput
            id="phone_number"
            label="電話番号"
            placeholder="09012345678"
            error={errors.phone_number?.message}
            {...register("phone_number")}
          />

          <div className="mt-6">
            <Dropdown
              id="gender"
              label="性別"
              placeholder="選択してください"
              options={["男性", "女性", "その他"]}
              error={errors.gender?.message}
              {...register("gender")}
            />
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => router.push("/start")}
              className="w-1/2 rounded-full border border-gray-400 bg-white py-2 text-sm font-medium text-black"
            >
              スキップする
            </button>

            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`w-1/2 rounded-full py-2 text-sm font-medium transition ${
                isFormValid
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-red-100 text-red-300"
              }`}
            >
              保存する
            </button>
          </div>
        </form>
      </div>
    </AnimatedPage>
  );
}
