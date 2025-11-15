"use client";

import React, { forwardRef, InputHTMLAttributes } from "react";

type TextInputProps = {
  id: string;
  label?: string;
  error?: string;
  required?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ id, label, error, required, ...props }, ref) => {
    return (
      <div className="flex w-full flex-col space-y-1">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-gray-700">
            {label}
            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={`w-full rounded-lg border px-3 py-2 text-sm transition outline-none ${error ? "border-red-500" : "border-gray-300 focus:border-blue-500"} `}
          {...props}
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  },
);

TextInput.displayName = "TextInput";

export default TextInput;
