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
  classNameLabel?: string;
};

export const AppPrimaryButton: FC<Props> = ({
  label,
  className,
  onClick,
  statusValidate = true,
  iconBeforeLabel,
  textType,
  iconAfterLabel,
  classNameLabel,
}) => {
  return (
    <button
      className={`flex cursor-pointer items-center justify-center rounded-full px-4 py-2 text-sm tracking-[0.04em] ${
        statusValidate ? "" : "bg-gray-500"
      } ${className?.includes("bg-") ? className : `bg-red-primary text-white ${className || ""}`}`}
      onClick={statusValidate ? onClick : undefined}
      disabled={!statusValidate}
      type={textType}
    >
      {/* {label} */}
      {!statusValidate ? (
        <div className="flex items-center justify-center">
          <div className="h-5 w-5 animate-spin rounded-full border-3 border-gray-300 border-t-white"></div>
          <span className="ml-2">Loading...</span>
        </div>
      ) : (
        <div className="flex items-center justify-center sm:gap-2">
          {iconBeforeLabel && <span>{iconBeforeLabel}</span>}
          <span className={`${classNameLabel}`}>{label}</span>
          {iconAfterLabel && <span>{iconAfterLabel}</span>}
        </div>
      )}
    </button>
  );
};
