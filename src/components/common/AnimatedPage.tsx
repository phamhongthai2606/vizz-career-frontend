"use client";

import { motion } from "framer-motion";
import Header from "@/components/common/Header";

export default function AnimatedPage({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="w-full"
    >
      <Header />
      {children}
    </motion.div>
  );
}
