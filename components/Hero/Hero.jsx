import React from "react";
import Container from "../global/Container";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="h-[950px] lg:max-h-[calc(90vh)] top-0 left-0 z-0 w-full bg-[radial-gradient(59.82%_121.73%_at_-9.66%_130.31%,_#00e9ea_0%,_#1f80f0_52.08%,_#005bc4_100%)] [clip-path:polygon(0_0,_100%_0,_100%_81%,_0%_100%)] overflow-x-hidden text-white pt-[30%] md:pt-[20%] lg:pt-0 lg:-mt-[92px]">
        <Container>
          <div className="flex flex-col justify-center lg:h-[90vh] relative z-[100]">
            <header>
              <h1 className="text-[56px] lg:text-[80px] font-semibold leading-tight font-montserrat  max-w-2xl xl:max-w-3xl">
                Embrace the future of finance
              </h1>
              <h5 className="text-base font-semibold mt-4 max-w-xl lg:max-w-lg xl:max-w-xl">
                Reimagine financial services with AnyTech&apos;s open platform,
                distributed banking solution that powers transformation
              </h5>
            </header>
            <div className="bg-[#FE8B53] text-white rounded shadow mt-8 w-full lg:w-fit group max-w-xl">
              <Link
                className="flex px-10 py-3.5 justify-center items-center leading-tight gap-2"
                href={"/"}
              >
                <span className="text-lg font-semibold">Reach Out to Us</span>
                <ChevronRight size={20} className="group-hover:translate-x-2 duration-200 transition-all"/>
              </Link>
            </div>
          </div>
        </Container>

        {/* hero image desktop */}
        <div className="aspect-[3/2] max-w-screen-xl h-full ml-auto [clip-path:polygon(67%_0,_100%_0,_100%_68%,_80%_100%,_0_100%,_32%_51%)] overflow-hidden absolute top-0 left-1/2 xl:left-1/3 xl:right-0 lg:w-[56%] xl:w-[62%] z-0 hidden lg:block">
          <Image
            className="w-[115%] h-[115%] object-cover"
            src="/images/hero.jpg"
            alt="Hero"
            width={1600}
            height={1067}
          />
          <div className="bg-[linear-gradient(190deg,_#1f80f0_15.05%,_rgba(31,_128,_240,_0)_30.39%)] absolute top-0 right-0 h-full w-full"></div>
        </div>

        <div>
          <Image
            className="absolute top-0 left-0 z-0 object-cover lg:hidden"
            src="/backgrounds/WaveLinesMobile2.svg"
            alt="Wave"
            width={1023}
            height={100}
          />
          <Image
            className="absolute -top-[37%] xl:-top-[70%] 2xl:-top-[90%] right-[17%] 2xl:right-0 z-0 object-contain hidden lg:block"
            src="/backgrounds/WaveLinesDesktop2.svg"
            alt="Wave"
            width={1920}
            height={100}
          />
          <Image
            className="absolute -top-[10%] left-0 z-0 object-contain hidden lg:block"
            src="/backgrounds/WaveLinesDesktop1.svg"
            alt="Wave"
            width={1920}
            height={100}
          />
        </div>
      </section>

      {/* hero image mobile */}
      <div className="aspect-[3/2] max-w-screen-lg ml-auto [clip-path:polygon(0_15%,_100%_0,_100%_85%,_0%_100%)] overflow-hidden relative bottom-48 md:bottom-72 left-0 w-full z-0 lg:hidden">
        <Image
          className="w-[115%] h-[115%] object-cover"
          src="/images/hero.jpg"
          alt="Hero"
          width={1600}
          height={1067}
        />
      </div>
    </>
  );
};

export default Hero;
