import React from "react";
import Container from "../global/Container";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="lg:absolute max-h-[90vh] lg:max-h-[calc(100vh)] top-0 left-0 z-0 h-screen w-full bg-[radial-gradient(59.82%_121.73%_at_-9.66%_130.31%,_#00e9ea_0%,_#1f80f0_52.08%,_#005bc4_100%)] [clip-path:polygon(0_0,_100%_0,_100%_81%,_0%_100%)] overflow-x-hidden text-white pt-[30%] md:pt-[20%] lg:pt-0">
        <Container>
          <div className="flex flex-col justify-center lg:h-[100vh] relative z-[100] max-w-[672px]">
            <header>
              <h1 className="text-[56px] font-semibold leading-tight font-montserrat">
                Embrace the future of finance
              </h1>
              <h5 className="text-base font-semibold mt-4">
                Reimagine financial services with AnyTech&apos;s open platform,
                distributed banking solution that powers transformation
              </h5>
            </header>
            <div className="bg-[#FE8B53] text-white rounded shadow mt-8 w-full lg:w-fit ">
              <Link
                className="flex px-10 py-3.5 justify-center items-center leading-tight"
                href={"/"}
              >
                <span className="text-lg font-semibold">Reach Out to Us</span>
                <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </Container>
        {/* hero image desktop */}
        <div className="aspect-[3/2] max-w-screen-xl h-full ml-auto [clip-path:polygon(67%_0,_100%_0,_100%_68%,_80%_100%,_0_100%,_32%_51%)] overflow-hidden absolute top-0 left-1/2 xl:left-1/3 xl:right-0 lg:w-[56%] xl:w-[65%] z-0 hidden lg:block">
          <Image
            className="w-[115%] h-[115%] object-cover"
            src="/images/hero.jpg"
            alt="Hero"
            width={1600}
            height={1067}
          />
        </div>
      </section>

      {/* hero image mobile */}
      <div className="aspect-[3/2] max-w-screen-lg ml-auto [clip-path:polygon(0_15%,_100%_0,_100%_85%,_0%_100%)] overflow-hidden relative bottom-52 md:bottom-72  left-0 w-full z-0 lg:hidden">
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
