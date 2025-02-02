import Image from "next/image";
import React from "react";
import HighlightText from "./HighlightText";

const HighlightImgContainer = () => {
  return (
    <div className="basis-1/2 space-y-8">
      <div className="relative z-0">
        <Image
          className="w-[76%] mx-auto relative z-10"
          src={"/images/highlight.png"}
          alt={"highlight image"}
          width={1600}
          height={1067}
        />
        <Image
          className="absolute -top-8 md:-top-10 lg:-top-16 left-0 z-0 object-cover rotate-180"
          src="/backgrounds/WaveLinesMobile2.svg"
          alt="Wave"
          width={1023}
          height={100}
        />
        <Image
          className="absolute top-14 lg:top-20 right-0 z-10 object-cover aspect-square h-[80px] w-[80px] lg:h-[114px] lg:w-[114px]"
          src="/images/bank-icon.svg"
          alt="Wave"
          width={115}
          height={114}
        />
        <Image
          className="absolute top-16 lg:top-20 left-3 lg:left-[5%] z-10 object-cover h-[53px] w-[53px] lg:h-[73px] lg:w-[73px]"
          src="/images/card-icon.svg"
          alt="Wave"
          width={73}
          height={73}
        />
        <Image
          className="absolute top-40 lg:top-48 left-14 lg:left-[15%] z-10 object-cover h-[58px] w-[58px] lg:h-[87px] lg:w-[87px]"
          src="/images/analytics-icon.svg"
          alt="Wave"
          width={87}
          height={87}
        />
      </div>
      <div className="md:hidden">
        <HighlightText />
      </div>
    </div>
  );
};

export default HighlightImgContainer;
