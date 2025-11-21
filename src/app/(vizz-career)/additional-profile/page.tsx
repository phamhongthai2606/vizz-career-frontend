import AdditionalProfilePage from "@/components/pages/additional-profile/AdditionalProfilePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "追加プロフィール",
};

export default function AdditionalProfile() {
  return <AdditionalProfilePage />;
}
