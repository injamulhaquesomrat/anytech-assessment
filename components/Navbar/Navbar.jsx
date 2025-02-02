"use client";

import React, { useEffect, useState } from "react";
import Container from "../global/Container";
import Image from "next/image";
import { ChevronDown, ChevronRight, Globe, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isOpenSolutions, setIsOpenSolutions] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down, show when scrolling up
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);

      // Change color when scrolling
      setIsTop(currentScrollY < 10);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleOpenSolutions = () => {
    setIsOpenSolutions(!isOpenSolutions);
  };
  const handleOpenLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };
  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isTop ? "bg-transparent" : "bg-white shadow-lg"} `}
    >
      <header className="bg-[#1F80f0] lg:bg-transparent text-white">
        <div>
          <Container>
            <div className="flex items-center justify-between">
              {/* start::logo */}
              <div>
                <a className={cn(isTop ? "block" : "hidden")} href="/">
                  <Image
                    className="h-auto w-[134px] lg:w-[170px] object-contain py-8"
                    src="images/logo.svg"
                    alt="AnyTech"
                    width={100}
                    height={100}
                  />
                </a>
                <a className={cn(isTop ? "hidden" : "block")} href="/">
                  <Image
                    className="h-auto w-[134px] lg:w-[170px] object-contain py-8"
                    src="images/blue-logo.svg"
                    alt="AnyTech Blue Logo"
                    width={100}
                    height={100}
                  />
                </a>
              </div>
              {/* end::logo */}

              {/* start::desktop navbar*/}
              <DesktopNavbar
                isLanguageOpen={isLanguageOpen}
                handleOpenLanguage={handleOpenLanguage}
                isTop={isTop}
              />

              <Link
                href="/"
                className={cn(
                  "border rounded px-6 py-3 hidden lg:flex justify-center group hover:bg-white",
                  isTop
                    ? "border-white text-white"
                    : "border-tranparent text-white bg-[#FE8B53]"
                )}
              >
                <div className="inline-flex items-center justify-between font-semibold group cursor-pointer gap-1">
                  <span
                    className={cn(
                      "text-lg group-hover:text-blue-500 leading-snug"
                    )}
                  >
                    Contact Us
                  </span>
                  <ChevronRight
                    size={20}
                    className={cn(
                      "group-hover:translate-x-1.5 duration-150 group-hover:text-blue-500"
                    )}
                  />
                </div>
              </Link>
              {/* end:: desktop navbar */}

              {/* start::mobile nav toggler */}
              <div className="cursor-pointer lg:hidden" onClick={handleNavOpen}>
                <Menu className={cn(isNavOpen ? "hidden" : "")} />
                <X className={cn(isNavOpen ? "" : "hidden")} />
              </div>
              {/* end::mobile nav toggler */}
            </div>
          </Container>
        </div>
      </header>

      <MobileNavbar
        isOpenSolutions={isOpenSolutions}
        handleOpenSolutions={handleOpenSolutions}
        handleOpenLanguage={handleOpenLanguage}
        isNavOpen={isNavOpen}
        isLanguageOpen={isLanguageOpen}
      />
    </div>
  );
};

export default Navbar;
