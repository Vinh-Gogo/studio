
import * as React from "react";
import { cn } from "@/lib/utils";

export const IuhLogo = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("flex items-center gap-2", className)} {...props}>
      {/* Simplified Flame/Lotus Icon */}
      <svg
        className="h-12 w-auto flex-shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M12 2C9.25333 4.96697 7.82083 9.42232 8.5 12C9.17917 14.5777 10.7467 17.033 12 18C13.2533 17.033 14.8208 14.5777 15.5 12C16.1792 9.42232 14.7467 4.96697 12 2Z"
          fill="#E30613" // Red color from logo
        />
        <path
          d="M12 17C14.3867 15.989 16.8875 13.9111 17.5 12C18.1125 10.0889 16.3867 6.03299 12 4"
          stroke="white"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />
      </svg>
      <div className="flex flex-col justify-center">
        <span
          className="font-extrabold text-[11px] leading-tight whitespace-nowrap"
          style={{ color: "#002D72" }} // Blue color from logo
        >
          INDUSTRIAL UNIVERSITY OF
        </span>
        <span
          className="font-extrabold text-[11px] leading-tight whitespace-nowrap"
          style={{ color: "#002D72" }}
        >
          HOCHIMINH CITY
        </span>
      </div>
    </div>
  );
};
