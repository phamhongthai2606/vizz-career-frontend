import { z } from "zod";

export const additionalProfileSchema = z.object({
  phone_number: z
    .string()
    .min(1, "電話番号は必須です")
    .regex(/^[0-9]+$/, "数字のみ入力してください")
    .min(10, "電話番号は10〜11桁で入力してください")
    .max(11, "電話番号は10〜11桁で入力してください"),

  gender: z
    .string()
    .min(1, "性別は必須です")
    .refine(
      (v) => ["男性", "女性", "その他"].includes(v),
      "性別の選択が正しくありません"
    ),
});

export type AdditionalProfileSchema = z.infer<typeof additionalProfileSchema>;
