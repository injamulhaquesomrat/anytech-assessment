"use client";
// components/SplideSlider.js
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

const companies = [
  {
    id: 1,
    img: "/images/bank-of-chengde.png",
  },
  {
    id: 2,
    img: "/images/bank-of-china.png",
  },
  {
    id: 3,
    img: "/images/bank-of-shanghai.png",
  },
  {
    id: 4,
    img: "/images/cgb.png",
  },
  {
    id: 5,
    img: "/images/china-citic-bank.png",
  },
  {
    id: 6,
    img: "/images/one-bank.png",
  },
  {
    id: 7,
    img: "/images/pingan-bank.png",
  },
  {
    id: 8,
    img: "/images/postal-savings-bank-of-china.png",
  },
  {
    id: 9,
    img: "/images/sea.png",
  },
  {
    id: 10,
    img: "/images/shangdong-city-commercial-bank.png",
  },
  {
    id: 11,
    img: "/images/vip-fubon-financial.svg",
  },
  {
    id: 12,
    img: "/images/xiaman-international-bank.png",
  },
  {
    id: 13,
    img: "/images/xw.png",
  },
  {
    id: 14,
    img: "/images/spd-bank.png",
  },
  {
    id: 15,
    img: "/images/dcs.png",
  },
];

const Companies = () => {
  return (
    <>
      <div className="w-full py-8 md:hidden mt-16 lg:mt-32">
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
          {companies.map((company) => (
            <SplideSlide
              className="flex items-center justify-center"
              key={company?.id}
            >
              <div>
                <Image
                  src={company?.img}
                  alt="company"
                  width={200}
                  height={200}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      {/* for desktop  */}
      <div className="md:grid grid-cols-3 gap-4 hidden mt-16 lg:mt-32">
        {companies.map((company) => (
          <div className="flex items-center justify-center" key={company?.id}>
            <Image src={company?.img} alt="company" width={200} height={200} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Companies;
