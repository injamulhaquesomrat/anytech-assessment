import { cn } from "@/lib/utils";
import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={cn("max-w-[1200px] mx-auto px-8 xl:px-0", className)}>
      {children}
    </div>
  );
};

export default Container;
