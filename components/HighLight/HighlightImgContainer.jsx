import Image from "next/image";
import React from "react";

const HighlightImgContainer = () => {
  return (
    <div>
      <Image
        src={"/images/highlight.png"}
        alt={"highlight image"}
        width={1600}
        height={1067}
      />
    </div>
  );
};

export default HighlightImgContainer;
