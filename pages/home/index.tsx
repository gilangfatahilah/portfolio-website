import React from "react";
import HeroContent from "@/components/HeroContent";

const Homes = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-41%] left-0 z-[1] w-full h-full object cover"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Homes;
