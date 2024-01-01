"use client";

import React, { FC, useState } from "react";
import { ContentEducation } from "./content-education";

const ExperienceSection: FC = () => {
  const [activeCategory, setActiveCategory] = useState("education");

  let selectedContent;

  if (activeCategory === "education") {
    selectedContent = <ContentEducation />;
  }

  const categories = [
    { name: "Education", value: "education" },
    { name: "Organizations", value: "organizations" },
    { name: "Work Experience", value: "experience" },
    { name: "Awards", value: "awards" },
    { name: "Certification", value: "certification" },
  ];

  return (
    <section className="pt-[100px] pb-[50px] lg:pb-[60px]">
      <div className="flex flex-col items-center justify-center gap-5 pb-32">
        <div className="mb-5 flex w-full items-center justify-start gap-4 lg:w-[776px]">
          <h1
            className="text-xl font-semibold text-white md:text-2xl z-20"
            data-aos="fade-left"
            data-aos-duration="300"
            data-aos-once="true"
          >
            My Experience
          </h1>
          <div
            className="h-[1px] w-32 bg-primary md:w-96"
            data-aos="zoom-in-left"
            data-aos-duration="600"
            data-aos-once="true"
          ></div>
        </div>
        <div
          className="flex flex-col items-center gap-5 md:flex-row md:items-start md:gap-8 z-20"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-once="true"
        >
          <div className="flex w-[370px] flex-row overflow-x-scroll font-mono text-sm text-primary md:w-auto md:flex-col md:overflow-auto">
            {categories.map((category) => (
              <button
                className={`w-auto whitespace-nowrap px-4 py-3 text-start text-xs transition-all duration-300 hover:bg-accent/10 hover:text-accent md:py-3 md:px-5 md:text-base cursor-pointer ${
                  activeCategory === category.value
                    ? "bg-cyan-500/20 text-purple-500"
                    : "text-white"
                }`}
                onClick={() => setActiveCategory(category.value)}
                key={category.value}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="h-[480px] w-[350px] overflow-auto md:w-[490.78px] lg:w-[600px] z-20">
            {selectedContent}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
