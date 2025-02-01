"use client";

import React from "react";
import Container from "../global/Container";
import Image from "next/image";
import { ChevronDown, ChevronRight, Globe, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [isOpenSolutions, setIsOpenSolutions] = React.useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = React.useState(false);

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
    <>
      <header className="bg-[#1F80f0] text-white">
        <div>
          <Container>
            <div className="flex items-center justify-between">
              {/* start::logo */}
              <div>
                <a href="/">
                  <Image
                    className="h-auto w-[134px] lg:w-[170px] object-contain py-8"
                    src="images/logo.svg"
                    alt="AnyTech"
                    width={100}
                    height={100}
                  />
                </a>
              </div>
              {/* end::logo */}

              {/* start::desktop navbar*/}
              <DesktopNavbar isLanguageOpen={isLanguageOpen} />

              <Link
                href="/"
                className="border rounded px-3.5 py-2 hidden lg:flex justify-center group hover:bg-white"
              >
                <div className="inline-flex items-center justify-between font-semibold group cursor-pointer ">
                  <span className="text-lg group-hover:text-blue-500">
                    Contact Us
                  </span>
                  <ChevronRight
                    size={20}
                    className="group-hover:translate-x-1.5 duration-150 group-hover:text-blue-500"
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
    </>
  );
};

export default Navbar;
