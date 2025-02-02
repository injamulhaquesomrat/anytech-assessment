"use client";

import React from "react";
import CountUp from "react-countup";
import Container from "../global/Container";

const ReviewsCounter = () => {
  return (
    <div className="lg:flex items-center justify-between gap-8 divide-y-2 lg:divide-y-0 divide-dotted">
          <div className="flex lg:flex-col items-center lg:justify-center justify-between">
            <h1 className="text-[64px] lg:text-[96px] font-semibold font-montserrat bg-gradient-to-b from-[#1f80f0] to-[#0057BB] bg-clip-text text-transparent">
              &gt;
              <CountUp start={0} end={20} />
            </h1>
            <p className="lg:text-lg font-semibold lg:font-normal text-[#151d2f] text-right">
              Years of Experience
            </p>
          </div>
          <div className="flex lg:flex-col items-center lg:justify-center justify-between">
            <h1 className="text-[64px] lg:text-[96px] font-semibold font-montserrat bg-gradient-to-b from-[#1f80f0] to-[#0057BB] bg-clip-text text-transparent">
              <CountUp start={0} end={40} />+
            </h1>
            <p className="lg:text-lg font-semibold lg:font-normal text-[#151d2f] text-right">
              Financial Institutions
            </p>
          </div>
          <div className="flex lg:flex-col items-center lg:justify-center justify-between">
            <h1 className="text-[64px] lg:text-[96px] font-semibold font-montserrat bg-gradient-to-b from-[#1f80f0] to-[#0057BB] bg-clip-text text-transparent">
              &gt;
              <CountUp start={0} end={200} />m
            </h1>
            <p className="lg:text-lg font-semibold lg:font-normal text-[#151d2f] text-right">
              Customers Each
            </p>
          </div>
        </div>
  );
};

export default ReviewsCounter;
