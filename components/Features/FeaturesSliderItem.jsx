import Image from "next/image";
import React from "react";

const FeaturesSliderItem = ({ slide }) => {
  return (
    <div className="flex flex-col-reverse md:flex-col lg:flex-row justify-between gap-8">
      <div className="basis-1/2">
        <p className="section-motto">{slide?.title}</p>
        <h4 className="section-title text-[40px] py-8">{slide?.headline}</h4>
        <strong className="text-sm md:text-base leading-snug text-[#164377]">
          {slide?.strongText}
        </strong>
        <br />
        <br />
        <p className="text-sm md:text-base leading-snug text-[#164377]">
          {slide?.text}
        </p>
      </div>
      <div className="basis-1/2 rounded-lg overflow-hidden aspect-video lg:aspect-[377/425] xl:aspect-square h-[425px]">
        <Image
          className="w-full h-full object-cover"
          src={slide?.img}
          alt={slide?.title}
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default FeaturesSliderItem;
