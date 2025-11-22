import { z } from "zod";

export const profileRegistrationSchema = z.object({
  last_name: z.string().min(1, "Please enter 氏名（姓）"),
  first_name: z.string().min(1, "Please enter 氏名（名）"),
  last_name_kana: z.string().min(1, "Please enter 氏名（セイ）"),
  first_name_kana: z.string().min(1, "Please enter 氏名（メイ）"),
  school_name: z.string().min(1, "Please enter 学校名"),
  department_name: z.string().min(1, "Please enter 学部・学科名"),
  subject_system: z.string().min(1, "Please enter 学科系統"),
  grade: z.string().min(1, "Please enter 学年"),
});

export type ProfileRegistrationSchema = z.infer<
  typeof profileRegistrationSchema
>;
