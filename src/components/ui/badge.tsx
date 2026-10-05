import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full bg-primary/30 px-3 py-1 text-sm text-foreground",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
