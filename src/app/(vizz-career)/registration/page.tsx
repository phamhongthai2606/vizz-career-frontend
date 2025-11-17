import ProfileRegistrationForm from "@/components/pages/registration/ProfileRegistrationForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プロフィール登録",
};

export default function Registration() {
  return (
    <>
      <ProfileRegistrationForm />
    </>
  );
}
