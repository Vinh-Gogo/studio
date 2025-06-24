import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const IuhLogo = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("flex items-center", className)} {...props}>
      <Image
        src="https://www.iuh.edu.vn/Resources/images/logo-iuh-new.png"
        alt="Industrial University of Ho Chi Minh City Logo"
        width={675}
        height={248}
        className="h-12 w-auto"
        priority
      />
    </div>
  );
};
