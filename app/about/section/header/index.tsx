"use client";
import React, { FC } from "react";
import Image from "next/image";

const AboutHeader: FC = () => {
  return (
    <section className="mt-32 w-4/5 mx-auto flex h-auto flex-col items-center justify-between lg:mt-6 lg:h-screen lg:flex-row xl:mt-0">
      <div className="w-full lg:w-4/5 flex flex-col justify-center text-primary z-20">
        <div className="flex justify-center lg:justify-start items-center gap-5 pb-10">
          <h1
            className="text-xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 lg:text-4xl lg:text-start lg:font-bold"
            data-aos="fade-left"
            data-aos-duration="300"
          >
            About Me
          </h1>
        </div>
        <div className="flex flex-col text-justify text-white gap-5 pr-0 text-sm md:text-base lg:pr-10 xl:pr-0 order-3">
          <p data-aos="zoom-in-right">
            Hello my name is
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Gilang Fatahilah Akbar
            </span>
            , an Informatics Managements students at University of Bani Saleh
            Bekasi intrested and experienced in Web Development, specializing in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Frontend Development
            </span>{" "}
            using JavaScript.
          </p>
          <p data-aos="zoom-in-right" data-aos-delay="100">
            As a final year student majoring in Informatics Management, I have
            been on an educational journey full of challenges and successes.
            From the beginning of college until now, I have gained knowledge and
            skills in various fields, but my main focus is on web development. I
            feel very enthusiastic and inspired by the potential that
            information technology has, especially in creating innovative and
            efficient web-based solutions.
          </p>
          <p data-aos="zoom-in-right" data-aos-delay="200">
            As my studies progressed, I managed to hone my skills in various
            programming languages, such as HTML, CSS, JavaScript, and some
            popular libraries like React.js. In addition, work experience and
            college projects have provided me with opportunities to put
            theoretical knowledge into practice. I understand the importance of
            responsive design, user-friendly interface, and security in web
            development, and I always strive to integrate those aspects in every
            project I work on.
          </p>
        </div>
      </div>

      <div
        className="-my-20 pl-0 md:-my-40 lg:-my-0 xl:pl-24 order-2"
        data-aos="zoom-in"
        data-aos-duration="300"
      >
        <Image
          src={"/images/gilang.svg"}
          alt="gilang"
          width={700}
          height={700}
          className="scale-50 mt-5 lg:mt-0 lg:scale-100 2xl:scale-75 rounded-lg"
        />
      </div>
    </section>
  );
};

export default AboutHeader;
