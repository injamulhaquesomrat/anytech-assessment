import React from "react";
import HighlightTextContainer from "./HighlightTextContainer";
import HighlightImgContainer from "./HighlightImgContainer";
import Container from "../global/Container";

const HighLight = () => {
  return (
    <div>
      <Container>
        {/* Highlist Text container*/}
        <HighlightTextContainer />
        {/* Highlist img container */}
        <HighlightImgContainer />
      </Container>
    </div>
  );
};

export default HighLight;
