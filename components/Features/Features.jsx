import React from "react";
import Container from "../global/Container";
import FeaturesSlider from "./FeaturesSlider";


const Features = () => {
  return (
    <section className="py-10">
      <Container>
        <p className="section-motto text-center">TECHNOLOGY BUILT FOR YOU</p>
        <h2 className="section-title text-center">The future of finance</h2>
        <FeaturesSlider />
      </Container>
    </section>
  );
};

export default Features;
