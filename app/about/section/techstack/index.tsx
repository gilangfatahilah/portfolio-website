import type { FC } from "react";
import { stacks } from "@/constants/data";
import { CardAbout } from "@/components/card";

const TechstackSection: FC = () => {
  return (
    <section className="flex flex-col space-y-12">
      <div className="flex w-4/5 items-center justify-center mx-auto gap-2 z-20">
        <h1
          className="text-xl font-bold text-gradients md:text-4xl"
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-once="true"
        >
          Tech Stack
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 mx-auto w-4/5 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12 z-20">
        {Object.keys(stacks).map((stack, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={`${index}00`}
            data-aos-duration="300"
            data-aos-once="true"
          >
            <CardAbout
              images={stacks[stack].src}
              title={stacks[stack].name}
              informationLevel={stacks[stack].level}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechstackSection;
