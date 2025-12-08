import { Metadata } from "next";
import BusinessInformationPage from "@/components/pages/business-information/BusinessInformationPage";

export const metadata: Metadata = {
  title: "会社管理",
};

export default function EditBusiness() {
  return <BusinessInformationPage />;
}
