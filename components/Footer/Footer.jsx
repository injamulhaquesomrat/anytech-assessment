import React from "react";
import Container from "../global/Container";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-blue-800 py-10">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <Image src="/images/logo.svg" alt="Logo" width={150} height={50} />
          </div>
          <div className="flex items-center justify-between gap-3 text-white">
            <p>Our Solutions</p>
            <ul className="flex items-center justify-between gap-3">
              <li>AnyCaas</li>
              <li>AnyBaas</li>
              <li>AnyPaas</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
