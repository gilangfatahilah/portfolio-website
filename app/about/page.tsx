import type { FC } from "react";
import { AboutHeader, AboutExperience } from "./section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Gilang Fatahilah",
  description: "Portfolio website of Gilang Fatahilah Akbar",
};

const About: FC = () => {
  return (
    <>
      <AboutHeader />
      <AboutExperience />
    </>
  );
};

export default About;
