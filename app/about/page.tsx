import type { FC } from "react";
import {
  AboutHeader,
  AboutExperience,
  AboutTechStack,
  AboutToolsUsed,
} from "./section";
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
      <AboutTechStack />
      <AboutToolsUsed />
    </>
  );
};

export default About;
