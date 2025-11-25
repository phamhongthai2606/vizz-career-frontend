import React from "react";
import CocoLoginForm from "@/components/pages/coco-login/CocoLoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ログイン - COCO CAREER",
};

export default function CocoLogin() {
  return (
    <>
      <CocoLoginForm />
    </>
  );
}
