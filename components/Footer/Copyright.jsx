import React from "react";
import Container from "../global/Container";
import Link from "next/link";

const Copyright = () => {
  return (
    <div className="bg-[#00152D] py-6 text-[#1B76E9] font-semibold">
      <Container className="flex flex-col lg:flex-row items-center justify-between">
        <div>
          <small>
            <span className="font-black">©2023 All rights reserved</span>. Any
            Technology Pte Ltd.
          </small>
        </div>
        <div>
          <Link href="/">
            <small>Privacy Policy</small>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Copyright;
