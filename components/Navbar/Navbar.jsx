"use client";

import React from "react";
import Container from "../global/Container";
import Image from "next/image";
import { ChevronDown, ChevronRight, Globe, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";

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

              {/* mobile nav toggler */}
              <div className="cursor-pointer lg:hidden" onClick={handleNavOpen}>
                <Menu className={cn(isNavOpen ? "hidden" : "")} />
                <X className={cn(isNavOpen ? "" : "hidden")} />
              </div>
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
