import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const IuhLogo = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("flex items-center", className)} {...props}>
      <Image
        src="https://iuh.edu.vn/Portals/0/logo-iuh-2.png"
        alt="Industrial University of Ho Chi Minh City Logo"
        width={675}
        height={248}
        className="h-12 w-auto"
        priority
      />
    </div>
  );
};
