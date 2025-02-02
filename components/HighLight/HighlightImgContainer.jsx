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
          className="absolute top-0 left-0 z-0 object-cover rotate-180"
          src="/backgrounds/WaveLinesMobile2.svg"
          alt="Wave"
          width={1023}
          height={100}
        />
        <Image
          className="absolute top-8 right-4 z-10 object-cover"
          src="/images/bank-icon.svg"
          alt="Wave"
          width={115}
          height={114}
        />
        <Image
          className="absolute top-16 left-8 z-10 object-cover"
          src="/images/card-icon.svg"
          alt="Wave"
          width={73}
          height={73}
        />
        <Image
          className="absolute top-40 left-20 z-10 object-cover"
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
