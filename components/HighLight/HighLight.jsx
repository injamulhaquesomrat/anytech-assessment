import React from "react";
import HighlightTextContainer from "./HighlightTextContainer";
import HighlightImgContainer from "./HighlightImgContainer";
import Container from "../global/Container";

const HighLight = () => {
  return (
    <section className="-mt-32 md:-mt-48 lg:mt-16 xl:mt-24">
      <Container className={"flex flex-col md:flex-row gap-8"}>
        {/* Highlist Text container*/}
        <HighlightTextContainer />

        {/* Highlist img container */}
        <HighlightImgContainer />
      </Container>

      {/* bg props */}
      <div className="w-full">
        <svg
          className="undefined max-h-[240px] md:my-sm my-lg w-full min-h-[60px]"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1920 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.7"
            d="M-240 0L1680 0L-240 280L-240 0Z"
            fill="url(#paint0_linear_6055_471)"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_6055_471"
              x1="458.5"
              y1="1561.14"
              x2="392.705"
              y2="52.1879"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1F80F0"></stop>
              <stop offset="1" stopColor="#1F80F0" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default HighLight;
