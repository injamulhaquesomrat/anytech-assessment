import React from "react";
import Container from "../global/Container";
import Image from "next/image";
import Copyright from "./Copyright";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bg-[#002045] py-10">
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={150}
                height={50}
              />
            </div>
            <div className="lg:flex items-center justify-between text-[#00E3E5] hidden">
              <p className="px-6 py-4">Our Solutions</p>
              <ul className="flex items-center justify-between gap-3 border-l">
                <li className="px-6 py-4 pr-0 hover:text-[#1B76E9]">
                  <Link href={"/"}>AnyCaas</Link>
                </li>
                <li className="px-6 py-4 pr-0 hover:text-[#1B76E9]">
                  <Link href={"/"}>AnyBaas</Link>
                </li>
                <li className="px-6 py-4 pr-0 hover:text-[#1B76E9]">
                  <Link href={"/"}>AnyPaas</Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4 lg:hidden">
              <Link href="/">
                <Image
                  src="https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg?w=320&fm=webp"
                  height={24}
                  width={26}
                  alt="linkedIn"
                />
              </Link>
              <Link href="/">
                <Image
                  src="https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg"
                  height={24}
                  width={26}
                  alt="call"
                />
              </Link>
              <Link href="/">
                <Image
                  src="https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg"
                  height={24}
                  width={26}
                  alt="email"
                />
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <Copyright />
    </>
  );
};

export default Footer;
