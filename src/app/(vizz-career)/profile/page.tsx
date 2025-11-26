import ProfileForm from "@/components/pages/profile/ProfileForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プロフィール",
};

export default function Profile() {
  return <ProfileForm />;
}