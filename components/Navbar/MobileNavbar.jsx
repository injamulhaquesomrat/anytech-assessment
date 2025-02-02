import React from "react";
import Container from "../global/Container";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight, Globe } from "lucide-react";
import Link from "next/link";

const MobileNavbar = ({
  isNavOpen,
  isOpenSolutions,
  isLanguageOpen,
  handleOpenSolutions,
  handleOpenLanguage,
}) => {
  return (
    <nav
      className={cn(
        "lg:hidden bg-[#1B76E9] text-white absolute w-full duration-300 transition-all ease-in-out",
        isNavOpen ? "right-0" : "right-[1200px]"
      )}
    >
      <Container>
        <div className="py-8 space-y-8">
          <ul className="space-y-8 text-sm">
            <li className="" onClick={handleOpenSolutions}>
              <div className="flex items-center justify-between cursor-pointer">
                <span>Solutions</span>
                <ChevronDown
                  size={14}
                  className={cn(
                    "text-xs duration-150 transition-all",
                    isOpenSolutions ? "rotate-180" : ""
                  )}
                />
              </div>
              <div
                className={cn("p-6 pb-0 hidden", isOpenSolutions && "block")}
              >
                <ul className="space-y-4">
                  <li>AnyCaas</li>
                  <li>AnyBaas</li>
                  <li>AnyPaas</li>
                </ul>
              </div>
            </li>
            <li>Services</li>
            <li>About Us</li>
          </ul>

          {/* language */}
          <div
            className={cn(
              "mx-auto border border-[#7cacf8] rounded-3xl px-3.5 py-2 w-fit"
            )}
          >
            <div
              className="flex items-center justify-between gap-2 cursor-pointer"
              onClick={handleOpenLanguage}
            >
              <span>
                <Globe size={14} className="text-xs" />
              </span>
              <span className="mr-auto uppercase">English</span>
              <span>
                <ChevronDown
                  size={14}
                  className={cn(
                    "text-xs duration-150 transition-all",
                    isLanguageOpen ? "rotate-180" : ""
                  )}
                />
              </span>
            </div>
            <div
              className={cn(
                "transition-all duration-500 ease-in-out overflow-hidden",
                isLanguageOpen
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              )}
            >
              <ul className="space-y-2 py-2 pl-[22px] uppercase">
                <li>English</li>
                <li>Thai</li>
                <li>Bahasa Indonesia</li>
                <li>Traditional Chinese</li>
              </ul>
            </div>
          </div>

          <Link
            href="/"
            className="border rounded px-3.5 py-2 flex justify-center w-full mx-auto"
          >
            <div className="inline-flex items-center justify-between font-semibold group cursor-pointer">
              <span>Contact Us</span>
              <ChevronRight
                size={14}
                className="group-hover:translate-x-1.5 duration-150"
              />
            </div>
          </Link>
        </div>
      </Container>
    </nav>
  );
};

export default MobileNavbar;
