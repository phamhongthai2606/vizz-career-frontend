"use client";

import React, { ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

type ModalSize = "sm" | "md" | "lg" | "xl";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
  title?: ReactNode;
  footer?: ReactNode;
  size?: ModalSize;
  className?: string;
  ariaLabelledBy?: string;
}

const sizeClassMap: Record<ModalSize, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
};

export default function Modal({
  open,
  onClose,
  children,
  title,
  footer,
  size = "md",
  className = "",
  ariaLabelledBy,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  if (typeof document === "undefined") return null;

  const modalInnerClass = `${sizeClassMap[size]} w-full ${className}`.trim();

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={ariaLabelledBy}
            tabIndex={-1}
            className={`rounded-2xl bg-white shadow-xl outline-none ${modalInnerClass}`}
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.97, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            {title && (
              <div className="flex items-center justify-between border-b px-6 py-4 text-gray-300">
                <div
                  className="text-sm font-semibold text-gray-900"
                  id={ariaLabelledBy}
                >
                  {title}
                </div>
              </div>
            )}

            {/* Body */}
            <div className="px-6 py-6">{children}</div>

            {/* Footer */}
            {footer && (
              <div className="border-t px-6 py-4 text-gray-300">{footer}</div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
