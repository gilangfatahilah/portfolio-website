"use client";

import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const HeroExtraContent = () => {
  return (
    <div className="flex flex-col gap-5 max-w-[1200px] w-auto h-auto">
      <div
        data-aos="fade-up"
        className="Welcome-box py-[11px] px-[13px] mx-auto border border-cyan-500 opacity-[0.9] "
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-base lg:text-xl">Gilang Fatahilah</h1>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-5xl lg:text-7xl font-bold text-white text-center "
      >
        <span>
          I
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            build{" "}
          </span>
          pixel-perfect, accessible products for the
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            web and beyond.
          </span>
        </span>
      </div>

      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-xl lg:text-2xl text-center text-slate-300 opacity-90 font-normal "
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus
        pariatur sapiente.
      </p>

      <a
        href={"/about"}
        data-aos="fade-up"
        data-aos-delay="300"
        className="py-2 px-4 button-primary mx-auto text-base lg:text-2xl text-center text-white cursor-pointer rounded-lg z-20"
      >
        More about me
      </a>
    </div>
  );
};

export default HeroExtraContent;
