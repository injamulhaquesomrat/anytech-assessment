import React from "react";
import ReviewsCounter from "./ReviewsCounter";
import Companies from "./Companies";
import Container from "../global/Container";

const Reviews = () => {
  return (
    <section>
        <Container>
      <p className="section-motto text-center pb-16 lg:pb-8">
        TRUSTED BY THE BEST
      </p>
      <ReviewsCounter />
      <Companies />
      </Container>
    </section>
  );
};

export default Reviews;
