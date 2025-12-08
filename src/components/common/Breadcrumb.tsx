"use client";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  // optional class applied to each breadcrumb item label (link or span)
  itemClassName?: string;
}

export default function Breadcrumb({ items, itemClassName }: BreadcrumbProps) {
  return (
    <div className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-4 text-sm">
        <nav className="flex items-center gap-2">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className={`text-gray-500 hover:text-gray-600 ${itemClassName ?? ""}`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`cursor-default font-semibold text-black ${itemClassName ?? ""}`}
                >
                  {item.label}
                </span>
              )}

              {/* Add separator except last item */}
              {index < items.length - 1 && (
                <ChevronRightIcon className="mx-1 h-5 w-5 text-gray-600" />
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
