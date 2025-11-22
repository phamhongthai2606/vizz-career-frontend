"use client";

import { forwardRef } from "react";

interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  options: string[];
  label?: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
}

const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ id, options, label, error, required, placeholder, ...props }, ref) => {
    return (
      <div className="flex w-full flex-col space-y-1">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-gray-700">
            {label}
            {required && (
              <span className="ml-2 inline-block rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white">
                必須
              </span>
            )}
          </label>
        )}
        <select
          ref={ref}
          id={id}
          value={props.value}
          {...props}
          className={`block w-full rounded-md border bg-white px-4 py-2 shadow-sm ${props.value === "" ? "text-gray-400" : "text-black"} disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 ${error ? "border-red-500" : "border-gray-500 focus:border-blue-500"} `}
        >
          <option value="" disabled hidden className="text-gray-400">
            {placeholder}
          </option>
          {options.map((opt, idx) => (
            <option key={idx} value={opt} className="text-black">
              {opt}
            </option>
          ))}
        </select>
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  },
);

Dropdown.displayName = "Dropdown";
export default Dropdown;
