import * as React from "react";
import { cn } from "@/lib/utils";

export const IuhLogo = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("flex items-center gap-2", className)} {...props}>
      {/* Simplified Flame/Lotus Icon */}
      <svg
        className="h-10 w-auto flex-shrink-0"
        viewBox="0 0 50 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M30.5 12.5C30.5 12.5 38.5 23.5 34.5 33.5C34.5 33.5 26.5 31.5 24.5 23.5C22.5 15.5 30.5 12.5 30.5 12.5Z" fill="#E30613"/>
        <path d="M24 5C24 5 28.5 19.5 22 30C22 30 12.5 27.5 11.5 18C10.5 8.5 24 5 24 5Z" fill="#E30613"/>
        <circle cx="19.5" cy="22" r="5" fill="white"/>
        <circle cx="19.5" cy="22" r="4" fill="#E30613"/>
        <circle cx="19.5" cy="22" r="2" fill="white"/>
      </svg>
      <div className="flex items-end gap-1">
        <span className="font-black text-3xl leading-none" style={{ color: "#002D72" }}>
          IUH
        </span>
        <div className="flex flex-col justify-end leading-tight pb-0.5">
          <span className="font-extrabold text-[8px] whitespace-nowrap" style={{ color: "#002D72" }}>INDUSTRIAL</span>
          <span className="font-extrabold text-[8px] whitespace-nowrap" style={{ color: "#002D72" }}>UNIVERSITY OF</span>
          <span className="font-extrabold text-[8px] whitespace-nowrap" style={{ color: "#002D72" }}>HOCHIMINH CITY</span>
        </div>
      </div>
    </div>
  );
};
