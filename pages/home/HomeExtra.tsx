import HeroExtraContent from "@/components/HeroExtraContent";
import React from "react";

const HomeExtra = () => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-3 w-full h-[650px] relative pb-[100px] z-20"
      style={{ transform: "scale(0.9)" }}
    >
      <HeroExtraContent />

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/videos/extra.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeExtra;
