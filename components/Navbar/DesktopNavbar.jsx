"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, Globe } from "lucide-react";
import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Link from "next/link";

const DesktopNavbar = ({ isLanguageOpen, handleOpenLanguage, isTop }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="lg:flex items-center gap-5 hidden">
      <ul className="flex items-center justify-between text-base">
        {/* expandable item */}
        <li
          className="cursor-pointer group relative px-6 py-3 border-b border-transparent"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div
            className={cn(
              "flex items-center gap-1.5",
              isTop ? "text-white" : "text-[#1f80f0]"
            )}
          >
            <span>Solutions</span>
            <span>
              <ChevronDown size={14} className={cn("text-xs")} />
            </span>
          </div>
          <div
            className={`absolute top-12 left-0 min-w-52 bg-slate-50 text-accent-foreground rounded shadow-lg p-4 transition-opacity duration-200 ${
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            } group-hover:opacity-100 group-hover:visible`}
          >
            <ul className="space-y-2">
              <li>
                <Link href={"/"} className="block hover:text-blue-500">
                  AnyCaas
                </Link>
              </li>
              <hr />
              <li>
                <Link href={"/"} className="block hover:text-blue-500">
                  AnyBaas
                </Link>
              </li>
              <hr />
              <li>
                <Link href={"/"} className="block hover:text-blue-500">
                  AnyPaas
                </Link>
              </li>
            </ul>
          </div>
        </li>
        {/* non expandable items */}
        <li
          className={cn(
            "px-6 py-3 border-b border-transparent hover:border-white duration-150",
            isTop ? "text-white" : "text-[#1f80f0]"
          )}
        >
          Services
        </li>
        <li
          className={cn(
            "px-6 py-3 border-b border-transparent hover:border-white duration-150",
            isTop ? "text-white" : "text-[#1f80f0]"
          )}
        >
          About Us
        </li>
      </ul>

      {/* language popover */}
      <div>
        <Popover>
          <PopoverTrigger
            onClick={handleOpenLanguage}
            className={cn(
              "inline-flex items-center bg-transparent border px-3.5 py-2 rounded-full cursor-pointer gap-1 w-fit focus:outline-none focus:ring-0 focus:ring-offset-0",
              isTop
                ? "border-white text-white"
                : "border-[#1f80f0] text-[#1f80f0]"
            )}
          >
            <span>
              <Globe size={14} className="text-xs" />
            </span>
            <span className="mr-auto uppercase leading-tight">EN</span>
            <ChevronDown
              size={14}
              className={cn("text-xs", isLanguageOpen ? "" : "rotate-180")}
            />
          </PopoverTrigger>
          <PopoverContent className="border rounded text-base px-2 py-0 w-fit">
            <Link
              href={"/"}
              className="text-base cursor-pointer focus:bg-transparent hover:text-[#1f80f0]"
            >
              <p className="py-1.5">EN (English)</p>
            </Link>
            <hr />
            <Link
              href={"/"}
              className="text-base cursor-pointer focus:bg-transparent hover:text-[#1f80f0]"
            >
              <p className="py-1.5">TH (Thai)</p>
            </Link>

            <hr />
            <Link
              href={"/"}
              className="text-base cursor-pointer focus:bg-transparent hover:text-[#1f80f0]"
            >
              <p className="py-1.5">ID (Bahasa Indonesia)</p>
            </Link>

            <hr />
            <Link
              href={"/"}
              className="text-base cursor-pointer focus:bg-transparent hover:text-[#1f80f0]"
            >
              <p className="py-1.5">TW (Traditional Chinese)</p>
            </Link>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
