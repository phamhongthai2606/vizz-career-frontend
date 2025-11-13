import React from "react";
import LoginForm from "@/components/pages/login/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <>
      <LoginForm />
    </>
  );
}
