import React from "react";
import HighlightText from "./HighlightText";

const HighlightTextContainer = () => {
  return (
    <div className="space-y-6 basis-1/2">
      <span className="section-motto text-center">
        POWERING THE FUTURE OF FINANCE
      </span>
      <h2 className="section-title">
        Uncovering new ways to delight customers
      </h2>
      <div className="hidden md:block">
        <HighlightText />
      </div>
    </div>
  );
};

export default HighlightTextContainer;
