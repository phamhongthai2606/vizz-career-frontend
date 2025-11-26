import { FC, ReactNode } from "react";

type Props = {
  label: ReactNode;
  className?: string;
  onClick?: () => void;
  statusValidate?: boolean;
  isIconDownload?: boolean;
  svgColor?: string;
  textType?: "button" | "submit" | "reset";
  iconBeforeLabel?: ReactNode;
  iconAfterLabel?: ReactNode;
};

export const AppPrimaryButton: FC<Props> = ({
  label,
  className,
  onClick,
  statusValidate = true,
  iconBeforeLabel,
  textType,
  iconAfterLabel,
}) => {
  return (
    <button
      className={`flex items-center justify-center rounded-full px-4 py-2 text-sm tracking-[0.04em] ${
        statusValidate ? "" : "bg-gray-500"
      } ${className?.includes("bg-") ? className : `bg-red-primary text-white ${className || ""}`}`}
      onClick={statusValidate ? onClick : undefined}
      disabled={!statusValidate}
      type={textType}
    >
      {/* {label} */}
      {!statusValidate ? (
        <div className="flex items-center justify-center">
          <svg
            className="mr-3 h-5 w-5 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V2a10 10 0 00-10 10h2z"
            />
          </svg>
          Loading...
        </div>
      ) : (
        <div className="flex items-center justify-center sm:gap-2">
          {iconBeforeLabel && (
            <span className="mr-1 h-5 w-5">{iconBeforeLabel}</span>
          )}
          <span>{label}</span>
          {iconAfterLabel && <span>{iconAfterLabel}</span>}
        </div>
      )}
    </button>
  );
};
