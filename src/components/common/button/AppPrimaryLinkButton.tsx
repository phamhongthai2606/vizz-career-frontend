import { FC } from "react";
import Link from "next/link";

type Props = {
  label: string;
  href: string;
  className?: string;
};
export const AppPrimaryLinkButton: FC<Props> = ({ href, label, className }) => {
  return (
    <Link href={href}>
      <span
        className={
          "bg-blue-primary rounded-full px-8 py-2 text-sm tracking-[0.1em] text-white " +
          className
        }
      >
        {label}
      </span>
    </Link>
  );
};
