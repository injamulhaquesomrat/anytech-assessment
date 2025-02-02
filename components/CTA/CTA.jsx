import React from "react";
import Container from "../global/Container";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const CTA = () => {
  return (
    <section
      className="relative overflow-hidden [clip-path:polygon(0_0,_100%_14%,_100%_100%,_0%_100%)] md:[clip-path:polygon(0_0,_100%_39%,_100%_100%,_0%_100%)] mt-6"
      style={{
        background:
          "radial-gradient(24.45% 88.58% at 23.57% 2%, #00e9ea 0%, #1f80f0 52.08%, #005bc4 100%)",
      }}
    >
      <Container
        className={
          "h-[60vh] lg:h-[530px] relative text-white z-10 flex flex-col justify-center "
        }
      >
        <h2 className="text-[32px] lg:text-[56px] font-semibold font-montserrat pb-6">
          Legacy no longer
        </h2>
        <p className="lg:text-lg">
          Talk to us to find out how we can transform your organisation for the
          future
        </p>
        <div className="bg-[#FE8B53] text-white rounded shadow mt-8 w-full lg:w-fit group">
          <Link
            className="flex px-10 py-3.5 justify-center items-center leading-tight gap-2"
            href={"/"}
          >
            <span className="text-lg font-semibold">Contact Us</span>
            <ChevronRight
              size={20}
              className="group-hover:translate-x-2 duration-200 transition-all"
            />
          </Link>
        </div>
      </Container>

      <div>
        <Image
          className="absolute top-0 left-0 z-0 object-cover lg:hidden"
          src="/backgrounds/ctaMobileWaveLines.svg"
          alt="Wave"
          width={1023}
          height={100}
        />
        <Image
          className="absolute bottom-0 left-0 z-0 object-contain hidden lg:block"
          src="/backgrounds/WaveLinesDesktop2.svg"
          alt="Wave"
          width={1920}
          height={100}
        />
      </div>
    </section>
  );
};

export default CTA;
