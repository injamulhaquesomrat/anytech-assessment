"use client";

import { useEffect, useRef, useState } from "react";
import Splide from "@splidejs/splide";
import FeaturesSliderItem from "./FeaturesSliderItem";

const slides = [
  {
    id: 1,
    title: "Customer focused",
    headline: "Purpose-built financial services",
    strongText:
      "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
    text: "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    img: "/images/customer-focused.jpg",
  },
  {
    id: 2,
    title: "Agile and Adaptible",
    headline: "Agile and adaptable for growth",
    strongText:
      "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
    text: "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
    img: "/images/agile-and-adaptible.jpg",
  },
  {
    id: 3,
    title: "Compliance ready",
    headline: "Manage compliance with ease",
    strongText:
      "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
    text: "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
    img: "/images/compliance-ready.png",
  },
  {
    id: 4,
    title: "Secure and safe",
    headline: "Highly secure and safe",
    strongText: "",
    text: "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
    img: "/images/secure-and-safe.jpg",
  },
];

export default function FeaturesSlider() {
  const splideRef = useRef(null);
  const [splideInstance, setSplideInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (splideRef.current) {
      const splide = new Splide(splideRef.current, {
        type: "slide",
        perPage: 1,
        // pagination: false,
        arrows: false,
        gap: "1rem",
        mediaQuery:"min",
        breakpoints: {
          768: { pagination: false },
        },
      }).mount();

      setSplideInstance(splide);

      splide.on("moved", (newIndex) => {
        setActiveIndex(newIndex);
      });
    }
  }, []);

  return (
    <div className="w-full mx-auto feature-slider">
      {/* Tabs */}
      <div className="lg:flex justify-center gap-4 py-8 flex-wrap hidden ">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`tab-button px-12 py-2 text-lg font-semibold rounded-full text-[#1B76E9] ${
              activeIndex === index ? "bg-[#B9D9FF] " : "bg-transparent"
            }`}
            onClick={() => splideInstance?.go(index)} // Only call go() if splideInstance is available
          >
            {slide.title}
          </button>
        ))}
      </div>

      {/* Splide Slider */}
      <div ref={splideRef} className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            {slides.map((slide) => (
              <li
                key={slide.id}
                style={{
                  filter:
                    "drop-shadow(rgba(207, 233, 247, 0.47) 0px 16px 21px)",
                }}
                className="splide__slide bg-white rounded-lg p-6 lg:p-16"
              >
                <FeaturesSliderItem slide={slide} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
