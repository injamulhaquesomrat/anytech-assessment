"use client";

import React from "react";
import Container from "../global/Container";
import Image from "next/image";
import PhilosophySpecItem from "./PhilosophySpecItem";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const philosophySpecItems = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 50 50"
        height="50"
        width="50"
      >
        <rect fill="#E9F3FF" rx="25" height="50" width="50"></rect>
        <path
          fill="#0B305B"
          d="M13.75 18.625C13.75 17.6094 14.5703 16.75 15.625 16.75H19.375C20.3906 16.75 21.25 17.6094 21.25 18.625V19.25H28.75V18.625C28.75 17.6094 29.5703 16.75 30.625 16.75H34.375C35.3906 16.75 36.25 17.6094 36.25 18.625V22.375C36.25 23.4297 35.3906 24.25 34.375 24.25H30.625C29.5703 24.25 28.75 23.4297 28.75 22.375V21.75H21.25V22.375C21.25 22.4531 21.2109 22.5312 21.2109 22.5703L24.375 26.75H28.125C29.1406 26.75 30 27.6094 30 28.625V32.375C30 33.4297 29.1406 34.25 28.125 34.25H24.375C23.3203 34.25 22.5 33.4297 22.5 32.375V28.625C22.5 28.5859 22.5 28.5078 22.5 28.4297L19.375 24.25H15.625C14.5703 24.25 13.75 23.4297 13.75 22.375V18.625Z"
        ></path>
      </svg>
    ),
    name: "Full-suite solutions",
    info: "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
  },
  {
    icon: (
      <Image
        src={"/images/idea-icon.png"}
        alt={"Icon"}
        width={50}
        height={50}
      />
    ),
    name: "Simplify the complex",
    info: "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 50 50"
        height="50"
        width="50"
      >
        <rect fill="#FFE2D5" rx="25" height="50" width="50"></rect>
        <path
          fill="#0B305B"
          d="M21.25 29.25V21.75H28.75V29.25H21.25ZM32.5 22.375V24.875H34.375C34.6875 24.875 35 25.1875 35 25.5C35 25.8516 34.6875 26.125 34.375 26.125H32.5V28.625H34.375C34.6875 28.625 35 28.9375 35 29.25C35 29.6016 34.6875 29.875 34.375 29.875H32.5V30.5C32.5 31.9062 31.3672 33 30 33H29.375V34.875C29.375 35.2266 29.0625 35.5 28.75 35.5C28.3984 35.5 28.125 35.2266 28.125 34.875V33H25.625V34.875C25.625 35.2266 25.3125 35.5 25 35.5C24.6484 35.5 24.375 35.2266 24.375 34.875V33H21.875V34.875C21.875 35.2266 21.5625 35.5 21.25 35.5C20.8984 35.5 20.625 35.2266 20.625 34.875V33H20C18.5938 33 17.5 31.9062 17.5 30.5V29.875H15.625C15.2734 29.875 15 29.6016 15 29.25C15 28.9375 15.2734 28.625 15.625 28.625H17.5V26.125H15.625C15.2734 26.125 15 25.8516 15 25.5C15 25.1875 15.2734 24.875 15.625 24.875H17.5V22.375H15.625C15.2734 22.375 15 22.1016 15 21.75C15 21.4375 15.2734 21.125 15.625 21.125H17.5V20.5C17.5 19.1328 18.5938 18 20 18H20.625V16.125C20.625 15.8125 20.8984 15.5 21.25 15.5C21.5625 15.5 21.875 15.8125 21.875 16.125V18H24.375V16.125C24.375 15.8125 24.6484 15.5 25 15.5C25.3125 15.5 25.625 15.8125 25.625 16.125V18H28.125V16.125C28.125 15.8125 28.3984 15.5 28.75 15.5C29.0625 15.5 29.375 15.8125 29.375 16.125V18H30C31.3672 18 32.5 19.1328 32.5 20.5V21.125H34.375C34.6875 21.125 35 21.4375 35 21.75C35 22.1016 34.6875 22.375 34.375 22.375H32.5ZM30 29.875V21.125C30 20.8125 29.6875 20.5 29.375 20.5H20.625C20.2734 20.5 20 20.8125 20 21.125V29.875C20 30.2266 20.2734 30.5 20.625 30.5H29.375C29.6875 30.5 30 30.2266 30 29.875Z"
        ></path>
      </svg>
    ),
    name: "Cutting-edge tech",
    info: "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
  },
];

const Philosophy = () => {
  return (
    <div>
      <Container>
        <p className="section-motto text-center pb-6">OUR PHILOSOPHY</p>
        <h2 className="section-title text-center">Human-centred innovation</h2>
        <div className="py-8">
          <Image
            className="hidden md:block"
            src={"/images/philosophy-poster-desktop.png"}
            alt={"Philosophy"}
            width={1600}
            height={1067}
          />
          <Image
            className="md:hidden"
            src={"/images/philosophy-poster-mobile.png"}
            alt={"Philosophy"}
            width={1600}
            height={1067}
          />
        </div>
        <>
          <div className="md:hidden">
            <Splide
              options={{
                type: "slide",
                drag: "free",
                snap: true,
                perPage: 1.5,
                pagination: false,
                arrows: false,
                mediaQuery: "min",
                focus: "center",
                breakpoints: {
                  480: { perPage: 2, gap: "1rem", arrows: false },
                  640: { perPage: 3, gap: "2rem", arrows: false },
                },
              }}
            >
              {philosophySpecItems.map((item) => (
                <SplideSlide
                  className="grid"
                  key={item?.name}
                >
                  <PhilosophySpecItem
                    key={item?.name}
                    icon={item?.icon}
                    name={item?.name}
                    info={item?.info}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>

          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {philosophySpecItems.map((item) => (
              <PhilosophySpecItem
                key={item?.name}
                icon={item?.icon}
                name={item?.name}
                info={item?.info}
              />
            ))}
          </div>
        </>
      </Container>
    </div>
  );
};

export default Philosophy;
