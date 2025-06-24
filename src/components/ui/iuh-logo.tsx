import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const IuhLogo = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("flex items-center", className)} {...props}>
      <Image
        src="/public/images/Logo_IUH.png"
        alt="Industrial University of Ho Chi Minh City Logo"
        width={300}
        height={72}
        className="h-12 w-auto"
        priority
      />
    </div>
  );
};
