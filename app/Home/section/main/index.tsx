import React, { FC } from "react";
import HeroContent from "./HomeContent";

const Homes: FC = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-38%] lg:top-[-41%] left-0 z-[1] w-full h-full object cover"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Homes;
