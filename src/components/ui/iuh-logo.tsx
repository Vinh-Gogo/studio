import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import iuhLogoImage from "@/components/Logo_IUH.png";

export const IuhLogo = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("flex items-center", className)} {...props}>
      <Image
        src={iuhLogoImage}
        alt="Industrial University of Ho Chi Minh City Logo"
        className="h-12 w-auto"
        priority
      />
    </div>
  );
};
