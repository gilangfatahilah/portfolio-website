"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";

const HeroContent: FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[8px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Web Developer</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 font-bold text-white max-w-[600px] w-auto h-auto text-6xl"
        >
          <span>
            Hello, my name is
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Gilang Fatahilah.{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-3 w-full lg:max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          and Software Development. Check out my projects and skills.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          href="/resume/resume.pdf"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          View my CV here
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full hidden lg:flex justify-center items-center"
      >
        <Image
          src="/images/Hero-img.svg"
          alt="Hero Image"
          width={650}
          height={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
